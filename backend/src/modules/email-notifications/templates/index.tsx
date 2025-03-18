import { MedusaError } from "@medusajs/framework/utils";
import { ReactNode } from "react";
import {
  AccountCreatedTemplate,
  AccountCreatedTemplateProps,
} from "./account-created";
import {
  InviteCreatedTemplate,
  InviteCreatedTemplateProps,
} from "./invite-created";
import { InviteUserEmail, isInviteUserData } from "./invite-user";
import { OrderPlacedTemplate, OrderPlacedTemplateProps } from "./order-placed";

export enum EmailTemplates {
  INVITE_USER = "invite-user",
  ORDER_PLACED = "order-placed",
  ACCOUNT_CREATED = "account-created",
  INVITE_CREATED = "invite-created",
}

function isOrderPlacedTemplateData(
  data: unknown
): data is OrderPlacedTemplateProps {
  return (
    typeof data === "object" &&
    data !== null &&
    "order" in data &&
    "emailOptions" in data
  );
}

function isInviteCreatedTemplateData(
  data: unknown
): data is InviteCreatedTemplateProps {
  return (
    typeof data === "object" &&
    data !== null &&
    "invite" in data &&
    "emailOptions" in data
  );
}

function isAccountCreatedTemplateData(
  data: unknown
): data is AccountCreatedTemplateProps {
  return (
    typeof data === "object" &&
    data !== null &&
    "email" in data &&
    "password" in data &&
    "emailOptions" in data
  );
}

export function generateEmailTemplate(
  template: EmailTemplates,
  data: unknown
): ReactNode {
  switch (template) {
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
    case EmailTemplates.INVITE_CREATED:
      if (!isInviteCreatedTemplateData(data)) {
        throw new Error("Invalid invite created template data");
      }
      return <InviteCreatedTemplate {...data} />;
    default:
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        `Unknown template key: "${template}"`
      );
  }
}

export { AccountCreatedTemplate, InviteUserEmail, OrderPlacedTemplate };
