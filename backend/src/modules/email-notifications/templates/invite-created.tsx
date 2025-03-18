import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { FC } from "react";

export const INVITE_CREATED = "invite-created";

export interface InviteCreatedTemplateProps {
  invite: {
    token: string;
    user_email: string;
  };
  emailOptions: {
    from?: string;
    to?: string;
    subject?: string;
    replyTo?: string;
  };
  preview?: string;
}

export const InviteCreatedTemplate: FC<InviteCreatedTemplateProps> = ({
  invite,
  emailOptions,
  preview = "Vous avez été invité à rejoindre l'équipe",
}) => {
  const inviteLink = `${
    process.env.ADMIN_URL || "http://localhost:7000"
  }/invite?token=${invite.token}`;

  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>Vous avez été invité</Heading>
          <Section style={section}>
            <Text style={text}>
              Vous avez été invité à rejoindre l'équipe. Cliquez sur le lien
              ci-dessous pour accepter l'invitation :
            </Text>
            <Link href={inviteLink} style={button}>
              Accepter l'invitation
            </Link>
            <Text style={text}>
              Si vous n'attendiez pas cette invitation, vous pouvez ignorer cet
              email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif',
  padding: "30px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  borderRadius: "4px",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  margin: "0 auto",
  maxWidth: "600px",
  padding: "20px",
};

const heading = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "30px",
  marginBottom: "16px",
  textAlign: "center" as const,
};

const section = {
  padding: "20px",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  marginBottom: "20px",
};

const button = {
  backgroundColor: "#5469d4",
  borderRadius: "4px",
  color: "#fff",
  display: "block",
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "100%",
  marginBottom: "20px",
  padding: "16px",
  textAlign: "center" as const,
  textDecoration: "none",
};
