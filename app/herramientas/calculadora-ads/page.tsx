import { Metadata } from "next"
import CalculadoraAdsClient from "./page-client"

// Metadata for SEO
export const metadata: Metadata = {
  title: "Calculadora de Meta Ads Argentina 2026 | Costo Real Facebook e Instagram Ads",
  description: "Calcula el costo real de tu inversión en Facebook Ads e Instagram Ads en Argentina. Incluye impuestos, IVA, IIBB por provincia y comparativa entre tarjetas bancarias, prepagas y pago local.",
  keywords: "calculadora meta ads argentina, costo facebook ads argentina, impuestos publicidad digital argentina, iva servicios digitales, iibb publicidad digital, calculadora instagram ads, publicidad digital argentina 2026",
}

export default function CalculadoraAdsPage() {
  return <CalculadoraAdsClient />
}
