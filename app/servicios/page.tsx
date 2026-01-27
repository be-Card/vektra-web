import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Monitor, ShoppingCart, TrendingUp, Search, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Servicios en Argentina y Paraguay | Diseño Web, SEO, Apps y Marketing Digital",
  description: "Servicios de diseño web, tiendas online, apps, SEO y marketing digital para empresas en Argentina y Paraguay. Google Ads, Meta Ads y TikTok Ads.",
  keywords: [
    "servicios digitales argentina",
    "servicios digitales paraguay",
    "diseño web",
    "tiendas online",
    "desarrollo de apps",
    "seo",
    "marketing digital",
    "google ads",
    "meta ads",
    "tiktok ads",
    "agencia digital buenos aires",
    "agencia digital asunción",
  ],
}

const services = [
  {
    title: "Diseño Web",
    description: "Páginas web modernas, rápidas y optimizadas que convierten visitantes en clientes.",
    icon: Monitor,
    href: "/servicios/diseno-web",
    features: [
      "Diseño personalizado y único",
      "100% Responsive y adaptable",
      "Optimizado para SEO",
      "Velocidad de carga optimizada",
      "Integración de formularios",
      "Panel de administración fácil",
    ],
    price: "Desde 1.500",
  },
  {
    title: "Tienda Online",
    description: "E-commerce profesional con WooCommerce o Shopify para vender tus productos online.",
    icon: ShoppingCart,
    href: "/servicios/tienda-online",
    features: [
      "Catálogo ilimitado de productos",
      "Pasarelas de pago seguras",
      "Gestión de inventario",
      "Sistema de envíos integrado",
      "Emails automatizados",
      "Panel de ventas y estadísticas",
    ],
    price: "Desde 2.500",
  },
  {
    title: "Marketing Digital",
    description: "Estrategias de marketing digital para aumentar tu visibilidad y generar más ventas.",
    icon: TrendingUp,
    href: "/servicios/marketing-digital",
    features: [
      "Estrategia personalizada",
      "Campañas en Google Ads y Meta Ads",
      "Email marketing",
      "Optimización de conversiones",
      "Análisis y reportes mensuales",
      "Optimización continua",
    ],
    price: "Desde 500/mes",
  },
  {
    title: "SEO",
    description: "Posicionamiento web en Google para que tus clientes te encuentren fácilmente.",
    icon: Search,
    href: "/servicios/seo",
    features: [
      "Auditoría SEO completa",
      "Optimización On-page",
      "SEO Local para negocios",
      "Link building estratégico",
      "Análisis de competencia",
      "Reportes de posicionamiento",
    ],
    price: "Desde 400/mes",
  },
]

export default function Servicios() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent mb-6">
            Servicios
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground text-balance max-w-4xl mx-auto">
            Soluciones digitales completas para tu negocio
          </h1>
          <p className="mt-6 text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Ofrecemos servicios integrales de diseño web y marketing digital. 
            Cada solución está diseñada para ayudarte a alcanzar tus objetivos de negocio.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <Card key={service.title} className="relative overflow-hidden border-border/50 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">Desde</span>
                      <div className="text-2xl font-bold text-foreground">{service.price}€</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl mt-4">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href={service.href}>
                      Ver detalles
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-accent">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-accent-foreground text-balance">
            ¿No sabés qué servicio necesitás?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Contanos tu proyecto y te recomendaremos la mejor solución. 
            Primera consulta gratuita y sin compromiso.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contacto">
                Solicitar consulta gratuita
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
