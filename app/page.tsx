"use client"

import { useState, useEffect, useLayoutEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Linkedin, MapPin, ExternalLink, Menu, X,
  Monitor, Wand2, Star, Zap, Code, Smartphone, Search, Shield,
  ArrowRight, Mail,
} from "lucide-react"
import { ParticleCanvas } from "@/components/particle-canvas"
import { ContactReveal } from "@/components/contact-reveal"
import { useLanguage } from "@/contexts/language-context"

/* ─────────────────────────────────────────────────────
   HOME TRANSLATIONS
───────────────────────────────────────────────────── */
type HomeLang = "it" | "en"

const homeT = {
  it: {
    nav: {
      services: "Servizi",
      about: "Chi sono",
      pricing: "Prezzi",
      contact: "Contatti",
    },
    hero: {
      available: "DISPONIBILE",
      tagline: "Creo siti web personalizzati che trasformano la tua identità digitale. Che tu parta da zero o voglia rinnovare quello che hai, costruiamo qualcosa di cui andare fieri.",
      cta_services: "Scopri i servizi",
      cta_contact: "Contattami",
    },
    services: {
      title: "Cosa posso fare per te",
      subtitle: "Tre percorsi, un obiettivo: una presenza digitale che lavori davvero per te",
      list: [
        {
          tag: "DIAGNOSI",
          title: "Analisi del Sito",
          sub: "Per chi vuole capire cosa non va — prima di agire",
          body: "Analizzo il tuo sito esistente e ti consegno un report completo: SEO tecnico, UX e conversione, contenuti, privacy GDPR e una stima dell'opportunità di business. Il costo è scalabile da qualsiasi progetto successivo.",
          features: ["SEO tecnico e visibilità Google", "UX & tasso di conversione", "Privacy & GDPR compliance", "Stima opportunità di business"],
        },
        {
          tag: "RESTYLING",
          title: "Restyling Sito Esistente",
          sub: "Per chi ha un sito che non li rappresenta più",
          body: "Il tuo sito ha qualche anno? Il design sembra datato? Analizziamo quello che hai, manteniamo ciò che funziona e trasformiamo il resto in qualcosa di moderno ed efficace.",
          features: ["Analisi del sito attuale", "Nuovo design moderno", "Migrazione completa dei contenuti", "Ottimizzazione performance"],
        },
        {
          tag: "EX NOVO",
          title: "Sito Web da Zero",
          sub: "Per chi non ha ancora una presenza online",
          body: "Partiamo da un foglio bianco e costruiamo insieme la tua identità digitale. Design personalizzato, struttura pensata per i tuoi obiettivi, ottimizzato per convertire visitatori in clienti.",
          features: ["Design custom su misura", "Mobile-first & responsive", "SEO ottimizzato", "Veloce, sicuro e ottimizzato per tutti i dispositivi"],
        },
      ],
    },
    manifesto: {
      tag: "IL MIO APPROCCIO",
      quote_pre: "Lavoro come una boutique artigianale: poche cose, semplici, fatte ",
      quote_highlight: "bene.",
      body: "Niente template da compilare, niente pacchetti fissi, niente strumenti automatici che producono siti tutti uguali. Ogni elemento è personalizzabile: struttura, testi, immagini, colori. Hai foto da inserire o descrizioni da aggiungere? Vengono posizionate esattamente dove vuoi — con la cura e la flessibilità che nessun compilatore automatico potrà mai offrirti.",
    },
    whyme: {
      title: "Perché lavorare con me è diverso",
      p1: "Ho trascorso 15 anni in aziende strutturate — da Ernst & Young ad Alibaba.com — a capire perché certi business crescono e altri si fermano. Ho gestito budget, partner, team internazionali e strategie go-to-market in mercati competitivi.",
      p2_pre: "Ora costruisco siti web. Ma con una prospettiva che la maggior parte dei web designer non ha: so cosa guarda davvero un decision maker quando apre un sito. So cosa lo convince e cosa lo perde. So che ",
      p2_highlight: "un sito bello che non converte è un costo, non un investimento.",
      p3: "Lavoro con professionisti e piccole imprese che vogliono una presenza digitale che lavori per loro — non solo una che sembri professionale. Da remoto, ovunque.",
      cta: "Scopri il Laboratorio",
    },
    pricing: {
      title: "Investimento",
      subtitle: "Prezzi indicativi. Ogni progetto è unico — preventivo sempre gratuito e senza impegno.",
      featured_badge: "PIÙ SCELTO",
      vat: "IVA esclusa",
      cta: "Richiedi preventivo",
      note: "I prezzi variano in base a complessità, funzionalità e contenuti. Contattami per un preventivo personalizzato e gratuito.",
      plans: [
        {
          name: "DIAGNOSI",
          tag: "Analisi del Sito",
          desc: "Report completo del tuo sito: punteggi, criticità e piano d'azione. Scalabile dal progetto successivo.",
          features: ["SEO tecnico e contenuti", "UX & conversione", "Privacy & GDPR", "Stima opportunità di business", "Scalabile dal progetto successivo"],
        },
        {
          name: "RESTYLING",
          tag: "Rinnova il Sito",
          desc: "Hai già un sito ma non ti rappresenta più? Lo analizziamo, trasformiamo e ottimizziamo.",
          features: ["Analisi del sito esistente", "Nuovo design moderno", "Migrazione dei contenuti", "Ottimizzazione performance", "SEO refresh"],
        },
        {
          name: "STARTER",
          tag: "Presenza Online",
          desc: "Per professionisti e piccole realtà che vogliono una presenza online pulita ed efficace.",
          features: ["10+ pagine create insieme", "Design su misura", "Mobile-first & responsive", "SEO base", "Consegna in 1 settimana"],
        },
        {
          name: "BUSINESS",
          tag: "Sito Completo",
          desc: "Per aziende e brand che vogliono un sito multi-pagina completo con funzionalità avanzate.",
          features: ["Blog / CMS integrato", "Analytics & tracking", "SEO avanzato", "Ottimizzazione performance", "Consegna in 3–4 settimane"],
        },
      ],
    },
    contact: {
      title: "Parliamone",
      subtitle: "Raccontami il tuo progetto,\nti rispondo entro 24–48h",
      nome: "Nome",
      cognome: "Cognome",
      email: "Email",
      tipo_label: "Tipo di progetto",
      tipo_placeholder: "Seleziona un'opzione",
      tipo_options: ["Diagnosi sito esistente", "Restyling sito esistente", "Nuovo sito di presenza online", "Nuovo sito completo", "Non so ancora, voglio informazioni"],
      messaggio: "Messaggio",
      messaggio_ph: "Raccontami la tua idea, il tuo settore, cosa vorresti nel sito...",
      submit: "Invia messaggio",
      loading: "Apertura email...",
      footer_note: "Preventivo gratuito · Nessun impegno",
      err_required: "Campo obbligatorio",
      err_email: "Email non valida",
      err_send: "Errore nell'invio. Riprova o scrivimi su LinkedIn.",
      nome_ph: "Mario",
      cognome_ph: "Rossi",
      email_ph: "mario@esempio.it",
    },
    footer: { cv_link: "Il mio background" },
  },
  en: {
    nav: {
      services: "Services",
      about: "About me",
      pricing: "Pricing",
      contact: "Contact",
    },
    hero: {
      available: "AVAILABLE",
      tagline: "I build custom websites that transform your digital identity. Whether you're starting from scratch or want to refresh what you have, let's create something to be proud of.",
      cta_services: "Explore services",
      cta_contact: "Contact me",
    },
    services: {
      title: "What I can do for you",
      subtitle: "Three paths, one goal: a digital presence that truly works for you",
      list: [
        {
          tag: "DIAGNOSIS",
          title: "Website Analysis",
          sub: "For those who want to understand what's wrong — before acting",
          body: "I analyze your existing website and deliver a complete report: technical SEO, UX and conversion, content, GDPR privacy and a business opportunity estimate. The cost is deductible from any follow-up project.",
          features: ["Technical SEO & Google visibility", "UX & conversion rate", "Privacy & GDPR compliance", "Business opportunity estimate"],
        },
        {
          tag: "RESTYLING",
          title: "Website Restyling",
          sub: "For those with a site that no longer represents them",
          body: "Your website is a few years old? The design looks dated? We analyze what you have, keep what works, and transform the rest into something modern and effective.",
          features: ["Current site analysis", "New modern design", "Full content migration", "Performance optimization"],
        },
        {
          tag: "FROM SCRATCH",
          title: "Website from Scratch",
          sub: "For those who don't yet have an online presence",
          body: "We start from a blank page and build your digital identity together. Custom design, structure tailored to your goals, optimized to turn visitors into clients.",
          features: ["Custom design", "Mobile-first & responsive", "SEO optimized", "Fast, secure and optimized for all devices"],
        },
      ],
    },
    manifesto: {
      tag: "MY APPROACH",
      quote_pre: "I work like an artisan boutique: a few things, simple, done ",
      quote_highlight: "well.",
      body: "No templates to fill in, no fixed packages, no automated tools that produce identical sites. Every element is customizable: structure, text, images, colors. Do you have photos to include or descriptions to add? They're placed exactly where you want — with the care and flexibility that no automatic builder will ever offer you.",
    },
    whyme: {
      title: "Why working with me is different",
      p1: "I spent 15 years in structured companies — from Ernst & Young to Alibaba.com — understanding why some businesses grow and others stall. I managed budgets, partners, international teams and go-to-market strategies in competitive markets.",
      p2_pre: "Now I build websites. But with a perspective most web designers don't have: I know what a decision-maker really looks at when they open a site. I know what convinces them and what loses them. I know that ",
      p2_highlight: "a beautiful site that doesn't convert is a cost, not an investment.",
      p3: "I work with professionals and small businesses who want a digital presence that works for them — not just one that looks professional. Remotely, from anywhere.",
      cta: "Explore the Laboratorio",
    },
    pricing: {
      title: "Investment",
      subtitle: "Indicative prices. Every project is unique — quote always free and without commitment.",
      featured_badge: "MOST POPULAR",
      vat: "VAT excl.",
      cta: "Request a quote",
      note: "Prices vary based on complexity, features and content. Contact me for a free personalized quote.",
      plans: [
        {
          name: "DIAGNOSIS",
          tag: "Website Analysis",
          desc: "Full report on your site: scores, issues and action plan. Deductible from any follow-up project.",
          features: ["Technical SEO & content", "UX & conversion", "Privacy & GDPR", "Business opportunity estimate", "Deductible from next project"],
        },
        {
          name: "RESTYLING",
          tag: "Renew Your Site",
          desc: "Already have a site but it no longer represents you? We analyze, transform and optimize it.",
          features: ["Existing site analysis", "New modern design", "Content migration", "Performance optimization", "SEO refresh"],
        },
        {
          name: "STARTER",
          tag: "Online Presence",
          desc: "For professionals and small businesses who want a clean and effective online presence.",
          features: ["10+ pages built together", "Custom design", "Mobile-first & responsive", "Basic SEO", "Delivery in 1 week"],
        },
        {
          name: "BUSINESS",
          tag: "Complete Website",
          desc: "For companies and brands who want a complete multi-page site with advanced features.",
          features: ["Blog / CMS integrated", "Analytics & tracking", "Advanced SEO", "Performance optimization", "Delivery in 3–4 weeks"],
        },
      ],
    },
    contact: {
      title: "Let's talk",
      subtitle: "Tell me about your project,\nI'll reply within 24–48h",
      nome: "First name",
      cognome: "Last name",
      email: "Email",
      tipo_label: "Project type",
      tipo_placeholder: "Select an option",
      tipo_options: ["Website diagnosis", "Restyling existing site", "New online presence site", "New complete site", "Not sure yet, I want information"],
      messaggio: "Message",
      messaggio_ph: "Tell me about your idea, your industry, what you'd like in the site...",
      submit: "Send message",
      loading: "Sending...",
      footer_note: "Free quote · No commitment",
      err_required: "Required field",
      err_email: "Invalid email",
      err_send: "Error sending. Try again or write to me on LinkedIn.",
      nome_ph: "John",
      cognome_ph: "Smith",
      email_ph: "john@example.com",
    },
    footer: { cv_link: "My background" },
  },
} as const

