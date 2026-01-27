"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"
import { type Dictionary } from "@/lib/dictionaries"

interface HeroProps {
  dict?: Dictionary
}

export function Hero({ dict }: HeroProps) {
  const { t: contextT } = useLanguage()
  const t = dict || contextT
  
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00DEC7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid min-h-screen grid-cols-1 items-center gap-8">
            {/* Left Content */}
            <div className="pt-32 pb-12 lg:pt-24 lg:pb-24">
              {/* Greeting */}
              <p className="mb-4 text-lg text-white sm:text-xl animate-fade-in-left">
                <span className="mr-2">👋</span>
                {t.hero.greeting}
              </p>
              
              {/* Main Headline */}
              <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[56px] animate-fade-in-left animation-delay-200">
                {t.hero.headline.prefix}{" "}
                <span className="underline decoration-[#00DEC7] decoration-4 underline-offset-4">
                  {t.hero.headline.web}
                </span>{" "}
                {t.hero.headline.and}{" "}
                <span className="underline decoration-[#00DEC7] decoration-4 underline-offset-4">
                  {t.hero.headline.ai}
                </span>
                <span className="block text-white/80 text-lg sm:text-xl md:text-2xl font-semibold mt-2">
                  {t.hero.headline.location}
                </span>
              </h1>
              
              {/* Description */}
              <p className="mb-4 text-base text-white/90 sm:text-lg animate-fade-in-left animation-delay-400">
                {t.hero.description.agency} <strong>{t.hero.description.specialized}</strong> {t.hero.description.inCreating}{" "}
                <strong>{t.hero.description.webs}</strong>, <strong>{t.hero.description.stores}</strong>, <strong>{t.hero.description.apps}</strong> {t.hero.description.and}{" "}
                <strong>{t.hero.description.bots}</strong> {t.hero.description.for}
              </p>
              
              {/* Objective */}
              <p className="mb-8 text-base text-white/90 sm:text-lg animate-fade-in-left animation-delay-500">
                <strong>{t.hero.objective.label}</strong>{" "}
                <span className="text-[#00DEC7] font-semibold">
                  {t.hero.objective.text}
                </span>{" "}
                {t.hero.objective.suffix} <strong>{t.hero.objective.solution}</strong>
              </p>
              
              {/* CTA and Google Badge */}
              <div className="flex flex-wrap items-center gap-6 animate-fade-in-left animation-delay-700">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-[#00DEC7] text-black hover:bg-[#00DEC7]/90 rounded-full px-8 py-6 text-base font-semibold transition-transform hover:scale-105"
                >
                  <Link href="#formulario">
                    {t.hero.cta}
                  </Link>
                </Button>
                
                {/* Google Reviews Badge */}
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-lg">
                  <svg viewBox="0 0 24 24" className="h-8 w-8">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-black">5.0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 fill-[#FBBC05]" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">+45 {t.hero.reviews}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scrolling Text Marquee */}
      <ScrollingMarquee dict={dict} />
    </>
  )
}

function ScrollingMarquee({ dict }: { dict?: Dictionary }) {
  const { t: contextT } = useLanguage()
  const t = dict || contextT
  
  const content = (
    <>
      <Link href="/servicios/diseno-web" className="inline-flex items-center hover:text-[#00DEC7] transition-colors">
        <strong><span className="text-[#00DEC7]">{t.marquee.web.title}</span></strong>
        <span className="mx-1">{t.marquee.web.desc}</span>
        <strong>{t.marquee.web.tech}</strong>
        <span className="ml-1">{t.marquee.web.benefit}</span>
        <strong className="ml-1">{t.marquee.web.seo}</strong>
        <span className="ml-1">{t.marquee.web.delivery}</span>
      </Link>
      <span className="mx-4 text-[#00DEC7]">·</span>
      <Link href="/servicios/tienda-online" className="inline-flex items-center hover:text-[#00DEC7] transition-colors">
        <strong><span className="text-[#00DEC7]">{t.marquee.store.title}</span></strong>
        <span className="mx-1">{t.marquee.store.desc}</span>
        <strong>{t.marquee.store.tech}</strong>
        <span className="ml-1">{t.marquee.store.benefit}</span>
        <strong className="ml-1">{t.marquee.store.training}</strong>
        <span className="ml-1">{t.marquee.store.suffix}</span>
      </Link>
      <span className="mx-4 text-[#00DEC7]">·</span>
      <Link href="/servicios/agentes-ia" className="inline-flex items-center hover:text-[#00DEC7] transition-colors">
        <strong><span className="text-[#00DEC7]">{t.marquee.ai.title}</span></strong>:
        <span className="ml-1">{t.marquee.ai.desc}</span>
        <strong className="ml-1">{t.marquee.ai.tech}</strong>
      </Link>
      <span className="mx-4 text-[#00DEC7]">·</span>
      <Link href="/servicios/marketing-digital" className="inline-flex items-center hover:text-[#00DEC7] transition-colors">
        <strong><span className="text-[#00DEC7]">{t.marquee.marketing.title}</span></strong>:
        <span className="ml-1">{t.marquee.marketing.desc}</span>
        <strong className="ml-1">{t.marquee.marketing.benefit}</strong>
      </Link>
      <span className="mx-4 text-[#00DEC7]">·</span>
      <span className="text-[#00DEC7] font-semibold">{t.marquee.location}</span>
      <span className="mx-4 text-[#00DEC7]">·</span>
    </>
  )

  return (
    <div className="relative bg-white py-4 overflow-hidden border-y-4 border-[#00DEC7]">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center text-sm text-black">
          {content}
          {content}
        </div>
      </div>
    </div>
  )
}
