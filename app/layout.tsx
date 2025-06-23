import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CineDroid - Maintenance Mode",
  description: "CineDroid is currently under maintenance. We'll be back soon!",
  keywords: ["CineDroid", "movies", "maintenance", "cinema"],
  authors: [{ name: "CineDroid Team" }],
  robots: "noindex, nofollow",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