function useHomeLang() {
  const { lang } = useLanguage()
  const homeLang: HomeLang = lang === "en" ? "en" : "it"
  return homeT[homeLang]
}

const scrollToSection = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

/* ─────────────────────────────────────────────────────
   STATIC CONFIG (non-translatable)
───────────────────────────────────────────────────── */
const SERVICE_STATIC = [
  { icon: Search, color: "#fbbf24", rgb: "251,191,36", featureIcons: [Zap, Smartphone, Shield, Star] },
  { icon: Wand2, color: "#a855f7", rgb: "168,85,247", featureIcons: [Star, Wand2, ArrowRight, Zap] },
  { icon: Monitor, color: "#00f5ff", rgb: "0,245,255", featureIcons: [Code, Smartphone, Search, Zap] },
] as const

const PLAN_STATIC = [
  { price: "€120", color: "#fbbf24", rgb: "251,191,36", featured: false },
  { price: "da €300", color: "#f0abfc", rgb: "240,171,252", featured: false },
  { price: "da €500", color: "#00f5ff", rgb: "0,245,255", featured: false },
  { price: "da €1.500", color: "#a855f7", rgb: "168,85,247", featured: false },
] as const

/* ─────────────────────────────────────────────────────
   TYPING TEXT
───────────────────────────────────────────────────── */
function TypingText({ texts }: { texts: string[] }) {
  const [display, setDisplay] = useState("")
  const [ti, setTi] = useState(0)
  const [ci, setCi] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const cur = texts[ti]
    const id = setTimeout(() => {
      if (!deleting) {
        if (ci < cur.length) {
          setDisplay(cur.slice(0, ci + 1))
          setCi(c => c + 1)
        } else {
          setPaused(true)
          setTimeout(() => { setPaused(false); setDeleting(true) }, 2200)
        }
      } else {
        if (ci > 0) {
          setDisplay(cur.slice(0, ci - 1))
          setCi(c => c - 1)
        } else {
          setDeleting(false)
          setTi(i => (i + 1) % texts.length)
        }
      }
    }, deleting ? 42 : 72)
    return () => clearTimeout(id)
  }, [ci, deleting, paused, ti, texts])

  return (
    <span>
      {display}
      <span className="animate-blink-cursor" style={{ color: "#00f5ff" }}>_</span>
    </span>
  )
}

