import { Heading, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions de retour - Protection Anti-Ondes | Vêtements Zen",
  description:
    "Découvrez nos conditions de retour et le droit de rétractation légal de 14 jours pour vos achats de vêtements de protection anti-ondes.",
}

export default function ReturnPolicyPage() {
  return (
    <div className="py-12 bg-zen-bg min-h-screen">
      <div className="content-container max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-zen-darkGreen font-semibold mb-4"
          >
            Conditions de retour
          </Heading>
          <Text className="text-ui-fg-subtle max-w-2xl mx-auto">
            Nous souhaitons que vous soyez entièrement satisfait de votre achat.
            Voici les informations concernant notre politique de retour et le
            droit légal de rétractation.
          </Text>
        </div>

        {/* Droit de rétractation */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
            Droit de rétractation légal de 14 jours
          </h2>

          <div className="mb-6">
            <p className="text-ui-fg-subtle mb-4">
              Conformément aux dispositions légales en vigueur, vous disposez
              d'un délai de 14 jours à compter de la réception de votre commande
              pour exercer votre droit de rétractation sans avoir à justifier de
              motifs ni à payer de pénalités.
            </p>
            <p className="text-ui-fg-subtle mb-4">
              Ce droit de rétractation s'applique aux produits achetés sur notre
              site internet, à l'exception des articles personnalisés ou sur
              mesure qui ne peuvent être retournés pour des raisons d'hygiène.
            </p>
            <p className="text-ui-fg-subtle">
              Pour exercer ce droit, il vous suffit de nous informer de votre
              décision de vous rétracter par une déclaration écrite dénuée
              d'ambiguïté (par exemple, lettre envoyée par la poste ou courrier
              électronique) dans le délai imparti.
            </p>
          </div>
        </div>

        {/* Procédure de retour */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
            Procédure de retour
          </h2>

          <div className="mb-6">
            <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
              Étape 1 : Nous informer
            </h3>
            <p className="text-ui-fg-subtle mb-4">
              Contactez notre service client par email à{" "}
              <span className="text-zen-green">retours@protectionzen.fr</span>{" "}
              ou via notre formulaire de contact en précisant votre numéro de
              commande et les articles que vous souhaitez retourner.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
              Étape 2 : Emballer votre retour
            </h3>
            <p className="text-ui-fg-subtle mb-4">
              Les produits doivent être retournés dans leur état d'origine, non
              utilisés et dans leur emballage d'origine. Joignez à votre colis
              le formulaire de retour dûment complété ou une note mentionnant
              votre numéro de commande.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
              Étape 3 : Expédier votre retour
            </h3>
            <p className="text-ui-fg-subtle mb-4">
              Envoyez votre colis à l'adresse suivante :
            </p>
            <div className="bg-zen-bg p-4 rounded-md mb-4">
              <p className="text-ui-fg-base">
                Protection Zen - Service Retours
              </p>
              <p className="text-ui-fg-base">123 Rue de la Protection</p>
              <p className="text-ui-fg-base">75000 Paris</p>
              <p className="text-ui-fg-base">France</p>
            </div>
            <p className="text-ui-fg-subtle">
              Nous vous recommandons d'utiliser un service de livraison avec
              suivi et de conserver la preuve d'expédition jusqu'à ce que votre
              retour soit traité.
            </p>
          </div>

          <div>
            <h3 className="text-lg text-zen-darkGreen font-medium mb-2">
              Étape 4 : Traitement de votre retour
            </h3>
            <p className="text-ui-fg-subtle">
              Dès réception de votre colis, nous procéderons à la vérification
              des articles retournés. Si toutes les conditions sont respectées,
              le remboursement sera effectué dans un délai de 14 jours maximum à
              compter de la date à laquelle nous avons été informés de votre
              décision de vous rétracter.
            </p>
          </div>
        </div>

        {/* Frais de retour */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
            Frais de retour
          </h2>

          <div className="mb-4">
            <p className="text-ui-fg-subtle mb-4">
              Les frais de retour sont à votre charge, sauf dans les cas
              suivants :
            </p>
            <ul className="list-disc pl-5 mb-4 text-ui-fg-subtle">
              <li className="mb-2">
                Article défectueux ou non conforme à la description
              </li>
              <li className="mb-2">
                Erreur de notre part dans l'envoi du produit
              </li>
              <li>Colis endommagé à la réception</li>
            </ul>
            <p className="text-ui-fg-subtle">
              Dans ces cas particuliers, veuillez contacter notre service client
              avant de procéder au retour afin que nous puissions vous indiquer
              la marche à suivre et vous fournir une étiquette de retour
              prépayée.
            </p>
          </div>
        </div>

        {/* Remboursement */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
            Remboursement
          </h2>

          <div className="mb-6">
            <p className="text-ui-fg-subtle mb-4">
              Le remboursement sera effectué en utilisant le même moyen de
              paiement que celui que vous avez utilisé lors de votre achat
              initial, sauf si vous avez expressément convenu d'un moyen
              différent.
            </p>
            <p className="text-ui-fg-subtle mb-4">
              Le remboursement inclut le prix d'achat des articles retournés
              ainsi que les frais de livraison standard initiaux. Si vous avez
              choisi un mode de livraison plus coûteux que la livraison
              standard, nous ne rembourserons que le montant correspondant à la
              livraison standard.
            </p>
            <p className="text-ui-fg-subtle">
              Nous pouvons différer le remboursement jusqu'à ce que nous ayons
              reçu les biens ou jusqu'à ce que vous ayez fourni une preuve
              d'expédition des biens, la date retenue étant celle du premier de
              ces faits.
            </p>
          </div>
        </div>

        {/* Échanges */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
            Échanges
          </h2>

          <div>
            <p className="text-ui-fg-subtle mb-4">
              Si vous souhaitez échanger un article contre une autre taille ou
              un autre coloris, nous vous recommandons de procéder à un retour
              standard et de passer une nouvelle commande pour l'article
              souhaité.
            </p>
            <p className="text-ui-fg-subtle">
              Dans certains cas, un échange direct peut être possible. Veuillez
              contacter notre service client pour en discuter avant d'effectuer
              votre retour.
            </p>
          </div>
        </div>

        {/* Produits défectueux */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
            Produits défectueux ou non conformes
          </h2>

          <div>
            <p className="text-ui-fg-subtle mb-4">
              Si vous recevez un produit défectueux ou non conforme à la
              description, vous bénéficiez de la garantie légale de conformité
              (2 ans) et de la garantie contre les vices cachés.
            </p>
            <p className="text-ui-fg-subtle mb-4">
              Dans ce cas, veuillez contacter notre service client dans les plus
              brefs délais en joignant des photos du défaut constaté. Nous vous
              indiquerons la procédure à suivre pour le retour et le
              remplacement du produit.
            </p>
            <p className="text-ui-fg-subtle">
              Les frais de retour pour les produits défectueux ou non conformes
              seront intégralement pris en charge par Protection Zen.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-zen-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl text-zen-darkGreen font-medium mb-4">
            Besoin d'aide ?
          </h2>

          <div>
            <p className="text-ui-fg-subtle mb-4">
              Notre service client est à votre disposition pour toute question
              concernant les retours et remboursements :
            </p>
            <ul className="list-disc pl-5 mb-4 text-ui-fg-subtle">
              <li className="mb-2">
                Par email :{" "}
                <span className="text-zen-green">contact@protectionzen.fr</span>
              </li>
              <li className="mb-2">
                Par téléphone :{" "}
                <span className="text-zen-green">01 23 45 67 89</span> (du lundi
                au vendredi, de 9h à 18h)
              </li>
              <li>Via notre formulaire de contact disponible sur notre site</li>
            </ul>
            <p className="text-ui-fg-subtle">
              Nous nous engageons à traiter votre demande dans les meilleurs
              délais.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
