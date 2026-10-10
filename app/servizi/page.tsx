import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Mail } from "lucide-react"

const BASE_URL = "https://www.massimodassano.it"
const URL = `${BASE_URL}/servizi`

export const metadata: Metadata = {
  title: "Servizi web: creazione siti, restyling, landing page",
  description:
    "I cinque servizi di MD Studio per professionisti e piccole imprese: creazione siti web da zero, restyling, landing page, manutenzione e audit digitale. Preventivo gratuito.",
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    siteName: "Massimo Dassano",
    title: "Servizi web: creazione siti, restyling, landing page | Massimo Dassano",
    description:
      "Creazione siti web da zero, restyling, landing page, manutenzione e audit digitale per professionisti e piccole imprese a Milano.",
    locale: "it_IT",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Servizi", item: URL },
  ],
}

type ServiceCard = {
  href: string
  tag: string
  title: string
  description: string
  color: string
  rgb: string
}

const services: ServiceCard[] = [
  {
    href: "/servizi/creazione-siti-web",
    tag: "Ex Novo",
    title: "Creazione Siti Web da Zero",
    description:
      "Partiamo da un foglio bianco: design su misura, struttura pensata sui tuoi obiettivi, mobile-first e SEO tecnico dal primo giorno. Nessun tema preimpostato.",
    color: "#00f5ff",
    rgb: "0,245,255",
  },
  {
    href: "/servizi/restyling-sito-web",
    tag: "Restyling",
    title: "Restyling Sito Web",
    description:
      "Il tuo sito esiste ma non porta più clienti. Analisi, nuovo design e mockup gratuito prima di iniziare: si mantiene ciò che funziona, si rinnova il resto.",
    color: "#a855f7",
    rgb: "168,85,247",
  },
  {
    href: "/servizi/landing-page",
    tag: "Landing Page",
    title: "Landing Page Personalizzate",
    description:
      "Una pagina sola, un obiettivo solo. Per campagne, lanci di prodotto ed eventi: una call to action, zero distrazioni, pronta in pochi giorni.",
    color: "#f0abfc",
    rgb: "240,171,252",
  },
  {
    href: "/servizi/manutenzione-sito-web",
    tag: "Manutenzione",
    title: "Manutenzione Sito Web",
    description:
      "Aggiornamenti di contenuti, sicurezza e piccole modifiche in modo continuativo. Supporto diretto con me, senza ticket e senza attese.",
    color: "#4ade80",
    rgb: "74,222,128",
  },
  {
    href: "/servizi/audit-digitale",
    tag: "Diagnosi",
    title: "Audit Digitale",
    description:
      "Capire cosa non va prima di spendere. Analisi di SEO tecnico, performance, UX e conformità GDPR, con report PDF e piano d'azione in ordine di priorità.",
    color: "#fbbf24",
    rgb: "251,191,36",
  },
]

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

export default function ServiziPage() {
  return (
    <main style={{ background: "#030610", minHeight: "100vh", color: "#e2e8f0" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 px-6 py-4 flex items-center gap-4"
        style={{ background: "rgba(3,6,16,0.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(0,245,255,0.08)" }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3"
          style={{ color: "rgba(0,245,255,0.75)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
        <div className="w-px h-4" style={{ background: "rgba(0,245,255,0.15)" }} />
        <span className="text-sm font-mono" style={{ color: "rgba(0,245,255,0.45)" }}>
          SERVIZI
        </span>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14">
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1 text-xs font-mono tracking-wider"
            style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.3)", color: "#00f5ff" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00f5ff", boxShadow: "0 0 6px #00f5ff" }} />
            SERVIZI
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ textShadow: "0 0 30px rgba(0,245,255,0.2)" }}>
            Servizi
          </h1>
          <p className="text-lg mb-6" style={{ color: "#00f5ff" }}>
            Siti web su misura per professionisti e piccole imprese, da Milano
          </p>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "rgba(155,180,215,0.85)" }}>
            <p>
              Cinque modi di lavorare insieme, a seconda del punto da cui parti: non hai ancora un sito, ne hai uno
              che non funziona più, ti serve una pagina singola per una campagna, vuoi solo tenere aggiornato quello
              che hai, oppure vuoi prima capire dove sono i problemi.
            </p>
            <p>
              In tutti i casi scrivo il codice da zero, senza temi preimpostati, e seguo il progetto personalmente
              dalla prima chiacchierata alla pubblicazione. Il preventivo è sempre gratuito e senza impegno.
            </p>
          </div>
        </div>

        {/* Le 5 card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative block rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: `rgba(${s.rgb},0.035)`,
                border: `1px solid rgba(${s.rgb},0.2)`,
                textDecoration: "none",
              }}
            >
              <span className="text-xs font-mono tracking-widest uppercase" style={{ color: s.color }}>
                {s.tag}
              </span>
              <div className="flex items-center justify-between gap-3 mt-2 mb-3">
                <h2 className="text-lg font-semibold text-white group-hover:opacity-90">{s.title}</h2>
                <ArrowRight
                  className="w-4 h-4 shrink-0 opacity-40 group-hover:opacity-90 transition-all duration-300 group-hover:translate-x-0.5"
                  style={{ color: s.color }}
                />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(165,190,225,0.85)" }}>
                {s.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          className="relative rounded-2xl p-8 mb-14 text-center"
          style={{
            background: "rgba(0,245,255,0.05)",
            border: "1px solid rgba(0,245,255,0.3)",
            boxShadow: "0 0 40px rgba(0,245,255,0.08)",
          }}
        >
          <Corners color="#00f5ff" />
          <p className="text-lg font-semibold text-white mb-2">Non sai quale ti serve?</p>
          <p className="text-sm mb-6" style={{ color: "rgba(155,180,215,0.75)" }}>
            Raccontami il tuo progetto in due righe: ti rispondo entro 24-48h dicendoti da dove conviene partire,
            anche se la risposta è che per ora non ti serve niente.
          </p>
          <Link
            href="/#contatto"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(0,245,255,0.1)", border: "1px solid rgba(0,245,255,0.4)", color: "#00f5ff" }}
          >
            <Mail className="w-4 h-4" /> Contattami
          </Link>
        </div>

        {/* Link di contesto */}
        <div className="pt-8 flex flex-wrap gap-x-8 gap-y-3" style={{ borderTop: "1px solid rgba(0,245,255,0.08)" }}>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3 w-fit"
            style={{ color: "rgba(0,245,255,0.65)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>
          <Link
            href="/lab"
            className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3 w-fit"
            style={{ color: "rgba(0,245,255,0.65)" }}
          >
            Guarda i progetti realizzati
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
