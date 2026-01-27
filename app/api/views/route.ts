import { NextResponse } from "next/server"
import { readStorage, writeStorage } from "@/lib/storage"

export async function POST(request: Request) {
  try {
    const { slug, type } = await request.json()
    
    if (!slug || type !== "project") {
      // Solo soportamos projects por ahora según requerimiento
      return NextResponse.json({ success: false, message: "Invalid payload" }, { status: 400 })
    }

    const data = await readStorage()
    const projects = [...data.projects]
    const projectIndex = projects.findIndex((p) => p.slug === slug)

    if (projectIndex === -1) {
      return NextResponse.json({ success: false, message: "Project not found" }, { status: 404 })
    }

    const project = projects[projectIndex]
    const currentViews = project.views || 0
    const nextViews = currentViews + 1
    
    const updatedProject = {
      ...project,
      views: nextViews,
      // Si autoSearchVolume está activo, actualizamos searchVolume con las visitas
      searchVolume: project.autoSearchVolume ? nextViews : project.searchVolume
    }

    projects[projectIndex] = updatedProject

    await writeStorage({
      ...data,
      projects
    })

    return NextResponse.json({ success: true, views: nextViews })
  } catch (error) {
    console.error("Error updating views:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
