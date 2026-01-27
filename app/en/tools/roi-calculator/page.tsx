import { Metadata } from "next"
import ROICalculatorClient from "./page-client"

// Metadata for SEO
export const metadata: Metadata = {
  title: "Marketing ROI Calculator | Profitability Formula 2026",
  description: "Calculate the Return on Investment (ROI) of your marketing and advertising campaigns. Free tool to measure your business profitability worldwide.",
  keywords: "marketing roi calculator, roi formula, return on investment, calculate ad profitability, marketing kpis, roas calculator, roi vs roas",
  alternates: {
    canonical: "/en/tools/roi-calculator",
    languages: {
      "es": "/herramientas/calculadora-roi",
    },
  },
}

export default function ROICalculatorPage() {
  return <ROICalculatorClient />
}
