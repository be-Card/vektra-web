import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request: Request) {
  try {
    if (!process.env.CLOUDINARY_CLOUD_NAME) {
      return NextResponse.json(
        { urls: [], error: "Cloudinary no está configurado. Agregá CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY y CLOUDINARY_API_SECRET en las variables de entorno." },
        { status: 500 },
      )
    }

    const formData = await request.formData()
    const files = formData.getAll("files").filter((item): item is File => item instanceof File)
    const single = formData.get("file")
    if (single instanceof File) {
      files.push(single)
    }
    if (!files.length) {
      return NextResponse.json({ urls: [], error: "No se enviaron archivos" }, { status: 400 })
    }

    const urls: string[] = []
    const errors: string[] = []

    for (const file of files) {
      if (!file.type.startsWith("image/")) {
        errors.push(`"${file.name}" no es una imagen válida`)
        continue
      }
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`"${file.name}" excede el límite de 10 MB (${(file.size / 1024 / 1024).toFixed(1)} MB)`)
        continue
      }

      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)

      const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "vektra-web" }, (error, result) => {
            if (error || !result) {
              reject(error ?? new Error("Upload falló"))
            } else {
              resolve(result)
            }
          })
          .end(buffer)
      })

      urls.push(result.secure_url)
    }

    return NextResponse.json({ urls, ...(errors.length ? { errors } : {}) })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido al subir archivos"
    return NextResponse.json({ urls: [], error: message }, { status: 500 })
  }
}
