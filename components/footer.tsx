"use client"

import { Linkedin, MapPin } from "lucide-react"
import { ContactReveal } from "@/components/contact-reveal"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {t.footer.connect}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t.footer.cta}
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
            <span>{t.hero.location}</span>
          </div>
          <p>© {new Date().getFullYear()} Massimo Dassano. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  )
}
