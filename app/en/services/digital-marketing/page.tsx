import type { Metadata } from "next"
import DigitalMarketingClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const metadata: Metadata = {
  title: "Digital Marketing Agency Worldwide | Google Ads & Meta Ads",
  description: "Global digital marketing agency. Specialists in Google Ads, Meta Ads (Facebook/Instagram), TikTok Ads, and SEO. We boost your business worldwide.",
  keywords: ["digital marketing", "google ads", "meta ads", "tiktok ads", "seo", "marketing agency", "global marketing"],
}

export default async function DigitalMarketingPage() {
  const { testimonials: allTestimonials } = await readStorage()
  const testimonials = allTestimonials.filter(
    (t) => t.category === "marketing-digital" && t.language === "en"
  )

  return <DigitalMarketingClient testimonials={testimonials} />
}