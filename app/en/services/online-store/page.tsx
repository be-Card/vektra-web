import type { Metadata } from "next"
import OnlineStoreClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const metadata: Metadata = {
  title: "Online Store Development | Sell Worldwide",
  description: "Create your professional online store and sell worldwide. E-commerce development with payment gateways, shipping management, and mobile design.",
  keywords: ["online store", "ecommerce", "sell online", "shopify", "woocommerce", "web development"],
}

export default async function OnlineStorePage() {
  const { testimonials: allTestimonials } = await readStorage()
  const testimonials = allTestimonials.filter(
    (t) => t.category === "tienda-online" && t.language === "en"
  )

  return <OnlineStoreClient testimonials={testimonials} />
}