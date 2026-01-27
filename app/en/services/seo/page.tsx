import type { Metadata } from "next"
import SEOPageClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const metadata: Metadata = {
  title: "SEO Agency Worldwide | Rank on Google & AI Search Engines",
  description: "Global SEO agency. We position your website on Google, ChatGPT, Perplexity, and Gemini. Local SEO, Link Building, and content strategies for international markets.",
  keywords: ["seo", "web positioning", "seo agency", "seo for ai", "chatgpt seo", "global seo", "link building"],
}

export default async function SEOPage() {
  const { testimonials: allTestimonials } = await readStorage()
  const testimonials = allTestimonials.filter(
    (t) => t.category === "seo" && t.language === "en"
  )

  return <SEOPageClient testimonials={testimonials} />
}