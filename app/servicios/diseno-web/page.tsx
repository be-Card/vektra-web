import type { Metadata } from "next"
import DisenoWebClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Diseño Web Profesional en Argentina y Paraguay | Vektra",
  description: "Diseño de páginas web modernas y responsivas en Argentina y Paraguay. Desarrollo web a medida con Next.js y WordPress. Sitios rápidos y optimizados para SEO.",
  keywords: [
    "diseño web argentina",
    "diseño web paraguay",
    "desarrollo web a medida",
    "páginas web profesionales",
    "diseño web buenos aires",
    "diseño web asunción",
    "agencia de diseño web",
    "diseño web córdoba",
    "diseño web rosario",
    "diseño web mendoza",
    "diseño web tucumán",
    "diseño web salta",
    "diseño web santa fe",
    "diseño web mar del plata",
    "diseño web resistencia",
    "diseño web corrientes",
    "diseño web posadas",
    "diseño web formosa",
    "diseño web santiago del estero",
    "diseño web san juan",
    "diseño web san luis",
    "diseño web neuquén",
    "diseño web bariloche",
    "diseño web ushuaia",
    "diseño web ciudad del este",
    "diseño web encarnación",
    "diseño web san lorenzo",
    "diseño web luque",
    "diseño web capiatá",
    "diseño web lambaré",
    "diseño web fernando de la mora",
    "diseño web limpio",
    "diseño web ñemby",
    "diseño web mariano roque alonso"
  ],
}

export default async function DisenoWebPage() {
  const { projects: allProjects, testimonials } = await readStorage()
  const projects = allProjects.filter(p => p.category === "diseno-web").slice(0, 4)
  
  return <DisenoWebClient projects={projects} testimonials={testimonials} />
}
