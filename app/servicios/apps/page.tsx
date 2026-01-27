import type { Metadata } from "next"
import AppsPageClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Desarrollo de Apps Móviles en Argentina y Paraguay | Android, iOS y PWA",
  description: "Desarrollo de aplicaciones móviles nativas e híbridas para Android e iOS. PWA, React Native y Flutter para empresas de Buenos Aires, Córdoba, Rosario, Asunción y Ciudad del Este.",
  keywords: [
    "desarrollo de apps móviles",
    "aplicaciones móviles argentina",
    "aplicaciones móviles paraguay",
    "apps android",
    "apps ios",
    "pwa",
    "react native",
    "flutter",
    "desarrollo de apps buenos aires",
    "desarrollo de apps córdoba",
    "desarrollo de apps rosario",
    "desarrollo de apps asunción",
    "desarrollo de apps ciudad del este",
  ],
}

export default async function AppsPage() {
  const { testimonials } = await readStorage()
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile App Development",
    "provider": {
      "@type": "Organization",
      "name": "Vektra"
    },
    "areaServed": ["Argentina", "Paraguay"],
    "description": "Desarrollo de aplicaciones móviles nativas e híbridas para Android e iOS.",
    "url": "https://vektra.digital/servicios/apps"
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Cuánto cuesta desarrollar una app móvil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El costo depende de la complejidad, funcionalidades y plataformas (Android, iOS o ambas). Una app básica puede arrancar desde USD 3.000, mientras que apps más complejas con backend, integraciones y panel de admin pueden costar entre USD 8.000 y USD 25.000. Te damos un presupuesto detallado después de analizar tu proyecto."
        }
      },
      {
        "@type": "Question",
        "name": "Cuánto tiempo toma desarrollar una app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una app básica puede estar lista en 2-3 meses. Apps de complejidad media toman entre 4-6 meses, y proyectos grandes pueden llevar 6-12 meses. El tiempo exacto depende de las funcionalidades, integraciones y el feedback durante el proceso de desarrollo."
        }
      },
      {
        "@type": "Question",
        "name": "Es mejor una app nativa o híbrida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depende de tu proyecto. Las apps híbridas (React Native, Flutter) permiten desarrollar para Android e iOS con una sola base de código, reduciendo costos y tiempo. Las apps nativas ofrecen máximo rendimiento para apps muy exigentes (juegos, AR/VR). Para la mayoría de los proyectos, recomendamos React Native o Flutter."
        }
      },
      {
        "@type": "Question",
        "name": "Qué es una PWA y cuándo conviene?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una Progressive Web App es una web que funciona como app: se puede instalar, funciona offline y envía notificaciones. Conviene cuando quieres llegar a usuarios sin que descarguen desde las tiendas, o como primer paso antes de invertir en apps nativas. Es más económica y rápida de desarrollar."
        }
      },
      {
        "@type": "Question",
        "name": "Incluyen la publicación en Google Play y App Store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, nos encargamos de todo el proceso de publicación: creación de cuentas de desarrollador, preparación de assets (íconos, screenshots, descripciones), cumplimiento de políticas de cada tienda y optimización ASO para mejor visibilidad. Las cuentas de desarrollador tienen un costo único (Google Play USD 25, Apple USD 99/año)."
        }
      },
      {
        "@type": "Question",
        "name": "Puedo actualizar el contenido de mi app sin saber programar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, desarrollamos un panel de administración web donde podés gestionar usuarios, contenido, productos, notificaciones y ver estadísticas. Todo sin tocar código. Las actualizaciones de contenido se reflejan automáticamente en la app."
        }
      },
      {
        "@type": "Question",
        "name": "Qué pasa si necesito cambios después del lanzamiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, compatibilidad con nuevas versiones de Android/iOS, pequeños ajustes y soporte técnico. Para nuevas funcionalidades grandes, cotizamos por separado."
        }
      },
      {
        "@type": "Question",
        "name": "Trabajan con empresas en Argentina y Paraguay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, trabajamos con clientes en toda Argentina y Paraguay. Las reuniones son por videollamada (Meet, Zoom) y la comunicación fluye perfectamente. Ya hemos desarrollado apps para empresas en Buenos Aires, Córdoba, Rosario, Resistencia, Asunción y Ciudad del Este."
        }
      },
      {
        "@type": "Question",
        "name": "Qué tecnologías usan para el backend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usamos Node.js, Next.js o Python para el backend según las necesidades del proyecto. Para bases de datos: PostgreSQL, MongoDB o Firebase. La infraestructura puede estar en AWS, Google Cloud, Vercel o servidores dedicados según el volumen esperado."
        }
      },
      {
        "@type": "Question",
        "name": "Puedo integrar mi app con sistemas que ya tengo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Por supuesto. Desarrollamos APIs para conectar tu app con ERPs, CRMs, sistemas de facturación, e-commerce, pasarelas de pago (MercadoPago, Stripe), servicios de envío y cualquier sistema que tenga API disponible o permita integración."
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
      <AppsPageClient testimonials={testimonials} />
    </>
  )
}
