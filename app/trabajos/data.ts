
export type Project = {
  id: number
  title: string
  category: "diseno-web" | "tienda-online" | "apps" | "marketing-digital" | "seo" | "agentes-ia"
  categoryLabel: string
  date: string
  description: string
  image: string
  slug: string
  gallery?: string[]
  client?: string
  views?: number
  searchVolume?: number
  autoSearchVolume?: boolean
  website?: {
    label: string
    url: string
  }
}

export const allProjects: Project[] = [
  // --- APPS & DASHBOARDS ---
  {
    id: 1,
    title: "Dashboard Administrativo Agua Viva",
    category: "apps",
    categoryLabel: "Apps",
    date: "15.01.2026",
    description: "Desarrollo de aplicación web con React y Node.js para logística y distribución de agua purificada. Panel administrativo a medida.",
    image: "/placeholder.svg?text=Agua+Viva+Dashboard",
    slug: "agua-viva-dashboard",
    client: "Agua Viva"
  },
  {
    id: 2,
    title: "Dashboard Real Estate Rinova",
    category: "apps",
    categoryLabel: "Apps",
    date: "10.12.2025",
    description: "Plataforma institucional con dashboard integrado en React y Node.js para gestión de propiedades en Uruguay y Argentina.",
    image: "/placeholder.svg?text=Rinova+Real+Estate",
    slug: "rinova-dashboard",
    client: "Rinova"
  },
  {
    id: 3,
    title: "Sistema de Gestión OV Ocampo Vazquez",
    category: "apps",
    categoryLabel: "Apps",
    date: "05.11.2025",
    description: "Sitio institucional y dashboard de gestión en PHP para estudio jurídico y contable en Resistencia.",
    image: "/placeholder.svg?text=OV+Dashboard",
    slug: "ov-ocampo-vazquez-sistema",
    client: "OV Ocampo Vazquez"
  },
  {
    id: 4,
    title: "App de Turnos Odontológicos Rie App",
    category: "apps",
    categoryLabel: "Apps & Sistemas",
    date: "20.10.2025",
    description: "Aplicación móvil desarrollada en Flutter para reserva de turnos y gestión de pacientes en odontología.",
    image: "/placeholder.svg?text=Rie+App",
    slug: "rie-app-flutter",
    client: "Rie App"
  },
  {
    id: 5,
    title: "Mantenimiento Dashboard Unicel",
    category: "apps",
    categoryLabel: "Apps",
    date: "01.09.2025",
    description: "Soporte y mantenimiento de dashboard en Vercel para servicio técnico de celulares.",
    image: "/placeholder.svg?text=Unicel+Dashboard",
    slug: "unicel-dashboard",
    client: "Unicel Logo"
  },

  // --- AGENTES IA ---
  {
    id: 6,
    title: "Landing con IA Golden Rise",
    category: "agentes-ia",
    categoryLabel: "Agentes IA",
    date: "12.01.2026",
    description: "Desarrollo de landing page con React, Node.js e integración de Inteligencia Artificial para automatización.",
    image: "/placeholder.svg?text=Golden+Rise+IA",
    slug: "golden-rise-ia",
    client: "Golden Rise"
  },
  {
    id: 7,
    title: "Agente de Ventas Lagoon Piscinas",
    category: "agentes-ia",
    categoryLabel: "Agentes IA",
    date: "15.11.2025",
    description: "Implementación de agente IA para atención al cliente y ventas 24/7 de piscinas de fibra de vidrio.",
    image: "/placeholder.svg?text=Lagoon+IA+Agent",
    slug: "lagoon-piscinas-ia",
    client: "Lagoon Piscinas"
  },
  {
    id: 8,
    title: "Landing Page IA CR Jewelry",
    category: "agentes-ia",
    categoryLabel: "Agentes IA",
    date: "05.10.2025",
    description: "Desarrollo web con integración de IA para joyería, mejorando la experiencia de usuario y atención.",
    image: "/placeholder.svg?text=CR+Jewelry+IA",
    slug: "cr-jewelry-ia",
    client: "CR Jewelry"
  },

  // --- TIENDA ONLINE ---
  {
    id: 9,
    title: "Ecommerce Blooming Estética",
    category: "tienda-online",
    categoryLabel: "Tienda Online",
    date: "20.12.2025",
    description: "Desarrollo de tienda online completa para venta de productos de estética y belleza.",
    image: "/placeholder.svg?text=Blooming+Ecommerce",
    slug: "blooming-ecommerce",
    client: "Blooming"
  },
  {
    id: 10,
    title: "Ecommerce Chispa CR",
    category: "tienda-online",
    categoryLabel: "Tienda Online",
    date: "15.11.2025",
    description: "Sitio web y ecommerce para venta de productos de leña y carbón en Costa Rica.",
    image: "/placeholder.svg?text=Chispa+CR",
    slug: "chispa-cr-ecommerce",
    client: "Chispa CR"
  },
  {
    id: 11,
    title: "Ecommerce MG Interspace",
    category: "tienda-online",
    categoryLabel: "Tienda Online",
    date: "10.10.2025",
    description: "Correcciones y optimización de sitio web institucional y tienda online en WordPress.",
    image: "/placeholder.svg?text=MG+Interspace",
    slug: "mg-interspace-ecommerce",
    client: "MG Interspace"
  },
  {
    id: 12,
    title: "Ecommerce KOMSA",
    category: "tienda-online",
    categoryLabel: "Tienda Online",
    date: "05.09.2025",
    description: "Desarrollo de sitio web institucional y ecommerce con WooCommerce para empresa de equipos de impresión.",
    image: "/placeholder.svg?text=KOMSA+Store",
    slug: "komsa-ecommerce",
    client: "KOMSA"
  },
  {
    id: 13,
    title: "Ecommerce North Motors Honda",
    category: "tienda-online",
    categoryLabel: "Tienda Online",
    date: "25.08.2025",
    description: "Sitio web institucional y ecommerce para concesionario oficial Honda en el NEA.",
    image: "/placeholder.svg?text=North+Motors",
    slug: "north-motors-honda",
    client: "North Motors"
  },
  {
    id: 14,
    title: "Ecommerce Patagonia Steel Frame",
    category: "tienda-online",
    categoryLabel: "Tienda Online",
    date: "15.08.2025",
    description: "Plataforma web institucional y de venta online para empresa constructora de Steel Frame.",
    image: "/placeholder.svg?text=Patagonia+Steel",
    slug: "patagonia-steel-frame",
    client: "Patagonia Steel Frame"
  },
  {
    id: 15,
    title: "Ecommerce UNAMOR Vinilos",
    category: "tienda-online",
    categoryLabel: "Tienda Online",
    date: "01.08.2025",
    description: "Desarrollo de ecommerce en WordPress para venta de vinilos impresos en toda Argentina.",
    image: "/placeholder.svg?text=UNAMOR+Store",
    slug: "unamor-ecommerce",
    client: "UNAMOR"
  },

  // --- MARKETING DIGITAL ---
  {
    id: 16,
    title: "Campaña Google Ads BlueBeachBali",
    category: "marketing-digital",
    categoryLabel: "Marketing Digital",
    date: "10.01.2026",
    description: "Generación de leads para real estate en Bali, Indonesia mediante Google Ads.",
    image: "/placeholder.svg?text=BlueBeachBali+Ads",
    slug: "bluebeachbali-ads",
    client: "Bluebeachbali"
  },
  {
    id: 17,
    title: "Campaña Awareness Cabana Club",
    category: "marketing-digital",
    categoryLabel: "Marketing Digital",
    date: "05.12.2025",
    description: "Campaña de Google Ads para reconocimiento de marca y visitas al club en Austin, Texas.",
    image: "/placeholder.svg?text=Cabana+Club+Ads",
    slug: "cabana-club-ads",
    client: "Cabana Club"
  },
  {
    id: 18,
    title: "Google Ads Perros Callejeros",
    category: "marketing-digital",
    categoryLabel: "Marketing Digital",
    date: "20.11.2025",
    description: "Campaña de ventas para ecommerce de merchandising en toda España.",
    image: "/placeholder.svg?text=Perros+Callejeros+Ads",
    slug: "perros-callejeros-ads",
    client: "Perros Callejeros"
  },
  {
    id: 19,
    title: "Awareness Centenario Shopping",
    category: "marketing-digital",
    categoryLabel: "Marketing Digital",
    date: "15.10.2025",
    description: "Campaña en Google Ads para generar visitas y reconocimiento del shopping en Corrientes/Resistencia.",
    image: "/placeholder.svg?text=Centenario+Shopping",
    slug: "centenario-shopping-ads",
    client: "Centenario Shopping"
  },
  {
    id: 20,
    title: "Google Ads Natos y Waor",
    category: "marketing-digital",
    categoryLabel: "Marketing Digital",
    date: "01.10.2025",
    description: "Campaña de performance para venta de merchandising de banda de rap en España.",
    image: "/placeholder.svg?text=Natos+y+Waor",
    slug: "natos-waor-ads",
    client: "Natos y Waor"
  },
  {
    id: 21,
    title: "Lead Gen Remax Tradición",
    category: "marketing-digital",
    categoryLabel: "Marketing Digital",
    date: "25.09.2025",
    description: "Campaña en Meta Ads para captación de agentes inmobiliarios en Resistencia, Chaco.",
    image: "/placeholder.svg?text=Remax+Ads",
    slug: "remax-tradicion-meta",
    client: "Remax Tradición"
  },
  {
    id: 22,
    title: "Campaña Uniplaza Shopping",
    category: "marketing-digital",
    categoryLabel: "Marketing Digital",
    date: "10.09.2025",
    description: "Estrategia de awareness y visitas físicas mediante Google Ads en Corrientes.",
    image: "/placeholder.svg?text=Uniplaza+Ads",
    slug: "uniplaza-shopping-ads",
    client: "Uniplaza Shopping"
  },
  {
    id: 23,
    title: "Google Ads VHG Internet",
    category: "marketing-digital",
    categoryLabel: "Marketing Digital",
    date: "05.09.2025",
    description: "Campaña de reconocimiento para proveedor de internet en Curuzú Cuatiá.",
    image: "/placeholder.svg?text=VHG+Ads",
    slug: "vhg-ads",
    client: "VHG"
  },

  // --- SEO ---
  {
    id: 24,
    title: "SEO Integral ToRoomy",
    category: "seo",
    categoryLabel: "SEO",
    date: "01.12.2025",
    description: "Estrategia de SEO On-page y Off-page, generación de contenido y posicionamiento para app de alquileres en España.",
    image: "/placeholder.svg?text=ToRoomy+SEO",
    slug: "toroomy-seo",
    client: "ToRoomy"
  },
  {
    id: 25,
    title: "Posicionamiento Lorena Ramon",
    category: "seo",
    categoryLabel: "SEO",
    date: "15.11.2025",
    description: "SEO On-page y Off-page y estrategia de contenidos para psicóloga en Almería.",
    image: "/placeholder.svg?text=Lorena+Ramon+SEO",
    slug: "lorena-ramon-seo",
    client: "Lorena Ramon"
  },

  // --- DISEÑO WEB (LANDINGS & INSTITUCIONALES) ---
  {
    id: 26,
    title: "Landing Page Amate",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "28.01.2026",
    description: "Diseño y desarrollo de landing page institucional en WordPress.",
    image: "/placeholder.svg?text=Amate+Web",
    slug: "amate-landing",
    client: "Amate"
  },
  {
    id: 27,
    title: "Rediseño Web Arq Construcciones",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "25.01.2026",
    description: "Rediseño completo de sitio web corporativo en WordPress.",
    image: "/placeholder.svg?text=Arq+Construcciones",
    slug: "arq-construcciones-web",
    client: "Arq Construcciones"
  },
  {
    id: 28,
    title: "Landing Page Capital Partners",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "20.01.2026",
    description: "Desarrollo de landing page corporativa en WordPress.",
    image: "/placeholder.svg?text=Capital+Partners",
    slug: "capital-partners-landing",
    client: "Capital Partners CPC"
  },
  {
    id: 29,
    title: "Web Danpal LLC",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "15.01.2026",
    description: "Desarrollo de landing page en WordPress para mercado internacional.",
    image: "/placeholder.svg?text=Danpal+LLC",
    slug: "danpal-llc-web",
    client: "Danpal LLC"
  },
  {
    id: 30,
    title: "Rediseño Flatrock Farms",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "10.01.2026",
    description: "Rediseño web completo y creación de nuevas páginas para sitio de eventos en USA.",
    image: "/placeholder.svg?text=Flatrock+Farms",
    slug: "flatrock-farms-web",
    client: "Flatrockfarms"
  },
  {
    id: 31,
    title: "Web Freie Asociados",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "05.01.2026",
    description: "Landing page profesional desarrollada en WordPress.",
    image: "/placeholder.svg?text=Freie+Asociados",
    slug: "freie-asociados-web",
    client: "Freie Asociados"
  },
  {
    id: 32,
    title: "Web Lagoon Piscinas",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "28.12.2025",
    description: "Rediseño completo de sitio web de piscinas en WordPress.",
    image: "/placeholder.svg?text=Lagoon+Piscinas",
    slug: "lagoon-piscinas-web",
    client: "Lagoon Piscinas"
  },
  {
    id: 33,
    title: "Landing Auraimage",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "20.12.2025",
    description: "Desarrollo de landing page visual y moderna en WordPress.",
    image: "/placeholder.svg?text=Auraimage",
    slug: "auraimage-landing",
    client: "Auraimage"
  },
  {
    id: 34,
    title: "Rediseño BlueBeachBali",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "15.12.2025",
    description: "Rediseño de página web para venta de propiedades en Bali, Indonesia.",
    image: "/placeholder.svg?text=BlueBeachBali+Web",
    slug: "bluebeachbali-web",
    client: "Bluebeachbali"
  },
  {
    id: 35,
    title: "Rediseño Cabana Club",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "10.12.2025",
    description: "Rediseño de sitio web para club de eventos en Austin, Texas.",
    image: "/placeholder.svg?text=Cabana+Club",
    slug: "cabana-club-web",
    client: "Cabana Club"
  },
  {
    id: 36,
    title: "Web Estudio Claudiani",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "05.12.2025",
    description: "Landing page para estudio jurídico en Resistencia, Chaco.",
    image: "/placeholder.svg?text=Estudio+Claudiani",
    slug: "estudio-claudiani-web",
    client: "Estudio Claudiani"
  },
  {
    id: 37,
    title: "Diseño Concretar+",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "01.12.2025",
    description: "Diseño de página web para negocio de Real Estate en Resistencia.",
    image: "/placeholder.svg?text=Concretar+",
    slug: "concretar-plus-web",
    client: "Concretar+"
  },
  {
    id: 38,
    title: "Rediseño Vital Plus",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "25.11.2025",
    description: "Rediseño completo de landing page en plataforma WIX.",
    image: "/placeholder.svg?text=Vital+Plus",
    slug: "vital-plus-web",
    client: "Vital Plus"
  },
  {
    id: 39,
    title: "Landing Vibrarmkt",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "20.11.2025",
    description: "Desarrollo de landing page para agencia de marketing en el NEA.",
    image: "/placeholder.svg?text=Vibrarmkt",
    slug: "vibrarmkt-web",
    client: "Vibrarmkt"
  },
  {
    id: 40,
    title: "Institucional Arqom",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "15.11.2025",
    description: "Desarrollo de página institucional para rubro inmobiliario.",
    image: "/placeholder.svg?text=Arqom",
    slug: "arqom-web",
    client: "Arqom"
  },
  {
    id: 41,
    title: "Landing Remont",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "10.11.2025",
    description: "Desarrollo de landing page para empresa constructora.",
    image: "/placeholder.svg?text=Remont",
    slug: "remont-web",
    client: "Remont"
  },
  {
    id: 42,
    title: "Web Clinic FSC",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "05.11.2025",
    description: "Landing page en WordPress para clínica/servicios médicos.",
    image: "/placeholder.svg?text=Clinic+FSC",
    slug: "clinic-fsc-web",
    client: "Clinic FSC"
  },
  {
    id: 43,
    title: "Institucional BENS",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "01.11.2025",
    description: "Página institucional para consultora de Revenue Management hotelero.",
    image: "/placeholder.svg?text=BENS",
    slug: "bens-web",
    client: "BENS"
  },
  {
    id: 44,
    title: "Landing Blucoversp",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "25.10.2025",
    description: "Desarrollo de landing page en WordPress.",
    image: "/placeholder.svg?text=Blucoversp",
    slug: "blucoversp-web",
    client: "Blucoversp"
  },
  {
    id: 45,
    title: "Landing Celmify",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "20.10.2025",
    description: "Desarrollo de landing page en WordPress.",
    image: "/placeholder.svg?text=Celmify",
    slug: "celmify-web",
    client: "Celmify"
  },
  {
    id: 46,
    title: "Rediseño El Tránsito Hotel",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "15.10.2025",
    description: "Rediseño de página web para hotel All Inclusive en Corrientes.",
    image: "/placeholder.svg?text=El+Transito+Hotel",
    slug: "el-transito-hotel-web",
    client: "El Transito Hotel"
  },
  {
    id: 47,
    title: "Web Forte Automotores",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "10.10.2025",
    description: "Landing page para taller automotor en Puerto Rico.",
    image: "/placeholder.svg?text=Forte+Automotores",
    slug: "forte-automotores-web",
    client: "Forte Automotores"
  },
  {
    id: 48,
    title: "Web Freire",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "05.10.2025",
    description: "Desarrollo de landing page en WordPress.",
    image: "/placeholder.svg?text=Freire+Web",
    slug: "freire-web",
    client: "Freire"
  },
  {
    id: 49,
    title: "Landing Mentionfyus",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "01.10.2025",
    description: "Desarrollo de landing page moderna en WordPress.",
    image: "/placeholder.svg?text=Mentionfyus",
    slug: "mentionfyus-web",
    client: "Mentionfyus"
  },
  {
    id: 50,
    title: "Web Minetrax",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "25.09.2025",
    description: "Desarrollo de landing page en WordPress.",
    image: "/placeholder.svg?text=Minetrax",
    slug: "minetrax-web",
    client: "Minetrax"
  },
  {
    id: 51,
    title: "Web Quantum Boost",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "20.09.2025",
    description: "Sitio web institucional para página de apuestas en España.",
    image: "/placeholder.svg?text=Quantum+Boost",
    slug: "quantum-boost-web",
    client: "Quantum Boost"
  },
  {
    id: 52,
    title: "Landing Sky Technologies",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "15.09.2025",
    description: "Desarrollo de landing page tecnológica en WordPress.",
    image: "/placeholder.svg?text=Sky+Technologies",
    slug: "sky-technologies-web",
    client: "Sky Technologies"
  },
  {
    id: 53,
    title: "Web Smoke Master",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "10.09.2025",
    description: "Landing page para venta de comida en Puerto Rico.",
    image: "/placeholder.svg?text=Smoke+Master",
    slug: "smoke-master-web",
    client: "Smoke Master"
  },
  {
    id: 54,
    title: "Web Soluciones Fragos",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "05.09.2025",
    description: "Landing page para agencia de marketing.",
    image: "/placeholder.svg?text=Soluciones+Fragos",
    slug: "soluciones-fragos-web",
    client: "Soluciones Fragos"
  },
  {
    id: 55,
    title: "Landing Mentionfyjil",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "01.09.2025",
    description: "Desarrollo de landing page en WordPress.",
    image: "/placeholder.svg?text=Mentionfyjil",
    slug: "mentionfyjil-web",
    client: "Mentionfyjil"
  },
  {
    id: 56,
    title: "Web Move&Save",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "25.08.2025",
    description: "Landing page para servicio de mudanzas.",
    image: "/placeholder.svg?text=Move+Save",
    slug: "move-save-web",
    client: "Move&Save"
  },
  {
    id: 57,
    title: "Institucional Patagonia Construcciones",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "20.08.2025",
    description: "Sitio web institucional para empresa constructora en el NEA.",
    image: "/placeholder.svg?text=Patagonia+Construcciones",
    slug: "patagonia-construcciones-web",
    client: "Patagonia Construcciones"
  },
  {
    id: 58,
    title: "Rediseño Home Toinvesto",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "15.08.2025",
    description: "Rediseño de la página de inicio (Home) en WordPress.",
    image: "/placeholder.svg?text=Toinvesto",
    slug: "toinvesto-web",
    client: "Toinvesto"
  },
  {
    id: 59,
    title: "Mapas Unión Mayorista",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "10.08.2025",
    description: "Rediseño de mapas de locales para tienda mayorista en Puerto Rico.",
    image: "/placeholder.svg?text=Union+Mayorista",
    slug: "union-mayorista-web",
    client: "Unión Mayorista"
  },
  {
    id: 60,
    title: "Institucional Uniplaza Shopping",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "05.08.2025",
    description: "Desarrollo de sitio web institucional para shopping en Corrientes.",
    image: "/placeholder.svg?text=Uniplaza+Web",
    slug: "uniplaza-shopping-web",
    client: "Uniplaza Shopping"
  },
  {
    id: 61,
    title: "Rediseño WorldHenna",
    category: "diseno-web",
    categoryLabel: "Diseño Web",
    date: "01.08.2025",
    description: "Rediseño web completo para artista de tatuajes en Miami, USA.",
    image: "/placeholder.svg?text=WorldHenna",
    slug: "worldhenna-web",
    client: "WorldHenna"
  }
]
