import type { Metadata } from "next"
import BlogPageEnClient from "./page-client"

export const metadata: Metadata = {
  title: "Blog | Web Development, Digital Marketing & AI Articles",
  description: "Explore our articles and guides on web development, e-commerce, digital marketing strategies, and the AI revolution in business.",
  keywords: [
    "web development blog",
    "digital marketing blog",
    "artificial intelligence news",
    "ecommerce guides",
    "seo tips",
    "digital trends",
    "vektra blog"
  ],
}

export default function BlogPageEn() {
  return <BlogPageEnClient />
}