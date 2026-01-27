import { Metadata } from "next"
import ContactoClient from "./page-client"

export const metadata: Metadata = {
  title: "Contacto Vektra | Agencia de Diseño Web y Marketing Digital",
  description: "Contacta con Vektra para tu próximo proyecto digital. Diseño web, tiendas online, marketing digital y agentes IA. Te ayudamos a potenciar tu negocio.",
  alternates: {
    canonical: "https://vektra.digital/contacto",
    languages: {
      en: "https://vektra.digital/en/contact",
    },
  },
}

export default function ContactoPage() {
  return <ContactoClient />
}
