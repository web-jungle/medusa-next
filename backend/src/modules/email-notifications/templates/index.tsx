import { MedusaError } from "@medusajs/framework/utils";
import { ReactNode } from "react";
import { AccountCreatedTemplate } from "./account-created";
import { InviteUserEmail, isInviteUserData } from "./invite-user";
import { OrderPlacedTemplate, isOrderPlacedTemplateData } from "./order-placed";

export enum EmailTemplates {
  INVITE_USER = "invite-user",
  ORDER_PLACED = "order-placed",
  ACCOUNT_CREATED = "account-created",
}

export function generateEmailTemplate(
  templateKey: string,
  data: unknown
): ReactNode {
  switch (templateKey) {
    case EmailTemplates.INVITE_USER:
      if (!isInviteUserData(data)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          `Invalid data for template "${EmailTemplates.INVITE_USER}"`
        );
      }
      return <InviteUserEmail {...data} />;
    case EmailTemplates.ORDER_PLACED:
      if (!isOrderPlacedTemplateData(data)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          `Invalid data for template "${EmailTemplates.ORDER_PLACED}"`
        );
      }
      return <OrderPlacedTemplate {...data} />;
    case EmailTemplates.ACCOUNT_CREATED:
      if (!isAccountCreatedTemplateData(data)) {
        throw new MedusaError(
          MedusaError.Types.INVALID_DATA,
          `Invalid data for template "${EmailTemplates.ACCOUNT_CREATED}"`
        );
      }
      return <AccountCreatedTemplate {...data} />;
    default:
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        `Unknown template key: "${templateKey}"`
      );
  }
}

export { AccountCreatedTemplate, InviteUserEmail, OrderPlacedTemplate };
