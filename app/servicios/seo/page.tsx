import type { Metadata } from "next"
import SEOPageClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "SEO en Argentina y Paraguay | Posicionamiento Web y SEO Local",
  description: "Servicio profesional de SEO y posicionamiento web en Argentina y Paraguay. Estrategias SEO local en Buenos Aires, Córdoba, Rosario, Asunción y Ciudad del Este.",
  keywords: [
    "seo argentina",
    "seo paraguay",
    "posicionamiento web argentina",
    "posicionamiento web paraguay",
    "seo local",
    "seo local buenos aires",
    "seo local córdoba",
    "seo local rosario",
    "seo asunción",
    "seo ciudad del este",
    "agencia seo argentina",
    "agencia seo paraguay",
    "consultoría seo",
    "auditoría seo",
    "linkbuilding",
    "seo ecommerce",
    "seo tienda online",
    "seo para ia",
    "seo chatgpt",
    "seo perplexity",
    "seo gemini",
  ],
  openGraph: {
    title: "SEO en Argentina y Paraguay | Vektra",
    description: "Posicionamos tu negocio en Google y buscadores de IA con SEO local en Argentina y Paraguay.",
  },
}

export default async function SEOPage() {
  const { testimonials } = await readStorage()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SEO & Web Positioning",
    "provider": {
      "@type": "Organization",
      "name": "Vektra"
    },
    "areaServed": ["Argentina", "Paraguay"],
    "description": "Servicio profesional de SEO y posicionamiento web en Argentina y Paraguay.",
    "url": "https://vektra.digital/servicios/seo"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo tarda en verse resultados del SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El SEO es una estrategia a mediano-largo plazo. Generalmente se empiezan a ver mejoras entre 3-6 meses, aunque depende de la competencia del sector, el estado actual del sitio y las palabras clave objetivo. Las mejoras técnicas pueden tener impacto más rápido, mientras que el posicionamiento de keywords competitivas toma más tiempo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el SEO para Inteligencia Artificial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es la optimización de contenido para aparecer en las respuestas de buscadores IA como ChatGPT, Perplexity, Gemini y Copilot. Estos sistemas buscan información en la web para generar respuestas, y con las técnicas adecuadas podemos hacer que tu negocio sea citado como fuente. Es el futuro del posicionamiento web."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto cuesta el servicio de SEO en Argentina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo del SEO en Argentina varía según el tamaño del sitio, la competencia del sector y los objetivos. Ofrecemos planes desde servicios básicos hasta estrategias completas. Contactanos para una cotización personalizada basada en tus necesidades específicas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Hacen SEO para tiendas online y e-commerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, tenemos amplia experiencia en SEO para e-commerce en Argentina y Paraguay. Optimizamos tiendas en WooCommerce, Shopify y Tiendanube. Trabajamos categorías, productos, fichas técnicas, y estrategias específicas para aumentar las ventas orgánicas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué diferencia hay entre SEO y Google Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Google Ads son anuncios pagos que aparecen inmediatamente pero dejan de mostrarse cuando dejas de pagar. El SEO es posicionamiento orgánico: toma más tiempo pero los resultados son duraderos y no pagas por cada clic. Lo ideal es combinar ambas estrategias."
        }
      },
      {
        "@type": "Question",
        "name": "¿Trabajan con empresas de Paraguay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, brindamos servicios de SEO tanto en Argentina como en Paraguay. Tenemos clientes en Asunción, Ciudad del Este, Encarnación y otras ciudades. Trabajamos de forma 100% remota con reuniones por videollamada."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué incluye la auditoría SEO gratuita?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La auditoría inicial incluye análisis de la situación actual de tu web, revisión de errores técnicos básicos, análisis de palabras clave principales, revisión de competencia y recomendaciones iniciales. Es sin compromiso y te ayuda a entender dónde estás parado."
        }
      },
      {
        "@type": "Question",
        "name": "¿Garantizan el primer puesto en Google?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ninguna agencia seria puede garantizar el primer puesto ya que Google actualiza constantemente su algoritmo. Lo que sí garantizamos es trabajo profesional, estrategias probadas, transparencia total y mejoras medibles en tu posicionamiento. Nuestros resultados hablan por sí solos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo miden los resultados del SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utilizamos herramientas profesionales como Google Analytics, Google Search Console, SEMrush y Ahrefs. Medimos posiciones de keywords, tráfico orgánico, impresiones, clics, conversiones y ROI. Entregamos informes mensuales detallados y fáciles de entender."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el SEO local y por qué es importante?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El SEO local optimiza tu presencia para búsquedas geográficas como 'restaurante en resistencia' o 'abogado cerca de mí'. Incluye Google My Business, reseñas, citaciones locales y contenido geolocalizado. Es fundamental para negocios con ubicación física o que atienden áreas específicas."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SEOPageClient testimonials={testimonials} />
    </>
  )
}
