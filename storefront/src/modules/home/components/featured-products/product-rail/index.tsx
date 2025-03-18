import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
  isHome,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
  isHome: boolean
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      fields: "*variants.calculated_price",
      collection_id: collection.id,
    },
  })

  console.log("Nombre total de produits:", pricedProducts.length)
  console.log("ID de la collection:", collection.id)
  console.log(
    "Produits avec collection_id:",
    pricedProducts.map((p) => ({ id: p.id, collection_id: p.collection_id }))
  )

  // Filtrer manuellement pour n'obtenir que les produits de la collection
  const collectionProducts = pricedProducts.filter(
    (product) => product.collection_id === collection.id
  )

  if (!collectionProducts.length) {
    console.log("collectionProducts.length, il y a rien")

    return null
  }

  return (
    <div className="content-container py-12 small:py-24 bg-zen-bg rounded-lg shadow-sm">
      {!isHome ? (
        <div className="flex justify-between mb-8 items-center">
          <Text className="txt-xlarge text-zen-darkGreen font-medium">
            {collection.title}
          </Text>

          <div className="text-zen-green hover:text-zen-darkGreen">
            <InteractiveLink href={`/collections/${collection.handle}`}>
              Voir tout
            </InteractiveLink>
          </div>
        </div>
      ) : null}
      <div className="p-4 bg-zen-lightGreen rounded-lg mb-8">
        <p className="text-zen-darkGreen italic text-sm">
          Notre collection de vêtements protecteurs vous offre une barrière
          efficace contre les ondes électromagnétiques tout en vous assurant
          confort et style au quotidien.
        </p>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-3 gap-x-6 gap-y-24 small:gap-y-36">
        {collectionProducts &&
          collectionProducts.map((product) => (
            <li
              key={product.id}
              className="hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
