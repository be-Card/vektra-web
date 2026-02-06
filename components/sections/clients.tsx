"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/i18n"
import { type Dictionary } from "@/lib/dictionaries"

const clientLogos = [
  "ARQ.png",
  "Amate-white-logo.png",
  "Blooming logo.png",
  "DANPAL-LOGO-300x231.webp",
  "GR-logo-pde.png",
  "LOGO CLAUDIANI NEGRO.png",
  "LOGO-UNAMOR.png",
  "LOGOKOMSA.png",
  "LOGO_arqom.png",
  "Lagoon_logo.png",
  "Logo Chispa CR.png",
  "Logo-forte.png",
  "Logo-freire.svg",
  "Logo-patagonia steel frmae.png",
  "Logo-quantumboost.png",
  "Logo_Remont_.png.webp",
  "Logo_Spa_clinicfsc.png",
  "Logotipo-horizontal-beige.png",
  "N_Rinova_logo.png",
  "OV-LOGO-H.png",
  "UNIPLAZA LOGO.webp",
  "Union_Logo_1-300.png",
  "VHGlogo-web.png",
  "agua viva logo.png",
  "app-logo-toroomy.png",
  "cropped-CPC-LOGO-FINAL.png",
  "flatrockfarm-logo.jpg",
  "freire asociados logo.png",
  "logo auraimage.png",
  "logo blue beach bali.webp",
  "logo cabanaclub.webp",
  "logo concretar web.png",
  "logo cr jewelry.png",
  "logo vialplus.png",
  "logo vibrar mkt.png",
  "logo-bens.png",
  "logo-blucoversp.png",
  "logo-celmify.png",
  "logo-centenarioshopping.png",
  "logo-completo-mg.png",
  "logo-el transito hotel.png",
  "logo-mentionfyus.svg",
  "logo-minetrax-white-1024x512.png",
  "logo-natos-y-waor-blanco-final.png",
  "logo-northmotors.png",
  "logo-sarmiento.png",
  "logo-skyx technologies.png",
  "logo-smoke-300x205.png",
  "logo-solucionesfragox.png",
  "logo_perros_callejeros.avif",
  "mentionfyjjl-logo-1.png",
  "move-save-logo.png",
  "patagonia construcciones-logo.png",
  "remax-tradicion-logo.jpg",
  "rie logo.png",
  "toinvesto-logo-white.png",
  "unicel logo.png",
  "worldhenna_logo_new.png"
]

interface ClientsProps {
  dict?: Dictionary["clients"]
}

export function Clients({ dict }: ClientsProps) {
  const { t: contextT } = useLanguage()
  const t = dict || contextT.clients

  return (
    <section className="py-20 md:py-28 bg-[#00DEC7] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            {t.title}
          </h2>
          <p className="text-sm font-medium text-black/70 uppercase tracking-[0.3em]">
            {t.subtitle}
          </p>
        </div>
        
        {/* Infinite Marquee */}
        <div className="relative w-full overflow-hidden mask-gradient">
          <div className="flex w-max animate-marquee gap-12 md:gap-20 hover:[animation-play-state:paused]">
            {[...clientLogos, ...clientLogos].map((logo, index) => {
              const isWhiteLogo = logo.toLowerCase().includes('white') || logo.toLowerCase().includes('blanco') || logo.toLowerCase().includes('negative')
              const isJpg = logo.toLowerCase().endsWith(".jpg") || logo.toLowerCase().endsWith(".jpeg")
              
              return (
                <div
                  key={`${logo}-${index}`}
                  className="relative flex h-[100px] w-[180px] flex-shrink-0 items-center justify-center"
                >
                  <Image
                    src={`/logos-clients/${logo}`}
                    alt={logo.split('.')[0].replace(/-/g, ' ')}
                    width={180}
                    height={100}
                    sizes="200px"
                    className={`max-h-[70%] max-w-[85%] w-auto h-auto object-contain transition-all duration-300
                      ${isWhiteLogo 
                        ? 'brightness-0 opacity-90' 
                        : isJpg
                          ? 'mix-blend-multiply grayscale contrast-125 opacity-80'
                          : 'grayscale opacity-80'} 
                      hover:filter-none hover:opacity-100 hover:mix-blend-normal hover:brightness-100 hover:invert-0 hover:grayscale-0`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
      `}</style>
    </section>
  )
}
