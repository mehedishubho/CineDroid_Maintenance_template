"use client"

import { useState, useEffect } from "react"
import { Mail, Facebook, Instagram, Twitter, Youtube, Loader2, Clock } from "lucide-react"
import Image from "next/image"

export default function MaintenancePage() {
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/movie-banner.webp"
          alt="Movie collection background"
          fill
          className="object-cover"
          priority
          crossOrigin="anonymous"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen text-white">
        {/* Header */}
        <header className="p-6 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center">
              <Image
                src="/images/cinedroid-logo.png"
                alt="CineDroid Logo"
                width={300}
                height={120}
                className="h-16 md:h-20 w-auto"
                priority
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Animated Loader */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Loader2 className="w-16 h-16 text-pink-500 animate-spin" />
                <div className="absolute inset-0 w-16 h-16 border-4 border-pink-500/20 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                We'll Be Back Soon!
              </h2>

              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Our CineDroid servers are currently undergoing scheduled maintenance. We'll be back online shortly with
                an even better movie experience.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-600/50 max-w-2xl mx-auto">
              <p className="text-gray-200 mb-4 text-lg">For urgent inquiries, contact us at:</p>
              <a
                href="mailto:admin@cinedroid.com"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors duration-300 text-xl font-semibold group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                admin@cinedroid.com
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="space-y-4">
              <p className="text-gray-300 text-lg">Follow us for updates:</p>
              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  className="p-3 bg-black/40 hover:bg-blue-600/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-blue-500/50 backdrop-blur-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-black/40 hover:bg-pink-600/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-pink-500/50 backdrop-blur-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-gray-300 hover:text-pink-400 transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-black/40 hover:bg-blue-400/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-blue-400/50 backdrop-blur-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-gray-300 hover:text-blue-300 transition-colors duration-300" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-black/40 hover:bg-red-600/20 rounded-full transition-all duration-300 hover:scale-110 border border-gray-600/50 hover:border-red-500/50 backdrop-blur-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-gray-300 hover:text-red-400 transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Last Checked Timestamp */}
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>Last checked: {currentTime}</span>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 md:p-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400 text-sm">© 2024 CineDroid. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
