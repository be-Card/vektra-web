"use client"

import React, { createContext, useContext } from "react"
import { usePathname } from "next/navigation"
import { dictionaries, type Dictionary } from "./dictionaries"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children, initialLang = "es" }: { children: React.ReactNode, initialLang?: Language }) {
  const pathname = usePathname()
  const language: Language = pathname?.startsWith('/en') ? 'en' : 'es'

  const value = {
    language,
    t: dictionaries[language],
  }
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
