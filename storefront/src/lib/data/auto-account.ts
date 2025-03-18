type AutoAccountData = {
  orderId: string
  email: string
  firstName?: string
  lastName?: string
}

/**
 * Crée automatiquement un compte client après une commande
 */
export async function createAutomaticAccount(data: AutoAccountData) {
  if (!data.orderId || !data.email) {
    throw new Error("L'ID de commande et l'email sont requis")
  }

  try {
    console.log("Envoi de la demande de création de compte automatique")

    const response = await fetch(`/api/auto-account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(
        errorData.message || "Erreur lors de la création du compte"
      )
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Erreur lors de la création automatique du compte:", error)
    throw error
  }
}
