"use client"

import { useState } from "react"
import { Phone, Mail, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n"
import { Dictionary } from "@/lib/dictionaries"

interface FAQProps {
  dict?: Dictionary["faq"]
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className="bg-[#1a1a1a] rounded-lg overflow-hidden cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between gap-4 p-4">
        <span className="text-white text-sm font-medium leading-snug">{question}</span>
        <span className="text-[#00DEC7] flex-shrink-0 mt-0.5">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </div>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ({ dict }: FAQProps) {
  const { t: contextT } = useLanguage()
  const t = dict || contextT.faq

  // Split FAQs into two columns
  const midPoint = Math.ceil(t.items.length / 2)
  const faqsLeft = t.items.slice(0, midPoint)
  const faqsRight = t.items.slice(midPoint)

  return (
    <section className="py-20 lg:py-28 bg-black" id="faq">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            {t.title}
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
            {t.subtitle}
          </p>
        </div>

        {/* Two columns of FAQs */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {/* Left column */}
          <div className="space-y-3">
            {faqsLeft.map((faq, index) => (
              <FAQItem key={`left-${index}`} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-3">
            {faqsRight.map((faq, index) => (
              <FAQItem key={`right-${index}`} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t.cta.title}
          </h3>
          <p className="text-gray-400 mb-6">
            {t.cta.text} <span className="font-semibold text-white">{t.cta.highlight}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-6 text-base font-medium"
            >
              <Link href="tel:+5493624646669">
                <Phone className="w-4 h-4 mr-2" />
                {t.cta.call}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6 text-base font-medium"
            >
              <Link href="/contacto">
                <Mail className="w-4 h-4 mr-2" />
                {t.cta.email}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
