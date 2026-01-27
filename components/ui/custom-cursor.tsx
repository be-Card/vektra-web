"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    // Check if touch device
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(touchDevice)

    if (touchDevice) return

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e)

      // Check cursor type on move
      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
      if (hoveredElement) {
        const computedStyle = window.getComputedStyle(hoveredElement)
        const isClickable =
          computedStyle.cursor === "pointer" ||
          hoveredElement.tagName === "A" ||
          hoveredElement.tagName === "BUTTON" ||
          hoveredElement.closest("a") ||
          hoveredElement.closest("button") ||
          hoveredElement.getAttribute("role") === "button"
        setIsPointer(!!isClickable)
      }
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Hide default cursor
    document.body.style.cursor = "none"
    const style = document.createElement("style")
    style.id = "custom-cursor-style"
    style.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    setIsVisible(true)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = "auto"
      const existingStyle = document.getElementById("custom-cursor-style")
      if (existingStyle) existingStyle.remove()
    }
  }, [])

  // Don't render until mounted (client-side only)
  if (!isMounted || isTouchDevice || !isVisible) return null

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[10000] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full bg-[#00DEC7] transition-all duration-150 ease-out ${
            isClicking ? "scale-75" : isPointer ? "scale-150" : "scale-100"
          }`}
          style={{
            width: isPointer ? 40 : 12,
            height: isPointer ? 40 : 12,
            opacity: isPointer ? 0.5 : 1,
          }}
        />
      </div>
      {/* Trailing cursor ring */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-300 ease-out"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full border-2 border-[#00DEC7] transition-all duration-300 ease-out ${
            isPointer ? "opacity-0 scale-0" : "opacity-50 scale-100"
          }`}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </div>
    </>
  )
}
