import { NextResponse } from "next/server"
import { mkdir, writeFile } from "fs/promises"
import path from "path"
import { randomUUID } from "node:crypto"

const uploadsDir = path.join(process.cwd(), "public", "uploads")

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
    if (!files.length) {
      return NextResponse.json({ urls: [] }, { status: 400 })
    }
    await mkdir(uploadsDir, { recursive: true })
    const urls: string[] = []
    for (const file of files) {
      if (!file.type.startsWith("image/")) continue
      const extension = resolveExtension(file)
      const filename = `${randomUUID()}${extension}`
      const arrayBuffer = await file.arrayBuffer()
      await writeFile(path.join(uploadsDir, filename), Buffer.from(arrayBuffer))
      urls.push(`/uploads/${filename}`)
    }
    return NextResponse.json({ urls })
  } catch {
    return NextResponse.json({ urls: [] }, { status: 500 })
  }
}
