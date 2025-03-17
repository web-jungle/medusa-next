import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Connexion | Protection Zen",
  description: "Connectez-vous à votre compte Protection Zen.",
}

export default function Login() {
  return <LoginTemplate />
}
