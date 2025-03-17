import { Heading, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modes de livraison - Protection Anti-Ondes | Vêtements Zen",
  description:
    "Découvrez nos options de livraison pour recevoir vos vêtements de protection anti-ondes.",
}

export default function ShippingMethodsPage() {
  return (
    <div className="py-12 bg-zen-bg min-h-screen">
      <div className="content-container max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-zen-darkGreen font-semibold mb-4"
          >
            Modes de livraison
          </Heading>
          <Text className="text-ui-fg-subtle max-w-2xl mx-auto">
            Nous proposons plusieurs options de livraison pour vous permettre de
            recevoir vos produits de protection anti-ondes selon vos
            préférences.
          </Text>
        </div>

        {/* Colissimo */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
              <img
                src="/shipping/colissimo.svg"
                alt="Colissimo"
                className="h-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h2 className="text-xl text-zen-darkGreen font-medium mb-3">
                Colissimo
              </h2>
              <div className="mb-4">
                <div className="flex justify-between py-2 border-b border-zen-lightGreen">
                  <span className="text-ui-fg-subtle">Délai de livraison</span>
                  <span className="font-medium">2-3 jours ouvrés</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zen-lightGreen">
                  <span className="text-ui-fg-subtle">Transporteur</span>
                  <span className="font-medium">La Poste</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zen-lightGreen">
                  <span className="text-ui-fg-subtle">Tarif</span>
                  <span className="font-medium">À partir de 4,95€</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-ui-fg-subtle">Suivi</span>
                  <span className="font-medium">Oui</span>
                </div>
              </div>
              <Text className="text-sm text-ui-fg-subtle">
                Livraison à domicile ou en point relais. La solution idéale pour
                un délai raisonnable et un tarif économique.
              </Text>
            </div>
          </div>
        </div>

        {/* Chronopost */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
              <img
                src="/shipping/chronopost.svg"
                alt="Chronopost"
                className="h-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h2 className="text-xl text-zen-darkGreen font-medium mb-3">
                Chronopost
              </h2>
              <div className="mb-4">
                <div className="flex justify-between py-2 border-b border-zen-lightGreen">
                  <span className="text-ui-fg-subtle">Délai de livraison</span>
                  <span className="font-medium">1 jour ouvré</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zen-lightGreen">
                  <span className="text-ui-fg-subtle">Transporteur</span>
                  <span className="font-medium">Chronopost</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zen-lightGreen">
                  <span className="text-ui-fg-subtle">Tarif</span>
                  <span className="font-medium">À partir de 9,95€</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-ui-fg-subtle">Suivi</span>
                  <span className="font-medium">Oui</span>
                </div>
              </div>
              <Text className="text-sm text-ui-fg-subtle">
                Option express avec livraison le lendemain avant 13h pour toute
                commande passée avant 12h. Idéal lorsque vous avez besoin
                rapidement de votre protection anti-ondes.
              </Text>
            </div>
          </div>
        </div>

        {/* Mondial Relay */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
              <img
                src="/shipping/mondial-relay.svg"
                alt="Mondial Relay"
                className="h-20"
              />
            </div>
            <div className="w-full md:w-3/4">
              <h2 className="text-xl text-zen-darkGreen font-medium mb-3">
                Mondial Relay
              </h2>
              <div className="mb-4">
                <div className="flex justify-between py-2 border-b border-zen-lightGreen">
                  <span className="text-ui-fg-subtle">Délai de livraison</span>
                  <span className="font-medium">3-5 jours ouvrés</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zen-lightGreen">
                  <span className="text-ui-fg-subtle">Transporteur</span>
                  <span className="font-medium">Mondial Relay</span>
                </div>
                <div className="flex justify-between py-2 border-b border-zen-lightGreen">
                  <span className="text-ui-fg-subtle">Tarif</span>
                  <span className="font-medium">À partir de 3,95€</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-ui-fg-subtle">Suivi</span>
                  <span className="font-medium">Oui</span>
                </div>
              </div>
              <Text className="text-sm text-ui-fg-subtle">
                Livraison économique en point relais, avec plus de 10 000 points
                de retrait en France et en Europe. La solution la plus
                économique si vous n'êtes pas pressé.
              </Text>
            </div>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
            Informations importantes
          </h2>

          <div className="mb-6">
            <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
              Délais de préparation
            </h3>
            <p className="text-ui-fg-subtle">
              Toutes nos commandes sont préparées et expédiées sous 24 à 48h
              ouvrées. Les délais indiqués ci-dessus s'appliquent à partir de
              l'expédition de votre colis.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
              Suivi de commande
            </h3>
            <p className="text-ui-fg-subtle">
              Un email contenant le numéro de suivi de votre colis vous sera
              envoyé dès l'expédition de votre commande. Vous pourrez suivre
              votre livraison en temps réel sur le site du transporteur.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
              Livraison internationale
            </h3>
            <p className="text-ui-fg-subtle">
              Nous livrons dans toute l'Union Européenne et dans de nombreux
              pays à travers le monde. Les délais et tarifs varient selon la
              destination. Contactez-nous pour plus d'informations.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
              Retours et échanges
            </h3>
            <p className="text-ui-fg-subtle">
              Vous disposez de 14 jours pour retourner un article qui ne vous
              conviendrait pas. Les frais de retour sont à votre charge, sauf en
              cas de produit défectueux. Consultez notre politique de retour
              pour plus de détails.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
