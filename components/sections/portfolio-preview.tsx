"use client"

import { useState, useEffect, useSyncExternalStore } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { allProjects, type Project } from "@/app/trabajos/data"
import { useLanguage } from "@/lib/i18n"
import { type Dictionary } from "@/lib/dictionaries"
import { allProjects as allProjectsEn } from "@/app/en/portfolio/data"

function useWindowWidth() {
  return useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {}
      const handleResize = () => onStoreChange()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    },
    () => (typeof window === "undefined" ? 0 : window.innerWidth),
    () => 0
  )
}

interface PortfolioPreviewProps {
  dict?: Dictionary["portfolio"]
  initialProjects?: Project[]
}

export function PortfolioPreview({ dict, initialProjects }: PortfolioPreviewProps) {
  const { t: contextT, language } = useLanguage()
  const t = dict || contextT.portfolio
  const isEn = language === "en"

  const projectsSource = initialProjects || (isEn ? allProjectsEn : allProjects)
  const projects = projectsSource.slice(0, 8).map((project) => ({
    title: project.title,
    category: project.categoryLabel,
    description: project.description,
    image: project.image,
    href: isEn ? `/en/portfolio/${project.slug}` : `/trabajos/${project.slug}`,
  }))

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const width = useWindowWidth()
  const itemsPerView = width >= 1024 ? 4 : width >= 768 ? 2 : 1

  const maxIndex = Math.max(0, projects.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const safePrev = Math.min(prev, maxIndex)
      return safePrev >= maxIndex ? 0 : safePrev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const safePrev = Math.min(prev, maxIndex)
      return safePrev <= 0 ? maxIndex : safePrev - 1
    })
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const safePrev = Math.min(prev, maxIndex)
        return safePrev >= maxIndex ? 0 : safePrev + 1
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const safeIndex = Math.min(currentIndex, maxIndex)

  return (
    <section className="py-20 lg:py-28 bg-white" id="trabajos">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black">
            {t.title}
          </h2>
          <p className="mt-3 text-sm md:text-base tracking-[0.3em] uppercase text-black/60 font-medium">
            {t.subtitle}
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-lg transition-colors hover:bg-[#00DEC7] hover:text-black sm:left-0 sm:-translate-x-4 sm:h-12 sm:w-12 lg:-translate-x-6"
            aria-label={t.prev}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-lg transition-colors hover:bg-[#00DEC7] hover:text-black sm:right-0 sm:translate-x-4 sm:h-12 sm:w-12 lg:translate-x-6"
            aria-label={t.next}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Projects Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${safeIndex * (100 / itemsPerView)}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
                >
                  <Link
                    href={isEn ? `/en/portfolio/${project.href.split('/').pop()}` : project.href}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-lg bg-black aspect-[4/3]">
                      {/* Image */}
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay on Hover (Desktop) */}
                      <div className="hidden md:flex absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex-col items-center justify-end p-6 text-center">
                        <span className="text-xs font-medium text-[#00DEC7] uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                          {project.title}
                        </h3>
                        <p className="text-sm text-white/80 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                          {project.description}
                        </p>
                        <span className="mt-4 inline-flex items-center text-sm font-medium text-[#00DEC7] translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-300 group-hover:gap-2">
                          {t.viewProject}
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>

                    {/* Mobile Info (Visible below image on mobile) */}
                    <div className="md:hidden mt-4 text-center">
                      <h3 className="text-lg font-bold text-black mb-1">
                        {project.title}
                      </h3>
                      <span className="text-xs font-medium text-[#00DEC7] uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  safeIndex === index 
                    ? "w-8 bg-[#00DEC7]" 
                    : "bg-black/30 hover:bg-black/50"
                }`}
                aria-label={`${t.slide} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-black text-white hover:bg-[#00DEC7] hover:text-black px-8 py-6 text-base font-semibold rounded-full"
          >
            <Link href={isEn ? "/en/portfolio" : "/trabajos"}>
              {t.viewAll}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
