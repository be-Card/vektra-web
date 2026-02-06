"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Project } from "@/app/trabajos/data"

interface LatestWorksProps {
  projects: Project[]
  title?: string
  subtitle?: string
  viewAllLink?: string
  viewAllText?: string
}

export function LatestWorks({ 
  projects, 
  title = "Últimos Trabajos", 
  subtitle = "DESARROLLO / DISEÑO WEB",
  viewAllLink = "/trabajos",
  viewAllText = "Ver todos los trabajos"
}: LatestWorksProps) {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">{title}</h2>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gray-500">{subtitle}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              href={`/trabajos/${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-200">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span className="text-sm">{project.title}</span>
                  </div>
                )}
                
                {/* Overlay on Hover (Desktop only) */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="hidden md:block absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-[#00DEC7] uppercase tracking-wider font-semibold">{project.categoryLabel}</span>
                  <h3 className="text-white font-bold text-sm md:text-base leading-tight mt-1">{project.title}</h3>
                </div>
              </div>

              {/* Mobile Info (Visible below image) */}
              <div className="md:hidden mt-3">
                <h3 className="text-black font-bold text-lg leading-tight mb-1">{project.title}</h3>
                <span className="text-xs text-[#00DEC7] uppercase tracking-wider font-semibold">{project.categoryLabel}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 rounded-full px-8">
            <Link href={viewAllLink}>{viewAllText}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
