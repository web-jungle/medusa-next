import { Metadata } from "next"

import { listOrders } from "@lib/data/orders"
import OrderOverview from "@modules/account/components/order-overview"
import TransferRequestForm from "@modules/account/components/transfer-request-form"
import Divider from "@modules/common/components/divider"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
  title: "Commandes | Protection Zen",
  description: "Aperçu de vos commandes précédentes.",
}

export default async function Orders() {
  const orders = await listOrders()

  if (!orders) {
    notFound()
  }

  return (
    <div className="w-full" data-testid="orders-page-wrapper">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Commandes</h1>
        <p className="text-base-regular">
          Consultez vos commandes précédentes et leur statut. Vous pouvez
          également créer des retours ou des échanges pour vos commandes si
          nécessaire.
        </p>
      </div>
      <div>
        <OrderOverview orders={orders} />
        <Divider className="my-16" />
        <TransferRequestForm />
      </div>
    </div>
  )
}
