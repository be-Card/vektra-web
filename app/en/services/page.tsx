import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Monitor, ShoppingCart, TrendingUp, Search, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Services Worldwide | Web Design, SEO, Apps and Digital Marketing",
  description: "Web design services, online stores, apps, SEO and digital marketing for companies worldwide. Google Ads, Meta Ads and TikTok Ads.",
  keywords: [
    "digital services worldwide",
    "global web design",
    "online stores",
    "app development",
    "seo",
    "digital marketing",
    "google ads",
    "meta ads",
    "tiktok ads",
    "international digital agency",
  ],
}

const services = [
  {
    title: "Web Design",
    description: "Modern, fast and optimized websites that convert visitors into customers.",
    icon: Monitor,
    href: "/en/services/web-design",
    features: [
      "Custom and unique design",
      "100% Responsive and adaptable",
      "SEO Optimized",
      "Optimized loading speed",
      "Form integration",
      "Easy administration panel",
    ],
    price: "From 1.500",
  },
  {
    title: "Online Store",
    description: "Professional e-commerce with WooCommerce or Shopify to sell your products online.",
    icon: ShoppingCart,
    href: "/en/services/online-store",
    features: [
      "Unlimited product catalog",
      "Secure payment gateways",
      "Inventory management",
      "Integrated shipping system",
      "Automated emails",
      "Sales panel and statistics",
    ],
    price: "From 2.500",
  },
  {
    title: "Digital Marketing",
    description: "Digital marketing strategies to increase your visibility and generate more sales.",
    icon: TrendingUp,
    href: "/en/services/digital-marketing",
    features: [
      "Personalized strategy",
      "Google Ads and Meta Ads campaigns",
      "Email marketing",
      "Conversion optimization",
      "Monthly analysis and reports",
      "Continuous optimization",
    ],
    price: "From 500/mo",
  },
  {
    title: "SEO",
    description: "Web positioning in Google so your customers can find you easily.",
    icon: Search,
    href: "/en/servicios/seo",
    features: [
      "Complete SEO Audit",
      "On-page Optimization",
      "Local SEO for businesses",
      "Strategic Link building",
      "Competitor analysis",
      "Ranking reports",
    ],
    price: "From 400/mo",
  },
]

export default function Servicios() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent mb-6">
            Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground text-balance max-w-4xl mx-auto">
            Complete digital solutions for your business
          </h1>
          <p className="mt-6 text-base sm:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We offer comprehensive web design and digital marketing services.
            Each solution is designed to help you achieve your business goals.
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
                      <span className="text-sm text-muted-foreground">From</span>
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
                      View details
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
            Don&apos;t know what service you need?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-accent-foreground/80 max-w-2xl mx-auto">
            Tell us about your project and we will recommend the best solution.
            First consultation free and without obligation.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/en/contact">
                Request free consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
