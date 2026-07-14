"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight, Mail, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export type RelatedService = { href: string; label: string; tag: string; color: string; rgb: string }

export type ServiceContent = {
  tag: string
  title: string
  subtitle: string
  intro: string
  features: string[]
  process: { step: string; desc: string }[]
  forWho: string
  faq: { q: string; a: string }
  related: RelatedService[]
}

export type ServicePageProps = {
  color: string
  rgb: string
  jsonLd: Record<string, unknown>
  content: { it: ServiceContent; en: ServiceContent }
}

const UI = {
  it: {
    navHome: "Home",
    navLabel: "SERVIZI",
    include: "Cosa include",
    how: "Come funziona",
    who: "Per chi è",
    other: "Altri servizi",
    ctaTitle: "Parliamone",
    ctaBody: "Raccontami il tuo progetto, ti rispondo entro 24–48h. Preventivo gratuito, nessun impegno.",
    ctaButton: "Contattami",
    back: "Torna alla home",
  },
  en: {
    navHome: "Home",
    navLabel: "SERVICES",
    include: "What's included",
    how: "How it works",
    who: "Who it's for",
    other: "Other services",
    ctaTitle: "Let's talk",
    ctaBody: "Tell me about your project, I'll reply within 24–48h. Free quote, no commitment.",
    ctaButton: "Contact me",
    back: "Back to home",
  },
} as const

function Corners({ color }: { color: string }) {
  return (
    <>
      <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
      <div className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
      <div className="absolute bottom-0 left-0 w-5 h-5" style={{ borderBottom: `2px solid ${color}`, borderLeft: `2px solid ${color}` }} />
      <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: `2px solid ${color}`, borderRight: `2px solid ${color}` }} />
    </>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-white mb-6" style={{ textShadow: "0 0 24px rgba(0,245,255,0.15)" }}>
      {children}
    </h2>
  )
}

export function ServicePageLayout({ color, rgb, jsonLd, content }: ServicePageProps) {
  const { lang, setLang } = useLanguage()
  const activeLang = lang === "en" ? "en" : "it"
  const ui = UI[activeLang]
  const { tag, title, subtitle, intro, features, process, forWho, faq, related } = content[activeLang]

  const toggleLang = () => {
    const next = activeLang === "en" ? "it" : "en"
    setLang(next)
  }

  return (
    <main style={{ background: "#030610", minHeight: "100vh", color: "#e2e8f0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav */}
      <nav className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between gap-4"
        style={{ background: "rgba(3,6,16,0.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(0,245,255,0.08)" }}>
        <div className="flex items-center gap-4">
          <Link href="/"
            className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3"
            style={{ color: "rgba(0,245,255,0.75)" }}>
            <ArrowLeft className="w-4 h-4" />
            {ui.navHome}
          </Link>
          <div className="w-px h-4" style={{ background: "rgba(0,245,255,0.15)" }} />
          <span className="text-sm font-mono" style={{ color: "rgba(0,245,255,0.45)" }}>{ui.navLabel}</span>
        </div>
        <button
          onClick={toggleLang}
          className="text-xs font-mono tracking-[0.14em] px-2.5 py-1 transition-all duration-200 hover:scale-105"
          style={{ color: "#00f5ff", border: "1px solid rgba(0,245,255,0.28)", background: "rgba(0,245,255,0.05)" }}>
          {activeLang === "en" ? "IT" : "EN"}
        </button>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 text-xs font-mono tracking-wider"
            style={{ background: `rgba(${rgb},0.1)`, border: `1px solid rgba(${rgb},0.3)`, color }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
            {tag}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ textShadow: `0 0 30px rgba(${rgb},0.2)` }}>
            {title}
          </h1>
          <p className="text-lg mb-6" style={{ color }}>{subtitle}</p>
          <p className="text-base leading-relaxed" style={{ color: "rgba(155,180,215,0.85)" }}>{intro}</p>
        </div>

        {/* Cosa include */}
        <div className="mb-14">
          <SectionTitle>{ui.include}</SectionTitle>
          <ul className="space-y-3">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "rgba(195,215,240,0.88)" }}>
                <div className="w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5" style={{ background: `rgba(${rgb},0.12)` }}>
                  <Check className="w-3 h-3" style={{ color }} />
                </div>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Come funziona */}
        <div className="mb-14">
          <SectionTitle>{ui.how}</SectionTitle>
          <div className="space-y-4">
            {process.map((p, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ background: `rgba(${rgb},0.03)`, border: `1px solid rgba(${rgb},0.1)` }}>
                <div className="font-semibold mb-1" style={{ color }}>{p.step}</div>
                <div className="text-sm leading-relaxed" style={{ color: "rgba(165,190,225,0.85)" }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Per chi è */}
        <div className="mb-14">
          <SectionTitle>{ui.who}</SectionTitle>
          <p className="text-sm leading-relaxed" style={{ color: "rgba(165,190,225,0.85)" }}>{forWho}</p>
        </div>

        {/* FAQ */}
        <div className="mb-14 rounded-xl p-6" style={{ background: "rgba(0,245,255,0.022)", border: "1px solid rgba(0,245,255,0.11)" }}>
          <div className="text-sm font-semibold mb-2 text-white">{faq.q}</div>
          <div className="text-sm leading-relaxed" style={{ color: "rgba(165,190,225,0.85)" }}>{faq.a}</div>
        </div>

        {/* CTA */}
        <div className="relative rounded-2xl p-8 mb-14 text-center"
          style={{ background: `rgba(${rgb},0.05)`, border: `1px solid rgba(${rgb},0.3)`, boxShadow: `0 0 40px rgba(${rgb},0.08)` }}>
          <Corners color={color} />
          <p className="text-lg font-semibold text-white mb-2">{ui.ctaTitle}</p>
          <p className="text-sm mb-6" style={{ color: "rgba(155,180,215,0.75)" }}>{ui.ctaBody}</p>
          <Link href="/#contatto"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ background: `rgba(${rgb},0.1)`, border: `1px solid rgba(${rgb},0.4)`, color }}>
            <Mail className="w-4 h-4" /> {ui.ctaButton}
          </Link>
        </div>

        {/* Related */}
        <div className="mb-14">
          <SectionTitle>{ui.other}</SectionTitle>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6 sm:mx-0 sm:px-0"
            style={{ scrollbarWidth: "thin" }}>
            {related.map((r) => (
              <Link key={r.href} href={r.href}
                className="group relative shrink-0 snap-start rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]"
                style={{ background: `rgba(${r.rgb},0.035)`, border: `1px solid rgba(${r.rgb},0.2)`, textDecoration: "none", width: "230px" }}>
                <span className="text-xs font-mono tracking-widest uppercase" style={{ color: r.color }}>{r.tag}</span>
                <div className="flex items-center justify-between mt-1 gap-2">
                  <h3 className="text-sm font-semibold text-white group-hover:opacity-90">{r.label}</h3>
                  <ArrowRight className="w-4 h-4 shrink-0 opacity-40 group-hover:opacity-80 transition-opacity" style={{ color: r.color }} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="pt-8" style={{ borderTop: "1px solid rgba(0,245,255,0.08)" }}>
          <Link href="/"
            className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3 w-fit"
            style={{ color: "rgba(0,245,255,0.65)" }}>
            <ArrowLeft className="w-4 h-4" />
            {ui.back}
          </Link>
        </div>
      </div>
    </main>
  )
}
