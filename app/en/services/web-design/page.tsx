import type { Metadata } from "next"
import DisenoWebClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const metadata: Metadata = {
  title: "Web Design and Development Worldwide | Custom Websites",
  description: "Professional web design and development services for businesses worldwide. Custom websites, e-commerce, and digital solutions focused on results.",
  keywords: ["web design", "web development", "custom websites", "ecommerce", "seo", "worldwide web design"],
}

export default async function DisenoWebPage() {
  const { testimonials: allTestimonials } = await readStorage()
  const testimonials = allTestimonials.filter(
    (t) => t.category === "diseno-web" && t.language === "en"
  )

  return <DisenoWebClient testimonials={testimonials} />
}