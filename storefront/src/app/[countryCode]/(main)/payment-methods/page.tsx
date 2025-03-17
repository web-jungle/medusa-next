import { Heading, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modes de paiement - Protection Anti-Ondes | Vêtements Zen",
  description:
    "Découvrez les modes de paiement sécurisés acceptés pour vos achats de vêtements anti-ondes.",
}

export default function PaymentMethodsPage() {
  return (
    <div className="py-12 bg-zen-bg min-h-screen">
      <div className="content-container max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-zen-darkGreen font-semibold mb-4"
          >
            Modes de paiement acceptés
          </Heading>
          <Text className="text-ui-fg-subtle max-w-2xl mx-auto">
            Nous utilisons Stripe, une plateforme de paiement sécurisée, pour
            traiter toutes vos transactions en toute sécurité.
          </Text>
        </div>

        <div className="bg-zen-white p-8 rounded-lg shadow-sm">
          {/* Section paiements par carte */}
          <div className="mb-10">
            <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
              Cartes de crédit et de débit
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-20 h-16 flex items-center justify-center">
                  <img src="/payment/visa.svg" alt="Visa" className="h-8" />
                </div>
                <span className="mt-2 text-sm text-ui-fg-subtle">Visa</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-20 h-16 flex items-center justify-center">
                  <img
                    src="/payment/mastercard.svg"
                    alt="Mastercard"
                    className="h-8"
                  />
                </div>
                <span className="mt-2 text-sm text-ui-fg-subtle">
                  Mastercard
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-20 h-16 flex items-center justify-center">
                  <img
                    src="/payment/amex.svg"
                    alt="American Express"
                    className="h-8"
                  />
                </div>
                <span className="mt-2 text-sm text-ui-fg-subtle">
                  American Express
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-20 h-16 flex items-center justify-center">
                  <img
                    src="/payment/cb.svg"
                    alt="Carte Bancaire"
                    className="h-8"
                  />
                </div>
                <span className="mt-2 text-sm text-ui-fg-subtle">
                  Carte Bancaire
                </span>
              </div>
            </div>
          </div>

          {/* Section paiements alternatifs */}
          <div className="mb-10">
            <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
              Portefeuilles électroniques et paiements alternatifs
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-20 h-16 flex items-center justify-center">
                  <img
                    src="/payment/apple-pay.svg"
                    alt="Apple Pay"
                    className="h-8"
                  />
                </div>
                <span className="mt-2 text-sm text-ui-fg-subtle">
                  Apple Pay
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-20 h-16 flex items-center justify-center">
                  <img
                    src="/payment/google-pay.svg"
                    alt="Google Pay"
                    className="h-8"
                  />
                </div>
                <span className="mt-2 text-sm text-ui-fg-subtle">
                  Google Pay
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-20 h-16 flex items-center justify-center">
                  <img src="/payment/paypal.svg" alt="PayPal" className="h-8" />
                </div>
                <span className="mt-2 text-sm text-ui-fg-subtle">PayPal</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg shadow-sm w-20 h-16 flex items-center justify-center">
                  <img src="/payment/klarna.svg" alt="Klarna" className="h-8" />
                </div>
                <span className="mt-2 text-sm text-ui-fg-subtle">Klarna</span>
              </div>
            </div>
          </div>

          {/* Informations de sécurité et conformité */}
          <div className="border-t border-zen-lightGreen pt-8 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
                  Transactions 100% sécurisées
                </h3>
                <p className="text-sm text-ui-fg-subtle">
                  Toutes les transactions sont sécurisées et cryptées. Vos
                  informations de paiement ne sont jamais stockées sur nos
                  serveurs.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <img
                    src="/payment/stripe-secure.svg"
                    alt="Stripe Secure"
                    className="h-10"
                  />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <img
                    src="/payment/pci-dss.svg"
                    alt="PCI DSS Compliant"
                    className="h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ sur les paiements */}
        <div className="mt-12 bg-zen-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl text-zen-darkGreen font-medium mb-6">
            Questions fréquentes sur les paiements
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
                Mes informations de paiement sont-elles sécurisées ?
              </h3>
              <p className="text-ui-fg-subtle">
                Absolument. Nous utilisons Stripe, un prestataire de services de
                paiement conforme aux normes PCI DSS de niveau 1, le niveau de
                sécurité le plus élevé de l'industrie des paiements.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
                Quand mon compte sera-t-il débité ?
              </h3>
              <p className="text-ui-fg-subtle">
                Votre compte sera débité immédiatement après la confirmation de
                votre commande.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
                Est-ce que je peux payer en plusieurs fois ?
              </h3>
              <p className="text-ui-fg-subtle">
                Oui, selon le montant de votre commande, vous pourrez bénéficier
                du paiement en 3 ou 4 fois via Klarna lors du processus de
                commande.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
                Acceptez-vous les virements bancaires ?
              </h3>
              <p className="text-ui-fg-subtle">
                Pour le moment, nous n'acceptons pas les virements bancaires
                directs. Nous vous invitons à utiliser l'un des moyens de
                paiement proposés ci-dessus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
