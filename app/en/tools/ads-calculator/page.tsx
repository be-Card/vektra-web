
import { Metadata } from "next"
import CalculadoraAdsClient from "./page-client"

// Metadata for SEO
export const metadata: Metadata = {
  title: "Meta Ads Calculator Argentina 2026 | Real Cost Facebook and Instagram Ads",
  description: "Calculate the real cost of your investment in Facebook Ads and Instagram Ads in Argentina. Includes taxes, VAT, IIBB by province and comparison between bank cards, prepaid and local payment.",
  keywords: "meta ads calculator argentina, facebook ads cost argentina, digital advertising taxes argentina, digital services vat, digital advertising iibb, instagram ads calculator, digital advertising argentina 2026",
}

export default function AdsCalculatorPage() {
  return <CalculadoraAdsClient />
}