/* ─────────────────────────────────────────────────────
   GLITCH TEXT
───────────────────────────────────────────────────── */
function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    let id: ReturnType<typeof setTimeout>
    const schedule = () => {
      id = setTimeout(() => {
        setGlitching(true)
        setTimeout(() => { setGlitching(false); schedule() }, 240 + Math.random() * 160)
      }, 3200 + Math.random() * 4000)
    }
    schedule()
    return () => clearTimeout(id)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {glitching && (
        <>
          <span className="absolute inset-0 z-20 animate-glitch-1"
            style={{ color: "#ff00ea", clipPath: "inset(14% 0 54% 0)", transform: "translate(-4px, 2px)" }}>
            {text}
          </span>
          <span className="absolute inset-0 z-20 animate-glitch-2"
            style={{ color: "#00f5ff", clipPath: "inset(62% 0 12% 0)", transform: "translate(4px, -2px)" }}>
            {text}
          </span>
        </>
      )}
    </span>
  )
}

/* ─────────────────────────────────────────────────────
   HOLO TILT HOOK
───────────────────────────────────────────────────── */
function useHoloTilt(intensity = 11) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let isTouching = false
    let springTimer: ReturnType<typeof setTimeout>

    const getTilt = (clientX: number, clientY: number) => {
      const r = el.getBoundingClientRect()
      return {
        x: Math.max(-1, Math.min(1, (clientX - r.left - r.width / 2) / (r.width / 2))),
        y: Math.max(-1, Math.min(1, (clientY - r.top - r.height / 2) / (r.height / 2))),
      }
    }

    const applyTilt = (clientX: number, clientY: number) => {
      const { x, y } = getTilt(clientX, clientY)
      el.style.transform = `perspective(800px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale3d(1.025,1.025,1.025)`
      el.style.transition = "transform 0.05s ease"
      const shimmer = el.querySelector<HTMLElement>(".holo-shimmer-inner")
      if (shimmer) {
        shimmer.style.background = `radial-gradient(circle at ${(x + 1) / 2 * 100}% ${(y + 1) / 2 * 100}%, rgba(0,245,255,0.13) 0%, rgba(168,85,247,0.07) 40%, transparent 70%)`
        shimmer.style.opacity = "1"
      }
    }

    const resetTilt = (transition = "transform 0.55s ease") => {
      clearTimeout(springTimer)
      el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
      el.style.transition = transition
      const shimmer = el.querySelector<HTMLElement>(".holo-shimmer-inner")
      if (shimmer) shimmer.style.opacity = "0"
    }

    const springBack = (clientX: number, clientY: number) => {
      const { x, y } = getTilt(clientX, clientY)
      el.style.transform = `perspective(800px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale3d(0.97,0.97,0.97)`
      el.style.transition = "transform 0.1s ease-out"
      springTimer = setTimeout(() => {
        resetTilt("transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)")
      }, 110)
    }

    const onMouseMove = (e: MouseEvent) => { if (!isTouching) applyTilt(e.clientX, e.clientY) }
    const onMouseLeave = () => { if (!isTouching) resetTilt() }
    const onClick = (e: MouseEvent) => { if (!isTouching) springBack(e.clientX, e.clientY) }

    const onTouchStart = () => { isTouching = true }
    const onTouchMove = (e: TouchEvent) => { const t = e.touches[0]; if (t) applyTilt(t.clientX, t.clientY) }
    const onTouchEnd = (e: TouchEvent) => {
      const t = e.changedTouches[0]
      if (t) springBack(t.clientX, t.clientY)
      setTimeout(() => { isTouching = false }, 500)
    }
    const onTouchCancel = () => { resetTilt(); setTimeout(() => { isTouching = false }, 500) }

    el.addEventListener("mousemove", onMouseMove)
    el.addEventListener("mouseleave", onMouseLeave)
    el.addEventListener("click", onClick)
    el.addEventListener("touchstart", onTouchStart, { passive: true })
    el.addEventListener("touchmove", onTouchMove, { passive: true })
    el.addEventListener("touchend", onTouchEnd, { passive: true })
    el.addEventListener("touchcancel", onTouchCancel)

    return () => {
      clearTimeout(springTimer)
      el.removeEventListener("mousemove", onMouseMove)
      el.removeEventListener("mouseleave", onMouseLeave)
      el.removeEventListener("click", onClick)
      el.removeEventListener("touchstart", onTouchStart)
      el.removeEventListener("touchmove", onTouchMove)
      el.removeEventListener("touchend", onTouchEnd)
      el.removeEventListener("touchcancel", onTouchCancel)
    }
  }, [intensity])

  return { ref }
}

