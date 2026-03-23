"use client"

import { Linkedin, MapPin } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-background" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Glowing orb effect */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Senior Manager
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight text-balance">
            Massimo Dassano
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            15+ years of international experience in B2B sales planning,
            strategic partnerships, and global business development
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Milan, Italy</span>
            </div>
            <a
              href="https://www.linkedin.com/in/massimo-dassano-a8b31a25/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              <span className="group-hover:underline underline-offset-4">
                LinkedIn
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
