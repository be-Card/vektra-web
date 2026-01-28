import type { Metadata } from "next"
import AutomationClient from "./page-client"
import { readStorage } from "@/lib/storage"
import { allProjects as englishProjects } from "@/app/en/portfolio/data"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Business Process Automation Worldwide | Vektra",
  description: "Business process automation services. Automated workflows, system integration, bots and assistants with Make, Zapier and custom development for companies worldwide.",
  keywords: [
    // Main keywords
    "process automation services",
    "business automation worldwide",
    "workflow automation",
    "system integration",
    // Long tail keywords
    "repetitive task automation",
    "crm email marketing integration",
    "zapier make automation experts",
    "business process automation",
    "business bots",
    "invoicing automation",
    "api systems integration",
    "no-code automation",
    "rpa solutions",
    "sme automation",
    "n8n automated workflows",
    "digital transformation businesses",
    "make com automation agency",
    "zapier experts worldwide",
    "automate whatsapp messages business",
    "custom crm integration development",
    "business process optimization services",
  ],
  openGraph: {
    title: "Process Automation | Vektra Digital",
    description: "Automate your business and multiply your time. We eliminate repetitive tasks with intelligent workflows.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Process Automation | Vektra",
    description: "Automated workflows and system integration for your company.",
  },
  alternates: {
    canonical: "https://vektra.digital/en/services/automation",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business Process Automation",
  "description": "Process automation service including workflow design, system integration, bots and assistants, no-code automation with Make and Zapier, scheduled processes and continuous optimization.",
  "provider": {
    "@type": "Organization",
    "name": "Vektra Digital",
    "url": "https://vektra.digital/en"
  },
  "areaServed": "World",
  "serviceType": "Business Process Automation",
  "offers": [
    {
      "@type": "Offer",
      "name": "Simple Automation",
      "price": "80000",
      "priceCurrency": "ARS"
    },
    {
      "@type": "Offer",
      "name": "Advanced Automation",
      "price": "200000",
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
      "name": "What kind of processes can be automated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Almost any repetitive task: email sending, report generation, data synchronization, notifications, invoicing, inventory management, social media posting, and much more."
      }
    },
    {
      "@type": "Question",
      "name": "What tools do you use for automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mainly Make (Integromat), Zapier and n8n for no-code automations. For more complex projects, we develop custom solutions with Python, Node.js and APIs."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to implement an automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple automations are implemented in 1-2 weeks. More complex projects can take 4-8 weeks depending on the number of systems to integrate."
      }
    },
    {
      "@type": "Question",
      "name": "Are there additional costs for automation tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Automation platforms have their own plans. We advise you on the best option according to your volume. Many clients start with free plans."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if something fails in the automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We configure alerts and monitoring to detect problems. We have contingency plans and support to resolve incidents quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Can I modify the automations later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, automations are flexible. We train you to make simple changes, and we are available for more complex modifications."
      }
    }
  ]
}

export default async function AutomationPage() {
  const { testimonials } = await readStorage()
  const projects = englishProjects.filter(p => p.category === 'automatizacion' || p.category === 'agentes-ia').slice(0, 4)

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
      <AutomationClient projects={projects} testimonials={testimonials} />
    </>
  )
}
