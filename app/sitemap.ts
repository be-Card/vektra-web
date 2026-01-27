import type { MetadataRoute } from "next"
import { allProjects } from "./trabajos/data"

const baseUrl = "https://vektra.digital"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/servicios",
    "/servicios/diseno-web",
    "/servicios/tienda-online",
    "/servicios/apps",
    "/servicios/marketing-digital",
    "/servicios/seo",
    "/servicios/agentes-ia",
    "/herramientas/calculadora-ads",
    "/trabajos",
    "/blog",
    "/sobre-nosotros",
    "/contacto",
    "/politica-de-privacidad",
    "/cookies",
    "/aviso-legal",
  ]

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  const projectEntries = allProjects.map((project) => ({
    url: `${baseUrl}/trabajos/${project.slug}`,
    lastModified: new Date(),
  }))

  return [...staticEntries, ...projectEntries]
}