/* ─────────────────────────────────────────────────────
   USE IN VIEW
───────────────────────────────────────────────────── */
function useScrollInView(threshold = 0.1) {
  const [inView, setInView] = useState(true) // visible in SSR so Google reads content
  const [ready, setReady] = useState(false)  // transitions off until after initial hide
  const ref = useRef<HTMLDivElement>(null)

  // useLayoutEffect fires before the browser paints — hides below-fold elements
  // without any visible flash (unlike useEffect which fires after paint)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (el.getBoundingClientRect().top > window.innerHeight) setInView(false)
  }, [])

  useEffect(() => {
    const tid = setTimeout(() => setReady(true), 100)
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => { clearTimeout(tid); obs.disconnect() }
  }, [threshold])

  return { ref, inView, ready }
}

/* ─────────────────────────────────────────────────────
   SECTION HEADER
───────────────────────────────────────────────────── */
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px flex-1 max-w-28" style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.45))" }} />
        <span className="text-xs font-mono" style={{ color: "rgba(0,245,255,0.55)" }}>◈</span>
        <div className="h-px flex-1 max-w-28" style={{ background: "linear-gradient(90deg, rgba(0,245,255,0.45), transparent)" }} />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3"
        style={{ textShadow: "0 0 30px rgba(0,245,255,0.18)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl mx-auto text-sm leading-relaxed whitespace-pre-line" style={{ color: "rgba(140,165,200,0.75)" }}>
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-4">
        <div className="h-px w-8" style={{ background: "rgba(0,245,255,0.35)" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00f5ff", boxShadow: "0 0 8px rgba(0,245,255,0.8)" }} />
        <div className="h-px w-8" style={{ background: "rgba(0,245,255,0.35)" }} />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────────
   HOME NAVIGATION
───────────────────────────────────────────────────── */
function HomeNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()
  const ht = homeT[lang === "en" ? "en" : "it"]

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", h)
    return () => window.removeEventListener("scroll", h)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem("md-lang") as "it" | "en" | null
    if (saved && saved !== lang) setLang(saved)
  }, [])

  const toggleLang = () => {
    const next = lang === "en" ? "it" : "en"
    setLang(next)
    localStorage.setItem("md-lang", next)
  }

  const sections = [
    { label: ht.nav.services, id: "servizi" },
    { label: ht.nav.pricing, id: "pricing" },
    { label: ht.nav.contact, id: "contatto" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || menuOpen ? "rgba(3,6,16,0.92)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(0,245,255,0.1)" : "none",
        boxShadow: scrolled ? "0 0 25px rgba(0,245,255,0.04)" : "none",
      }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-black tracking-tight transition-all duration-300 hover:scale-110"
          style={{ color: "#00f5ff", textShadow: "0 0 14px rgba(0,245,255,0.65)" }}>
          MD
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map(s => (
            <button key={s.id} onClick={() => scrollToSection(s.id)}
              className="text-xs tracking-[0.12em] uppercase transition-colors duration-200 hover:text-cyan-400"
              style={{ color: "rgba(175,195,220,0.65)" }}>
              {s.label}
            </button>
          ))}
          <a href="/lab"
            className="text-xs tracking-[0.12em] uppercase transition-colors duration-200 hover:text-cyan-400 flex items-center gap-1"
            style={{ color: "#00f5ff", border: "1px solid rgba(0,245,255,0.25)", padding: "3px 10px", borderRadius: "4px" }}>
            Laboratorio
          </a>
        </div>

        {/* Right: lang toggle (always visible) + hamburger (mobile only) */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-mono tracking-[0.14em] px-2.5 py-1 transition-all duration-200 hover:scale-105"
            style={{
              color: "#00f5ff",
              border: "1px solid rgba(0,245,255,0.28)",
              background: "rgba(0,245,255,0.05)",
            }}>
            {lang === "en" ? "IT" : "EN"}
          </button>
          <button onClick={() => setMenuOpen(p => !p)} className="md:hidden" style={{ color: "#00f5ff" }}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown (no lang toggle here — it's always in the topbar) */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-5"
          style={{ borderTop: "1px solid rgba(0,245,255,0.08)", background: "rgba(3,6,16,0.97)" }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => { scrollToSection(s.id); setMenuOpen(false) }}
              className="text-left text-sm tracking-wider uppercase" style={{ color: "rgba(175,195,220,0.7)" }}>
              {s.label}
            </button>
          ))}
          <a href="/lab" onClick={() => setMenuOpen(false)}
            className="text-sm tracking-wider uppercase" style={{ color: "#00f5ff" }}>
            /lab — I miei progetti
          </a>
        </div>
      )}
    </nav>
  )
}

