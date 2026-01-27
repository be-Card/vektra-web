import type { Metadata } from "next"
import AppsPageClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const metadata: Metadata = {
  title: "Mobile App Development Worldwide | Android, iOS and PWA",
  description: "Native and hybrid mobile app development for Android and iOS. PWA, React Native and Flutter for companies worldwide. Global solutions for your business.",
  keywords: [
    "mobile app development",
    "android apps",
    "ios apps",
    "pwa",
    "react native",
    "flutter",
    "global app development",
    "mobile solutions",
  ],
  openGraph: {
    title: "Mobile App Development Worldwide | Vektra",
    description: "Professional mobile apps with React Native and Flutter for companies worldwide.",
  },
}

export default async function AppsPage() {
  const { testimonials: allTestimonials } = await readStorage()
  const testimonials = allTestimonials.filter(
    (t) => t.category === "apps" && t.language === "en"
  )

  return <AppsPageClient testimonials={testimonials} />
}