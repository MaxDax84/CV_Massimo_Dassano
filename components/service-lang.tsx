"use client"

import { useLanguage } from "@/contexts/language-context"

/**
 * Le pagine `/servizi/*` sono markup statico: l'unica parte interattiva è il
 * toggle IT/EN. Vive qui, isolato, così `components/service-page.tsx` può
 * restare un server component e non spedire al browser il 95% del contenuto.
 *
 * `ServiceLangPanels` riceve i DUE alberi già renderizzati dal server: sono
 * payload RSC, non moduli JavaScript, quindi cambiare lingua non scarica nulla
 * e nel DOM resta solo la lingua attiva (nessun duplicato nascosto).
 */

export function ServiceLangToggle() {
  const { lang, setLang } = useLanguage()
  const activeLang = lang === "en" ? "en" : "it"

  return (
    <button
      onClick={() => setLang(activeLang === "en" ? "it" : "en")}
      className="text-xs font-mono tracking-[0.14em] px-2.5 py-1 transition-all duration-200 hover:scale-105"
      style={{ color: "#00f5ff", border: "1px solid rgba(0,245,255,0.28)", background: "rgba(0,245,255,0.05)" }}>
      {activeLang === "en" ? "IT" : "EN"}
    </button>
  )
}

export function ServiceLangPanels({ it, en }: { it: React.ReactNode; en: React.ReactNode }) {
  const { lang } = useLanguage()
  return <>{lang === "en" ? en : it}</>
}