/* ─────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────── */
function HeroSection() {
  const ht = useHomeLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanlines">
      <div className="absolute inset-0 cyber-grid" style={{ opacity: 0.45 }} />
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse 75% 55% at 50% 42%, rgba(0,245,255,0.055) 0%, transparent 72%)"
      }} />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, transparent 55%, #030610 100%)"
      }} />

      {/* Floating orbs */}
      <div className="absolute top-[19%] right-[11%] pointer-events-none animate-float-orb" style={{ animationDelay: "-1s" }}>
        <div className="w-36 h-36 rounded-full" style={{
          border: "1px solid rgba(0,245,255,0.17)",
          background: "radial-gradient(circle, rgba(0,245,255,0.07) 0%, transparent 70%)",
          boxShadow: "0 0 45px rgba(0,245,255,0.1)",
        }} />
      </div>
      <div className="absolute bottom-[32%] left-[7%] pointer-events-none animate-float-orb-2" style={{ animationDelay: "-4.5s" }}>
        <div className="w-24 h-24 rounded-full" style={{
          border: "1px solid rgba(168,85,247,0.22)",
          background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
          boxShadow: "0 0 35px rgba(168,85,247,0.13)",
        }} />
      </div>
      <div className="absolute top-[17%] left-[17%] pointer-events-none animate-float-orb" style={{ animationDelay: "-6s" }}>
        <div className="w-9 h-9 rotate-45" style={{
          border: "1px solid rgba(0,245,255,0.28)",
          boxShadow: "0 0 12px rgba(0,245,255,0.22)",
        }} />
      </div>
      <div className="absolute bottom-[22%] right-[17%] pointer-events-none animate-float-orb-2" style={{ animationDelay: "-2.5s" }}>
        <div className="w-7 h-7 rotate-45" style={{
          border: "1px solid rgba(168,85,247,0.32)",
          boxShadow: "0 0 10px rgba(168,85,247,0.28)",
        }} />
      </div>
      <div className="absolute top-[55%] left-[3%] pointer-events-none animate-float-orb" style={{ animationDelay: "-8s" }}>
        <div className="w-5 h-5 rotate-45" style={{ border: "1px solid rgba(240,171,252,0.3)" }} />
      </div>
      <div className="absolute top-[30%] right-[3%] pointer-events-none animate-float-orb-2" style={{ animationDelay: "-3s" }}>
        <div className="w-5 h-5 rotate-45" style={{ border: "1px solid rgba(0,245,255,0.25)" }} />
      </div>

      {/* Rotating rings */}
      <div className="absolute pointer-events-none" style={{ width: 580, height: 580, opacity: 0.075 }}>
        <div className="absolute inset-0 rounded-full animate-spin-slow" style={{ border: "1px dashed rgba(0,245,255,0.9)" }} />
        <div className="absolute inset-[26px] rounded-full animate-spin-slow-reverse" style={{ border: "1px solid rgba(168,85,247,0.9)" }} />
        <div className="absolute inset-[65px] rounded-full animate-spin-slow" style={{ border: "1px dotted rgba(0,245,255,0.7)" }} />
      </div>

      {/* Scanline sweep */}
      <div className="absolute left-0 right-0 h-px pointer-events-none animate-scanline"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.55), rgba(168,85,247,0.35), transparent)",
          boxShadow: "0 0 22px rgba(0,245,255,0.45)",
          zIndex: 20,
        }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status bar */}
        <div className="flex justify-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{ boxShadow: "0 0 7px rgba(74,222,128,0.9)" }} />
            <span className="text-xs tracking-[0.22em] uppercase" style={{ color: "rgba(74,222,128,0.9)" }}>{ht.hero.available}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <MapPin className="w-3 h-3" style={{ color: "rgba(0,245,255,0.65)" }} />
            <span className="text-xs tracking-[0.22em] uppercase" style={{ color: "rgba(0,245,255,0.65)" }}>MILANO, IT</span>
          </div>
        </div>

        {/* Name with HUD frame */}
        <div className="relative inline-block px-8 py-5 mb-5">
          <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: "2px solid rgba(0,245,255,0.7)", borderLeft: "2px solid rgba(0,245,255,0.7)" }} />
          <div className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: "2px solid rgba(0,245,255,0.7)", borderRight: "2px solid rgba(0,245,255,0.7)" }} />
          <div className="absolute bottom-0 left-0 w-5 h-5" style={{ borderBottom: "2px solid rgba(0,245,255,0.7)", borderLeft: "2px solid rgba(0,245,255,0.7)" }} />
          <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: "2px solid rgba(0,245,255,0.7)", borderRight: "2px solid rgba(0,245,255,0.7)" }} />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white"
            style={{ textShadow: "0 0 40px rgba(0,245,255,0.22), 0 0 80px rgba(0,245,255,0.08)" }}>
            <GlitchText text="Massimo Dassano" />
          </h1>
        </div>

        {/* Typing subtitle */}
        <div className="text-xl md:text-2xl font-mono mb-7 h-8" style={{ color: "#00f5ff" }}>
          <span className="sr-only">Web Creator & Web Interior Designer</span>
          <span aria-hidden="true"><TypingText texts={["Web Creator", "Digital Architect", "Web Interior Designer"]} /></span>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.45))" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00f5ff", boxShadow: "0 0 9px rgba(0,245,255,0.9)" }} />
          <div className="h-px w-20" style={{ background: "linear-gradient(90deg, rgba(0,245,255,0.45), transparent)" }} />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(155,180,215,0.8)" }}>
          {ht.hero.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => scrollToSection("servizi")}
            className="flex items-center gap-2 px-8 py-3.5 font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(0,245,255,0.08)",
              border: "1px solid rgba(0,245,255,0.38)",
              color: "#00f5ff",
              boxShadow: "0 0 22px rgba(0,245,255,0.13)",
            }}>
            <span>{ht.hero.cta_services}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => scrollToSection("contatto")}
            className="flex items-center gap-2 px-8 py-3.5 font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.38)",
              color: "#a855f7",
              boxShadow: "0 0 22px rgba(168,85,247,0.13)",
            }}>
            <span>{ht.hero.cta_contact}</span>
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>

    </section>
  )
}

