"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { Dictionary } from "@/lib/dictionaries"
import { Testimonial } from "@/app/testimonials/data"

interface TestimonialItem {
  rating: number
  content: string
  avatar: string
  avatarImage?: string
  name: string
  company: string
  logo?: string
}

interface TestimonialsProps {
  dict?: Dictionary["testimonials"]
  items?: Testimonial[]
  category?: string
  title?: string
  subtitle?: string
}

export function Testimonials({ dict, items, category, title, subtitle }: TestimonialsProps) {
  const { t: contextT, language } = useLanguage()
  const t = dict || contextT.testimonials

  const displayTitle = title || t.title
  const displaySubtitle = subtitle || t.subtitle

  const [displayItems, setDisplayItems] = useState<TestimonialItem[]>([])

  useEffect(() => {
    if (items && items.length > 0) {
      const filtered = items
        .filter((item) => {
          const langMatch = item.language === language
          const catMatch = !category || item.category === category
          return langMatch && catMatch
        })
        .map((item) => ({
          rating: 5,
          content: item.content,
          avatar: item.name.substring(0, 2).toUpperCase(),
          avatarImage: item.image,
          name: item.name,
          role: item.role,
          company: item.company,
        }))
      
      if (filtered.length > 0) {
        // If we have admin items, use them (maybe shuffle them for rotation)
        setDisplayItems(filtered.sort(() => Math.random() - 0.5))
      } else {
        setDisplayItems(t.items)
      }
    } else {
      setDisplayItems(t.items)
    }
  }, [items, category, language, t.items])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPages = Math.ceil(displayItems.length / itemsPerPage)

  const nextSlide = useCallback(() => {
    if (totalPages === 0) return
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }, [totalPages])

  const prevSlide = () => {
    if (totalPages === 0) return
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  useEffect(() => {
    if (isPaused || totalPages <= 1) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPaused, nextSlide, totalPages])

  const visibleTestimonials = displayItems.slice(currentIndex * itemsPerPage, currentIndex * itemsPerPage + itemsPerPage)

  if (displayItems.length === 0) return null

  return (
    <section className="py-20 lg:py-28 bg-white" id="testimonios">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4">
            {displayTitle}
          </h2>
          <p className="text-sm uppercase tracking-[0.3em] text-black/60 mb-8">
            {displaySubtitle}
          </p>
          
          {/* Google Reviews Badge */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <svg className="h-10" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                <path d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" fill="#4285F4"/>
              </svg>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-lg font-medium text-black">{t.reviews}</span>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50 sm:left-0 sm:-translate-x-4 lg:-translate-x-12"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-gray-50 sm:right-0 sm:translate-x-4 lg:translate-x-12"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5 text-black" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleTestimonials.map((testimonial: TestimonialItem, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-sm text-black/80 leading-relaxed mb-6 flex-grow">
                  {testimonial.content}
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    {testimonial.avatarImage ? (
                       <img src={testimonial.avatarImage} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover shrink-0" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-xs font-bold text-black/70 shrink-0">
                        {testimonial.avatar}
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-sm text-black">
                        {testimonial.name} {testimonial.role ? `- ${testimonial.role}` : ""}
                      </div>
                      <div className="text-xs text-black/60">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                  {testimonial.logo && (
                    <div className="relative w-16 h-8 ml-4 shrink-0">
                      <Image
                        src={testimonial.logo}
                        alt={testimonial.company}
                        fill
                        className="object-contain opacity-80"
                        sizes="64px"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#00DEC7] w-6" : "bg-black/20 w-2"
                }`}
                aria-label={`Ir al grupo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
