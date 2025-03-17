"use client"

import { useEffect, useState } from "react"

// Définition des avis clients
const reviews = [
  {
    id: 1,
    name: "Marie Dupont",
    rating: 5,
    date: "12/01/2023",
    text: "Depuis que j'utilise le t-shirt protecteur, mes maux de tête ont considérablement diminué. Je le porte quotidiennement et je me sens beaucoup mieux. Un achat que je ne regrette pas !",
    product: "T-shirt Anti-Ondes Premium",
    avatar: "/images/avatars/avatar-1.jpg",
  },
  {
    id: 2,
    name: "Thomas Martin",
    rating: 4,
    date: "28/02/2023",
    text: "Je suis technicien informatique et passe mes journées entouré d'appareils électroniques. Ces vêtements m'ont permis de réduire ma fatigue en fin de journée. Je recommande !",
    product: "Pantalon Protection Totale",
    avatar: "/images/avatars/avatar-2.jpg",
  },
  {
    id: 3,
    name: "Sophie Bernard",
    rating: 5,
    date: "15/03/2023",
    text: "Ayant développé une hypersensibilité aux ondes, j'étais à la recherche d'une solution efficace. Ces vêtements ont changé ma vie quotidienne et me permettent de sortir à nouveau sans crainte.",
    product: "Robe Protective Élégante",
    avatar: "/images/avatars/avatar-3.jpg",
  },
  {
    id: 4,
    name: "Pierre Lambert",
    rating: 5,
    date: "03/04/2023",
    text: "Qualité exceptionnelle ! Les finitions sont parfaites et l'efficacité est au rendez-vous. J'ai mesuré la réduction des ondes avec un appareil spécialisé et les résultats sont impressionnants.",
    product: "Sweatshirt Anti 5G",
    avatar: "/images/avatars/avatar-4.jpg",
  },
  {
    id: 5,
    name: "Émilie Rousseau",
    rating: 4,
    date: "19/05/2023",
    text: "Je travaille dans un open space avec beaucoup de WiFi. Depuis que je porte ces vêtements, je dors mieux et je me sens moins stressée. Le style est également très agréable, on ne dirait pas des vêtements techniques.",
    product: "Chemise Bureau Protection",
    avatar: "/images/avatars/avatar-5.jpg",
  },
  {
    id: 6,
    name: "Julien Petit",
    rating: 5,
    date: "07/06/2023",
    text: "J'ai acheté le pack complet pour toute ma famille. Nous sommes tous ravis ! La livraison a été rapide et le service client très professionnel. C'est un investissement pour notre santé.",
    product: "Pack Famille Protection",
    avatar: "/images/avatars/avatar-6.jpg",
  },
  {
    id: 7,
    name: "Caroline Dubois",
    rating: 4,
    date: "22/07/2023",
    text: "Je suis médecin et je recommande ces produits à mes patients électrosensibles. Les retours sont très positifs et la qualité est constante. Un excellent produit français qui mérite d'être connu.",
    product: "Bonnet Protection Tête",
    avatar: "/images/avatars/avatar-7.jpg",
  },
  {
    id: 8,
    name: "Alexandre Moreau",
    rating: 5,
    date: "14/08/2023",
    text: "Après des recherches approfondies sur les protections anti-ondes, j'ai choisi cette marque et je ne regrette pas. L'efficacité est prouvée scientifiquement et le confort est au rendez-vous.",
    product: "Sous-vêtements Protecteurs",
    avatar: "/images/avatars/avatar-8.jpg",
  },
]

const ReviewCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(3)

  // Ajuster le nombre de diapositives affichées en fonction de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % (reviews.length - slidesToShow + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? reviews.length - slidesToShow : prev - 1
    )
  }

  // Générer les étoiles pour l'affichage de la note
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      ))
  }

  return (
    <div className="w-full py-12 bg-zen-offWhite">
      <div className="content-container">
        <h2 className="text-2xl text-zen-textDark font-medium text-center mb-2">
          Ce que nos clients disent
        </h2>
        <p className="text-center text-zen-textMedium mb-8">
          Découvrez les expériences de nos clients avec nos produits de
          protection anti-ondes
        </p>

        <div className="relative px-4">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  activeSlide * (100 / slidesToShow)
                }%)`,
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="px-4 flex-shrink-0"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white rounded-lg p-6 shadow-md h-full flex flex-col border-l-4 border-zen-accent">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 relative rounded-full overflow-hidden mr-4 bg-zen-lightGreen flex items-center justify-center text-zen-textDark font-semibold">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-zen-textDark">
                          {review.name}
                        </h3>
                        <div className="flex text-lg">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-zen-textMedium mb-4 flex-grow italic">
                      "{review.text}"
                    </p>
                    <div className="mt-auto">
                      <p className="text-sm text-zen-accent font-medium">
                        Produit: {review.product}
                      </p>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 -ml-2 border border-zen-lightGreen hover:bg-zen-lightGreen transition-colors"
            aria-label="Avis précédent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-zen-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 -mr-2 border border-zen-lightGreen hover:bg-zen-lightGreen transition-colors"
            aria-label="Avis suivant"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-zen-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {Array(reviews.length - slidesToShow + 1)
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  i === activeSlide ? "bg-zen-accent" : "bg-zen-lightGreen"
                }`}
                aria-label={`Aller à la diapositive ${i + 1}`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ReviewCarousel
