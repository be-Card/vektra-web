"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  x: number
  y: number
  rotation: number
  color: string
  size: number
  speedX: number
  speedY: number
  rotationSpeed: number
  animationDuration: number
  animationDelay: number
}

interface ConfettiProps {
  isActive: boolean
  duration?: number
}

const colors = ["#00DEC7", "#FFD700", "#FF6B6B", "#4ECDC4", "#45B7D1", "#96E6A1", "#DDA0DD"]

export function Confetti({ isActive, duration = 3000 }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isActive) {
      const hideFrame = requestAnimationFrame(() => {
        setIsVisible(false)
        setPieces([])
      })
      return () => cancelAnimationFrame(hideFrame)
    }

    const newPieces: ConfettiPiece[] = []

    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 20,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 8 + Math.random() * 8,
        speedX: (Math.random() - 0.5) * 3,
        speedY: 2 + Math.random() * 3,
        rotationSpeed: (Math.random() - 0.5) * 10,
        animationDuration: 2 + Math.random() * 2,
        animationDelay: Math.random() * 0.5,
      })
    }

    const showFrame = requestAnimationFrame(() => {
      setPieces(newPieces)
      setIsVisible(true)
    })

    const timer = setTimeout(() => {
      setIsVisible(false)
      setPieces([])
    }, duration)

    return () => {
      cancelAnimationFrame(showFrame)
      clearTimeout(timer)
    }
  }, [isActive, duration])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: piece.size,
            height: piece.size * 0.6,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: "2px",
            animationDuration: `${piece.animationDuration}s`,
            animationDelay: `${piece.animationDelay}s`,
          }}
        />
      ))}
    </div>
  )
}
