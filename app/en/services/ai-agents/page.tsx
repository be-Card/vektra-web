import type { Metadata } from "next"
import AgentesIAPageClient from "./page-client";
import { readStorage } from "@/lib/storage"

export const metadata: Metadata = {
  title: "AI Agents Worldwide | Chatbots for WhatsApp and Web",
  description: "Development of artificial intelligence agents, chatbots for WhatsApp, and virtual assistants with ChatGPT for companies worldwide.",
  keywords: [
    "ai agents",
    "ai bots",
    "whatsapp chatbots",
    "virtual assistants",
    "process automation",
    "ai agents global",
    "chatbots worldwide",
  ],
  openGraph: {
    title: "AI Agents Worldwide | Vektra",
    description: "Automate your customer service and increase sales with AI agents and Chatbots for WhatsApp.",
  },
}

export default async function AgentesIAPage() {
  const { testimonials: allTestimonials } = await readStorage()
  const testimonials = allTestimonials.filter(
    (t) => t.category === "agentes-ia" && t.language === "en"
  )

  return <AgentesIAPageClient testimonials={testimonials} />;
}