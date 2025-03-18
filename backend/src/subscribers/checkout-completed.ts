import {
  INotificationModuleService,
  IUserModuleService,
} from "@medusajs/framework/types";
import { Modules } from "@medusajs/framework/utils";
import { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";
import { generatePassword } from "../lib/util";
import { EmailTemplates } from "../modules/email-notifications/templates";

export default async function checkoutCompletedHandler({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  console.log(
    "🔍 WEBHOOK DÉCLENCHÉ : checkout.completed",
    JSON.stringify(data, null, 2)
  );

  try {
    const notificationModuleService: INotificationModuleService =
      container.resolve(Modules.NOTIFICATION);
    const userModuleService: IUserModuleService = container.resolve(
      Modules.USER
    );
    const orderModuleService = container.resolve(Modules.ORDER);

    console.log("🔍 MODULES RÉSOLUS");

    if (!data.order_id) {
      console.log("❌ PAS D'ID DE COMMANDE DANS L'ÉVÉNEMENT");
      return;
    }

    // Récupérer la commande
    const order = await orderModuleService.retrieveOrder(data.order_id, {
      relations: ["customer"],
    });

    console.log(
      `🔍 CHECKOUT COMPLÉTÉ : ${order.id}, Email: ${order.email}, Customer ID: ${order.customer_id}`
    );

    // Vérifier si le client existe déjà
    if (!order.customer_id) {
      console.log("🔍 CLIENT INVITÉ DÉTECTÉ - CRÉATION DE COMPTE");

      // Générer un mot de passe aléatoire
      const password = generatePassword();
      console.log(`🔍 MOT DE PASSE GÉNÉRÉ : ${password.substring(0, 3)}***`);

      try {
        // Créer le compte client avec type assertion
        const [customer] = await userModuleService.createUsers([
          {
            email: order.email,
            first_name: order.shipping_address?.first_name || "",
            last_name: order.shipping_address?.last_name || "",
            password: password,
          } as any,
        ]);

        console.log(`🔍 COMPTE CLIENT CRÉÉ : ${customer?.id || "ERREUR"}`);

        // Envoyer l'email avec les identifiants
        await notificationModuleService.createNotifications({
          to: order.email,
          channel: "email",
          template: EmailTemplates.ACCOUNT_CREATED,
          data: {
            emailOptions: {
              replyTo: "info@example.com",
              subject: "Votre compte Protection Zen a été créé",
            },
            email: order.email,
            password,
            preview: "Votre compte a été créé avec succès",
          },
        });

        console.log(`🔍 EMAIL ENVOYÉ À : ${order.email}`);
      } catch (error) {
        console.error("❌ ERREUR CRÉATION COMPTE :", error);
      }
    } else {
      console.log("🔍 CLIENT EXISTANT - PAS DE CRÉATION DE COMPTE");
    }
  } catch (error) {
    console.error("❌ ERREUR GÉNÉRALE WEBHOOK :", error);
  }
}

export const config: SubscriberConfig = {
  event: ["checkout.completed"],
};
