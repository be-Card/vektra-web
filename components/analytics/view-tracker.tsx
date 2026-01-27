"use client"

import { useEffect, useRef } from "react"

interface ViewTrackerProps {
  slug: string
  type: "project" | "blog"
}

export function ViewTracker({ slug, type }: ViewTrackerProps) {
  const hasTracked = useRef(false)

  useEffect(() => {
    if (hasTracked.current) return
    
    // Evitar contar visitas en desarrollo local si se prefiere, 
    // pero para probar necesitamos que cuente.
    // En producción real se suele filtrar bots, etc.
    
    const trackView = async () => {
      try {
        await fetch("/api/views", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, type }),
        })
        hasTracked.current = true
      } catch (error) {
        console.error("Failed to track view", error)
      }
    }

    trackView()
  }, [slug, type])

  return null
}
