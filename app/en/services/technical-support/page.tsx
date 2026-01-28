import type { Metadata } from "next"
import TechnicalSupportClient from "./page-client"
import { readStorage } from "@/lib/storage"
import { allProjects as englishProjects } from "@/app/en/portfolio/data"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Professional Web Technical Support Worldwide | Vektra",
  description: "Professional web technical support service. Error resolution, remote assistance, guaranteed fast response, and team of experts available for your website worldwide.",
  keywords: [
    // Main keywords
    "web technical support services",
    "web technical support worldwide",
    "wordpress support",
    "professional web help",
    // Long tail keywords
    "urgent website technical support",
    "wordpress error resolution",
    "remote website assistance",
    "woocommerce technical support",
    "fix website errors",
    "my website is not working help",
    "24 hours web technical support",
    "hacked website repair",
    "web support for companies",
    "website technical service",
    "solve wordpress problems",
    "wordpress experts worldwide",
    "fix wordpress critical error",
    "remove malware wordpress",
    "woocommerce checkout problems fix",
    "website migration service",
    "urgent web developer support",
  ],
  openGraph: {
    title: "Professional Web Technical Support | Vektra Digital",
    description: "Problems with your web? We solve them. Team of experts with guaranteed fast response.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Technical Support | Vektra",
    description: "Web error resolution, remote assistance, and professional technical support.",
  },
  alternates: {
    canonical: "https://vektra.digital/en/services/technical-support",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Web Technical Support",
  "description": "Technical support service for websites with error resolution, remote assistance, multichannel support, and a team of experts with experience in WordPress, WooCommerce, Next.js, and more.",
  "provider": {
    "@type": "Organization",
    "name": "Vektra Digital",
    "url": "https://vektra.digital/en"
  },
  "areaServed": "World",
  "serviceType": "Technical Support",
  "offers": [
    {
      "@type": "Offer",
      "name": "Per Incident Support",
      "price": "8000",
      "priceCurrency": "ARS",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "8000",
        "priceCurrency": "ARS",
        "unitCode": "HUR"
      }
    },
    {
      "@type": "Offer",
      "name": "10 Hours Pack",
      "price": "65000",
      "priceCurrency": "ARS"
    },
    {
      "@type": "Offer",
      "name": "Unlimited Support",
      "price": "45000",
      "priceCurrency": "ARS",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "45000",
        "priceCurrency": "ARS",
        "unitCode": "MON",
        "billingDuration": "P1M"
      }
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does per incident support work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You contact us when you have a problem, we evaluate the complexity and give you an estimated budget in hours. Once approved, we work on the solution and charge you only for the hours used."
      }
    },
    {
      "@type": "Question",
      "name": "What kind of problems can you solve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We solve code errors, plugin problems, security flaws, speed issues, database errors, email problems, and any technical incident related to your website."
      }
    },
    {
      "@type": "Question",
      "name": "What is the response time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the plan: 24-48 hours for specific incidents, 12 hours for Hours Pack, and less than 4 hours for Unlimited Support. In critical emergencies, we respond in minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Does support include design changes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Technical support covers troubleshooting and small adjustments. For design changes or new functionalities, they are budgeted as additional development."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work on weekends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Unlimited Support plan includes 24/7 coverage for emergencies. The other plans have coverage from Monday to Friday during business hours."
      }
    },
    {
      "@type": "Question",
      "name": "Can I cancel whenever I want?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The monthly plan can be canceled at any time. The Hours Pack does not expire but is non-refundable once purchased."
      }
    }
  ]
}

export default async function TechnicalSupportPage() {
  const { testimonials } = await readStorage()
  const projects = englishProjects.filter(p => p.category === 'soporte-tecnico' || p.category === 'diseno-web').slice(0, 4)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <TechnicalSupportClient projects={projects} testimonials={testimonials} />
    </>
  )
}
