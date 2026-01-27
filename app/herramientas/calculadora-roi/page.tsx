import { Metadata } from "next"
import CalculadoraROIClient from "./page-client"

// Metadata for SEO
export const metadata: Metadata = {
  title: "Calculadora de ROI Marketing y Publicidad | Fórmula Rentabilidad 2026",
  description: "Calcula el Retorno de Inversión (ROI) de tus campañas de marketing y publicidad. Herramienta gratuita para medir la rentabilidad de tu negocio en Argentina y Paraguay.",
  keywords: "calculadora roi marketing, formula roi, retorno de inversion, calcular rentabilidad publicidad, kpis marketing, calculadora roas, roi vs roas",
  alternates: {
    canonical: "/herramientas/calculadora-roi",
    languages: {
      "en": "/en/tools/roi-calculator",
    },
  },
}

export default function CalculadoraROIPage() {
  return <CalculadoraROIClient />
}
