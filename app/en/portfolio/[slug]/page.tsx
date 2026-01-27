"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Trayectoria } from "@/components/sections/trayectoria"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { GalleryLightbox } from "@/components/sections/gallery-lightbox"
import { allProjects, type Project } from "../data"
import { dictionaries } from "@/lib/dictionaries"

export default function ProjectDetailEn() {
  const params = useParams<{ slug: string }>()
  const [projects, setProjects] = useState<Project[]>(allProjects)
  const [hasTracked, setHasTracked] = useState(false)
  const dict = dictionaries.en

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch("/api/admin/content")
        if (!response.ok) return
        const data = await response.json()
        if (Array.isArray(data?.projects) && data.projects.length) {
          setProjects(data.projects)
        }
      } catch {
        return
      }
    }

    loadContent()
  }, [])

  const project = useMemo(() => {
    const slug = typeof params?.slug === "string" ? params.slug : ""
    const normalizedSlug = decodeURIComponent(slug || "").toLowerCase()
    return projects.find((item: { slug: string }) => item.slug === normalizedSlug)
  }, [params, projects])

  useEffect(() => {
    if (!project || hasTracked) return
    const trackView = async () => {
      try {
        const response = await fetch("/api/admin/content")
        if (!response.ok) return
        const data = await response.json()
        if (!Array.isArray(data?.projects)) return
        const nextProjects = data.projects.map((item: Project) =>
          item.slug === project.slug ? { ...item, views: (item.views ?? 0) + 1 } : item
        )
        await fetch("/api/admin/content", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            blogPosts: data.blogPosts ?? [],
            projects: nextProjects,
            blogCategories: data.blogCategories ?? [],
            projectCategories: data.projectCategories ?? [],
          }),
        })
        setHasTracked(true)
      } catch {
        return
      }
    }

    trackView()
  }, [project, hasTracked])

  if (!project) {
    return (
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Project not found
          </h1>
          <p className="mt-4 text-gray-600">
            Go back to the portfolio section to choose another project.
          </p>
          <Link
            href="/en/portfolio"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    )
  }

  const relatedProjects = projects
    .filter((item: { category: string; slug: string }) => item.category === project.category && item.slug !== project.slug)
    .slice(0, 4)

  const galleryImages = project.gallery ?? [project.image]
  const clientName = project.client ?? project.title
  const websiteLabel = project.website?.label ?? `${project.slug}.com`
  const websiteUrl = project.website?.url ?? `https://${project.slug}.com`

  return (
    <>
      <section className="relative h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero1.webp')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <p className="text-[#00DEC7] text-sm uppercase tracking-[0.3em] mb-3">
            {project.categoryLabel}
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-8 rounded-2xl bg-white shadow-lg ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-2xl">
            <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Work</p>
                <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Client</p>
                  <p className="mt-3 text-base md:text-lg text-gray-700">{clientName}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-gray-400">Website Link</p>
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-base md:text-lg text-black hover:text-[#00DEC7] transition-colors"
                  >
                    {websiteLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Project Images</h2>
            <p className="mt-2 text-gray-500 uppercase tracking-[0.3em] text-sm">
              Work Overview
            </p>
          </div>
          <GalleryLightbox images={galleryImages} title={project.title} />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Related Work</h2>
            <p className="mt-2 text-gray-500 uppercase tracking-[0.3em] text-sm">
              {project.categoryLabel}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedProjects.map((item) => (
              <Link
                key={item.id}
                href={`/en/portfolio/${item.slug}`}
                className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{item.categoryLabel}</p>
                  <h3 className="mt-2 text-lg font-bold text-black group-hover:text-[#00DEC7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black group-hover:text-[#00DEC7]">
                    View Work
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Trayectoria dict={dict.trayectoria} />

      <ContactFormSection dict={dict.contactForm} />
    </>
  )
}