/* ─────────────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────────────── */
function ServicesSection() {
  const { ref, inView, ready } = useScrollInView()
  const card1 = useHoloTilt()
  const card2 = useHoloTilt()
  const card3 = useHoloTilt()
  const ht = useHomeLang()

  const services = ht.services.list.map((s, i) => ({ ...s, ...SERVICE_STATIC[i] }))
  const tilts = [card1, card2, card3]

  return (
    <section id="servizi" className="py-24 relative">
      <div className="absolute inset-0 cyber-grid-dense" style={{ opacity: 0.18 }} />
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`${ready ? "transition-all duration-700" : ""} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeader title={ht.services.title} subtitle={ht.services.subtitle} />
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon
              const t = tilts[i]
              return (
                <div key={i}
                  ref={t.ref}
                  className="relative rounded-2xl p-7 overflow-hidden cursor-default flex flex-col"
                  style={{
                    background: `rgba(${svc.rgb},0.035)`,
                    border: `1px solid rgba(${svc.rgb},0.2)`,
                    boxShadow: `0 0 35px rgba(${svc.rgb},0.06)`,
                    transformStyle: "preserve-3d",
                  }}>
                  <div className="holo-shimmer-inner absolute inset-0 rounded-2xl pointer-events-none" style={{ opacity: 0 }} />
                  <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: `2px solid rgba(${svc.rgb},0.58)`, borderLeft: `2px solid rgba(${svc.rgb},0.58)` }} />
                  <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: `2px solid rgba(${svc.rgb},0.58)`, borderRight: `2px solid rgba(${svc.rgb},0.58)` }} />

                  <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 text-xs font-mono tracking-wider self-start"
                    style={{ background: `rgba(${svc.rgb},0.1)`, border: `1px solid rgba(${svc.rgb},0.28)`, color: svc.color }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: svc.color, boxShadow: `0 0 6px ${svc.color}` }} />
                    {svc.tag}
                  </div>

                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `rgba(${svc.rgb},0.1)`, border: `1px solid rgba(${svc.rgb},0.22)`, boxShadow: `0 0 22px rgba(${svc.rgb},0.1)` }}>
                    <Icon className="w-6 h-6" style={{ color: svc.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{svc.title}</h3>
                  <p className="text-sm font-medium mb-3" style={{ color: svc.color }}>{svc.sub}</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(145,170,210,0.75)" }}>{svc.body}</p>

                  <ul className="space-y-2.5 mt-auto">
                    {svc.features.map((f, fi) => {
                      const FIcon = svc.featureIcons[fi]
                      return (
                        <li key={fi} className="flex items-center gap-3 text-sm" style={{ color: "rgba(195,215,240,0.82)" }}>
                          <div className="w-6 h-6 rounded flex items-center justify-center shrink-0"
                            style={{ background: `rgba(${svc.rgb},0.1)` }}>
                            <FIcon className="w-3.5 h-3.5" style={{ color: svc.color }} />
                          </div>
                          {f}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   MANIFESTO
───────────────────────────────────────────────────── */
function ManifestoSection() {
  const { ref, inView, ready } = useScrollInView()
  const ht = useHomeLang()

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(0,245,255,0.018) 50%, transparent)" }} />
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`${ready ? "transition-all duration-700" : ""} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Quote block */}
          <div className="relative rounded-2xl px-8 py-10 md:px-14 md:py-12 text-center mb-12"
            style={{
              background: "rgba(0,245,255,0.025)",
              border: "1px solid rgba(0,245,255,0.12)",
            }}>
            {/* Corners */}
            <div className="absolute top-0 left-0 w-6 h-6" style={{ borderTop: "2px solid rgba(0,245,255,0.55)", borderLeft: "2px solid rgba(0,245,255,0.55)" }} />
            <div className="absolute top-0 right-0 w-6 h-6" style={{ borderTop: "2px solid rgba(0,245,255,0.55)", borderRight: "2px solid rgba(0,245,255,0.55)" }} />
            <div className="absolute bottom-0 left-0 w-6 h-6" style={{ borderBottom: "2px solid rgba(0,245,255,0.55)", borderLeft: "2px solid rgba(0,245,255,0.55)" }} />
            <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderBottom: "2px solid rgba(0,245,255,0.55)", borderRight: "2px solid rgba(0,245,255,0.55)" }} />

            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 text-xs font-mono tracking-wider"
              style={{ background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.2)", color: "#00f5ff" }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00f5ff", boxShadow: "0 0 6px #00f5ff" }} />
              {ht.manifesto.tag}
            </div>

            <blockquote className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4"
              style={{ textShadow: "0 0 30px rgba(0,245,255,0.15)" }}>
              {ht.manifesto.quote_pre}
              <span style={{ color: "#00f5ff" }}>{ht.manifesto.quote_highlight}</span>
            </blockquote>

            <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: "rgba(155,180,215,0.8)" }}>
              {ht.manifesto.body}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   WHY ME
