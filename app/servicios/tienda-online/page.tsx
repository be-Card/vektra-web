import type { Metadata } from "next"
import TiendaOnlineClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Diseño de Tiendas Online en Argentina y Paraguay | E-commerce y Ventas",
  description: "Desarrollo de tiendas online y e-commerce en Argentina y Paraguay. Vende tus productos 24/7 con WooCommerce, Shopify o Tiendanube. Pasarelas de pago y envíos integrados.",
  keywords: [
    "tienda online argentina",
    "tienda online paraguay",
    "ecommerce argentina",
    "ecommerce paraguay",
    "diseño tienda online",
    "desarrollo ecommerce",
    "woocommerce",
    "shopify",
    "tiendanube",
    "vender online",
    "carrito de compras",
    "pasarela de pagos",
    "tienda online buenos aires",
    "tienda online asuncion",
    "tienda online cordoba",
  ],
  openGraph: {
    title: "Diseño de Tiendas Online en Argentina y Paraguay | Vektra",
    description: "Vende tus productos 24/7 con una tienda online profesional. Integración con pagos y envíos.",
  },
}

export default async function TiendaOnlinePage() {
  const { testimonials } = await readStorage()
  
  return <TiendaOnlineClient testimonials={testimonials} />
}
