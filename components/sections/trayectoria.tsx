"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/lib/i18n"
import { Dictionary } from "@/lib/dictionaries"

interface TrayectoriaProps {
  dict?: Dictionary["trayectoria"]
}

function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
      {prefix}{count}{suffix}
    </div>
  )
}

interface StatItem {
  value: number
  prefix: string
  suffix: string
  label: string
}

export function Trayectoria({ dict }: TrayectoriaProps) {
  const { t: contextT } = useLanguage()
  const t = dict || contextT.trayectoria

  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight whitespace-pre-line">
            {t.title}
          </h2>
          <p className="mt-4 text-gray-400 text-base lg:text-lg leading-relaxed">
            {t.description.prefix} <span className="text-white">{t.description.highlight1}</span>{t.description.text1} <span className="text-white">{t.description.highlight2}</span>{t.description.text2} <span className="text-white">{t.description.highlight3}</span>{t.description.text3}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {t.stats.map((stat: StatItem, index: number) => (
            <div key={index} className="text-center md:text-left">
              <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="mt-2 text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
