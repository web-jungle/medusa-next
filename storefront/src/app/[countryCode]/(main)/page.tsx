import { Metadata } from "next"

import { listCollections } from "@lib/data/collections"
import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import StoreTemplate from "@modules/home/components/store-template"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Protection Anti-Ondes | Vêtements Zen",
  description:
    "Découvrez notre gamme de vêtements protecteurs contre les ondes 5G, WiFi et autres rayonnements électromagnétiques pour un mode de vie plus sain.",
}

export default async function StoreFrontPage({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    notFound()
  }

  const collections = await listCollections()
  const topProducts = await listProducts({
    countryCode,
    revalidate: 0, // Désactiver complètement le cache
    queryParams: {
      limit: 8,
    } as any,
  }).then(({ response }) => response.products)

  return (
    <StoreTemplate
      collections={collections}
      products={topProducts}
      region={region}
    />
  )
}
