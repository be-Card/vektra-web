"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useMemo, createRef } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronLeft, ChevronRight, Plus, Minus, ArrowRight, ShieldCheck, Headset, Megaphone } from "lucide-react"
import { LatestWorks } from "@/components/sections/latest-works"
import { Project } from "@/app/trabajos/data"
import { Testimonials } from "@/components/sections/testimonials"
import { Testimonial } from "@/app/testimonials/data"

const marqueeItems = [
  { text: "Desarrollo web profesional", highlight: true },
  { text: "diseño personalizado sin uso de plantillas preconstruidas" },
  { text: "Next.js y React", highlight: true },
  { text: "sitios web ultra rápidos y modernos" },
  { text: "WordPress", highlight: true },
  { text: "web autogestionable para que puedas gestionar el contenido" },
  { text: "Diseño web Responsive", highlight: true },
  { text: "adaptable a móviles, tablets y computadoras" },
  { text: "Optimización SEO", highlight: true },
  { text: "para posicionar tu web en Google" },
  { text: "Soporte técnico", highlight: true },
  { text: "incluido durante el primer mes" },
]

const servicesIncluded = [
  { title: "Hosting + dominio", description: "Contratación del alojamiento web y registro del dominio. Nos encargamos de contratar el hosting que más se ajuste a las necesidades de tu web, además de la búsqueda del dominio y su registro." },
  { title: "Correo corporativo", description: "Creación de emails de empresa. Creación y configuración de los emails de la empresa para que puedas empezar a utilizarlos desde el primer día." },
  { title: "Desarrollo web profesional", description: "Nada de plantillas o temas prefabricados. Creamos el desarrollo desde cero con Next.js, React o WordPress para que tu web sea totalmente personalizada y adaptada a las necesidades de tu negocio." },
  { title: "Seguridad web", description: "Instalación de las mejores herramientas para que la web esté protegida de posibles hackeos. Copias de seguridad, certificado SSL, protección anti malware." },
  { title: "Políticas de privacidad", description: "Incluidas todas las funcionalidades necesarias para que la web sea 100% legal. Creación de las páginas de Aviso legal, Política de privacidad y checkbox en los formularios de contacto." },
  { title: "Integración de medición", description: "Configuramos píxeles, eventos y herramientas de analítica para medir resultados desde el primer día." },
  { title: "WhatsApp", description: "Integración directa con WhatsApp gracias a la inserción de un botón flotante que permitirá de forma automática poner en contacto al usuario con tu negocio." },
  { title: "Optimización SEO", description: "SEO On Page completa en todas las páginas. Inserción de títulos, descripciones, H1, H2 y H3, descripciones en imágenes, además del envío del sitemap a Google para la indexación." },
  { title: "Optimización de velocidad", description: "Para que la web cargue en el menor tiempo posible. Se optimizarán imágenes, códigos CSS, JS, HTML y caché para conseguir la mejor puntuación en rendimiento web." },
  { title: "Google Analytics", description: "Conecto tu nueva web con Google Analytics para que puedas ver cuántas personas la visitan, desde dónde llegan y qué páginas les interesan más." },
  { title: "Capacitación", description: "Te enseñamos cómo añadir, modificar y eliminar el contenido de la web de una forma muy sencilla gracias al gestor de contenidos o panel de administración." },
  { title: "Soporte técnico", description: "Incluido durante un mes. Una vez esté la web acabada, tendrás incluido durante un mes las actualizaciones y soporte para tener tu web lo más protegida posible." },
]

const processSteps = [
  { step: "01", title: "Análisis", subtitle: "del proyecto", description: "Primera reunión en la que hablamos del proyecto, tus objetivos y lo que necesitas en tu web o tienda online.", highlight: "Definimos el estilo, las funciones y el contenido." },
  { step: "02", title: "Diseño y", subtitle: "desarrollo", description: "Creamos la página de inicio de la web con un diseño adaptado a tu marca y estilo. Cuando lo apruebes, continuamos el desarrollo del resto de la web o tienda online.", highlight: null },
  { step: "03", title: "Revisión", subtitle: "y ajustes", description: "Te mostramos la web terminada para que la revises con calma: formularios, versión móvil, velocidad... Una vez tengamos tu Ok, se publica la web.", highlight: null },
  { step: "04", title: "Lanzamiento", subtitle: "y Marketing", description: "Te ayudamos a darle visibilidad a la web con herramientas de marketing digital como Google Ads.", highlight: "El objetivo: generar visitas desde el primer día y convertirlas en clientes." },
]

