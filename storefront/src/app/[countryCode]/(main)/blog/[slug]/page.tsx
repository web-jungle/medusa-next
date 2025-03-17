import { getAllPostSlugs, getPostBySlug } from "@lib/mdx"
import { Text } from "@medusajs/ui"
import Markdown from "markdown-to-jsx"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
    countryCode: string
  }
}

// Générer les métadonnées dynamiques pour chaque article
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Article non trouvé - Protection Anti-Ondes",
      description: "L'article que vous recherchez n'existe pas.",
    }
  }

  return {
    title: `${post.frontMatter.title} - Protection Anti-Ondes`,
    description: post.frontMatter.description,
  }
}

// Générer tous les chemins statiques pour les articles
export async function generateStaticParams() {
  return getAllPostSlugs()
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  // Formater la date
  const formattedDate = new Date(post.frontMatter.date).toLocaleDateString(
    "fr-FR",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  return (
    <article className="py-12 bg-zen-bg min-h-screen">
      <div className="content-container max-w-4xl mx-auto">
        {/* En-tête de l'article */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-zen-darkGreen mb-4">
            {post.frontMatter.title}
          </h1>

          <Text className="text-ui-fg-subtle mb-6 max-w-2xl mx-auto">
            {post.frontMatter.description}
          </Text>

          <div className="flex items-center justify-center gap-4 text-sm text-ui-fg-subtle">
            <span>{formattedDate}</span>
            <span>•</span>
            <span>Par {post.frontMatter.author}</span>
          </div>
        </div>

        {/* Image principale */}
        {post.frontMatter.image && (
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg mb-10">
            <img
              src={post.frontMatter.image}
              alt={post.frontMatter.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        {/* Tags */}
        {post.frontMatter.tags && post.frontMatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.frontMatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-zen-lightGreen text-zen-darkGreen px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Contenu de l'article */}
        <div className="bg-zen-white p-6 md:p-10 rounded-lg shadow-sm prose prose-zinc max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
    </article>
  )
}
