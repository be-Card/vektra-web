import { Metadata } from "next"
import ContactClient from "./page-client"
import { readStorage } from "@/lib/storage"

export const metadata: Metadata = {
  title: "Contact Vektra | Web Design and Digital Marketing Agency",
  description: "Contact Vektra for your next digital project. Web design, online stores, digital marketing, and AI agents. We help you boost your business.",
  alternates: {
    canonical: "https://vektra.digital/en/contact",
    languages: {
      es: "https://vektra.digital/contacto",
    },
  },
}

export default async function ContactPage() {
  const { testimonials } = await readStorage()
  const englishTestimonials = testimonials.filter((t) => t.language === "en")

  return <ContactClient testimonials={englishTestimonials} />
}
