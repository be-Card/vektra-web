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
import { readStorage } from "@/lib/storage"

export const dynamic = 'force-dynamic'

export default async function Home() {
  const dict = dictionaries.es
  const { projects, testimonials: allTestimonials } = await readStorage()
  // Filter only Spanish testimonials and take the first 6 most relevant ones
  const testimonials = allTestimonials
    .filter((t) => t.language === "es")
    .slice(0, 6)

  return (
    <>
      <Hero dict={dict} />
      <Services dict={dict.services} />
      <Process dict={dict.process} />
      <PortfolioPreview dict={dict.portfolio} initialProjects={projects} />
      <Clients dict={dict.clients} />
      <FAQ dict={dict.faq} />
      <Testimonials dict={dict.testimonials} items={testimonials} />
      <Trayectoria dict={dict.trayectoria} />
      <ContactFormSection dict={dict.contactForm} />
    </>
  )
}
