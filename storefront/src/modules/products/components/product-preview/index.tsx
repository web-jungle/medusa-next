import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div
        data-testid="product-wrapper"
        className="bg-zen-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out"
      >
        <div className="relative">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          <div className="absolute -top-2 -right-2 bg-zen-green text-white text-xs px-2 py-1 rounded-full">
            Anti-ondes
          </div>
        </div>
        <div className="flex flex-col mt-4 gap-y-1">
          <Text
            className="text-zen-darkGreen font-medium"
            data-testid="product-title"
          >
            {product.title}
          </Text>
          <p className="text-ui-fg-subtle text-xs line-clamp-2">
            Protection efficace contre les ondes électromagnétiques
          </p>
          <div className="flex items-center gap-x-2 mt-2">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
