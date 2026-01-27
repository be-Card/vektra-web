import { Metadata } from "next"
import CalculadoraAdsClient from "./page-client"

export const metadata: Metadata = {
  title: "Calculadora de Meta Ads Argentina 2026 | Costo Real Facebook e Instagram Ads",
  description: "Calcula el costo real de tu inversión en Facebook Ads e Instagram Ads en Argentina. Incluye impuestos, IVA, IIBB por provincia y comparativa entre tarjetas bancarias, prepagas y pago local.",
  keywords: [
    "calculadora meta ads argentina",
    "costo facebook ads argentina",
    "impuestos publicidad digital argentina",
    "iva servicios digitales",
    "iibb publicidad digital",
    "calculadora instagram ads",
    "publicidad digital argentina 2026",
    "cuanto cuesta publicitar en facebook argentina",
    "impuesto pais meta ads",
    "costo real instagram ads argentina",
    "facebook ads con tarjeta argentina",
    "iva 21 publicidad digital",
    "ingresos brutos publicidad facebook",
    "meta ads impuestos por provincia",
    "pago local vs tarjeta meta ads",
  ],
  openGraph: {
    title: "Calculadora Meta Ads Argentina | Costo Real con Impuestos | Vektra",
    description: "Calcula el costo real de Facebook e Instagram Ads en Argentina incluyendo IVA, IIBB y todos los impuestos.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora Meta Ads Argentina | Vektra",
    description: "Conoce el costo real de tu publicidad en Facebook e Instagram con todos los impuestos.",
  },
  alternates: {
    canonical: "https://vektra.digital/herramientas/calculadora-ads",
    languages: {
      "en": "https://vektra.digital/en/tools/ads-calculator",
    },
  },
}

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Calculadora de Meta Ads Argentina",
  "description": "Herramienta gratuita para calcular el costo real de publicidad en Facebook e Instagram Ads en Argentina, incluyendo IVA, Ingresos Brutos y otros impuestos por provincia.",
  "url": "https://vektra.digital/herramientas/calculadora-ads",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "provider": {
    "@type": "Organization",
    "name": "Vektra Digital",
    "url": "https://vektra.digital"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué impuestos se pagan por publicidad en Facebook e Instagram en Argentina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En Argentina, al pagar con tarjeta de crédito/débito se aplica: IVA 21%, Impuesto PAIS (si aplica), percepción de Ganancias, e Ingresos Brutos según la provincia. Esto puede aumentar el costo hasta un 60-80% sobre el valor original."
      }
    },
    {
      "@type": "Question",
      "name": "¿Conviene pagar Meta Ads con tarjeta o con pago local?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El pago local de Meta permite pagar en pesos argentinos sin los impuestos de tarjeta internacional, resultando generalmente más económico. Sin embargo, el tipo de cambio puede variar. Usa nuestra calculadora para comparar ambas opciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta realmente publicitar en Facebook Argentina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El costo real depende de tu método de pago y provincia. Si invertís USD 100 en ads, con tarjeta podés terminar pagando entre $160.000 y $200.000 ARS según los impuestos. Con pago local, el costo suele ser menor."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es el Ingresos Brutos en publicidad digital?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ingresos Brutos (IIBB) es un impuesto provincial que se aplica sobre servicios digitales del exterior. Cada provincia tiene una alícuota diferente, que puede ir del 2% al 5%. Se cobra como percepción al momento del pago."
      }
    }
  ]
}

export default function CalculadoraAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CalculadoraAdsClient />
    </>
  )
}
