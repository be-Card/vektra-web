"use client"

import { useEffect, useMemo, useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"
import Loading from "./loading"
import { blogPosts, type BlogPost } from "./data"

const ITEMS_PER_PAGE = 12

const parseDate = (value?: string) => {
  if (!value) return null
  const [day, month, year] = value.split(".")
  if (!day || !month || !year) return null
  return new Date(Number(year), Number(month) - 1, Number(day))
}

const isPublished = (post: { publishedAt?: string; date: string }) => {
  const target = parseDate(post.publishedAt || post.date)
  if (!target) return true
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return target <= today
}

function BlogContent({
  initialSearchQuery,
  initialCategory,
  initialPosts,
}: {
  initialSearchQuery: string
  initialCategory: string
  initialPosts?: BlogPost[]
}) {
  const [posts, setPosts] = useState(initialPosts || blogPosts)

  const [searchQuery, setSearchQuery] = useState(initialSearchQuery)
  const [activeCategory, setActiveCategory] = useState(() => {
    return initialCategory && posts.some((post: { category: string }) => post.category === initialCategory) ? initialCategory : "Todos"
  })
  const [currentPage, setCurrentPage] = useState(1)
  const publishedPosts = useMemo(() => posts.filter((post) => isPublished(post)), [posts])
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(publishedPosts.map((post: { category: string }) => post.category)))
    return ["Todos", ...uniqueCategories]
  }, [publishedPosts])
  const resolvedCategory = useMemo(() => {
    if (activeCategory === "Todos") return "Todos"
    const exists = publishedPosts.some((post: { category: string }) => post.category === activeCategory)
    return exists ? activeCategory : "Todos"
  }, [activeCategory, publishedPosts])

  const filteredPosts = useMemo(() => {
    return publishedPosts.filter((post: { title: string; description: string; category: string }) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = resolvedCategory === "Todos" || post.category === resolvedCategory
      return matchesSearch && matchesCategory
    })
  }, [publishedPosts, searchQuery, resolvedCategory])

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE)
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Distribute posts into 3 columns for masonry effect
  const columns = [[], [], []] as typeof paginatedPosts[]
  paginatedPosts.forEach((post, index) => {
    columns[index % 3].push(post)
  })

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentPage(1)
  }

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  useEffect(() => {
    const loadContent = async () => {
      try {
        const response = await fetch("/api/admin/content")
        if (!response.ok) return
        const data = await response.json()
        if (Array.isArray(data?.blogPosts) && data.blogPosts.length) {
          setPosts(data.blogPosts)
        }
      } catch {
        return
      }
    }

    loadContent()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[400px] pt-32 pb-20 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero1.webp')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Articulos, guias y recursos sobre desarrollo web, marketing digital e inteligencia artificial
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Escribe para comenzar a buscar..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-12 pr-4 py-6 text-base border-gray-200 rounded-lg focus:border-[#00DEC7] focus:ring-[#00DEC7]"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  resolvedCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-6">
                  {column.map((post) => (
                    <article 
                      key={post.id} 
                      className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                    >
                      {post.image && (
                        <Link href={`/blog/${post.slug}`} className="relative overflow-hidden block">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={400}
                            height={250}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </Link>
                      )}
                      
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm mb-3">
                          <span className="text-gray-500">{post.date}</span>
                          <span className="text-gray-300">|</span>
                          <Link
                            href={`/blog?category=${encodeURIComponent(post.category)}`}
                            className="text-amber-600 font-medium hover:text-[#00DEC7] transition-colors"
                          >
                            {post.category}
                          </Link>
                        </div>
                        
                        <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="group-hover:text-[#00DEC7] transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {post.description}
                        </p>

                        <Link 
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-sm font-medium text-black hover:text-[#00DEC7] transition-colors group/link"
                        >
                          Leer más
                          <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No se encontraron articulos que coincidan con tu busqueda.</p>
              <Button 
                onClick={() => { setSearchQuery(""); setActiveCategory("Todos"); }}
                className="mt-4 bg-[#00DEC7] text-black hover:bg-[#00DEC7]/90"
              >
                Ver todos los articulos
              </Button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="h-10 w-10 rounded-full border-gray-200"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="icon"
                      onClick={() => setCurrentPage(page)}
                      className={`h-10 w-10 rounded-full ${
                        currentPage === page 
                          ? "bg-[#00DEC7] text-black hover:bg-[#00DEC7]/90" 
                          : "border-gray-200"
                      }`}
                    >
                      {page}
                    </Button>
                  )
                } else if (
                  page === currentPage - 2 ||
                  page === currentPage + 2
                ) {
                  return <span key={page} className="px-2 text-gray-400">...</span>
                }
                return null
              })}
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="h-10 w-10 rounded-full bg-[#00DEC7] text-black hover:bg-[#00DEC7]/90 border-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#00DEC7]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                ¿Listo para comenzar tu nuevo negocio o proyecto?
              </h2>
              <p className="mt-2 text-black/70">
                Contanos qué necesitás y te ayudaremos a impulsar tu proyecto o negocio
              </p>
            </div>
            <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 rounded-full px-8 shrink-0">
              <Link href="/contacto">
                ¿Comenzamos?
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default function BlogPageClient({ initialPosts }: { initialPosts: BlogPost[] }) {
  return (
    <Suspense fallback={<Loading />}>
      <BlogContent initialSearchQuery="" initialCategory="Todos" initialPosts={initialPosts} />
    </Suspense>
  )
}