import type { Metadata } from "next"
import BlogPageClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Blog | Artículos sobre Desarrollo Web, Marketing Digital e IA",
  description: "Explora nuestros artículos y guías sobre desarrollo web, e-commerce, estrategias de marketing digital y la revolución de la inteligencia artificial en los negocios.",
  keywords: [
    "blog desarrollo web",
    "blog marketing digital",
    "noticias inteligencia artificial",
    "guias ecommerce",
    "seo argentina",
    "tendencias digitales",
    "vektra blog"
  ],
}

export default async function BlogPage() {
  const { blogPosts } = await readStorage()
  return <BlogPageClient initialPosts={blogPosts} />
}