const webStats = [
  { value: 10, prefix: "+", suffix: "", label: "Años de experiencia en desarrollo web" },
  { value: 80, prefix: "+", suffix: "", label: "Webs desarrolladas" },
  { value: 45, prefix: "+", suffix: "", label: "Reseñas 5 estrellas" },
  { value: 2, prefix: "", suffix: "", label: "Países (Argentina y Paraguay)" },
]

const webFaqs = [
  { question: "Qué incluye el servicio de desarrollo web?", answer: "El servicio incluye diseño personalizado, desarrollo con Next.js/React/WordPress, hosting, dominio, correo corporativo, optimización SEO, integración de WhatsApp, Google Analytics, capacitación y soporte técnico por un mes." },
  { question: "Cuál es el precio para crear una página web profesional?", answer: "Los precios varían según la complejidad del proyecto. Una web básica comienza desde $350.000 ARS, mientras que proyectos más complejos con funcionalidades avanzadas tienen presupuestos personalizados. Contáctanos para una cotización sin compromiso." },
  { question: "Cuánto tiempo tarda en estar lista mi página web?", answer: "El tiempo de entrega depende del tipo de proyecto. Una web básica puede estar lista en 2-3 semanas, mientras que proyectos más complejos pueden tardar entre 4-8 semanas. Siempre te damos un tiempo estimado antes de comenzar." },
  { question: "La web incluye diseño responsive para móviles?", answer: "Sí, todas las webs que desarrollamos son 100% responsive y están optimizadas para verse perfectamente en móviles, tablets y computadoras de escritorio." },
  { question: "Puedo editar y gestionar mi web una vez terminada?", answer: "Sí, te entregamos la web con un panel de administración intuitivo y te brindamos capacitación para que puedas actualizar contenido, imágenes y textos de forma autónoma." },
  { question: "Incluyes optimización SEO para Google?", answer: "Sí, todas las webs incluyen SEO On Page básico: títulos, descripciones, estructura de encabezados H1-H3, optimización de imágenes y envío del sitemap a Google para indexación." },
  { question: "Ofrecen mantenimiento web después de la entrega?", answer: "Sí, incluimos soporte técnico durante el primer mes. Luego ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, copias de seguridad, control de seguridad y soporte continuo." },
  { question: "Trabajan con clientes de Argentina y Paraguay?", answer: "Sí, trabajamos con clientes de toda Argentina y Paraguay. Las reuniones se realizan por videollamada y la comunicación es fluida gracias a herramientas digitales como WhatsApp, Zoom y email." },
]

const complementos = [
  {
    title: "Mantenimiento web",
    subtitle: "Tu web protegida y actualizada",
    items: ["Actualizaciones", "Copias de seguridad", "Control de seguridad diario", "Actualización de contenido", "Soporte técnico", "Optimización de velocidad WPO"],
    href: "/servicios/mantenimiento-web",
    icon: ShieldCheck
  },
  {
    title: "Soporte técnico",
    subtitle: "Soluciones para tu web",
    items: ["Soluciones a problemas técnicos", "Cambios de diseño web", "Funcionalidades para tu web", "Migración web", "SEO OnPage", "WPO: Optimización de velocidad", "Contratación de hosting + dominio"],
    href: "/servicios/soporte-tecnico",
    icon: Headset
  },
  {
    title: "Marketing online",
    subtitle: "Mejora la presencia online de tu negocio",
    items: ["Meta Ads", "SEO", "Google Ads", "Google Business Profile", "Email Marketing", "Remarketing"],
    href: "/servicios/marketing-digital",
    icon: Megaphone
  },
]

interface DisenoWebClientProps {
  projects: Project[]
  testimonials: Testimonial[]
}

