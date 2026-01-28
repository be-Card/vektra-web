import type { Metadata } from "next"
import WebMaintenanceClient from "./page-client"
import { readStorage } from "@/lib/storage"
import { allProjects as englishProjects } from "@/app/en/portfolio/data"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Professional Web Maintenance Worldwide | Vektra",
  description: "Professional web maintenance service. WordPress updates, daily backups, anti-malware security, speed optimization, and 24/7 technical support for your website worldwide.",
  keywords: [
    // Main keywords
    "web maintenance services",
    "web maintenance worldwide",
    "wordpress maintenance",
    "website maintenance",
    // Long tail keywords
    "monthly web maintenance service",
    "professional website maintenance",
    "wordpress plugin updates",
    "daily web backups",
    "anti-malware web security",
    "wordpress speed optimization",
    "24/7 technical support",
    "woocommerce maintenance",
    "sme web maintenance",
    "affordable web maintenance plans",
    "automatic website backup",
    "wordpress hacker protection",
    "wordpress emergency support",
    "woocommerce maintenance plans",
    "website speed optimization service",
    "wordpress malware removal service",
    "corporate website maintenance packages",
  ],
  openGraph: {
    title: "Professional Web Maintenance | Vektra Digital",
    description: "Your website always updated, secure and fast. Web maintenance plans starting from $15,000/month with backups, security and support included.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Maintenance | Vektra",
    description: "Web maintenance service: updates, security, backups and technical support.",
  },
  alternates: {
    canonical: "https://vektra.digital/en/services/web-maintenance",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional Web Maintenance",
  "description": "Complete web maintenance service including WordPress, plugin and theme updates, daily backups, anti-malware security, speed optimization and technical support.",
  "provider": {
    "@type": "Organization",
    "name": "Vektra Digital",
    "url": "https://vektra.digital/en"
  },
  "areaServed": "World",
  "serviceType": "Web Maintenance",
  "offers": [
    {
      "@type": "Offer",
      "name": "Basic Plan",
      "price": "15000",
      "priceCurrency": "ARS",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "15000",
        "priceCurrency": "ARS",
        "unitCode": "MON",
        "billingDuration": "P1M"
      }
    },
    {
      "@type": "Offer",
      "name": "Professional Plan",
      "price": "30000",
      "priceCurrency": "ARS",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "30000",
        "priceCurrency": "ARS",
        "unitCode": "MON",
        "billingDuration": "P1M"
      }
    },
    {
      "@type": "Offer",
      "name": "Enterprise Plan",
      "price": "60000",
      "priceCurrency": "ARS",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "60000",
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
      "name": "What does the web maintenance service include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It includes WordPress, plugin and theme updates, periodic backups, security monitoring, speed optimization, and technical support according to the chosen plan."
      }
    },
    {
      "@type": "Question",
      "name": "How often are backups performed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the plan: weekly in the Basic plan, daily in the Professional plan, and every 6 hours in the Enterprise plan. All backups are securely stored in the cloud."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if my website is hacked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your website suffers an attack, we restore the last clean backup, remove the malware, reinforce security, and inform you of the actions taken at no additional cost."
      }
    },
    {
      "@type": "Question",
      "name": "Can I change plans at any time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can upgrade or downgrade whenever you need. The change applies in the next billing period."
      }
    },
    {
      "@type": "Question",
      "name": "Does maintenance include design changes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional and Enterprise plans include hours for minor changes. Complete redesigns or new functionalities are quoted separately."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work only with WordPress?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mainly WordPress and WooCommerce, but we also offer maintenance for websites developed with Next.js, React and other technologies."
      }
    }
  ]
}

export default async function WebMaintenancePage() {
  const { testimonials } = await readStorage()
  const projects = englishProjects.filter(p => p.category === 'mantenimiento-web' || p.category === 'diseno-web').slice(0, 4)

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
      <WebMaintenanceClient projects={projects} testimonials={testimonials} />
    </>
  )
}
