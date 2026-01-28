import type { Metadata } from "next"
import UIUXDesignClient from "./page-client"
import { readStorage } from "@/lib/storage"
import { allProjects as englishProjects } from "@/app/en/portfolio/data"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Professional UI/UX Design Worldwide | Vektra",
  description: "User interface and experience design service. We create intuitive, attractive, and user-centered designs with UX research, prototyping, and Design Systems for clients worldwide.",
  keywords: [
    // Main keywords
    "ui design services",
    "ux design worldwide",
    "interface design",
    "user experience",
    // Long tail keywords
    "professional ui ux design",
    "web interface designer",
    "user experience design services",
    "interactive prototyping figma",
    "design system for companies",
    "ux website redesign",
    "user interface design services",
    "ux user research",
    "wireframes and web prototypes",
    "mobile app ui design",
    "ux consulting for startups",
    "ux conversion improvement",
    "figma design system experts",
    "ux audit services",
    "ui design for saas products",
    "ecommerce user experience optimization",
    "mobile app interface redesign",
  ],
  openGraph: {
    title: "Professional UI/UX Design | Vektra Digital",
    description: "Designs that fall in love and convert. Intuitive user-centered interfaces with research, prototyping, and Design Systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional UI/UX Design | Vektra",
    description: "We create digital experiences centered on the user.",
  },
  alternates: {
    canonical: "https://vektra.digital/en/services/ui-ux-design",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Professional UI/UX Design",
  "description": "Complete interface and user experience design service including UX research, interaction design, visual UI design, responsive design, Design Systems, and interactive prototyping.",
  "provider": {
    "@type": "Organization",
    "name": "Vektra Digital",
    "url": "https://vektra.digital/en"
  },
  "areaServed": "World",
  "serviceType": "UI/UX Design",
  "offers": [
    {
      "@type": "Offer",
      "name": "Landing Page Design",
      "price": "150000",
      "priceCurrency": "ARS"
    },
    {
      "@type": "Offer",
      "name": "Full Website",
      "price": "400000",
      "priceCurrency": "ARS"
    }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does UI/UX design include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It includes user research, information architecture, wireframes, visual interface design, interactive prototypes, and documentation for development. The scope depends on the chosen plan."
      }
    },
    {
      "@type": "Question",
      "name": "What tools do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We mainly use Figma for design and prototyping. We also work with tools like Maze for testing and Notion for documentation."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a UI/UX design project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A landing page takes approximately 1-2 weeks. A complete website between 3-4 weeks. Product projects can take 2-3 months depending on complexity."
      }
    },
    {
      "@type": "Question",
      "name": "Does the design include development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, design and development are separate services. We can quote both or just the design if you already have a development team."
      }
    },
    {
      "@type": "Question",
      "name": "Do you redesign existing sites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we perform complete or partial redesigns. We analyze your current site, identify UX problems, and propose data-driven improvements."
      }
    },
    {
      "@type": "Question",
      "name": "What is the work process like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We start with a discovery meeting, followed by research and wireframes. Then we move to visual design with iterative reviews, and finish with the prototype and handoff."
      }
    }
  ]
}

export default async function UIUXDesignPage() {
  const { testimonials } = await readStorage()
  const projects = englishProjects.filter(p => p.category === 'diseno-ui-ux' || p.category === 'diseno-web').slice(0, 4)

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
      <UIUXDesignClient projects={projects} testimonials={testimonials} />
    </>
  )
}
