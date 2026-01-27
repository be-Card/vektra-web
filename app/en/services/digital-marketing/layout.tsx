import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Agency Worldwide | Google Ads and Meta Ads",
  description: "Digital marketing agency serving clients worldwide with campaigns in Google Ads, Meta Ads and TikTok Ads to generate leads and sales.",
  keywords: [
    "digital marketing agency",
    "digital marketing worldwide",
    "google ads agency",
    "google ads experts",
    "meta ads worldwide",
    "meta ads specialists",
    "tiktok ads",
    "digital advertising",
    "google ads campaigns",
    "meta ads campaigns",
    "ad agency",
  ],
  openGraph: {
    title: "Digital Marketing Agency Worldwide",
    description: "Specialists in Google Ads, Meta Ads and TikTok Ads focused on results for clients worldwide.",
  },
}

export default function MarketingDigitalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
