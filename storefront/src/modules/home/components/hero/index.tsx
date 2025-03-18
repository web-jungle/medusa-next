import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[85vh] w-full border-b border-zen-green relative bg-zen-bg overflow-hidden">
      {/* Image d'arrière-plan avec Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/onde.jpg"
          alt="Arrière-plan zen"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <div className="flex flex-col items-center justify-center mt-4">
          <Image
            src={"./logo-zen.svg"}
            alt="logo zen"
            width={150}
            height={150}
          />
        </div>
        <span>
          <Heading
            level="h1"
            className="text-4xl sm:text-5xl md:text-9xl leading-tight text-zen-bordeaux font-extrabold font-mangro tracking-wide"
          >
            Protection Anti-Ondes
          </Heading>
          <Heading
            level="h2"
            className="text-2xl sm:text-3xl md:text-5xl leading-normal text-zen-navy font-normal mt-4"
          >
            Des vêtements qui vous protègent des radiations électromagnétiques
          </Heading>
          <p className="mt-6 text-zen-bordeaux md:text-2xl  mx-auto">
            Notre collection de vêtements innovants vous offre une protection
            contre les ondes 5G, WiFi et autres rayonnements électromagnétiques,
            pour un mode de vie plus sain.
          </p>
        </span>
        <Link href="#collections">
          <Button
            variant="secondary"
            className="bg-zen-bordeaux hover:bg-zen-charcoal text-white border-none mt-6"
          >
            Découvrir nos produits
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
