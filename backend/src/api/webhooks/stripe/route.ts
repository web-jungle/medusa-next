import { Modules } from "@medusajs/framework/utils";
import Stripe from "stripe";
import { generatePassword } from "../../../lib/util";
import { EmailTemplates } from "../../../modules/email-notifications/templates";

export async function POST(req, res) {
  const stripe = new Stripe(process.env.STRIPE_API_KEY || "", {
    apiVersion: "2025-02-24.acacia",
  });

  // Vérifier la signature Stripe
  const signature = req.headers.get("stripe-signature");
  const body = await req.text();

  try {
    // Construire l'événement Stripe
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET || ""
      );
    } catch (err) {
      console.log(`⚠️ Erreur webhook Stripe: ${err.message}`);
      return new Response(`Erreur webhook: ${err.message}`, { status: 400 });
    }

    // Récupérer le container pour accéder aux services
    const container = req.scope;
    const orderService = container.resolve(Modules.ORDER);
    const userService = container.resolve(Modules.USER);
    const notificationService = container.resolve(Modules.NOTIFICATION);

    // Gérer l'événement de paiement réussi
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      if (!session.metadata?.cart_id) {
        return new Response("Pas de cart_id dans les métadonnées", {
          status: 200,
        });
      }

      console.log(`🔍 PAIEMENT RÉUSSI POUR: ${session.metadata.cart_id}`);

      try {
        // Trouver la commande liée au panier
        const orders = await orderService.list({
          cart_id: session.metadata.cart_id,
        });

        if (!orders || orders.length === 0) {
          console.log("❌ Aucune commande trouvée pour ce panier");
          return new Response("Commande non trouvée", { status: 200 });
        }

        const order = orders[0];
        console.log(`🔍 COMMANDE TROUVÉE: ${order.id}, Email: ${order.email}`);

        // Vérifier si un client existe déjà pour cet email
        if (!order.customer_id) {
          console.log("🔍 CLIENT INVITÉ DÉTECTÉ - CRÉATION DE COMPTE");

          // Générer un mot de passe aléatoire
          const password = generatePassword();
          console.log(`🔍 MOT DE PASSE GÉNÉRÉ: ${password.substring(0, 3)}***`);

          try {
            // Créer le compte client
            const [customer] = await userService.createUsers([
              {
                email: order.email,
                first_name: order.shipping_address?.first_name || "",
                last_name: order.shipping_address?.last_name || "",
                password: password,
              } as any,
            ]);

            if (customer) {
              console.log(`🔍 COMPTE CLIENT CRÉÉ: ${customer.id}`);

              // Rattacher la commande au client
              await orderService.update(order.id, {
                customer_id: customer.id,
              });

              console.log(`🔍 COMMANDE RATTACHÉE AU CLIENT: ${customer.id}`);

              // Envoyer l'email avec les identifiants
              await notificationService.createNotifications({
                to: order.email,
                channel: "email",
                template: EmailTemplates.ACCOUNT_CREATED,
                data: {
                  emailOptions: {
                    replyTo:
                      process.env.RESEND_FROM || "noreply@votredomaine.com",
                    subject: "Votre compte Protection Zen a été créé",
                  },
                  email: order.email,
                  password,
                  preview: "Votre compte a été créé avec succès",
                },
              });

              console.log(`🔍 EMAIL ENVOYÉ À: ${order.email}`);
            }
          } catch (error) {
            console.error("❌ ERREUR CRÉATION COMPTE:", error);
          }
        } else {
          console.log("🔍 CLIENT EXISTANT - PAS DE CRÉATION DE COMPTE");
        }
      } catch (error) {
        console.error("❌ ERREUR TRAITEMENT COMMANDE:", error);
      }
    }

    // Répondre avec succès
    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (error) {
    console.error("❌ ERREUR GÉNÉRALE WEBHOOK:", error);
    return new Response(`Erreur webhook: ${error.message}`, { status: 500 });
  }
}
