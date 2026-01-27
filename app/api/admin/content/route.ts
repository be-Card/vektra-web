import { NextResponse } from "next/server"
import { readStorage, writeStorage, StorageData } from "@/lib/storage"

export async function GET() {
  const data = await readStorage()
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<StorageData>
  const current = await readStorage()
  const next: StorageData = {
    blogPosts: Array.isArray(payload.blogPosts) ? payload.blogPosts : current.blogPosts,
    blogPostsEn: Array.isArray(payload.blogPostsEn) ? payload.blogPostsEn : (current.blogPostsEn ?? []),
    projects: Array.isArray(payload.projects) ? payload.projects : current.projects,
    blogCategories: Array.isArray(payload.blogCategories) ? payload.blogCategories : current.blogCategories,
    projectCategories: Array.isArray(payload.projectCategories) ? payload.projectCategories : current.projectCategories,
    testimonials: Array.isArray(payload.testimonials) ? payload.testimonials : (current.testimonials ?? []),
  }

  await writeStorage(next)
  return NextResponse.json({ success: true })
}
