import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Online Stores Worldwide | WooCommerce, Shopify and Tiendanube",
  description: "Professional E-commerce development worldwide with WooCommerce, Shopify and Tiendanube. Payments with Stripe, PayPal, integrated shipping and SEO to sell 24/7.",
  keywords: [
    "online store worldwide",
    "ecommerce worldwide",
    "woocommerce",
    "shopify",
    "tiendanube",
    "stripe",
    "paypal",
    "payment gateways",
    "ecommerce shipping",
  ],
  openGraph: {
    title: "Online Stores Worldwide | Vektra",
    description: "Professional online stores with WooCommerce, Shopify and Tiendanube to sell worldwide.",
  },
}

export default function OnlineStoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
