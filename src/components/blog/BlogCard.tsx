"use client"

import { BlogPost } from "@lib/mdx"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { motion } from "framer-motion"
import Image from "next/image"

interface BlogCardProps {
  post: Omit<BlogPost, "content">
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontMatter } = post
  const { title, description, date, image, tags } = frontMatter

  // Formater la date
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-zen-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <LocalizedClientLink href={`/blog/${slug}`} className="block">
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags &&
              tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-zen-lightGreen text-zen-darkGreen px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
          </div>

          <h3 className="text-xl font-semibold text-zen-darkGreen mb-2">
            {title}
          </h3>

          <p className="text-ui-fg-subtle text-sm mb-4 line-clamp-2">
            {description}
          </p>

          <div className="text-sm text-ui-fg-subtle">{formattedDate}</div>
        </div>
      </LocalizedClientLink>
    </motion.div>
  )
}
