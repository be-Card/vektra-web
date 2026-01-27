import type { Metadata } from "next"
import AgentesIAPageClient from "./page-client";
import { readStorage } from "@/lib/storage";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Agentes de IA en Argentina y Paraguay | Chatbots para WhatsApp y Web",
  description: "Desarrollo de agentes de inteligencia artificial, chatbots para WhatsApp y asistentes virtuales con ChatGPT para empresas en Argentina y Paraguay.",
  keywords: [
    "agentes de ia",
    "bots ia",
    "chatbots whatsapp",
    "asistentes virtuales",
    "automatización de procesos",
    "agentes ia argentina",
    "agentes ia paraguay",
    "chatbots buenos aires",
    "chatbots córdoba",
    "chatbots rosario",
    "chatbots asunción",
    "chatbots ciudad del este",
  ],
}

export default async function AgentesIAPage() {
  const { projects: allProjects, testimonials } = await readStorage()
  const projects = allProjects.filter(p => p.category === 'agentes-ia').slice(0, 4)
  return <AgentesIAPageClient projects={projects} testimonials={testimonials} />;
}
