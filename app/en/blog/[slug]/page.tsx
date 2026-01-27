import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, MessageCircle, Search, Share2, Twitter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { blogPosts, type BlogPost } from "@/app/en/blog/data"
import { readFile } from "fs/promises"
import path from "path"

const siteUrl = "https://vektra.digital"

const slugify = (value?: string) =>
  (value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")

const buildHeadingId = (value: string, index: number) =>
  `${value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "")}-${index + 1}`

const renderParagraph = (paragraph: string) => {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: Array<string | JSX.Element> = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  let linkIndex = 0

  while ((match = linkPattern.exec(paragraph)) !== null) {
    const [fullMatch, text, href] = match
    if (match.index > lastIndex) {
      parts.push(paragraph.slice(lastIndex, match.index))
    }
    const isInternal = href.startsWith("/")
    const link = isInternal ? (
      <Link key={`link-${linkIndex}`} href={href} className="text-[#00DEC7] hover:underline">
        {text}
      </Link>
    ) : (
      <a
        key={`link-${linkIndex}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00DEC7] hover:underline"
      >
        {text}
      </a>
    )
    parts.push(link)
    lastIndex = match.index + fullMatch.length
    linkIndex += 1
  }

  if (lastIndex < paragraph.length) {
    parts.push(paragraph.slice(lastIndex))
  }

  return parts
}

const toIsoDate = (value: string) => {
  const [day, month, year] = value.split(".")
  if (day && month && year) {
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
  }
  return new Date().toISOString()
}

const toAbsoluteUrl = (value?: string) => {
  if (!value) return ""
  if (value.startsWith("http") || value.startsWith("data:")) return value
  return `${siteUrl}${value}`
}

const parseDate = (value?: string) => {
  if (!value) return null
  const [day, month, year] = value.split(".")
  if (!day || !month || !year) return null
  return new Date(Number(year), Number(month) - 1, Number(day))
}

const isPublished = (post: BlogPost) => {
  const target = parseDate(post.publishedAt || post.date)
  if (!target) return true
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return target <= today
}

const storagePath = path.join(process.cwd(), "data-storage.json")

const readStoragePosts = async (): Promise<BlogPost[]> => {
  try {
    const raw = await readFile(storagePath, "utf-8")
    const data = JSON.parse(raw) as { blogPostsEn?: BlogPost[] }
    if (Array.isArray(data.blogPostsEn) && data.blogPostsEn.length) {
      return data.blogPostsEn
    }
  } catch {
    return blogPosts
  }
  return blogPosts
}

const mergePosts = (base: BlogPost[], overrides: BlogPost[]) => {
  const map = new Map<string, BlogPost>()
  const addItem = (item: BlogPost) => {
    const key = slugify(item.slug || item.title)
    if (!key) return
    map.set(key, item)
  }
  base.forEach(addItem)
  overrides.forEach(addItem)
  return Array.from(map.values())
}

const getPostBySlug = async (slug: string) => {
  const storagePosts = await readStoragePosts()
  const posts = mergePosts(blogPosts, storagePosts)
  const normalizedSlug = slugify(slug)
  const post = posts.find((item) => {
    const itemSlug = item.slug || slugify(item.title)
    return itemSlug === slug || slugify(itemSlug) === normalizedSlug || slugify(item.title) === normalizedSlug
  })
  const resolvedPost = post && isPublished(post) ? post : undefined
  return { posts, post: resolvedPost }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { post } = await getPostBySlug(slug)
  if (!post) {
    return {
      title: "Article not found",
      description: "The requested article does not exist or was deleted.",
    }
  }
  const title = post.seoTitle?.trim() || post.title
  const description = post.seoDescription?.trim() || post.description
  const imageUrl = post.image ? toAbsoluteUrl(post.image) : undefined
  const canonicalSlug = post.slug || slugify(post.title)
  return {
    title,
    description,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteUrl}/en/blog/${canonicalSlug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteUrl}/en/blog/${canonicalSlug}`,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}

import { CTA } from "@/components/sections/cta"
import { dictionaries } from "@/lib/dictionaries"

export default async function BlogDetailPageEn({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { posts, post } = await getPostBySlug(slug)
  const dict = dictionaries.en

  const sidebarCategories = Array.from(new Set(posts.map((item) => item.category)))
  const tocItems = post
    ? post.content.map((section, index) => ({
        id: buildHeadingId(section.heading, index),
        label: section.heading,
      }))
    : []
  const currentUrl = post ? `${siteUrl}/en/blog/${post.slug || slugify(post.title)}` : ""

  const relatedArticles = post
    ? posts
        .filter((item) => {
          if (item.slug === post.slug) return false
          const relatedCategories = post.categories?.length ? post.categories : [post.category]
          const itemCategories = item.categories?.length ? item.categories : [item.category]
          return itemCategories.some((category) => relatedCategories.includes(category))
        })
        .slice(0, 3)
    : []

  if (!post) {
    return (
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            Article not found
          </h1>
          <p className="mt-4 text-gray-600">
            Check the full list of articles to find what you are looking for.
          </p>
          <Link
            href="/en/blog"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
          >
            Back to blog
          </Link>
        </div>
      </section>
    )
  }

  const relatedCategories = post.categories?.length ? post.categories : [post.category]
  const encodedUrl = encodeURIComponent(currentUrl)
  const encodedTitle = encodeURIComponent(post.title)
  const metaTitle = post.seoTitle?.trim() || post.title
  const metaDescription = post.seoDescription?.trim() || post.description
  const keywordList = Array.isArray(post.keywords) ? post.keywords : []
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: metaTitle,
    description: metaDescription,
    image: post.image ? [toAbsoluteUrl(post.image)] : undefined,
    datePublished: toIsoDate(post.date),
    dateModified: toIsoDate(post.date),
    author: {
      "@type": "Organization",
      name: "Vektra",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Vektra",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl || `${siteUrl}/en/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: keywordList.length ? keywordList.join(", ") : undefined,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="relative h-[300px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero1.webp')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/80 mb-4">
            <span>{post.date}</span>
            <span className="text-white/60">•</span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {relatedCategories.map((category) => (
                <Link
                  key={category}
                  href={`/en/blog?category=${encodeURIComponent(category)}`}
                  className="rounded-full border border-white/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/90 transition-colors hover:bg-white/10"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="bg-white pt-10">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-100">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={640}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {post.gallery?.length ? (
        <section className="bg-white pt-8">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {post.gallery.map((image, index) => (
                <div key={`${post.slug}-gallery-${index}`} className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-100">
                  <Image
                    src={image}
                    alt={`${post.title} ${index + 1}`}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12">
            <article className="space-y-10">
              {post.content.map((section, index) => (
                <div key={section.heading} className="space-y-4">
                  <h2
                    id={buildHeadingId(section.heading, index)}
                    className="text-2xl md:text-3xl font-bold text-black"
                  >
                    {section.heading}
                  </h2>
                  {section.paragraphs?.map((paragraph, index) => (
                    <p key={`${section.heading}-p-${index}`} className="text-gray-600 leading-relaxed text-base">
                      {renderParagraph(paragraph)}
                    </p>
                  ))}
                  {section.bullets?.length ? (
                    <ul className="space-y-2 pl-5 text-gray-600 list-disc">
                      {section.bullets.map((bullet) => (
                        <li key={`${section.heading}-${bullet}`} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-black">
                  <Share2 className="h-4 w-4" />
                  Share this article
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="border-gray-200 text-black hover:bg-white">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="mr-2 h-4 w-4" />
                      Facebook
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-gray-200 text-black hover:bg-white">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="mr-2 h-4 w-4" />
                      X
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-gray-200 text-black hover:bg-white">
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-gray-200 text-black hover:bg-white">
                    <a
                      href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </article>

            <aside className="space-y-8">
              {tocItems.length > 0 && (
                <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-4">Table of Contents</h3>
                  <div className="flex flex-col gap-3 text-sm">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-gray-600 hover:text-[#00DEC7] transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-4">Search</h3>
                <form action="/en/blog" className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    name="q"
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-6 text-sm border-gray-200 rounded-lg focus:border-[#00DEC7] focus:ring-[#00DEC7]"
                  />
                </form>
              </div>

              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-4">Categories</h3>
                <div className="flex flex-col gap-3">
                  {sidebarCategories.map((category) => (
                    <Link
                      key={category}
                      href={`/en/blog?category=${encodeURIComponent(category)}`}
                      className="flex items-center justify-between text-sm text-gray-600 hover:text-[#00DEC7] transition-colors"
                    >
                      <span>{category}</span>
                      <span className="text-gray-400">→</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-black mb-4">Related Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {relatedCategories.map((category) => (
                    <Link
                      key={`related-${category}`}
                      href={`/en/blog?category=${encodeURIComponent(category)}`}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 hover:bg-[#00DEC7]/20 hover:text-black transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <Image
                  src="/images/about/emprender.jpg"
                  alt="Recommended Service"
                  width={640}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTA dict={dict} />

      {relatedArticles.length > 0 && (
        <section className="bg-white pb-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col gap-3 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Related</p>
              <h2 className="text-3xl font-bold text-black">Articles you might also be interested in</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((item) => (
                <Link
                  key={item.id}
                  href={`/en/blog/${item.slug}`}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span>{item.date}</span>
                      <span>•</span>
                      <span className="text-[#00DEC7] font-medium">{item.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-black group-hover:text-[#00DEC7] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  )
}
