import { createAutomaticAccount } from "@lib/data/auto-account"
import { retrieveOrder } from "@lib/data/orders"
import { HttpTypes } from "@medusajs/types"
import OrderCompletedTemplate from "@modules/order/templates/order-completed-template"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
  params: { id: string }
}

export const metadata: Metadata = {
  title: "Order Confirmation",
  description: "View your order",
}

export default async function OrderConfirmedPage({ params }: Props) {
  const order = await retrieveOrder(params.id).catch(() => null)

  if (!order) {
    notFound()
  }

  // Créer automatiquement un compte client s'il n'en a pas déjà un
  if (!order.customer) {
    try {
      console.log("Création automatique du compte pour : ", order.email)

      await createAutomaticAccount({
        orderId: order.id,
        email: order.email,
        firstName: order.shipping_address?.first_name || "",
        lastName: order.shipping_address?.last_name || "",
      })
    } catch (error) {
      console.error("Erreur lors de la création automatique du compte :", error)
    }
  }

  // Les items sont déjà enrichis par retrieveOrder
  const enrichedOrder = order as unknown as HttpTypes.StoreOrder

  return <OrderCompletedTemplate order={enrichedOrder} />
}
