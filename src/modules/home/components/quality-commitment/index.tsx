import { Heading } from "@medusajs/ui"
import Image from "next/image"

// SVG du drapeau français encodé en base64
const frenchFlagSvg =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0VEMjkzOSIvPjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjRkZGIi8+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSI2MDAiIGZpbGw9IiMyODJGNUYiLz48L3N2Zz4="

const QualityCommitment = () => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="content-container">
        <div className="text-center mb-8">
          <Heading
            level="h2"
            className="text-6xl  text-zen-bordeaux font-mangro mb-4"
          >
            Nos Engagements Qualité
          </Heading>
          <p className="text-zen-textDark text-xl max-w-2xl mx-auto">
            Chez Protection Zen, nous nous engageons à vous fournir les
            meilleurs produits de protection contre les ondes
            électromagnétiques, avec une attention particulière à la qualité et
            au service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Engagement 1: Tissu d'argent */}
          <div className="bg-zen-offWhite rounded-lg p-6 shadow-md flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-zen-lightGreen rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-zen-textDark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-zen-navy mb-3">
              Tissu d'Argent Premium
            </h3>
            <p className="text-zen-textMedium flex-grow">
              Nos vêtements sont fabriqués avec un tissu contenant des fibres
              d'argent de haute qualité, offrant une protection optimale contre
              les ondes électromagnétiques tout en restant confortable et
              respirant.
            </p>
            <div className="mt-4 text-sm text-zen-accent font-medium">
              Efficacité prouvée scientifiquement
            </div>
          </div>

          {/* Engagement 2: Fabrication française */}
          <div className="bg-zen-offWhite rounded-lg p-6 shadow-md flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-zen-lightGreen rounded-full flex items-center justify-center mb-4 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={frenchFlagSvg}
                  alt="Drapeau français"
                  width={30}
                  height={18}
                  className="rounded-sm"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-zen-navy mb-3">
              Expédié depuis la France
            </h3>
            <p className="text-zen-textMedium flex-grow">
              Tous nos produits sont expédiés depuis la France, ce qui vous
              garantit une livraison rapide, un suivi efficace et un service
              client réactif basé en France pour vous accompagner dans vos
              achats.
            </p>
            <div className="mt-4 text-sm text-zen-accent font-medium flex items-center justify-center">
              Service client 100% français
              <Image
                src={frenchFlagSvg}
                alt="Drapeau français"
                width={20}
                height={12}
                className="ml-2 rounded-sm"
              />
            </div>
          </div>

          {/* Engagement 3: Livraison rapide */}
          <div className="bg-zen-offWhite rounded-lg p-6 shadow-md flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-zen-lightGreen rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-zen-textDark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-zen-navy mb-3">
              Livraison Rapide
            </h3>
            <p className="text-zen-textMedium flex-grow">
              Nous expédions vos commandes sous 24h à 48h ouvrées. La livraison
              en France métropolitaine est assurée en 2-3 jours ouvrés, pour que
              vous puissiez profiter rapidement de votre protection.
            </p>
            <div className="mt-4 text-sm text-zen-accent font-medium">
              Suivi de commande en temps réel
            </div>
          </div>
        </div>

        <div className="mt-12 bg-zen-lightGreen rounded-lg p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold text-zen-textDark mb-3">
                Notre Garantie Satisfaction
              </h3>
              <p className="text-zen-textDark mb-4">
                Nous sommes tellement confiants dans la qualité de nos produits
                que nous offrons une garantie satisfaction de 30 jours. Si vous
                n'êtes pas satisfait, nous vous remboursons intégralement.
              </p>
              <ul className="list-disc list-inside text-zen-textMedium space-y-1 ml-2">
                <li>Retours gratuits sous 30 jours</li>
                <li>Échanges simplifiés</li>
                <li>SAV réactif basé en France</li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-3xl text-zen-bordeaux font-bold">
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QualityCommitment
