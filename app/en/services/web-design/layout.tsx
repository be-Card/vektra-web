import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design and Development Worldwide | Next.js, React and WordPress",
  description: "Professional web design agency serving clients worldwide. Fast sites with Next.js, React and WordPress.",
  keywords: [
    "web design worldwide",
    "web development worldwide",
    "web design agency",
    "professional website",
    "landing page",
    "corporate website",
    "next.js",
    "react",
    "wordpress",
  ],
  openGraph: {
    title: "Web Design and Development Worldwide | Vektra",
    description: "Professional websites with Next.js, React and WordPress for companies worldwide.",
  },
}

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
