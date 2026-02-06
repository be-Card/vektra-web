import { NextResponse } from "next/server"
import { createHash } from "node:crypto"

const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

export async function POST(request: Request) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_API_SECRET

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        { urls: [], error: "Cloudinary no está configurado. Agregá CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY y CLOUDINARY_API_SECRET." },
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
      const base64 = `data:${file.type};base64,${buffer.toString("base64")}`

      const timestamp = Math.floor(Date.now() / 1000).toString()
      const signatureString = `folder=vektra-web&timestamp=${timestamp}${apiSecret}`
      const signature = createHash("sha1").update(signatureString).digest("hex")

      const uploadForm = new FormData()
      uploadForm.append("file", base64)
      uploadForm.append("folder", "vektra-web")
      uploadForm.append("timestamp", timestamp)
      uploadForm.append("api_key", apiKey)
      uploadForm.append("signature", signature)

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: uploadForm },
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        errors.push(`Error al subir "${file.name}": ${errorData?.error?.message ?? response.statusText}`)
        continue
      }

      const result = await response.json()
      urls.push(result.secure_url)
    }

    return NextResponse.json({ urls, ...(errors.length ? { errors } : {}) })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido al subir archivos"
    return NextResponse.json({ urls: [], error: message }, { status: 500 })
  }
}
