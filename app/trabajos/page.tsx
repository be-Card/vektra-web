import type { Metadata } from "next"
import TrabajosPageClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Portfolio | Nuestros Trabajos y Casos de Éxito",
  description: "Descubrí nuestro portfolio de desarrollo web, tiendas online y aplicaciones móviles. Casos de éxito reales de empresas en Argentina y Paraguay.",
  keywords: [
    "portfolio desarrollo web",
    "casos de exito marketing",
    "diseños web argentina",
    "ejemplos tiendas online",
    "portfolio apps",
    "vektra trabajos"
  ],
}

export default async function TrabajosPage() {
  const { projects } = await readStorage()
  return <TrabajosPageClient initialProjects={projects} />
}