import { getAllPosts } from "@lib/mdx"
import { Heading, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Protection Anti-Ondes | Vêtements Zen",
  description:
    "Découvrez nos articles sur la protection contre les ondes électromagnétiques et leurs effets sur la santé.",
}

export default async function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="py-12 bg-zen-bg min-h-screen">
      <div className="content-container">
        <div className="mb-12 text-center">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-zen-darkGreen font-semibold mb-4"
          >
            Blog Anti-Ondes
          </Heading>
          <Text className="text-ui-fg-subtle max-w-2xl mx-auto">
            Découvrez nos articles sur les dangers des ondes électromagnétiques
            et comment nos vêtements de protection peuvent vous aider à
            maintenir un mode de vie plus sain.
          </Text>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="bg-zen-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <a href={`/blog/${post.slug}`} className="block">
                  {post.frontMatter.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.frontMatter.image}
                        alt={post.frontMatter.title}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.frontMatter.tags &&
                        post.frontMatter.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-zen-lightGreen text-zen-darkGreen px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>

                    <h3 className="text-xl font-semibold text-zen-darkGreen mb-2">
                      {post.frontMatter.title}
                    </h3>

                    <p className="text-ui-fg-subtle text-sm mb-4 line-clamp-2">
                      {post.frontMatter.description}
                    </p>

                    <div className="text-sm text-ui-fg-subtle">
                      {new Date(post.frontMatter.date).toLocaleDateString(
                        "fr-FR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Text className="text-ui-fg-subtle">
              Aucun article n'est disponible pour le moment. Revenez bientôt!
            </Text>
          </div>
        )}
      </div>
    </div>
  )
}
