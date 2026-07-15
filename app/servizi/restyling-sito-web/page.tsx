import { Metadata } from "next"
import { ServicePageLayout, ServiceContent } from "@/components/service-page"

const BASE_URL = "https://massimodassano.it"
const URL = `${BASE_URL}/servizi/restyling-sito-web`

export const metadata: Metadata = {
  title: "Restyling Sito Web",
  description:
    "Restyling e rifacimento del tuo sito web: analisi, nuovo design moderno, mockup gratuito prima di iniziare. Mantieni ciò che funziona, rinnova il resto.",
  keywords: [
    "restyling sito web",
    "rifacimento sito web",
    "ristrutturazione sito web",
    "rinnovo sito web",
    "modernizzare sito web",
    "sito web datato",
    "website redesign",
    "website makeover",
    "website refresh",
    "redesign sito web",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Restyling Sito Web | Massimo Dassano",
    description:
      "Restyling e rifacimento del tuo sito web: analisi, nuovo design moderno, mockup gratuito prima di iniziare.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Restyling Sito Web",
  serviceType: "Restyling sito web",
  provider: { "@type": "Person", name: "Massimo Dassano", url: BASE_URL },
  areaServed: "Italia",
  url: URL,
}

const content: { it: ServiceContent; en: ServiceContent } = {
  it: {
    tag: "RESTYLING",
    title: "Restyling Sito Web",
    subtitle: "Per chi ha un sito che non porta più clienti come dovrebbe",
    intro: "Il tuo sito ha qualche anno? Il design sembra datato o non funziona bene da smartphone? Analizzo quello che hai, mantengo ciò che funziona e trasformo il resto in qualcosa di moderno ed efficace. Prima di toccare una riga di codice, ti mostro un mockup del nuovo design costruito sui tuoi contenuti reali, così vedi il risultato prima di impegnarti.",
    features: [
      "Analisi del sito attuale, punti di forza e criticità",
      "Mockup del nuovo design prima di iniziare",
      "Migrazione completa dei contenuti esistenti",
      "Ottimizzazione di velocità e SEO",
    ],
    process: [
      { step: "1. Analisi", desc: "Valuto il sito attuale: design, SEO tecnico, velocità, mobile." },
      { step: "2. Mockup", desc: "Ti mostro come potrebbe diventare, sui tuoi contenuti reali — prima di ogni impegno." },
      { step: "3. Sviluppo", desc: "Costruisco il nuovo sito mantenendo ciò che funziona già." },
      { step: "4. Passaggio", desc: "Migro i contenuti e mando online il nuovo sito senza interruzioni." },
    ],
    forWho: "Chi ha già un sito — magari fatto anni fa, o con un builder come Wix o WordPress — che non rispecchia più l'attività o non converte i visitatori in clienti.",
    faq: {
      q: "Devo perdere il posizionamento SEO che ho già?",
      a: "No, anzi: il restyling include il mantenimento (o miglioramento) delle URL e dei contenuti che già funzionano per il motore di ricerca, così non perdi il lavoro fatto finora.",
    },
    related: [
      { href: "/servizi/creazione-siti-web", label: "Creazione Siti Web da Zero", tag: "Ex Novo", color: "#00f5ff", rgb: "0,245,255" },
      { href: "/servizi/landing-page", label: "Landing Page Personalizzate", tag: "Landing Page", color: "#f0abfc", rgb: "240,171,252" },
      { href: "/servizi/manutenzione-sito-web", label: "Manutenzione Sito Web", tag: "Manutenzione", color: "#4ade80", rgb: "74,222,128" },
      { href: "/servizi/audit-digitale", label: "Audit Digitale", tag: "Diagnosi", color: "#fbbf24", rgb: "251,191,36" },
    ],
  },
  en: {
    tag: "RESTYLING",
    title: "Website Restyling",
    subtitle: "For those whose site no longer brings in customers the way it should",
    intro: "Is your website a few years old? Does the design look dated or not work well on smartphones? I analyze what you have, keep what works, and transform the rest into something modern and effective. Before touching a line of code, I'll show you a mockup of the new design built on your real content, so you see the result before committing.",
    features: [
      "Analysis of the current site, strengths and issues",
      "Mockup of the new design before we start",
      "Full migration of existing content",
      "Speed and SEO optimization",
    ],
    process: [
      { step: "1. Analysis", desc: "I evaluate the current site: design, technical SEO, speed, mobile." },
      { step: "2. Mockup", desc: "I show you what it could become, on your real content — before any commitment." },
      { step: "3. Development", desc: "I build the new site while keeping what already works." },
      { step: "4. Handover", desc: "I migrate the content and launch the new site with no downtime." },
    ],
    forWho: "Anyone who already has a website — maybe built years ago, or with a builder like Wix or WordPress — that no longer reflects the business or doesn't convert visitors into customers.",
    faq: {
      q: "Will I lose the SEO ranking I already have?",
      a: "No — quite the opposite: the restyling includes keeping (or improving) the URLs and content that already work for search engines, so you don't lose the progress made so far.",
    },
    related: [
      { href: "/servizi/creazione-siti-web", label: "Website from Scratch", tag: "From Scratch", color: "#00f5ff", rgb: "0,245,255" },
      { href: "/servizi/landing-page", label: "Custom Landing Pages", tag: "Landing Page", color: "#f0abfc", rgb: "240,171,252" },
      { href: "/servizi/manutenzione-sito-web", label: "Website Maintenance", tag: "Maintenance", color: "#4ade80", rgb: "74,222,128" },
      { href: "/servizi/audit-digitale", label: "Digital Audit", tag: "Diagnosis", color: "#fbbf24", rgb: "251,191,36" },
    ],
  },
}

export default function Page() {
  return <ServicePageLayout color="#a855f7" rgb="168,85,247" jsonLd={jsonLd} content={content} />
}
