
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
    title: "Agua Viva Administrative Dashboard",
    category: "apps",
    categoryLabel: "Apps",
    date: "15.01.2026",
    description: "Web application development with React and Node.js for logistics and purified water distribution. Custom administrative panel.",
    image: "/placeholder.svg?text=Agua+Viva+Dashboard",
    slug: "agua-viva-dashboard",
    client: "Agua Viva"
  },
  {
    id: 2,
    title: "Rinova Real Estate Dashboard",
    category: "apps",
    categoryLabel: "Apps",
    date: "10.12.2025",
    description: "Institutional platform with integrated dashboard in React and Node.js for property management in Uruguay and Argentina.",
    image: "/placeholder.svg?text=Rinova+Real+Estate",
    slug: "rinova-dashboard",
    client: "Rinova"
  },
  {
    id: 3,
    title: "OV Ocampo Vazquez Management System",
    category: "apps",
    categoryLabel: "Apps",
    date: "05.11.2025",
    description: "Institutional site and management dashboard in PHP for legal and accounting firm in Resistencia.",
    image: "/placeholder.svg?text=OV+Dashboard",
    slug: "ov-ocampo-vazquez-sistema",
    client: "OV Ocampo Vazquez"
  },
  {
    id: 4,
    title: "Rie App Dental Appointments",
    category: "apps",
    categoryLabel: "Apps & Systems",
    date: "20.10.2025",
    description: "Mobile application developed in Flutter for appointment booking and patient management in dentistry.",
    image: "/placeholder.svg?text=Rie+App",
    slug: "rie-app-flutter",
    client: "Rie App"
  },
  {
    id: 5,
    title: "Unicel Dashboard Maintenance",
    category: "apps",
    categoryLabel: "Apps",
    date: "01.09.2025",
    description: "Support and maintenance of Vercel dashboard for cell phone technical service.",
    image: "/placeholder.svg?text=Unicel+Dashboard",
    slug: "unicel-dashboard",
    client: "Unicel Logo"
  },

  // --- AI AGENTS ---
  {
    id: 6,
    title: "Golden Rise AI Landing",
    category: "agentes-ia",
    categoryLabel: "AI Agents",
    date: "12.01.2026",
    description: "Landing page development with React, Node.js and Artificial Intelligence integration for automation.",
    image: "/placeholder.svg?text=Golden+Rise+IA",
    slug: "golden-rise-ia",
    client: "Golden Rise"
  },
  {
    id: 7,
    title: "Lagoon Piscinas Sales Agent",
    category: "agentes-ia",
    categoryLabel: "AI Agents",
    date: "15.11.2025",
    description: "Implementation of AI agent for customer service and 24/7 sales of fiberglass pools.",
    image: "/placeholder.svg?text=Lagoon+IA+Agent",
    slug: "lagoon-piscinas-ia",
    client: "Lagoon Piscinas"
  },
  {
    id: 8,
    title: "CR Jewelry AI Landing Page",
    category: "agentes-ia",
    categoryLabel: "AI Agents",
    date: "05.10.2025",
    description: "Web development with AI integration for jewelry store, improving user experience and attention.",
    image: "/placeholder.svg?text=CR+Jewelry+IA",
    slug: "cr-jewelry-ia",
    client: "CR Jewelry"
  },

  // --- ONLINE STORE ---
  {
    id: 9,
    title: "Blooming Estética Ecommerce",
    category: "tienda-online",
    categoryLabel: "Online Store",
    date: "20.12.2025",
    description: "Complete online store development for sale of aesthetics and beauty products.",
    image: "/placeholder.svg?text=Blooming+Ecommerce",
    slug: "blooming-ecommerce",
    client: "Blooming"
  },
  {
    id: 10,
    title: "Chispa CR Ecommerce",
    category: "tienda-online",
    categoryLabel: "Online Store",
    date: "15.11.2025",
    description: "Website and ecommerce for sale of firewood and charcoal products in Costa Rica.",
    image: "/placeholder.svg?text=Chispa+CR",
    slug: "chispa-cr-ecommerce",
    client: "Chispa CR"
  },
  {
    id: 11,
    title: "MG Interspace Ecommerce",
    category: "tienda-online",
    categoryLabel: "Online Store",
    date: "10.10.2025",
    description: "Corrections and optimization of institutional website and online store in WordPress.",
    image: "/placeholder.svg?text=MG+Interspace",
    slug: "mg-interspace-ecommerce",
    client: "MG Interspace"
  },
  {
    id: 12,
    title: "KOMSA Ecommerce",
    category: "tienda-online",
    categoryLabel: "Online Store",
    date: "05.09.2025",
    description: "Development of institutional website and ecommerce with WooCommerce for printing equipment company.",
    image: "/placeholder.svg?text=KOMSA+Store",
    slug: "komsa-ecommerce",
    client: "KOMSA"
  },
  {
    id: 13,
    title: "North Motors Honda Ecommerce",
    category: "tienda-online",
    categoryLabel: "Online Store",
    date: "25.08.2025",
    description: "Institutional website and ecommerce for official Honda dealership in the NEA region.",
    image: "/placeholder.svg?text=North+Motors",
    slug: "north-motors-honda",
    client: "North Motors"
  },
  {
    id: 14,
    title: "Patagonia Steel Frame Ecommerce",
    category: "tienda-online",
    categoryLabel: "Online Store",
    date: "15.08.2025",
    description: "Institutional web platform and online sales for Steel Frame construction company.",
    image: "/placeholder.svg?text=Patagonia+Steel",
    slug: "patagonia-steel-frame",
    client: "Patagonia Steel Frame"
  },
  {
    id: 15,
    title: "UNAMOR Vinyls Ecommerce",
    category: "tienda-online",
    categoryLabel: "Online Store",
    date: "01.08.2025",
    description: "Development of ecommerce in WordPress for sale of printed vinyls throughout Argentina.",
    image: "/placeholder.svg?text=UNAMOR+Store",
    slug: "unamor-ecommerce",
    client: "UNAMOR"
  },

  // --- DIGITAL MARKETING ---
  {
    id: 16,
    title: "BlueBeachBali Google Ads Campaign",
    category: "marketing-digital",
    categoryLabel: "Digital Marketing",
    date: "10.01.2026",
    description: "Lead generation for real estate in Bali, Indonesia through Google Ads.",
    image: "/placeholder.svg?text=BlueBeachBali+Ads",
    slug: "bluebeachbali-ads",
    client: "Bluebeachbali"
  },
  {
    id: 17,
    title: "Cabana Club Awareness Campaign",
    category: "marketing-digital",
    categoryLabel: "Digital Marketing",
    date: "05.12.2025",
    description: "Google Ads campaign for brand awareness and club visits in Austin, Texas.",
    image: "/placeholder.svg?text=Cabana+Club+Ads",
    slug: "cabana-club-ads",
    client: "Cabana Club"
  },
  {
    id: 18,
    title: "Perros Callejeros Google Ads",
    category: "marketing-digital",
    categoryLabel: "Digital Marketing",
    date: "20.11.2025",
    description: "Sales campaign for merchandising ecommerce throughout Spain.",
    image: "/placeholder.svg?text=Perros+Callejeros+Ads",
    slug: "perros-callejeros-ads",
    client: "Perros Callejeros"
  },
  {
    id: 19,
    title: "Centenario Shopping Awareness",
    category: "marketing-digital",
    categoryLabel: "Digital Marketing",
    date: "15.10.2025",
    description: "Google Ads campaign to generate visits and recognition of the shopping mall in Corrientes/Resistencia.",
    image: "/placeholder.svg?text=Centenario+Shopping",
    slug: "centenario-shopping-ads",
    client: "Centenario Shopping"
  },
  {
    id: 20,
    title: "Natos y Waor Google Ads",
    category: "marketing-digital",
    categoryLabel: "Digital Marketing",
    date: "01.10.2025",
    description: "Performance campaign for merchandising sales of rap band in Spain.",
    image: "/placeholder.svg?text=Natos+y+Waor",
    slug: "natos-waor-ads",
    client: "Natos y Waor"
  },
  {
    id: 21,
    title: "Remax Tradición Lead Gen",
    category: "marketing-digital",
    categoryLabel: "Digital Marketing",
    date: "25.09.2025",
    description: "Meta Ads campaign for recruiting real estate agents in Resistencia, Chaco.",
    image: "/placeholder.svg?text=Remax+Ads",
    slug: "remax-tradicion-meta",
    client: "Remax Tradición"
  },
  {
    id: 22,
    title: "Uniplaza Shopping Campaign",
    category: "marketing-digital",
    categoryLabel: "Digital Marketing",
    date: "10.09.2025",
    description: "Awareness strategy and physical visits through Google Ads in Corrientes.",
    image: "/placeholder.svg?text=Uniplaza+Ads",
    slug: "uniplaza-shopping-ads",
    client: "Uniplaza Shopping"
  },
  {
    id: 23,
    title: "VHG Internet Google Ads",
    category: "marketing-digital",
    categoryLabel: "Digital Marketing",
    date: "05.09.2025",
    description: "Awareness campaign for internet provider in Curuzú Cuatiá.",
    image: "/placeholder.svg?text=VHG+Ads",
    slug: "vhg-ads",
    client: "VHG"
  },

  // --- SEO ---
  {
    id: 24,
    title: "ToRoomy Integral SEO",
    category: "seo",
    categoryLabel: "SEO",
    date: "01.12.2025",
    description: "On-page and Off-page SEO strategy, content generation and positioning for rental app in Spain.",
    image: "/placeholder.svg?text=ToRoomy+SEO",
    slug: "toroomy-seo",
    client: "ToRoomy"
  },
  {
    id: 25,
    title: "Lorena Ramon Positioning",
    category: "seo",
    categoryLabel: "SEO",
    date: "15.11.2025",
    description: "On-page and Off-page SEO and content strategy for psychologist in Almería.",
    image: "/placeholder.svg?text=Lorena+Ramon+SEO",
    slug: "lorena-ramon-seo",
    client: "Lorena Ramon"
  },

  // --- WEB DESIGN (LANDINGS & INSTITUTIONAL) ---
  {
    id: 26,
    title: "Amate Landing Page",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "28.01.2026",
    description: "Design and development of institutional landing page in WordPress.",
    image: "/placeholder.svg?text=Amate+Web",
    slug: "amate-landing",
    client: "Amate"
  },
  {
    id: 27,
    title: "Arq Construcciones Web Redesign",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "25.01.2026",
    description: "Complete redesign of corporate website in WordPress.",
    image: "/placeholder.svg?text=Arq+Construcciones",
    slug: "arq-construcciones-web",
    client: "Arq Construcciones"
  },
  {
    id: 28,
    title: "Capital Partners Landing Page",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "20.01.2026",
    description: "Development of corporate landing page in WordPress.",
    image: "/placeholder.svg?text=Capital+Partners",
    slug: "capital-partners-landing",
    client: "Capital Partners CPC"
  },
  {
    id: 29,
    title: "Danpal LLC Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "15.01.2026",
    description: "Development of landing page in WordPress for international market.",
    image: "/placeholder.svg?text=Danpal+LLC",
    slug: "danpal-llc-web",
    client: "Danpal LLC"
  },
  {
    id: 30,
    title: "Flatrock Farms Redesign",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "10.01.2026",
    description: "Complete web redesign and creation of new pages for event site in USA.",
    image: "/placeholder.svg?text=Flatrock+Farms",
    slug: "flatrock-farms-web",
    client: "Flatrockfarms"
  },
  {
    id: 31,
    title: "Freie Asociados Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "05.01.2026",
    description: "Professional landing page developed in WordPress.",
    image: "/placeholder.svg?text=Freie+Asociados",
    slug: "freie-asociados-web",
    client: "Freie Asociados"
  },
  {
    id: 32,
    title: "Lagoon Piscinas Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "28.12.2025",
    description: "Complete redesign of pool website in WordPress.",
    image: "/placeholder.svg?text=Lagoon+Piscinas",
    slug: "lagoon-piscinas-web",
    client: "Lagoon Piscinas"
  },
  {
    id: 33,
    title: "Auraimage Landing",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "20.12.2025",
    description: "Development of visual and modern landing page in WordPress.",
    image: "/placeholder.svg?text=Auraimage",
    slug: "auraimage-landing",
    client: "Auraimage"
  },
  {
    id: 34,
    title: "BlueBeachBali Redesign",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "15.12.2025",
    description: "Redesign of website for property sales in Bali, Indonesia.",
    image: "/placeholder.svg?text=BlueBeachBali+Web",
    slug: "bluebeachbali-web",
    client: "Bluebeachbali"
  },
  {
    id: 35,
    title: "Cabana Club Redesign",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "10.12.2025",
    description: "Redesign of website for event club in Austin, Texas.",
    image: "/placeholder.svg?text=Cabana+Club",
    slug: "cabana-club-web",
    client: "Cabana Club"
  },
  {
    id: 36,
    title: "Estudio Claudiani Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "05.12.2025",
    description: "Landing page for law firm in Resistencia, Chaco.",
    image: "/placeholder.svg?text=Estudio+Claudiani",
    slug: "estudio-claudiani-web",
    client: "Estudio Claudiani"
  },
  {
    id: 37,
    title: "Concretar+ Design",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "01.12.2025",
    description: "Web page design for Real Estate business in Resistencia.",
    image: "/placeholder.svg?text=Concretar+",
    slug: "concretar-plus-web",
    client: "Concretar+"
  },
  {
    id: 38,
    title: "Vital Plus Redesign",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "25.11.2025",
    description: "Complete redesign of landing page on WIX platform.",
    image: "/placeholder.svg?text=Vital+Plus",
    slug: "vital-plus-web",
    client: "Vital Plus"
  },
  {
    id: 39,
    title: "Vibrarmkt Landing",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "20.11.2025",
    description: "Development of landing page for marketing agency in the NEA.",
    image: "/placeholder.svg?text=Vibrarmkt",
    slug: "vibrarmkt-web",
    client: "Vibrarmkt"
  },
  {
    id: 40,
    title: "Arqom Institutional",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "15.11.2025",
    description: "Development of institutional page for real estate sector.",
    image: "/placeholder.svg?text=Arqom",
    slug: "arqom-web",
    client: "Arqom"
  },
  {
    id: 41,
    title: "Remont Landing",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "10.11.2025",
    description: "Development of landing page for construction company.",
    image: "/placeholder.svg?text=Remont",
    slug: "remont-web",
    client: "Remont"
  },
  {
    id: 42,
    title: "Clinic FSC Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "05.11.2025",
    description: "Landing page in WordPress for clinic/medical services.",
    image: "/placeholder.svg?text=Clinic+FSC",
    slug: "clinic-fsc-web",
    client: "Clinic FSC"
  },
  {
    id: 43,
    title: "BENS Institutional",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "01.11.2025",
    description: "Institutional page for hotel Revenue Management consultancy.",
    image: "/placeholder.svg?text=BENS",
    slug: "bens-web",
    client: "BENS"
  },
  {
    id: 44,
    title: "Blucoversp Landing",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "25.10.2025",
    description: "Development of landing page in WordPress.",
    image: "/placeholder.svg?text=Blucoversp",
    slug: "blucoversp-web",
    client: "Blucoversp"
  },
  {
    id: 45,
    title: "Celmify Landing",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "20.10.2025",
    description: "Development of landing page in WordPress.",
    image: "/placeholder.svg?text=Celmify",
    slug: "celmify-web",
    client: "Celmify"
  },
  {
    id: 46,
    title: "El Tránsito Hotel Redesign",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "15.10.2025",
    description: "Redesign of website for All Inclusive hotel in Corrientes.",
    image: "/placeholder.svg?text=El+Transito+Hotel",
    slug: "el-transito-hotel-web",
    client: "El Transito Hotel"
  },
  {
    id: 47,
    title: "Forte Automotores Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "10.10.2025",
    description: "Landing page for automotive workshop in Puerto Rico.",
    image: "/placeholder.svg?text=Forte+Automotores",
    slug: "forte-automotores-web",
    client: "Forte Automotores"
  },
  {
    id: 48,
    title: "Freire Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "05.10.2025",
    description: "Development of landing page in WordPress.",
    image: "/placeholder.svg?text=Freire+Web",
    slug: "freire-web",
    client: "Freire"
  },
  {
    id: 49,
    title: "Mentionfyus Landing",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "01.10.2025",
    description: "Development of modern landing page in WordPress.",
    image: "/placeholder.svg?text=Mentionfyus",
    slug: "mentionfyus-web",
    client: "Mentionfyus"
  },
  {
    id: 50,
    title: "Minetrax Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "25.09.2025",
    description: "Development of landing page in WordPress.",
    image: "/placeholder.svg?text=Minetrax",
    slug: "minetrax-web",
    client: "Minetrax"
  },
  {
    id: 51,
    title: "Quantum Boost Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "20.09.2025",
    description: "Institutional website for betting page in Spain.",
    image: "/placeholder.svg?text=Quantum+Boost",
    slug: "quantum-boost-web",
    client: "Quantum Boost"
  },
  {
    id: 52,
    title: "Sky Technologies Landing",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "15.09.2025",
    description: "Development of technological landing page in WordPress.",
    image: "/placeholder.svg?text=Sky+Technologies",
    slug: "sky-technologies-web",
    client: "Sky Technologies"
  },
  {
    id: 53,
    title: "Smoke Master Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "10.09.2025",
    description: "Landing page for food sales in Puerto Rico.",
    image: "/placeholder.svg?text=Smoke+Master",
    slug: "smoke-master-web",
    client: "Smoke Master"
  },
  {
    id: 54,
    title: "Soluciones Fragos Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "05.09.2025",
    description: "Landing page for marketing agency.",
    image: "/placeholder.svg?text=Soluciones+Fragos",
    slug: "soluciones-fragos-web",
    client: "Soluciones Fragos"
  },
  {
    id: 55,
    title: "Mentionfyjil Landing",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "01.09.2025",
    description: "Development of landing page in WordPress.",
    image: "/placeholder.svg?text=Mentionfyjil",
    slug: "mentionfyjil-web",
    client: "Mentionfyjil"
  },
  {
    id: 56,
    title: "Move&Save Web",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "25.08.2025",
    description: "Landing page for moving service.",
    image: "/placeholder.svg?text=Move+Save",
    slug: "move-save-web",
    client: "Move&Save"
  },
  {
    id: 57,
    title: "Patagonia Construcciones Institutional",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "20.08.2025",
    description: "Institutional website for construction company in the NEA.",
    image: "/placeholder.svg?text=Patagonia+Construcciones",
    slug: "patagonia-construcciones-web",
    client: "Patagonia Construcciones"
  },
  {
    id: 58,
    title: "Toinvesto Home Redesign",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "15.08.2025",
    description: "Redesign of home page in WordPress.",
    image: "/placeholder.svg?text=Toinvesto",
    slug: "toinvesto-web",
    client: "Toinvesto"
  },
  {
    id: 59,
    title: "Unión Mayorista Maps",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "10.08.2025",
    description: "Redesign of store maps for wholesale store in Puerto Rico.",
    image: "/placeholder.svg?text=Union+Mayorista",
    slug: "union-mayorista-web",
    client: "Unión Mayorista"
  },
  {
    id: 60,
    title: "Uniplaza Shopping Institutional",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "05.08.2025",
    description: "Development of institutional website for shopping mall in Corrientes.",
    image: "/placeholder.svg?text=Uniplaza+Web",
    slug: "uniplaza-shopping-web",
    client: "Uniplaza Shopping"
  },
  {
    id: 61,
    title: "WorldHenna Redesign",
    category: "diseno-web",
    categoryLabel: "Web Design",
    date: "01.08.2025",
    description: "Complete web redesign for tattoo artist in Miami, USA.",
    image: "/placeholder.svg?text=WorldHenna",
    slug: "worldhenna-web",
    client: "WorldHenna"
  }
]
