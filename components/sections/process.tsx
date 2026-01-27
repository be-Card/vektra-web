"use client"

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

export function Process({ dict }: ProcessProps) {
  const { t: contextT } = useLanguage()
  const t = dict || contextT.process

  return (
    <section className="relative bg-black" id="objetivo">
      {/* Top cyan border */}
      <div className="h-1 bg-[#00DEC7]" />
      
      <div className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 lg:mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-white/90">
              <span className="font-bold">{t.description.prefix}</span>{t.description.text} <span className="font-bold">{t.description.suffix}</span>.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step: ProcessStep) => (
              <div key={step.number} className="relative">
                {/* Number */}
                <div className="text-5xl lg:text-6xl font-bold text-white mb-4">
                  {step.number}.
                </div>
                
                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                  {step.title[0]}<br />
                  {step.title[1]}
                </h3>
                
                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                  {step.highlight && (
                    <span className="text-[#00DEC7] font-medium"> {step.highlight}</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom cyan border */}
      <div className="h-1 bg-[#00DEC7]" />
    </section>
  )
}
