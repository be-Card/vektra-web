import type { Metadata } from 'next'
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Clients } from "@/components/sections/clients"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { FAQ } from "@/components/sections/faq"
import { Testimonials } from "@/components/sections/testimonials"
import { Trayectoria } from "@/components/sections/trayectoria"
import { ContactFormSection } from "@/components/sections/contact-form-section"
import { dictionaries } from '@/lib/dictionaries'
import { readStorage } from '@/lib/storage'

export const metadata: Metadata = {
  title: 'Vektra | Web Development, Apps & AI Agents Worldwide',
  description: 'Vektra: Digital agency specialized in web development, online stores, mobile apps, digital marketing and AI agents for companies worldwide.',
  alternates: {
    canonical: 'https://vektra.digital/en',
    languages: {
      'es': 'https://vektra.digital',
      'en': 'https://vektra.digital/en',
    },
  },
}

export default async function HomeEn() {
  const dict = dictionaries.en
  const { testimonials: allTestimonials } = await readStorage()
  const testimonials = allTestimonials.filter(t => t.language === 'en')
  
  return (
    <>
      <Hero dict={dict} />
      <Services dict={dict.services} />
      <Process dict={dict.process} />
      <PortfolioPreview dict={dict.portfolio} />
      <Clients dict={dict.clients} />
      <FAQ dict={dict.faq} />
      <Testimonials dict={dict.testimonials} items={testimonials} />
      <Trayectoria dict={dict.trayectoria} />
      <ContactFormSection dict={dict.contactForm} />
    </>
  )
}