
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image: string
  projectId?: string
  category: "diseno-web" | "tienda-online" | "marketing-digital" | "seo" | "apps" | "agentes-ia" | "automatizacion" | "diseno-ui-ux" | "mantenimiento-web" | "soporte-tecnico"
  language: "es" | "en"
}

export const initialTestimonials: Testimonial[] = [
  // Automatización (Golden Rise Copy)
  {
    id: "golden-rise-auto-es",
    name: "Daniel Clemente",
    role: "CTO",
    company: "Golden Rise",
    content: "La automatización con IA transformó nuestro flujo de trabajo. Ahorramos horas de gestión manual cada semana.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    category: "automatizacion",
    language: "es"
  },
  {
    id: "golden-rise-auto-en",
    name: "Daniel Clemente",
    role: "CTO",
    company: "Golden Rise",
    content: "AI automation transformed our workflow. We save hours of manual management every week.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    category: "automatizacion",
    language: "en"
  },
  // UI/UX (Auraimage Copy)
  {
    id: "auraimage-uiux-es",
    name: "Sebastian Aura",
    role: "Director Creativo",
    company: "Auraimage",
    content: "El diseño UI/UX es intuitivo y elegante. Nuestros usuarios navegan con facilidad y disfrutan la experiencia.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    category: "diseno-ui-ux",
    language: "es"
  },
  {
    id: "auraimage-uiux-en",
    name: "Sebastian Aura",
    role: "Creative Director",
    company: "Auraimage",
    content: "The UI/UX design is intuitive and elegant. Our users navigate with ease and enjoy the experience.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    category: "diseno-ui-ux",
    language: "en"
  },
  // Mantenimiento (Unicel Copy)
  {
    id: "unicel-maint-es",
    name: "David Unicel",
    role: "Técnico",
    company: "Unicel Logo",
    content: "El servicio de mantenimiento web es impecable. Nuestra plataforma siempre está actualizada y segura.",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    category: "mantenimiento-web",
    language: "es"
  },
  {
    id: "unicel-maint-en",
    name: "David Unicel",
    role: "Technician",
    company: "Unicel Logo",
    content: "The web maintenance service is impeccable. Our platform is always updated and secure.",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    category: "mantenimiento-web",
    language: "en"
  },
  // Soporte (VHG Copy)
  {
    id: "vhg-support-es",
    name: "Gisela Gomez",
    role: "CEO",
    company: "VHG",
    content: "El soporte técnico es rápido y eficiente. Resuelven cualquier incidencia en tiempo récord.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    category: "soporte-tecnico",
    language: "es"
  },
  {
    id: "vhg-support-en",
    name: "Gisela Gomez",
    role: "CEO",
    company: "VHG",
    content: "Technical support is fast and efficient. They resolve any issue in record time.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    category: "soporte-tecnico",
    language: "en"
  },
  // Agua Viva
  {
    id: "agua-viva-es",
    name: "Juan Pérez",
    role: "CEO",
    company: "Agua Viva",
    content: "El panel administrativo que desarrollaron con React y Node.js nos permitió organizar toda la logística de distribución de agua. Increíble trabajo.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "apps",
    language: "es"
  },
  {
    id: "agua-viva-en",
    name: "Juan Pérez",
    role: "CEO",
    company: "Agua Viva",
    content: "The admin dashboard they developed with React and Node.js allowed us to organize our entire water distribution logistics. Incredible work.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "apps",
    language: "en"
  },
  // Amate
  {
    id: "amate-es",
    name: "Amate",
    role: "Marketing Manager",
    company: "Amate",
    content: "Nuestra landing page en WordPress quedó hermosa, refleja perfectamente la esencia de la marca y carga muy rápido.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "amate-en",
    name: "Amate",
    role: "Marketing Manager",
    company: "Amate",
    content: "Our WordPress landing page looks beautiful, perfectly reflects the essence of the brand and loads very fast.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    category: "diseno-web",
    language: "en"
  },
  // ToRoomy
  {
    id: "toroomy-es",
    name: "David Sanchez Gomez",
    role: "CEO",
    company: "ToRoomy",
    content: "Gracias al trabajo de SEO on-page y off-page, nuestra app de gestión de alquileres subió posiciones rápidamente en España.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    category: "seo",
    language: "es"
  },
  {
    id: "toroomy-en",
    name: "David Sanchez Gomez",
    role: "CEO",
    company: "ToRoomy",
    content: "Thanks to the on-page and off-page SEO work, our rental management app quickly climbed the rankings in Spain.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    category: "seo",
    language: "en"
  },
  // Arq Construcciones
  {
    id: "arq-construcciones-es",
    name: "Alejandro Porfirio",
    role: "Director",
    company: "Arq Construcciones",
    content: "El rediseño de nuestra web modernizó completamente nuestra imagen como constructora. Muy profesionales.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "arq-construcciones-en",
    name: "Alejandro Porfirio",
    role: "Director",
    company: "Arq Construcciones",
    content: "The redesign of our website completely modernized our image as a construction company. Very professional.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Blooming
  {
    id: "blooming-es",
    name: "Priscila Farias",
    role: "Owner",
    company: "Blooming",
    content: "El ecommerce para nuestros productos de estética es muy fácil de usar y nuestras ventas online aumentaron desde el lanzamiento.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    category: "tienda-online",
    language: "es"
  },
  {
    id: "blooming-en",
    name: "Priscila Farias",
    role: "Owner",
    company: "Blooming",
    content: "The ecommerce for our aesthetic products is very easy to use and our online sales have increased since launch.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    category: "tienda-online",
    language: "en"
  },
  // Capital Partners CPC
  {
    id: "capital-partners-es",
    name: "Carlos Rodriguez",
    role: "Partner",
    company: "Capital Partners CPC",
    content: "Profesionalismo puro. La landing page transmite la confianza y solidez que buscábamos para nuestra firma.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "capital-partners-en",
    name: "Carlos Rodriguez",
    role: "Partner",
    company: "Capital Partners CPC",
    content: "Pure professionalism. The landing page conveys the trust and solidity we were looking for in our firm.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Danpal LLC
  {
    id: "danpal-es",
    name: "Maria Gonzalez",
    role: "Marketing",
    company: "Danpal LLC",
    content: "Nuestra landing page en WordPress superó nuestras expectativas. Diseño limpio y funcional.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "danpal-en",
    name: "Maria Gonzalez",
    role: "Marketing",
    company: "Danpal LLC",
    content: "Our WordPress landing page exceeded our expectations. Clean and functional design.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Flatrock Farms
  {
    id: "flatrock-farms-es",
    name: "Allende Montero",
    role: "Marketing Strategic",
    company: "Flatrock Farms",
    content: "El nuevo sitio web capturó la magia de nuestro lugar de eventos en Estados Unidos. Las reservas de bodas aumentaron.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "flatrock-farms-en",
    name: "Allende Montero",
    role: "Strategic Marketing",
    company: "Flatrock Farms",
    content: "The new website captured the magic of our event venue in the US. Wedding bookings increased.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Freie Asociados
  {
    id: "freie-asociados-es",
    name: "Roberto Freie",
    role: "Socio",
    company: "Freie Asociados",
    content: "Excelente trabajo en nuestra landing page. Clara, directa y muy bien optimizada.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "freie-asociados-en",
    name: "Roberto Freie",
    role: "Partner",
    company: "Freie Asociados",
    content: "Excellent work on our landing page. Clear, direct, and very well optimized.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Golden Rise
  {
    id: "golden-rise-es",
    name: "Daniel Clemente",
    role: "CTO",
    company: "Golden Rise",
    content: "La landing page con React y Node.js integrada con IA funciona de maravilla. Tecnología de punta.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    category: "agentes-ia",
    language: "es"
  },
  {
    id: "golden-rise-en",
    name: "Daniel Clemente",
    role: "CTO",
    company: "Golden Rise",
    content: "The landing page with React and Node.js integrated with AI works wonders. Cutting-edge technology.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    category: "agentes-ia",
    language: "en"
  },
  // Lagoon Piscinas (Web)
  {
    id: "lagoon-web-es",
    name: "Yamile Costa",
    role: "Gerente Comercial",
    company: "Lagoon Piscinas",
    content: "El sitio web de piscinas quedó espectacular, muy visual y rápido. Nuestros clientes pueden ver los modelos fácilmente.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "lagoon-web-en",
    name: "Yamile Costa",
    role: "Sales Manager",
    company: "Lagoon Piscinas",
    content: "The pool website looks spectacular, very visual and fast. Our clients can easily view the models.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Lagoon Piscinas (AI)
  {
    id: "lagoon-ai-es",
    name: "Yamile Costa",
    role: "Gerente Comercial",
    company: "Lagoon Piscinas",
    content: "El agente de IA atiende consultas sobre piscinas 24/7 y cierra ventas mientras dormimos. Una inversión excelente.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    category: "agentes-ia",
    language: "es"
  },
  {
    id: "lagoon-ai-en",
    name: "Yamile Costa",
    role: "Sales Manager",
    company: "Lagoon Piscinas",
    content: "The AI agent handles pool inquiries 24/7 and closes sales while we sleep. An excellent investment.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    category: "agentes-ia",
    language: "en"
  },
  // Auraimage
  {
    id: "auraimage-es",
    name: "Sebastian Aura",
    role: "Director Creativo",
    company: "Auraimage",
    content: "Superaron las expectativas con el diseño de nuestra web. Captaron perfectamente nuestra estética visual.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "auraimage-en",
    name: "Sebastian Aura",
    role: "Creative Director",
    company: "Auraimage",
    content: "They exceeded expectations with our website design. They perfectly captured our visual aesthetic.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    category: "diseno-web",
    language: "en"
  },
  // BlueBeachBali (Web)
  {
    id: "bluebeachbali-web-es",
    name: "Lucas Page",
    role: "Real Estate Agent",
    company: "BlueBeachBali",
    content: "Nuestra web de propiedades en Bali ahora luce profesional y atrae inversores internacionales.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "bluebeachbali-web-en",
    name: "Lucas Page",
    role: "Real Estate Agent",
    company: "BlueBeachBali",
    content: "Our property website in Bali now looks professional and attracts international investors.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    category: "diseno-web",
    language: "en"
  },
  // BlueBeachBali (Marketing)
  {
    id: "bluebeachbali-mkt-es",
    name: "Lucas Page",
    role: "Real Estate Agent",
    company: "BlueBeachBali",
    content: "La campaña de Google Ads nos trajo leads de calidad interesados en propiedades en Bali.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    category: "marketing-digital",
    language: "es"
  },
  {
    id: "bluebeachbali-mkt-en",
    name: "Lucas Page",
    role: "Real Estate Agent",
    company: "BlueBeachBali",
    content: "The Google Ads campaign brought us quality leads interested in Bali properties.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    category: "marketing-digital",
    language: "en"
  },
  // Cabana Club (Web)
  {
    id: "cabana-club-web-es",
    name: "Emilio Garza",
    role: "Manager",
    company: "Cabana Club",
    content: "El rediseño web captó la vibra de nuestro club en Austin, Texas. Se ve increíble en móviles.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "cabana-club-web-en",
    name: "Emilio Garza",
    role: "Manager",
    company: "Cabana Club",
    content: "The web redesign captured the vibe of our club in Austin, Texas. It looks amazing on mobile.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Cabana Club (Marketing)
  {
    id: "cabana-club-mkt-es",
    name: "Emilio Garza",
    role: "Manager",
    company: "Cabana Club",
    content: "Las campañas de awareness en Google Ads pusieron a Cabana Club en el mapa de Austin.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    category: "marketing-digital",
    language: "es"
  },
  {
    id: "cabana-club-mkt-en",
    name: "Emilio Garza",
    role: "Manager",
    company: "Cabana Club",
    content: "The Google Ads awareness campaigns put Cabana Club on the Austin map.",
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    category: "marketing-digital",
    language: "en"
  },
  // Chispa CR
  {
    id: "chispa-cr-es",
    name: "Chispa CR",
    role: "Fundador",
    company: "Chispa CR",
    content: "Vender nuestros productos de leña y carbón online en Costa Rica nunca fue tan fácil gracias al ecommerce.",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    category: "tienda-online",
    language: "es"
  },
  {
    id: "chispa-cr-en",
    name: "Chispa CR",
    role: "Founder",
    company: "Chispa CR",
    content: "Selling our firewood and charcoal products online in Costa Rica has never been easier thanks to the ecommerce.",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    category: "tienda-online",
    language: "en"
  },
  // Estudio Claudiani
  {
    id: "claudiani-es",
    name: "Luciana Claudiani",
    role: "Abogado",
    company: "Estudio Claudiani",
    content: "Una web sobria y profesional para nuestro estudio jurídico en Resistencia. Excelente atención.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "claudiani-en",
    name: "Luciana Claudiani",
    role: "Lawyer",
    company: "Estudio Claudiani",
    content: "A sober and professional website for our law firm in Resistencia. Excellent service.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Concretar+
  {
    id: "concretar-es",
    name: "Daniel Clemente",
    role: "Director",
    company: "Concretar+",
    content: "El diseño de nuestra página de Real Estate en Resistencia es moderno y funcional. Muy contentos.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "concretar-en",
    name: "Daniel Clemente",
    role: "Director",
    company: "Concretar+",
    content: "The design of our Real Estate page in Resistencia is modern and functional. Very happy.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    category: "diseno-web",
    language: "en"
  },
  // CR Jewelry
  {
    id: "cr-jewelry-es",
    name: "CR Jewelry",
    role: "CEO",
    company: "CR Jewelry",
    content: "La landing page es elegante y la integración con IA mejora la experiencia de nuestros clientes.",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "cr-jewelry-en",
    name: "CR Jewelry",
    role: "CEO",
    company: "CR Jewelry",
    content: "The landing page is elegant and the AI integration improves our customers' experience.",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Vital Plus
  {
    id: "vital-plus-es",
    name: "Fiorella M Heinzelbecker",
    role: "Owner",
    company: "Vial Plus",
    content: "El rediseño completo de nuestra landing page le dio nueva vida a nuestra marca.",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "vital-plus-en",
    name: "Fiorella M Heinzelbecker",
    role: "Owner",
    company: "Vial Plus",
    content: "The complete redesign of our landing page gave new life to our brand.",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Vibrarmkt
  {
    id: "vibrarmkt-es",
    name: "Zulma Echeverria",
    role: "Director",
    company: "Vibrarmkt",
    content: "Como agencia de marketing, necesitábamos una web impecable y Vektra cumplió con creces.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "vibrarmkt-en",
    name: "Zulma Echeverria",
    role: "Director",
    company: "Vibrarmkt",
    content: "As a marketing agency, we needed a flawless website and Vektra delivered perfectly.",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Arqom
  {
    id: "arqom-es",
    name: "Adrián Prieto Piragine",
    role: "Arquitecto",
    company: "Arqom",
    content: "Nuestra página institucional en WordPress transmite la seriedad de nuestro trabajo inmobiliario.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "arqom-en",
    name: "Adrián Prieto Piragine",
    role: "Architect",
    company: "Arqom",
    content: "Our institutional WordPress page conveys the seriousness of our real estate work.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Perros Callejeros
  {
    id: "perros-callejeros-es",
    name: "Roberto Ruiz",
    role: "Director de Marketing",
    company: "Perros Callejeros",
    content: "Las ventas de merchandising en España se dispararon con la campaña de Google Ads.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    category: "marketing-digital",
    language: "es"
  },
  {
    id: "perros-callejeros-en",
    name: "Roberto Ruiz",
    role: "Marketing Director",
    company: "Perros Callejeros",
    content: "Merchandising sales in Spain skyrocketed with the Google Ads campaign.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    category: "marketing-digital",
    language: "en"
  },
  // Remont
  {
    id: "remont-es",
    name: "Esteban Lafere",
    role: "Director de Obra",
    company: "Remont",
    content: "La landing page muestra nuestros proyectos de construcción de manera clara y atractiva.",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "remont-en",
    name: "Esteban Lafere",
    role: "Construction Manager",
    company: "Remont",
    content: "The landing page shows our construction projects in a clear and attractive way.",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Clinic FSC
  {
    id: "clinic-fsc-es",
    name: "Clinic FSC",
    role: "Doctor",
    company: "Clinic FSC",
    content: "Pacientes nuevos llegan todos los días gracias a la nueva landing page. Muy efectiva.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "clinic-fsc-en",
    name: "Clinic FSC",
    role: "Doctor",
    company: "Clinic FSC",
    content: "New patients arrive every day thanks to the new landing page. Very effective.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    category: "diseno-web",
    language: "en"
  },
  // BENS
  {
    id: "bens-es",
    name: "Esteban Bengochea",
    role: "Consultor",
    company: "BENS",
    content: "Nuestra web institucional es clave para presentar nuestros servicios de Revenue Management hotelero.",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "bens-en",
    name: "Esteban Bengochea",
    role: "Consultant",
    company: "BENS",
    content: "Our institutional website is key to presenting our hotel Revenue Management services.",
    image: "https://randomuser.me/api/portraits/men/39.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Blucoversp
  {
    id: "blucoversp-es",
    name: "Ana Blue",
    role: "Marketing",
    company: "Blucoversp",
    content: "Una landing page simple pero potente. Cumple su función a la perfección.",
    image: "https://randomuser.me/api/portraits/men/95.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "blucoversp-en",
    name: "Ana Blue",
    role: "Marketing",
    company: "Blucoversp",
    content: "A simple but powerful landing page. It fulfills its function perfectly.",
    image: "https://randomuser.me/api/portraits/men/95.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Celmify
  {
    id: "celmify-es",
    name: "Lucas Celmi",
    role: "Founder",
    company: "Celmify",
    content: "El desarrollo de nuestra landing page fue rápido y el resultado final es excelente.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "celmify-en",
    name: "Lucas Celmi",
    role: "Founder",
    company: "Celmify",
    content: "The development of our landing page was fast and the final result is excellent.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Centenario Shopping
  {
    id: "centenario-shopping-es",
    name: "Martin Paz",
    role: "Gerente Comercial",
    company: "Centenario Shopping",
    content: "Logramos aumentar la afluencia al shopping en Corrientes con las campañas de awareness.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    category: "marketing-digital",
    language: "es"
  },
  {
    id: "centenario-shopping-en",
    name: "Martin Paz",
    role: "Commercial Manager",
    company: "Centenario Shopping",
    content: "We managed to increase foot traffic to the mall in Corrientes with the awareness campaigns.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    category: "marketing-digital",
    language: "en"
  },
  // MG Interspace
  {
    id: "mg-interspace-es",
    name: "Javier Invision",
    role: "CTO",
    company: "MG Interspace",
    content: "Las correcciones en nuestro ecommerce mejoraron la usabilidad y las ventas.",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
    category: "tienda-online",
    language: "es"
  },
  {
    id: "mg-interspace-en",
    name: "Javier Invision",
    role: "CTO",
    company: "MG Interspace",
    content: "The fixes on our ecommerce improved usability and sales.",
    image: "https://randomuser.me/api/portraits/men/82.jpg",
    category: "tienda-online",
    language: "en"
  },
  // El Transito Hotel
  {
    id: "el-transito-es",
    name: "Esteban Bengochea",
    role: "Gerente",
    company: "El Tránsito Hotel",
    content: "El rediseño refleja ahora la calidad de nuestro servicio All Inclusive. Las reservas directas aumentaron.",
    image: "https://randomuser.me/api/portraits/women/92.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "el-transito-en",
    name: "Esteban Bengochea",
    role: "Manager",
    company: "El Tránsito Hotel",
    content: "The redesign now reflects the quality of our All Inclusive service. Direct bookings increased.",
    image: "https://randomuser.me/api/portraits/women/92.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Forte Automotores
  {
    id: "forte-automotores-es",
    name: "Javier Invision",
    role: "Gerente",
    company: "Forte Automotores",
    content: "Nuestra presencia online mejoró mucho con la nueva landing page para nuestro taller.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "forte-automotores-en",
    name: "Javier Invision",
    role: "Manager",
    company: "Forte Automotores",
    content: "Our online presence improved a lot with the new landing page for our workshop.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Freire
  {
    id: "freire-es",
    name: "Carlos Freire",
    role: "Director",
    company: "Freire",
    content: "Landing page profesional y bien estructurada. Cumple con todo lo solicitado.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "freire-en",
    name: "Carlos Freire",
    role: "Director",
    company: "Freire",
    content: "Professional and well-structured landing page. Meets all requirements.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Komsa
  {
    id: "komsa-es",
    name: "Daniel Garcia",
    role: "CEO",
    company: "Komsa",
    content: "El catálogo de equipos de impresión se ve perfecto y el sitio es muy fácil de gestionar.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    category: "tienda-online",
    language: "es"
  },
  {
    id: "komsa-en",
    name: "Daniel Garcia",
    role: "CEO",
    company: "Komsa",
    content: "The printing equipment catalog looks perfect and the site is very easy to manage.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    category: "tienda-online",
    language: "en"
  },
  // Mentionfyus
  {
    id: "mentionfyus-es",
    name: "Marcos Mention",
    role: "CEO",
    company: "Mentionfyus",
    content: "Gran trabajo en nuestra landing page. El diseño es moderno y atractivo.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "mentionfyus-en",
    name: "Marcos Mention",
    role: "CEO",
    company: "Mentionfyus",
    content: "Great work on our landing page. The design is modern and attractive.",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Minetrax
  {
    id: "minetrax-es",
    name: "Julia Mine",
    role: "Admin",
    company: "Minetrax",
    content: "La landing page es rápida y eficaz. Justo lo que necesitábamos.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "minetrax-en",
    name: "Julia Mine",
    role: "Admin",
    company: "Minetrax",
    content: "The landing page is fast and effective. Just what we needed.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Natos y Waor
  {
    id: "natos-waor-es",
    name: "Roberto Ruiz",
    role: "Director de Marketing",
    company: "Natos y Waor",
    content: "La campaña para nuestro merch fue un éxito total en España. ROAS increíble.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    category: "marketing-digital",
    language: "es"
  },
  {
    id: "natos-waor-en",
    name: "Roberto Ruiz",
    role: "Marketing Director",
    company: "Natos y Waor",
    content: "The campaign for our merch was a total success in Spain. Incredible ROAS.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    category: "marketing-digital",
    language: "en"
  },
  // North Motors
  {
    id: "north-motors-es",
    name: "Juan Jose Colombo",
    role: "CEO",
    company: "North Motors",
    content: "La web oficial de Honda que desarrollaron está a la altura de la marca. Elegante y funcional.",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "north-motors-en",
    name: "Juan Jose Colombo",
    role: "CEO",
    company: "North Motors",
    content: "The official Honda website they developed lives up to the brand. Elegant and functional.",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Patagonia Steel Frame
  {
    id: "patagonia-steel-es",
    name: "Valentin Sinat",
    role: "Director",
    company: "Patagonia Steel Frame",
    content: "Excelente plataforma para mostrar nuestros proyectos constructivos y vender servicios en el NEA.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    category: "tienda-online",
    language: "es"
  },
  {
    id: "patagonia-steel-en",
    name: "Valentin Sinat",
    role: "Director",
    company: "Patagonia Steel Frame",
    content: "Excellent platform to showcase our construction projects and sell services in the region.",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    category: "tienda-online",
    language: "en"
  },
  // Quantum Boost
  {
    id: "quantum-boost-es",
    name: "Quantum Boost",
    role: "CEO",
    company: "Quantum Boost",
    content: "Sitio web robusto y seguro para nuestro negocio de apuestas en España. Gran desarrollo.",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "quantum-boost-en",
    name: "Quantum Boost",
    role: "CEO",
    company: "Quantum Boost",
    content: "Robust and secure website for our betting business in Spain. Great development.",
    image: "https://randomuser.me/api/portraits/men/86.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Sky Technologies
  {
    id: "sky-technologies-es",
    name: "Sky Technologies",
    role: "CTO",
    company: "Sky Technologies",
    content: "Landing page técnica y precisa. Refleja bien nuestra identidad corporativa.",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "sky-technologies-en",
    name: "Sky Technologies",
    role: "CTO",
    company: "Sky Technologies",
    content: "Technical and precise landing page. Reflects our corporate identity well.",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Smoke Master
  {
    id: "smoke-master-es",
    name: "Smoke Master",
    role: "Chef",
    company: "Smoke Master",
    content: "La web nos ayuda a recibir más pedidos de comida en Puerto Rico. Simple y efectiva.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "smoke-master-en",
    name: "Smoke Master",
    role: "Chef",
    company: "Smoke Master",
    content: "The website helps us receive more food orders in Puerto Rico. Simple and effective.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Soluciones Fragos
  {
    id: "soluciones-fragos-es",
    name: "Soluciones Fragos",
    role: "Director",
    company: "Soluciones Fragos",
    content: "Como agencia de marketing, quedamos muy satisfechos con la landing page que nos entregaron.",
    image: "https://randomuser.me/api/portraits/men/93.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "soluciones-fragos-en",
    name: "Soluciones Fragos",
    role: "Director",
    company: "Soluciones Fragos",
    content: "As a marketing agency, we were very satisfied with the landing page they delivered.",
    image: "https://randomuser.me/api/portraits/men/93.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Lorena Ramon
  {
    id: "lorena-ramon-es",
    name: "Lorena Ramon",
    role: "Psicóloga",
    company: "Lorena Ramon",
    content: "Gracias al SEO, aparezco primera en las búsquedas de psicólogos en Almería. Mi agenda está llena.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    category: "seo",
    language: "es"
  },
  {
    id: "lorena-ramon-en",
    name: "Lorena Ramon",
    role: "Psychologist",
    company: "Lorena Ramon",
    content: "Thanks to SEO, I appear first in searches for psychologists in Almería. My schedule is full.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    category: "seo",
    language: "en"
  },
  // Unamor
  {
    id: "unamor-es",
    name: "Ornella Vietta",
    role: "Dueño",
    company: "UNAMOR",
    content: "Nuestro ecommerce de vinilos vende en toda Argentina gracias a la plataforma que crearon.",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    category: "tienda-online",
    language: "es"
  },
  {
    id: "unamor-en",
    name: "Ornella Vietta",
    role: "Owner",
    company: "UNAMOR",
    content: "Our vinyl ecommerce sells throughout Argentina thanks to the platform they created.",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    category: "tienda-online",
    language: "en"
  },
  // Mentionfyjil
  {
    id: "mentionfyjil-es",
    name: "Pedro Mention",
    role: "Marketing",
    company: "Mentionfyjil",
    content: "Excelente landing page, muy buen diseño y ejecución.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "mentionfyjil-en",
    name: "Pedro Mention",
    role: "Marketing",
    company: "Mentionfyjil",
    content: "Excellent landing page, very good design and execution.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Move&Save
  {
    id: "move-save-es",
    name: "Move&Save",
    role: "Gerente",
    company: "Move&Save",
    content: "La landing page es clara y nos ayuda a captar clientes para mudanzas.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "move-save-en",
    name: "Move&Save",
    role: "Manager",
    company: "Move&Save",
    content: "The landing page is clear and helps us attract moving customers.",
    image: "https://randomuser.me/api/portraits/men/47.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Rinova
  {
    id: "rinova-es",
    name: "Rinova",
    role: "CEO",
    company: "Rinova",
    content: "El dashboard para real estate optimizó toda nuestra gestión de propiedades en Uruguay y Argentina.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    category: "apps",
    language: "es"
  },
  {
    id: "rinova-en",
    name: "Rinova",
    role: "CEO",
    company: "Rinova",
    content: "The real estate dashboard optimized our entire property management in Uruguay and Argentina.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    category: "apps",
    language: "en"
  },
  // OV Ocampo Vazquez
  {
    id: "ov-ocampo-es",
    name: "Alicia Vazquez",
    role: "Socio",
    company: "OV Ocampo Vazquez",
    content: "El sistema de gestión a medida es clave para nuestro estudio jurídico y contable.",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    category: "apps",
    language: "es"
  },
  {
    id: "ov-ocampo-en",
    name: "Alicia Vazquez",
    role: "Partner",
    company: "OV Ocampo Vazquez",
    content: "The custom management system is key for our law and accounting firm.",
    image: "https://randomuser.me/api/portraits/women/66.jpg",
    category: "apps",
    language: "en"
  },
  // Patagonia Construcciones
  {
    id: "patagonia-construcciones-es",
    name: "Ruben Sinat",
    role: "Gerente",
    company: "Patagonia Construcciones",
    content: "Nuestra web institucional muestra perfectamente la envergadura de nuestras obras en el NEA.",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "patagonia-construcciones-en",
    name: "Ruben Sinat",
    role: "Manager",
    company: "Patagonia Construcciones",
    content: "Our institutional website perfectly shows the scale of our works in the region.",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Remax Tradición
  {
    id: "remax-tradicion-es",
    name: "Juan Francisco Garcia",
    role: "Broker",
    company: "Remax Tradición",
    content: "La campaña de Meta Ads para generación de leads nos ayudó a reclutar excelentes agentes.",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    category: "marketing-digital",
    language: "es"
  },
  {
    id: "remax-tradicion-en",
    name: "Juan Francisco Garcia",
    role: "Broker",
    company: "Remax Tradición",
    content: "The Meta Ads lead generation campaign helped us recruit excellent agents.",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    category: "marketing-digital",
    language: "en"
  },
  // Rie App
  {
    id: "rie-app-es",
    name: "Rie App",
    role: "Fundador",
    company: "Rie App",
    content: "La app en Flutter para reserva de turnos mejoró drásticamente la experiencia de nuestros pacientes.",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    category: "apps",
    language: "es"
  },
  {
    id: "rie-app-en",
    name: "Rie App",
    role: "Founder",
    company: "Rie App",
    content: "The Flutter appointment booking app drastically improved our patients' experience.",
    image: "https://randomuser.me/api/portraits/men/57.jpg",
    category: "apps",
    language: "en"
  },
  // Toinvesto
  {
    id: "toinvesto-es",
    name: "David Sanchez Gomez",
    role: "CEO",
    company: "Toinvesto",
    content: "El rediseño de nuestra home mejoró la imagen corporativa de la empresa.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "toinvesto-en",
    name: "David Sanchez Gomez",
    role: "CEO",
    company: "Toinvesto",
    content: "The redesign of our home page improved the corporate image of the company.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Unicel Logo
  {
    id: "unicel-es",
    name: "David Unicel",
    role: "Técnico",
    company: "Unicel Logo",
    content: "El mantenimiento del dashboard nos asegura que el servicio técnico siempre esté operativo.",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    category: "apps",
    language: "es"
  },
  {
    id: "unicel-en",
    name: "David Unicel",
    role: "Technician",
    company: "Unicel Logo",
    content: "Dashboard maintenance ensures that technical service is always operational.",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    category: "apps",
    language: "en"
  },
  // Unión Mayorista
  {
    id: "union-mayorista-es",
    name: "Javier Invision",
    role: "Gerente",
    company: "Unión Mayorista",
    content: "Los nuevos mapas de locales en nuestra web facilitan que los clientes nos encuentren en Puerto Rico.",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "union-mayorista-en",
    name: "Javier Invision",
    role: "Manager",
    company: "Unión Mayorista",
    content: "The new store maps on our website make it easier for customers to find us in Puerto Rico.",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Uniplaza Shopping (Web)
  {
    id: "uniplaza-web-es",
    name: "Martin Paz",
    role: "Gerente Comercial",
    company: "Uniplaza Shopping",
    content: "El nuevo sitio web es moderno y funcional, ideal para informar a nuestros visitantes.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "uniplaza-web-en",
    name: "Martin Paz",
    role: "Commercial Manager",
    company: "Uniplaza Shopping",
    content: "The new website is modern and functional, ideal for informing our visitors.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    category: "diseno-web",
    language: "en"
  },
  // Uniplaza Shopping (Marketing)
  {
    id: "uniplaza-mkt-es",
    name: "Martin Paz",
    role: "Gerente Comercial",
    company: "Uniplaza Shopping",
    content: "El sitio web y las campañas de Ads trabajan juntos para traer más gente al shopping.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    category: "marketing-digital",
    language: "es"
  },
  {
    id: "uniplaza-mkt-en",
    name: "Martin Paz",
    role: "Commercial Manager",
    company: "Uniplaza Shopping",
    content: "The website and Ads campaigns work together to bring more people to the mall.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    category: "marketing-digital",
    language: "en"
  },
  // VHG
  {
    id: "vhg-es",
    name: "Gisela Gomez",
    role: "CEO",
    company: "VHG",
    content: "Aumentamos nuestra visibilidad como proveedor de internet en Curuzú Cuatiá gracias a Google Ads.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    category: "marketing-digital",
    language: "es"
  },
  {
    id: "vhg-en",
    name: "Gisela Gomez",
    role: "CEO",
    company: "VHG",
    content: "We increased our visibility as an internet provider in Curuzú Cuatiá thanks to Google Ads.",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    category: "marketing-digital",
    language: "en"
  },
  // WorldHenna
  {
    id: "worldhenna-es",
    name: "Zulay Henna",
    role: "Artista",
    company: "WorldHenna",
    content: "Mi web de tatuajes ahora atrae clientes de todo Miami. El rediseño fue un éxito.",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    category: "diseno-web",
    language: "es"
  },
  {
    id: "worldhenna-en",
    name: "Zulay Henna",
    role: "Artist",
    company: "WorldHenna",
    content: "My tattoo website now attracts clients from all over Miami. The redesign was a success.",
    image: "https://randomuser.me/api/portraits/women/77.jpg",
    category: "diseno-web",
    language: "en"
  }
]
