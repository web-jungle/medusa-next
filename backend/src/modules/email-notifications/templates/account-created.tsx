import { Hr, Section, Text } from "@react-email/components";
import { Base } from "./base";

export const ACCOUNT_CREATED = "account-created";

export interface AccountCreatedTemplateProps {
  email: string;
  password: string;
  preview?: string;
}

export const isAccountCreatedTemplateData = (
  data: any
): data is AccountCreatedTemplateProps =>
  typeof data.password === "string" && typeof data.email === "string";

export const AccountCreatedTemplate = ({
  email,
  password,
  preview = "Votre compte a été créé avec succès",
}: AccountCreatedTemplateProps) => (
  <Base preview={preview}>
    <Section>
      <Text>Bonjour,</Text>
      <Text>
        Votre compte Protection Zen a été créé avec succès suite à votre
        commande.
      </Text>
      <Text>Voici vos identifiants de connexion :</Text>
      <Text>Email : {email}</Text>
      <Text>Mot de passe : {password}</Text>
      <Text>
        Pour des raisons de sécurité, nous vous recommandons de changer votre
        mot de passe lors de votre première connexion.
      </Text>
      <Hr />
      <Text>
        Vous pouvez vous connecter à votre compte en cliquant sur le lien
        suivant : <a href={`${process.env.BACKEND_URL}/account`}>Mon compte</a>
      </Text>
    </Section>
  </Base>
);

// Add preview props for the email dev server
AccountCreatedTemplate.PreviewProps = {
  email: "example@example.com",
  password: "GeneratedPassword123!",
  preview: "Votre compte a été créé avec succès",
} as AccountCreatedTemplateProps;
