import { NextResponse } from "next/server"
import { mkdir, writeFile } from "fs/promises"
import path from "path"
import { randomUUID } from "node:crypto"

const uploadsDir = path.join(process.cwd(), "public", "uploads")
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB

const resolveExtension = (file: File) => {
  const ext = path.extname(file.name)
  if (ext) return ext
  if (file.type === "image/png") return ".png"
  if (file.type === "image/jpeg") return ".jpg"
  if (file.type === "image/webp") return ".webp"
  if (file.type === "image/avif") return ".avif"
  if (file.type === "image/gif") return ".gif"
  if (file.type === "image/svg+xml") return ".svg"
  return ""
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const files = formData.getAll("files").filter((item): item is File => item instanceof File)
    const single = formData.get("file")
    if (single instanceof File) {
      files.push(single)
    }
    if (!files.length) {
      return NextResponse.json({ urls: [], error: "No se enviaron archivos" }, { status: 400 })
    }
    await mkdir(uploadsDir, { recursive: true })
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
      const extension = resolveExtension(file)
      const filename = `${randomUUID()}${extension}`
      const arrayBuffer = await file.arrayBuffer()
      await writeFile(path.join(uploadsDir, filename), Buffer.from(arrayBuffer))
      urls.push(`/uploads/${filename}`)
    }
    return NextResponse.json({ urls, ...(errors.length ? { errors } : {}) })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido al subir archivos"
    return NextResponse.json({ urls: [], error: message }, { status: 500 })
  }
}