const DisenoWebClient = ({ projects, testimonials }: DisenoWebClientProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", privacy: false })
  const webStatsRefs = useMemo(() => webStats.map(() => createRef<HTMLDivElement>()), [])
  const [webStatsCounts, setWebStatsCounts] = useState(() => webStats.map(() => 0))
  const [webStatsVisible, setWebStatsVisible] = useState(() => webStats.map(() => false))
  const [webStatsStarted, setWebStatsStarted] = useState(() => webStats.map(() => false))

  useEffect(() => {
    const observers = webStatsRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setWebStatsVisible((prev) => {
              if (prev[index]) return prev
              const next = [...prev]
              next[index] = true
              return next
            })
          }
        },
        { threshold: 0.1 }
      )

      if (ref.current) observer.observe(ref.current)

      return observer
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [webStatsRefs])

  useEffect(() => {
    webStatsVisible.forEach((visible, index) => {
      if (!visible || webStatsStarted[index]) return
      setWebStatsStarted((prev) => {
        if (prev[index]) return prev
        const next = [...prev]
        next[index] = true
        return next
      })
      const end = webStats[index].value
      const duration = 2000
      let startTime: number | null = null
      const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setWebStatsCounts((prev) => {
          const next = [...prev]
          next[index] = Math.floor(progress * end)
          return next
        })
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    })
  }, [webStatsVisible, webStatsStarted])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00DEC7]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 mx-auto max-w-[1400px] px-4 pt-32 pb-20 lg:py-28 lg:px-8">
          <div className="grid items-center gap-8 min-h-[70vh]">
            <div className="space-y-6">
              <p className="text-white text-base sm:text-lg flex items-center gap-2">
                <span className="text-2xl">👋</span> Somos Vektra
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Expertos en{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">diseño</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#00DEC7] -z-0 opacity-60" />
                </span>
                {" "}y desarrollo web con{" "}
                <span className="font-extrabold">Next.js</span>,{" "}
                <span className="font-extrabold">React</span> y{" "}
                <span className="font-extrabold">WordPress</span>
                <span className="block text-white/80 text-lg sm:text-xl md:text-2xl font-semibold mt-3">
                  en Argentina y Paraguay
                </span>
              </h1>
              
              <p className="text-white/80 text-base sm:text-lg max-w-xl">
                Dale visibilidad a tu negocio en <strong className="text-white">Argentina y Paraguay</strong> y aumenta tus clientes y ventas con una{" "}
                <strong className="text-white">página web profesional</strong>
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button asChild size="lg" className="bg-[#00DEC7] text-black hover:bg-[#00DEC7]/90 rounded-full px-8 font-semibold">
                  <Link href="/contacto">¿Hablamos?</Link>
                </Button>
                
                <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
                  <svg viewBox="0 0 24 24" className="h-8 w-8">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-black">Google</span>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-black">5.0</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-3 w-3 fill-[#FBBC05]" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-500">+45 reseñas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-black py-4 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={index} className="mx-4 text-sm">
                {item.highlight ? (
                  <span className="text-[#00DEC7] font-semibold">{item.text}</span>
                ) : (
                  <span className="text-white/70">{item.text}</span>
                )}
                <span className="mx-4 text-white/30">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included Section - Cyan Background */}
      <section className="py-20 lg:py-28 bg-[#00DEC7]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Nos encargamos de todo en Argentina y Paraguay,<br />preocúpate solo de tu negocio
            </h2>
            <p className="mt-6 text-black/80 text-base sm:text-lg">
              Tendrás una <strong className="text-black">página web profesional</strong> que te permitirá dar{" "}
              <strong className="text-black">visibilidad a tu negocio</strong> y{" "}
              <strong className="text-black">aumentar tus clientes y tus ventas</strong>.
            </p>
          </div>

          <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">
            {servicesIncluded.map((service) => (
              <div key={service.title} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-black">
                    <Check className="h-4 w-4 text-black" strokeWidth={3} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">{service.title}</h4>
                  <p className="mt-1 text-black/70 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-black">Consúltanos <span className="font-normal">sin compromiso</span></h3>
            <p className="mt-2 text-black/70 max-w-xl mx-auto">
              Si necesitas un <strong className="text-black">equipo de desarrollo web profesional</strong>, podemos ayudarte a dar visibilidad a tu negocio.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 rounded-full px-8">
                <Link href="tel:+5493624646669" className="flex items-center gap-2">Llámanos</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white rounded-full px-8 bg-transparent">
                <Link href="/contacto">Presupuesto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo Section */}
      <section className="relative py-20 lg:py-28 bg-black">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#00DEC7]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00DEC7]" />
        
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Objetivo</h2>
            <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
              <strong className="text-white font-bold">Atraer visitas y convertirlas en clientes</strong>. 4 pasos para crear una web profesional que genere{" "}
              <strong className="text-white font-bold">resultados reales y aumente tus ventas</strong>.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <div key={item.step}>
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">{item.step}.</span>
                <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">{item.title}<br/>{item.subtitle}</h3>
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {item.description}
                  {item.highlight && <span className="text-[#00DEC7] font-medium"> {item.highlight}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Últimos Trabajos Section */}
      <LatestWorks 
        projects={projects} 
        title="Últimos Trabajos"
        subtitle="DISEÑO WEB PROFESIONAL"
        viewAllLink="/trabajos?category=diseno-web"
      />

      {/* Trayectoria Section */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Trayectoria profesional<br />respaldada por resultados
            </h2>
            <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed">
              A lo largo de estos años como <span className="text-white">equipo de desarrollo web profesional</span>, 
              hemos trabajado con clientes en <span className="text-white">Argentina y Paraguay</span> que avalan nuestra experiencia y compromiso. 
              Los siguientes datos reflejan el <span className="text-white">crecimiento</span> y la confianza que nuestros clientes han depositado en nosotros.
            </p>
          </div>

          <div className="grid gap-8 grid-cols-2 lg:grid-cols-4">
            {webStats.map((stat, index) => (
              <div key={index} ref={webStatsRefs[index]} className="text-center lg:text-left">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                  {stat.prefix}{webStatsCounts[index]}{stat.suffix}
                </span>
                <p className="mt-2 text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials items={testimonials} category="diseno-web" />

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-black">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Preguntas frecuentes</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-gray-500">DESARROLLO WEB PROFESIONAL</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {webFaqs.map((faq, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="h-5 w-5 text-[#00DEC7] shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-[#00DEC7] shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white">¿Tenés alguna otra duda?</h3>
            <p className="mt-2 text-gray-400">Contactá con nosotros <span className="text-white font-semibold">sin compromiso</span></p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                <Link href="tel:+5493624646669">Llámanos</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-8 bg-transparent">
                <Link href="/contacto">Escribinos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Illustration */}
            <div className="flex justify-center">
              <svg viewBox="0 0 400 400" className="w-full max-w-md">
                <circle cx="200" cy="320" rx="120" ry="30" fill="#e5e7eb" />
                <rect x="160" y="180" width="80" height="140" rx="10" fill="#00DEC7" />
                <rect x="165" y="185" width="70" height="100" fill="#1a1a1a" />
                <circle cx="200" cy="300" r="8" fill="#00DEC7" />
                <path d="M200 100 L220 180 L180 180 Z" fill="#1a1a1a" />
                <circle cx="200" cy="90" r="15" fill="#1a1a1a" />
                <path d="M170 140 Q200 120 230 140" stroke="#00DEC7" strokeWidth="3" fill="none" />
                <circle cx="240" cy="160" r="5" fill="#00DEC7" />
                <circle cx="160" cy="160" r="5" fill="#00DEC7" />
                <circle cx="250" cy="130" r="3" fill="#00DEC7" />
              </svg>
            </div>

            {/* Form */}
            <div>
              <div className="bg-[#00DEC7] rounded-xl p-6 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
                  ¿Listo para comenzar tu nuevo<br />negocio o proyecto?
                </h2>
              </div>
              
              <p className="text-center text-black font-semibold mb-2">Consúltanos sin compromiso</p>
              <p className="text-center text-gray-600 text-sm mb-6">
                <a href="tel:+5493624646669" className="underline font-medium hover:text-[#00DEC7]">Llámanos</a>, escribinos un{" "}
                <a href="https://wa.me/5493624646669" target="_blank" rel="noopener noreferrer" className="underline font-medium hover:text-[#00DEC7]">WhatsApp</a>{" "}
                o envíanos el siguiente formulario y <span className="font-semibold">te responderemos en menos de 24 horas</span>.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00DEC7]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00DEC7]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00DEC7]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <textarea
                  placeholder="Mensaje *"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00DEC7] resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <label className="flex items-start gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={formData.privacy}
                    onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  />
                  He leído y acepto la <a href="/politica-de-privacidad" className="underline">política de privacidad</a>
                </label>
                <div className="text-center">
                  <Button type="submit" size="lg" className="bg-[#00DEC7] text-black hover:bg-[#00DEC7]/90 rounded-full px-12">
                    Enviar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Complementos Section */}
      <section className="py-20 lg:py-28 bg-[#00DEC7]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black">Complementos</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-black/60">TAMBIEN TE PUEDE INTERESAR</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {complementos.map((comp, index) => (
              <div
                key={index}
                className="group flex h-full flex-col rounded-2xl border border-black/0 bg-white/20 p-8 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-black/60 hover:bg-white/30"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-black/10 text-black">
                  <comp.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-black">{comp.title}</h3>
                <p className="text-black/70 italic mb-4">{comp.subtitle}</p>
                <ul className="mb-6 space-y-2">
                  {comp.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-black/80">
                      <Check className="h-4 w-4 text-black" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={comp.href} className="mt-auto inline-flex items-center gap-2 text-black font-semibold">
                  <span className="underline-offset-4 group-hover:underline">Más info</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DisenoWebClient
