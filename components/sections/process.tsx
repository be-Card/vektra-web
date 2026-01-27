"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/i18n"
import { type Dictionary } from "@/lib/dictionaries"

interface ProcessStep {
  number: string
  title: string[]
  description: string
  highlight?: string
}

interface ProcessProps {
  dict?: Dictionary["process"]
}

function ProcessStepCard({ step, index, isVisible }: { step: ProcessStep; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative group transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Arrow connector to next step */}
      {index < 3 && (
        <div className="hidden lg:flex absolute top-[32px] -right-4 translate-x-1/2 items-center justify-center z-20">
          <svg
            className={`w-8 h-8 text-[#00DEC7] transition-all duration-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: `${(index + 1) * 150 + 300}ms` }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}

      {/* Card content */}
      <div
        className={`relative p-6 rounded-2xl transition-all duration-300 ${
          isHovered
            ? "bg-white/5 -translate-y-1"
            : "bg-transparent"
        }`}
      >
        {/* Number with circle */}
        <div className="relative mb-6">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full border-2 transition-all duration-300 ${
              isHovered
                ? "border-[#00DEC7] bg-[#00DEC7] text-black scale-110"
                : "border-[#00DEC7] bg-transparent text-[#00DEC7]"
            }`}
          >
            <span className="text-3xl font-bold">{step.number}</span>
          </div>
        </div>

        {/* Title */}
        <h3
          className={`text-xl lg:text-2xl font-bold mb-3 leading-tight transition-colors duration-300 ${
            isHovered ? "text-[#00DEC7]" : "text-white"
          }`}
        >
          {step.title[0]}
          <br />
          {step.title[1]}
        </h3>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed transition-colors duration-300 ${
            isHovered ? "text-white/90" : "text-white/70"
          }`}
        >
          {step.description}
          {step.highlight && (
            <span
              className={`font-medium transition-colors duration-300 ${
                isHovered ? "text-[#00DEC7]" : "text-[#00DEC7]"
              }`}
            >
              {" "}
              {step.highlight}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

export function Process({ dict }: ProcessProps) {
  const { t: contextT } = useLanguage()
  const t = dict || contextT.process
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden" id="objetivo">
      {/* Top cyan border with glow */}
      <div className="h-1 bg-[#00DEC7] shadow-[0_0_20px_rgba(0,222,199,0.5)]" />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00DEC7]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00DEC7]/5 rounded-full blur-3xl" />
      </div>

      <div className="py-16 lg:py-24 relative">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          {/* Section Header */}
          <div
            className={`mb-12 lg:mb-16 max-w-3xl transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-white/90">
              <span className="font-bold">{t.description.prefix}</span>
              {t.description.text}{" "}
              <span className="font-bold">{t.description.suffix}</span>.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step: ProcessStep, index: number) => (
              <ProcessStepCard
                key={step.number}
                step={step}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom cyan border with glow */}
      <div className="h-1 bg-[#00DEC7] shadow-[0_0_20px_rgba(0,222,199,0.5)]" />
    </section>
  )
}
