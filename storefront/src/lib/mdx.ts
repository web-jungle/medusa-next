import fs from "fs"
import matter from "gray-matter"
import path from "path"

// Chemin vers le dossier contenant les articles MDX
const contentDir = path.join(process.cwd(), "src/content/blog")

export interface BlogPost {
  slug: string
  frontMatter: {
    title: string
    description: string
    date: string
    author: string
    image?: string
    tags?: string[]
    [key: string]: any
  }
  content: string
}

// Récupérer tous les slugs des articles
export function getAllPostSlugs() {
  // Vérifier si le dossier existe
  if (!fs.existsSync(contentDir)) {
    return []
  }

  // Récupérer les fichiers
  const fileNames = fs.readdirSync(contentDir)
  return fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.mdx$/, ""),
        },
      }
    })
}

// Récupérer tous les articles avec leurs métadonnées
export function getAllPosts(): BlogPost[] {
  // Vérifier si le dossier existe
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const fileNames = fs.readdirSync(contentDir)

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      // Extraire le slug du nom de fichier
      const slug = fileName.replace(/\.mdx$/, "")

      // Lire le contenu MDX
      const fullPath = path.join(contentDir, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")

      // Utiliser gray-matter pour parser le frontmatter
      const { data, content } = matter(fileContents)

      return {
        slug,
        frontMatter: data as BlogPost["frontMatter"],
        content,
      }
    })

  // Trier les articles par date
  return allPostsData.sort((a, b) => {
    if (a.frontMatter.date < b.frontMatter.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Récupérer les articles marqués pour être affichés sur la page d'accueil
export function getHomePagePosts(): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.frontMatter.onHomePage === true)
}

// Récupérer un article spécifique par son slug
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    // Vérifier si le dossier existe
    if (!fs.existsSync(contentDir)) {
      return null
    }

    const fullPath = path.join(contentDir, `${slug}.mdx`)

    // Vérifier si le fichier existe
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Utiliser gray-matter pour parser le frontmatter
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontMatter: data as BlogPost["frontMatter"],
      content,
    }
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error)
    return null
  }
}
