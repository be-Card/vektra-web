import type { Metadata } from "next"
import MarketingDigitalClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Agencia de Marketing Digital en Argentina y Paraguay | Google Ads y Meta Ads",
  description: "Agencia de marketing digital experta en Google Ads, Meta Ads y TikTok Ads. Estrategias de performance y ventas para empresas en Argentina y Paraguay.",
  keywords: [
    "agencia de marketing digital",
    "marketing digital argentina",
    "marketing digital paraguay",
    "google ads argentina",
    "google ads paraguay",
    "meta ads",
    "facebook ads",
    "instagram ads",
    "tiktok ads",
    "agencia google ads",
    "publicidad online",
    "agencia de marketing buenos aires",
    "agencia de marketing asuncion",
    "email marketing",
    "seo local",
  ],
  openGraph: {
    title: "Marketing Digital en Argentina y Paraguay | Vektra",
    description: "Maximizamos tus ventas con estrategias de marketing digital enfocadas en resultados. Google Ads, Meta Ads y más.",
  },
}

export default async function MarketingDigitalPage() {
  const { testimonials } = await readStorage()
  
  return <MarketingDigitalClient testimonials={testimonials} />
}
