"use client"

import { Popover, PopoverPanel, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { Text, clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"

const MobileMenuItems = {
  Accueil: "/",
  Boutique: "/store",
  Blog: "/fr/blog",
  Compte: "/account",
  Panier: "/cart",
}

const MobileMenu = ({
  regions,
}: {
  regions: HttpTypes.StoreRegion[] | null
}) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="mobile-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-zen-green"
                  aria-label="Menu hamburger"
                >
                  <div className="flex flex-col justify-between w-6 h-5">
                    <span
                      className={`w-full h-0.5 bg-zen-darkGreen rounded-full block transition-all duration-300 ${
                        open ? "rotate-45 translate-y-2" : ""
                      }`}
                    ></span>
                    <span
                      className={`w-full h-0.5 bg-zen-darkGreen rounded-full block transition-all duration-300 ${
                        open ? "opacity-0" : "opacity-100"
                      }`}
                    ></span>
                    <span
                      className={`w-full h-0.5 bg-zen-darkGreen rounded-full block transition-all duration-300 ${
                        open ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    ></span>
                  </div>
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <PopoverPanel className="fixed top-16 left-0 right-0 bottom-0 z-40 bg-zen-white">
                  <div className="flex flex-col h-full p-6">
                    <div className="flex justify-start items-center mb-6">
                      <button
                        data-testid="close-mobile-menu-button"
                        onClick={close}
                        className="text-zen-darkGreen hover:text-zen-green p-2 mr-auto"
                        aria-label="Fermer le menu"
                      >
                        <XMark className="w-6 h-6" />
                      </button>
                    </div>

                    <ul className="flex flex-col gap-6 items-start justify-start mb-auto mt-2">
                      {Object.entries(MobileMenuItems).map(([name, href]) => {
                        return (
                          <li key={name} className="w-full">
                            <LocalizedClientLink
                              href={href}
                              className="text-2xl font-medium text-zen-darkGreen hover:text-zen-green flex w-full py-2 border-b border-zen-lightGreen"
                              onClick={close}
                              data-testid={`mobile-${name.toLowerCase()}-link`}
                            >
                              {name}
                            </LocalizedClientLink>
                          </li>
                        )
                      })}
                    </ul>

                    <div className="mt-auto pt-6 border-t border-zen-lightGreen">
                      <div
                        className="flex justify-between mb-4"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="text-ui-fg-subtle text-sm">
                        © {new Date().getFullYear()} Protection Zen. Tous droits
                        réservés.
                      </Text>
                    </div>
                  </div>
                </PopoverPanel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default MobileMenu
