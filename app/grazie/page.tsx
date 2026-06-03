import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Messaggio ricevuto | Massimo Dassano",
  robots: { index: false, follow: false },
}

export default function GraziePage() {
  return (
    <main style={{ background: "#030610", minHeight: "100vh", color: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="max-w-lg mx-auto px-6 text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ border: "1px solid rgba(0,245,255,0.3)", background: "rgba(0,245,255,0.06)", boxShadow: "0 0 30px rgba(0,245,255,0.1)" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Card */}
        <div className="relative rounded-2xl px-8 py-10"
          style={{ background: "rgba(0,245,255,0.022)", border: "1px solid rgba(0,245,255,0.12)" }}>
          <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: "2px solid rgba(0,245,255,0.55)", borderLeft: "2px solid rgba(0,245,255,0.55)" }} />
          <div className="absolute top-0 right-0 w-5 h-5" style={{ borderTop: "2px solid rgba(0,245,255,0.55)", borderRight: "2px solid rgba(0,245,255,0.55)" }} />
          <div className="absolute bottom-0 left-0 w-5 h-5" style={{ borderBottom: "2px solid rgba(0,245,255,0.55)", borderLeft: "2px solid rgba(0,245,255,0.55)" }} />
          <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: "2px solid rgba(0,245,255,0.55)", borderRight: "2px solid rgba(0,245,255,0.55)" }} />

          <h1 className="text-2xl font-bold text-white mb-4">
            Messaggio ricevuto.
          </h1>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(155,180,215,0.8)" }}>
            Ti rispondo entro 24–48 ore — nel frattempo puoi dare un&apos;occhiata al mio background.
          </p>

          <Link href="/cv"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{ background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.3)", color: "#00f5ff" }}>
            Scopri il mio background
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-xs transition-colors hover:text-cyan-400" style={{ color: "rgba(120,145,185,0.5)" }}>
            ← Torna alla home
          </Link>
        </div>
      </div>
    </main>
  )
}
