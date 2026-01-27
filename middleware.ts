import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if we should ignore this path
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // Files like favicon.ico, robots.txt, etc.
  ) {
    return NextResponse.next()
  }

  // Only perform detection on the root path to allow manual navigation to /en or other pages
  if (pathname === '/') {
    // 0. Check for manual language preference cookie
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
    if (cookieLocale) {
      if (cookieLocale === 'en') {
        return NextResponse.redirect(new URL('/en', request.url))
      }
      // If cookie is 'es', stay on '/' (Spanish default)
      return NextResponse.next()
    }

    // 1. Check Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || ''
    
    // Parse languages with quality scores
    const languages = acceptLanguage.split(',').map(lang => {
      const [tag, priority] = lang.split(';q=')
      return {
        tag: tag.trim().toLowerCase(),
        priority: priority ? parseFloat(priority) : 1.0
      }
    }).sort((a, b) => b.priority - a.priority)

    // Find the first occurrence of 'en' or 'es'
    const preferredLang = languages.find(l => l.tag.startsWith('en') || l.tag.startsWith('es'))?.tag

    let targetLang = 'es' // Default to Spanish

    if (preferredLang?.startsWith('en')) {
      targetLang = 'en'
    } else if (preferredLang?.startsWith('es')) {
      targetLang = 'es'
    } else {
      // 2. Fallback to Geolocation (Vercel specific)
      // request.geo is available in Vercel Edge Middleware
      const country = (request as any).geo?.country || request.headers.get('x-vercel-ip-country') || ''
      const englishCountries = ['US', 'GB', 'CA', 'AU', 'NZ', 'IE']
      
      if (englishCountries.includes(country.toUpperCase())) {
        targetLang = 'en'
      }
    }

    // Redirect if target is English
    if (targetLang === 'en') {
      return NextResponse.redirect(new URL('/en', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
