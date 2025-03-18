import { Modules } from "@medusajs/framework/utils";
import { generatePassword } from "../../../lib/util";
import { EmailTemplates } from "../../../modules/email-notifications/templates";

export const POST = async (req, res) => {
  try {
    const { orderId, email, firstName, lastName } = await req.json();

    if (!orderId || !email) {
      return Response.json(
        {
          success: false,
          message: "L'ID de commande et l'email sont requis",
        },
        { status: 400 }
      );
    }

    console.log(
      `🔍 CRÉATION COMPTE AUTO POUR COMMANDE: ${orderId}, Email: ${email}`
    );

    const container = req.scope;
    const userService = container.resolve(Modules.USER);
    const notificationService = container.resolve(Modules.NOTIFICATION);

    // Vérifier si l'utilisateur existe déjà
    const existingUsers = await userService.list({ email });

    if (existingUsers && existingUsers.length > 0) {
      return Response.json(
        {
          success: false,
          message: "Un compte avec cet email existe déjà",
        },
        { status: 200 }
      );
    }

    // Générer un mot de passe aléatoire
    const password = generatePassword();
    console.log(`🔍 MOT DE PASSE GÉNÉRÉ: ${password.substring(0, 3)}***`);

    // Créer le compte client
    try {
      const [customer] = await userService.createUsers([
        {
          email: email,
          first_name: firstName || "",
          last_name: lastName || "",
          password: password,
        } as any,
      ]);

      console.log(`🔍 COMPTE CLIENT CRÉÉ: ${customer?.id || "ERREUR"}`);

      // Envoyer l'email avec les identifiants
      await notificationService.createNotifications({
        to: email,
        channel: "email",
        template: EmailTemplates.ACCOUNT_CREATED,
        data: {
          emailOptions: {
            replyTo: "info@example.com",
            subject: "Votre compte Protection Zen a été créé",
          },
          email: email,
          password,
          preview: "Votre compte a été créé avec succès",
        },
      });

      console.log(`🔍 EMAIL ENVOYÉ À: ${email}`);

      return Response.json(
        {
          success: true,
          message: "Compte créé avec succès",
        },
        { status: 200 }
      );
    } catch (error) {
      console.error("❌ ERREUR CRÉATION COMPTE:", error);
      return Response.json(
        {
          success: false,
          message: "Erreur lors de la création du compte",
          error: error.message,
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("❌ ERREUR GÉNÉRALE:", error);
    return Response.json(
      {
        success: false,
        message: "Erreur serveur",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
