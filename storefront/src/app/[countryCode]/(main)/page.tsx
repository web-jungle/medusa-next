import { Metadata } from "next"

import { listCollections, retrieveCollection } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { getHomePagePosts } from "@lib/mdx"
import { HttpTypes } from "@medusajs/types"
import FeaturedArticles from "@modules/home/components/featured-articles"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import QualityCommitment from "@modules/home/components/quality-commitment"
import ReviewCarousel from "@modules/home/components/review-carousel"

export const metadata: Metadata = {
  title: "Protection Anti-Ondes | Vêtements Zen",
  description:
    "Découvrez notre gamme de vêtements protecteurs contre les ondes 5G, WiFi et autres rayonnements électromagnétiques pour un mode de vie plus sain.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  // Récupérer les articles mis en avant pour la page d'accueil
  const featuredArticles = getHomePagePosts()

  // Récupérer uniquement la collection spécifique demandée avec revalidation à 0
  const collection = await retrieveCollection("pcol_01JPM9MGTP3SGWCX615701TPXQ")

  let collections: HttpTypes.StoreCollection[] = []
  if (collection) {
    collections = [collection]
  } else {
    // Si la collection spécifique n'est pas trouvée, récupérer toutes les collections
    const result = await listCollections()
    collections = result.collections
  }

  if (!collections.length || !region) {
    return null
  }
  const isHome = true

  return (
    <div className="bg-zen-bg min-h-screen">
      <Hero />
      <div id="collections" className="py-12 bg-zen-white">
        <h2 className="text-2xl text-zen-textDark font-medium text-center ">
          Articles les plus vendus
        </h2>
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts
            collections={collections}
            region={region}
            isHome={isHome}
          />
        </ul>
      </div>

      {/* Section des engagements qualité */}
      <QualityCommitment />

      {/* Section des avis clients */}
      <ReviewCarousel />

      {/* Section des articles du blog */}
      {featuredArticles.length > 0 && (
        <FeaturedArticles articles={featuredArticles} />
      )}
    </div>
  )
}
