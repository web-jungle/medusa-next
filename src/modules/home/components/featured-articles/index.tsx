import { BlogPost } from "@lib/mdx"
import { Container, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

interface FeaturedArticlesProps {
  articles: BlogPost[]
}

const FeaturedArticles = ({ articles }: FeaturedArticlesProps) => {
  if (!articles.length) return null

  return (
    <div className="w-full py-12 bg-white">
      <div className="content-container">
        <Heading className="text-2xl text-zen-textDark font-medium text-center mb-2">
          Nos derniers articles
        </Heading>
        <Text className="text-center text-zen-textMedium mb-8">
          Découvrez nos conseils et actualités sur la protection contre les
          ondes électromagnétiques
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}

const ArticleCard = ({ article }: { article: BlogPost }) => {
  const { slug, frontMatter } = article
  const { title, description, image, date, author } = frontMatter

  // Formatage de la date pour l'affichage
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <LocalizedClientLink href={`/blog/${slug}`} className="block group">
      <Container className="bg-zen-offWhite rounded-lg overflow-hidden shadow-md transition-all group-hover:shadow-lg h-full flex flex-col">
        <div className="relative w-full aspect-[16/9] bg-gray-100">
          {image && (
            <Image src={image} alt={title} fill className="object-cover" />
          )}
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="mb-2 text-sm text-zen-textMedium">
            {formattedDate} • Par {author}
          </div>
          <Heading className="text-xl font-semibold mb-2 text-zen-textDark group-hover:text-zen-accent transition-colors">
            {title}
          </Heading>
          <Text className="text-zen-textMedium line-clamp-3 mb-4 flex-grow">
            {description}
          </Text>
          <div className="text-zen-accent font-medium group-hover:underline">
            Lire l'article →
          </div>
        </div>
      </Container>
    </LocalizedClientLink>
  )
}

export default FeaturedArticles