───────────────────────────────────────────────────── */
function WhyMeSection() {
  const { ref, inView, ready } = useScrollInView()
  const ht = useHomeLang()

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 cyber-grid-dense" style={{ opacity: 0.12 }} />
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className={`${ready ? "transition-all duration-700" : ""} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeader title={ht.whyme.title} />

          <div className="relative rounded-2xl px-8 py-10 md:px-12"
            style={{ background: "rgba(0,245,255,0.022)", border: "1px solid rgba(0,245,255,0.11)" }}>
            <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: "2px solid rgba(0,245,255,0.5)", borderLeft: "2px solid rgba(0,245,255,0.5)" }} />
            <div className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: "2px solid rgba(0,245,255,0.5)", borderRight: "2px solid rgba(0,245,255,0.5)" }} />
            <div className="absolute bottom-0 left-0 w-5 h-5" style={{ borderBottom: "2px solid rgba(0,245,255,0.5)", borderLeft: "2px solid rgba(0,245,255,0.5)" }} />
            <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: "2px solid rgba(0,245,255,0.5)", borderRight: "2px solid rgba(0,245,255,0.5)" }} />

            <div className="space-y-6 text-sm leading-relaxed" style={{ color: "rgba(165,190,225,0.85)" }}>
              <p>{ht.whyme.p1}</p>
              <p>
                {ht.whyme.p2_pre}
                <span className="text-white font-medium">{ht.whyme.p2_highlight}</span>
              </p>
              <p>{ht.whyme.p3}</p>
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(0,245,255,0.08)" }}>
              <Link href="/lab"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                style={{ color: "#00f5ff" }}>
                {ht.whyme.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   PRICING
───────────────────────────────────────────────────── */
function PricingSection() {
  const { ref, inView, ready } = useScrollInView()
  const ht = useHomeLang()

  const plans = ht.pricing.plans.map((p, i) => ({ ...p, ...PLAN_STATIC[i] }))

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 cyber-grid" style={{ opacity: 0.22 }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent, rgba(0,245,255,0.018) 50%, transparent)" }} />
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`${ready ? "transition-all duration-700" : ""} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeader title={ht.pricing.title} subtitle={ht.pricing.subtitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((pl, i) => (
              <div key={i}
                className="relative rounded-2xl p-7 flex flex-col"
                style={{
                  background: pl.featured ? `rgba(${pl.rgb},0.06)` : `rgba(${pl.rgb},0.025)`,
                  border: pl.featured ? `1px solid rgba(${pl.rgb},0.42)` : `1px solid rgba(${pl.rgb},0.17)`,
                  boxShadow: pl.featured ? `0 0 45px rgba(${pl.rgb},0.12), 0 0 90px rgba(${pl.rgb},0.06)` : "none",
                }}>
                {pl.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 text-xs font-mono font-bold"
                    style={{ background: `rgba(${pl.rgb},0.18)`, border: `1px solid rgba(${pl.rgb},0.48)`, color: pl.color }}>
                    {ht.pricing.featured_badge}
                  </div>
                )}
                <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: `2px solid rgba(${pl.rgb},0.48)`, borderLeft: `2px solid rgba(${pl.rgb},0.48)` }} />
                <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: `2px solid rgba(${pl.rgb},0.48)`, borderRight: `2px solid rgba(${pl.rgb},0.48)` }} />

                <div className="mb-5">
                  <span className="text-xs font-mono tracking-[0.28em]" style={{ color: pl.color }}>{pl.name}</span>
                  <h3 className="text-lg font-bold text-white mt-1">{pl.tag}</h3>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-black" style={{ color: pl.color, textShadow: `0 0 22px rgba(${pl.rgb},0.4)` }}>{pl.price}</div>
                  <div className="text-xs mt-1" style={{ color: "rgba(120,145,185,0.7)" }}>{ht.pricing.vat}</div>
                </div>

                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(145,170,210,0.72)" }}>{pl.desc}</p>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {pl.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(195,215,240,0.82)" }}>
                      <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: pl.color, boxShadow: `0 0 6px rgba(${pl.rgb},0.6)` }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button onClick={() => scrollToSection("contatto")}
                  className="flex items-center justify-center gap-2 py-3 text-sm font-semibold transition-all duration-200 hover:scale-105"
                  style={{ background: `rgba(${pl.rgb},0.1)`, border: `1px solid rgba(${pl.rgb},0.33)`, color: pl.color }}>
                  {ht.pricing.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <p className="text-center text-xs mt-8 max-w-lg mx-auto" style={{ color: "rgba(110,135,175,0.6)" }}>
            {ht.pricing.note}
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   PORTFOLIO  (hidden — toggle false → true to show)
───────────────────────────────────────────────────── */
const PORTFOLIO_ITEMS = [
  {
    label: "Sito istituzionale",
    title: "Dassano",
    desc: "Sito vetrina personalizzato per un professionista del settore commerciale.",
    tags: ["Branding", "SEO", "Performance"],
    href: "https://www.dassano.it",
    external: true,
    color: "#00f5ff",
    rgb: "0,245,255",
  },
  {
    label: "Invito digitale",
    title: "Festa di compleanno",
    desc: "Pagina invito interattiva con countdown, dinosauri animati e form di conferma presenza.",
    tags: ["Animazioni", "Interattivo", "Mobile-first"],
    href: "/esempi/compleanno.html",
    external: false,
    color: "#f0abfc",
    rgb: "240,171,252",
  },
] as const

function PortfolioSection() {
  const { ref, inView, ready } = useScrollInView()
  const ht = useHomeLang()

  return (
    <section id="portfolio" className="py-14 md:py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className={`${ready ? "transition-all duration-700" : ""} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeader
            title={ht.nav.services === "Servizi" ? "Alcuni lavori" : "Recent work"}
            subtitle={ht.nav.services === "Servizi" ? "Esempi reali di quello che costruisco" : "Real examples of what I build"}
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {PORTFOLIO_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group relative rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: `rgba(${item.rgb},0.035)`,
                  border: `1px solid rgba(${item.rgb},0.18)`,
                  textDecoration: "none",
                }}
              >
                <div>
                  <span className="text-xs font-mono tracking-widest uppercase" style={{ color: `rgba(${item.rgb},0.65)` }}>
                    {item.label}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 group-hover:text-white transition-colors" style={{ color: item.color }}>
                    {item.title}
                  </h3>
                  <p className="text-sm mt-2" style={{ color: "rgba(155,175,210,0.7)" }}>{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-mono"
                      style={{ background: `rgba(${item.rgb},0.09)`, border: `1px solid rgba(${item.rgb},0.22)`, color: `rgba(${item.rgb},0.8)` }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <ExternalLink className="absolute top-5 right-5 w-4 h-4 opacity-30 group-hover:opacity-70 transition-opacity" style={{ color: item.color }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────────────── */
function ContactSection() {
  const { ref, inView, ready } = useScrollInView()
  const router = useRouter()
  const ht = useHomeLang()
  const [form, setForm] = useState({ nome: "", cognome: "", email: "", tipo: "", messaggio: "" })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nome.trim()) e.nome = ht.contact.err_required
    if (!form.cognome.trim()) e.cognome = ht.contact.err_required
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = ht.contact.err_email
    if (!form.messaggio.trim()) e.messaggio = ht.contact.err_required
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      router.push("/grazie")
    } catch {
      setErrors({ messaggio: ht.contact.err_send })
    } finally {
      setLoading(false)
    }
  }

  const field = (id: keyof typeof form, label: string, placeholder: string, type = "text") => (
    <div>
      <label className="block text-xs font-medium mb-1.5 tracking-wide" style={{ color: "rgba(175,200,235,0.7)" }}>
        {label}{["nome","cognome","email","messaggio"].includes(id) && <span style={{ color: "#00f5ff" }}> *</span>}
      </label>
      <input
        type={type}
        value={form[id]}
        onChange={ev => setForm(f => ({ ...f, [id]: ev.target.value }))}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${errors[id] ? "rgba(248,113,113,0.5)" : "rgba(0,245,255,0.12)"}`,
          color: "#e2e8f0",
          caretColor: "#00f5ff",
        }}
        onFocus={ev => { ev.target.style.borderColor = "rgba(0,245,255,0.4)"; ev.target.style.boxShadow = "0 0 0 3px rgba(0,245,255,0.06)" }}
        onBlur={ev => { ev.target.style.borderColor = errors[id] ? "rgba(248,113,113,0.5)" : "rgba(0,245,255,0.12)"; ev.target.style.boxShadow = "none" }}
      />
      {errors[id] && <p className="text-xs mt-1" style={{ color: "rgba(248,113,113,0.85)" }}>{errors[id]}</p>}
    </div>
  )

  return (
    <section id="contatto" className="py-24 relative">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.035) 0%, transparent 72%)" }} />
      <div className="max-w-xl mx-auto px-6">
        <div ref={ref} className={`${ready ? "transition-all duration-700" : ""} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionHeader title={ht.contact.title} subtitle={ht.contact.subtitle} />

          <div className="relative rounded-2xl p-8"
            style={{ background: "rgba(0,245,255,0.022)", border: "1px solid rgba(0,245,255,0.12)", boxShadow: "0 0 50px rgba(0,245,255,0.04)" }}>
            {/* Corners */}
            <div className="absolute top-0 left-0 w-6 h-6" style={{ borderTop: "2px solid rgba(0,245,255,0.55)", borderLeft: "2px solid rgba(0,245,255,0.55)" }} />
            <div className="absolute top-0 right-0 w-6 h-6" style={{ borderTop: "2px solid rgba(0,245,255,0.55)", borderRight: "2px solid rgba(0,245,255,0.55)" }} />
            <div className="absolute bottom-0 left-0 w-6 h-6" style={{ borderBottom: "2px solid rgba(0,245,255,0.55)", borderLeft: "2px solid rgba(0,245,255,0.55)" }} />
            <div className="absolute bottom-0 right-0 w-6 h-6" style={{ borderBottom: "2px solid rgba(0,245,255,0.55)", borderRight: "2px solid rgba(0,245,255,0.55)" }} />

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                {field("nome", ht.contact.nome, ht.contact.nome_ph)}
                {field("cognome", ht.contact.cognome, ht.contact.cognome_ph)}
              </div>
              {field("email", ht.contact.email, ht.contact.email_ph, "email")}

              {/* Tipo progetto */}
              <div>
                <label className="block text-xs font-medium mb-1.5 tracking-wide" style={{ color: "rgba(175,200,235,0.7)" }}>
                  {ht.contact.tipo_label}
                </label>
                <select
                  value={form.tipo}
                  onChange={ev => setForm(f => ({ ...f, tipo: ev.target.value }))}
                  className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all duration-200 appearance-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(0,245,255,0.12)",
                    color: form.tipo ? "#e2e8f0" : "rgba(155,175,210,0.45)",
                  }}
                  onFocus={ev => { ev.target.style.borderColor = "rgba(0,245,255,0.4)"; ev.target.style.boxShadow = "0 0 0 3px rgba(0,245,255,0.06)" }}
                  onBlur={ev => { ev.target.style.borderColor = "rgba(0,245,255,0.12)"; ev.target.style.boxShadow = "none" }}
                >
                  <option value="" disabled style={{ background: "#0d1117" }}>{ht.contact.tipo_placeholder}</option>
                  {ht.contact.tipo_options.map(opt => (
                    <option key={opt} value={opt} style={{ background: "#0d1117" }}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Messaggio */}
              <div>
                <label className="block text-xs font-medium mb-1.5 tracking-wide" style={{ color: "rgba(175,200,235,0.7)" }}>
                  {ht.contact.messaggio} <span style={{ color: "#00f5ff" }}>*</span>
                </label>
                <textarea
                  rows={4}
                  value={form.messaggio}
                  onChange={ev => setForm(f => ({ ...f, messaggio: ev.target.value }))}
                  placeholder={ht.contact.messaggio_ph}
                  className="w-full px-4 py-3 text-sm rounded-lg outline-none transition-all duration-200 resize-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${errors.messaggio ? "rgba(248,113,113,0.5)" : "rgba(0,245,255,0.12)"}`,
                    color: "#e2e8f0",
                    caretColor: "#00f5ff",
                  }}
                  onFocus={ev => { ev.target.style.borderColor = "rgba(0,245,255,0.4)"; ev.target.style.boxShadow = "0 0 0 3px rgba(0,245,255,0.06)" }}
                  onBlur={ev => { ev.target.style.borderColor = errors.messaggio ? "rgba(248,113,113,0.5)" : "rgba(0,245,255,0.12)"; ev.target.style.boxShadow = "none" }}
                />
                {errors.messaggio && <p className="text-xs mt-1" style={{ color: "rgba(248,113,113,0.85)" }}>{errors.messaggio}</p>}
              </div>

              <button type="submit" disabled={loading}
                className="w-full py-3.5 font-semibold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.38)", color: "#00f5ff", boxShadow: "0 0 25px rgba(0,245,255,0.1)" }}>
                {loading ? ht.contact.loading : (
                  <><Mail className="w-4 h-4" /> {ht.contact.submit}</>
                )}
              </button>

              <p className="text-center text-xs" style={{ color: "rgba(100,125,165,0.5)" }}>
                {ht.contact.footer_note}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────── */
