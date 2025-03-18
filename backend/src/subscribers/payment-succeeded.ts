import {
  INotificationModuleService,
  IUserModuleService,
} from "@medusajs/framework/types";
import { Modules } from "@medusajs/framework/utils";
import { SubscriberArgs, SubscriberConfig } from "@medusajs/medusa";
import { generatePassword } from "../lib/util";
import { EmailTemplates } from "../modules/email-notifications/templates";

export default async function paymentSucceededHandler({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  const notificationModuleService: INotificationModuleService =
    container.resolve(Modules.NOTIFICATION);
  const userModuleService: IUserModuleService = container.resolve(Modules.USER);
  const orderModuleService = container.resolve(Modules.ORDER);

  // Récupérer la commande
  const order = await orderModuleService.retrieveOrder(data.order_id, {
    relations: ["customer"],
  });

  // Vérifier si le client existe déjà
  if (!order.customer) {
    // Générer un mot de passe aléatoire
    const password = generatePassword();

    try {
      // Créer le compte client
      const customer = await userModuleService.createCustomer({
        email: order.email,
        first_name: order.shipping_address?.first_name || "",
        last_name: order.shipping_address?.last_name || "",
        password: password,
      });

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
    } catch (error) {
      console.error("Error creating customer account:", error);
    }
  }
}

export const config: SubscriberConfig = {
  event: ["payment.succeeded"],
};
