"use client"

import { Linkedin, MapPin } from "lucide-react"
import { ContactReveal } from "@/components/contact-reveal"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              Let&apos;s Connect
            </h3>
            <p className="text-sm text-muted-foreground">
              Open to discussing opportunities in sales, sales strategy, sales planning, and sales leadership — across any industry, worldwide
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/massimo-dassano-a8b31a25/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <ContactReveal encodedEmail="moc.liamg@onassad.omissam" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Milan, Italy</span>
          </div>
          <p>© {new Date().getFullYear()} Massimo Dassano. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
