"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

type GalleryLightboxProps = {
  images: string[]
  title: string
}

export function GalleryLightbox({ images, title }: GalleryLightboxProps) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleOpen = (index: number) => {
    setActiveIndex(index)
    setOpen(true)
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <button
            key={`${title}-${index}`}
            type="button"
            onClick={() => handleOpen(index)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#00DEC7]/60"
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[96vw] md:max-w-5xl bg-black border-none p-2 sm:p-4">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh]">
            <Image
              src={images[activeIndex]}
              alt={`${title} ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 96vw, 900px"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
