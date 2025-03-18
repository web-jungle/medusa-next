import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="border-t border-zen-green w-full bg-zen-bg">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-20">
          <div className="flex flex-col gap-y-4">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus text-zen-darkGreen hover:text-zen-green uppercase"
            >
              Protection Zen
            </LocalizedClientLink>
            <p className="text-ui-fg-subtle max-w-xs text-sm">
              Des vêtements innovants qui vous protègent des ondes
              électromagnétiques pour un mode de vie plus sain et équilibré.
            </p>
            <div className="relative w-32 h-32 opacity-30 mt-2">
              <img
                src="/zen-leaves.svg"
                alt="Feuilles zen"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16">
            <div className="flex flex-col gap-y-2">
              <span className="txt-small-plus text-zen-darkGreen font-medium">
                Informations
              </span>
              <ul className="grid grid-cols-1 gap-y-2 text-ui-fg-subtle txt-small">
                <li>
                  <LocalizedClientLink
                    href="/about"
                    className="hover:text-zen-darkGreen"
                  >
                    À propos
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/protection-technology"
                    className="hover:text-zen-darkGreen"
                  >
                    Technologie de protection
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/payment-methods"
                    className="hover:text-zen-darkGreen"
                  >
                    Modes de paiement
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/shipping-methods"
                    className="hover:text-zen-darkGreen"
                  >
                    Modes de livraison
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/return-policy"
                    className="hover:text-zen-darkGreen"
                  >
                    Conditions de retour
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/contact"
                    className="hover:text-zen-darkGreen"
                  >
                    Contact
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink
                    href="/faq"
                    className="hover:text-zen-darkGreen"
                  >
                    FAQ
                  </LocalizedClientLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full mb-8 justify-between text-ui-fg-muted border-t border-zen-green pt-4 gap-y-4">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Protection Zen. Tous droits réservés.
          </Text>
          <div className="flex gap-x-4">
            <img src="/payment/visa.svg" alt="Visa" className="h-6" />
            <img
              src="/payment/mastercard.svg"
              alt="Mastercard"
              className="h-6"
            />
            <img src="/payment/apple-pay.svg" alt="Apple Pay" className="h-6" />
            <img
              src="/payment/google-pay.svg"
              alt="Google Pay"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