function HomeFooter() {
  const ht = useHomeLang()

  return (
    <footer className="py-8" style={{ borderTop: "1px solid rgba(0,245,255,0.07)", background: "rgba(0,0,0,0.25)" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-xl font-black" style={{ color: "#00f5ff", textShadow: "0 0 14px rgba(0,245,255,0.65)" }}>MD</span>
          <span className="text-sm" style={{ color: "rgba(120,145,185,0.6)" }}>Massimo Dassano — Web Creator</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-end">
          <Link href="/cv" className="text-xs transition-colors hover:text-cyan-400" style={{ color: "rgba(130,155,195,0.55)" }}>
            {ht.footer.cv_link}
          </Link>
          <Link href="/privacy" className="text-xs transition-colors hover:text-cyan-400" style={{ color: "rgba(130,155,195,0.55)" }}>
            Privacy Policy
          </Link>
          <Link href="/cookie-policy" className="text-xs transition-colors hover:text-cyan-400" style={{ color: "rgba(130,155,195,0.55)" }}>
            Cookie Policy
          </Link>
          <span className="text-xs" style={{ color: "rgba(100,120,160,0.45)" }}>
            © {new Date().getFullYear()} Massimo Dassano
          </span>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main style={{ background: "#030610", minHeight: "100vh", color: "#e2e8f0", position: "relative" }}>
      <ParticleCanvas />
      <HomeNav />
      <HeroSection />
      <ServicesSection />
      <ManifestoSection />
      <WhyMeSection />
      <PricingSection />
      {false && <PortfolioSection />}
      <ContactSection />
      <HomeFooter />
    </main>
  )
}
