import { NextRequest, NextResponse } from "next/server"

const BACKEND_URL =
  process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://localhost:9000"

/**
 * API Route pour relayer la demande de création automatique de compte au backend
 */
export async function POST(request: NextRequest) {
  const body = await request.json()

  console.log(
    "Relai de la demande de création de compte automatique au backend"
  )

  try {
    // Appel à l'API du backend
    const backendResponse = await fetch(`${BACKEND_URL}/store/auto-account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })

    // Récupération et renvoie de la réponse
    const data = await backendResponse.json()

    return NextResponse.json(data, { status: backendResponse.status })
  } catch (error) {
    console.error("Erreur lors de la création du compte :", error)

    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de la communication avec le serveur",
      },
      { status: 500 }
    )
  }
}
