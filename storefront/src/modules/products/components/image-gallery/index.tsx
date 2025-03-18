import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { useState } from "react"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  // Si aucune image n'est disponible, retourner null
  if (!images.length) {
    return null
  }

  // État pour suivre l'image principale actuelle
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="flex flex-col items-start relative w-full gap-4">
      {/* Image principale */}
      <Container
        key={`main-${mainImage.id}`}
        className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle rounded-lg"
      >
        {!!mainImage.url && (
          <Image
            src={mainImage.url}
            priority={true}
            className="absolute inset-0"
            alt="Image principale du produit"
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            style={{
              objectFit: "cover",
            }}
          />
        )}
      </Container>

      {/* Miniatures */}
      <div className="flex flex-row gap-2 overflow-x-auto w-full py-2">
        {images.map((image) => (
          <div
            key={`thumb-${image.id}`}
            className={`relative cursor-pointer h-20 min-w-[80px] border-2 rounded-md overflow-hidden transition-all ${
              mainImage.id === image.id
                ? "border-zen-accent opacity-100 ring-2 ring-zen-accent"
                : "border-gray-200 opacity-70 hover:opacity-100"
            }`}
            onClick={() => setMainImage(image)}
          >
            {!!image.url && (
              <Image
                src={image.url}
                alt={`Miniature ${image.id}`}
                fill
                sizes="80px"
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
