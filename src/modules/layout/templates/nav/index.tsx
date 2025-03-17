import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import MobileMenu from "@modules/layout/components/mobile-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 bg-zen-white border-zen-lightGreen shadow-sm">
        <nav className="content-container txt-xsmall-plus text-zen-darkGreen flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full block small:hidden">
              <MobileMenu regions={regions} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="hover:text-zen-green uppercase flex items-center"
              data-testid="nav-store-link"
            >
              <img
                src="/logo-zen.svg"
                alt="Protection Zen Logo"
                className="h-14"
              />
            </LocalizedClientLink>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-zen-green text-zen-darkGreen"
                href="/collections/all"
                data-testid="nav-collections-link"
              >
                Collections
              </LocalizedClientLink>
              <a
                className="hover:text-zen-green text-zen-darkGreen"
                href="/fr/blog"
                data-testid="nav-blog-link"
              >
                Blog
              </a>
              <LocalizedClientLink
                className="hover:text-zen-green text-zen-darkGreen"
                href="/account"
                data-testid="nav-account-link"
              >
                Compte
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-zen-green text-zen-darkGreen flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Panier (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
