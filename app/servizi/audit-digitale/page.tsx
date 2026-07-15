import { Metadata } from "next"
import { ServicePageLayout, ServiceContent } from "@/components/service-page"

const BASE_URL = "https://massimodassano.it"
const URL = `${BASE_URL}/servizi/audit-digitale`

export const metadata: Metadata = {
  title: "Audit Digitale — Analisi del Sito",
  description:
    "Analisi completa del tuo sito: SEO tecnico, performance, UX, privacy GDPR e stima dell'opportunità di business. Report PDF con piano d'azione.",
  keywords: [
    "audit digitale",
    "analisi sito web",
    "audit SEO",
    "analisi SEO sito",
    "report sito web",
    "website audit",
    "digital audit",
    "SEO audit",
    "website analysis report",
    "website performance audit",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Audit Digitale — Analisi del Sito | Massimo Dassano",
    description:
      "Analisi completa del tuo sito: SEO tecnico, performance, UX, privacy GDPR e stima dell'opportunità di business.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Audit Digitale — Analisi del Sito",
  serviceType: "Audit SEO e digitale",
  provider: { "@type": "Person", name: "Massimo Dassano", url: BASE_URL },
  areaServed: "Italia",
  url: URL,
}

const content: { it: ServiceContent; en: ServiceContent } = {
  it: {
    tag: "DIAGNOSI",
    title: "Audit Digitale — Analisi del Sito",
    subtitle: "Per chi vuole capire cosa non va, prima di agire",
    intro: "Analizzo il tuo sito esistente e ti consegno un report completo in PDF: SEO tecnico, performance, sicurezza, UX e conversione, contenuti, privacy GDPR, presenza locale, visibilità nelle risposte delle intelligenze artificiali e una stima dell'opportunità di business. Un punteggio chiaro per ogni area, le criticità più urgenti da risolvere e un piano d'azione concreto — utile anche se poi decidi di non proseguire con me.",
    features: [
      "SEO tecnico e visibilità su Google",
      "Performance e velocità di caricamento",
      "UX e tasso di conversione",
      "Privacy & GDPR compliance",
      "Come ti vedono le intelligenze artificiali",
      "Stima dell'opportunità di business",
    ],
    process: [
      { step: "1. Analisi", desc: "Passo il tuo sito al setaccio su più aree diverse, tecniche e di contenuto." },
      { step: "2. Punteggio", desc: "Ogni area riceve un punteggio chiaro, senza gergo tecnico incomprensibile." },
      { step: "3. Report", desc: "Ricevi un PDF con criticità, punti di forza e un piano d'azione concreto." },
      { step: "4. Decidi tu", desc: "Il report è utile a prescindere — se poi vuoi il restyling, il costo è scalabile dal progetto successivo." },
    ],
    forWho: "Chi ha già un sito e vuole sapere, con dati alla mano, cosa gli sta costando in termini di visibilità e clienti persi — prima di decidere se e come intervenire.",
    faq: {
      q: "Se poi decido di non fare il restyling, ho comunque qualcosa di utile?",
      a: "Sì. Il report resta tuo indipendentemente da cosa deciderai dopo: puoi usarlo anche con un altro professionista, o semplicemente per sapere dove intervenire da solo.",
    },
    related: [
      { href: "/servizi/creazione-siti-web", label: "Creazione Siti Web da Zero", tag: "Ex Novo", color: "#00f5ff", rgb: "0,245,255" },
      { href: "/servizi/restyling-sito-web", label: "Restyling Sito Web", tag: "Restyling", color: "#a855f7", rgb: "168,85,247" },
      { href: "/servizi/landing-page", label: "Landing Page Personalizzate", tag: "Landing Page", color: "#f0abfc", rgb: "240,171,252" },
      { href: "/servizi/manutenzione-sito-web", label: "Manutenzione Sito Web", tag: "Manutenzione", color: "#4ade80", rgb: "74,222,128" },
    ],
  },
  en: {
    tag: "DIAGNOSIS",
    title: "Digital Audit",
    subtitle: "For those who want to understand what's wrong — before acting",
    intro: "I analyze your existing website and deliver a complete PDF report: technical SEO, performance, security, UX and conversion, content, GDPR privacy, local presence, visibility in AI answers, and a business opportunity estimate. A clear score for each area, the most urgent issues to fix, and a concrete action plan — useful even if you decide not to move forward with me.",
    features: [
      "Technical SEO and Google visibility",
      "Performance and loading speed",
      "UX and conversion rate",
      "Privacy & GDPR compliance",
      "How AI sees you",
      "Business opportunity estimate",
    ],
    process: [
      { step: "1. Analysis", desc: "I go through your site across multiple technical and content areas." },
      { step: "2. Scoring", desc: "Each area gets a clear score, no incomprehensible jargon." },
      { step: "3. Report", desc: "You receive a PDF with issues, strengths and a concrete action plan." },
      { step: "4. You decide", desc: "The report is useful either way — if you then want the restyling, its cost is deducted from the next project." },
    ],
    forWho: "Anyone who already has a website and wants to know, with real data, what it's costing them in visibility and lost customers — before deciding whether and how to act.",
    faq: {
      q: "If I decide not to do the restyling, do I still get something useful?",
      a: "Yes. The report is yours regardless of what you decide next: you can use it with another professional, or simply to know where to intervene yourself.",
    },
    related: [
      { href: "/servizi/creazione-siti-web", label: "Website from Scratch", tag: "From Scratch", color: "#00f5ff", rgb: "0,245,255" },
      { href: "/servizi/restyling-sito-web", label: "Website Restyling", tag: "Restyling", color: "#a855f7", rgb: "168,85,247" },
      { href: "/servizi/landing-page", label: "Custom Landing Pages", tag: "Landing Page", color: "#f0abfc", rgb: "240,171,252" },
      { href: "/servizi/manutenzione-sito-web", label: "Website Maintenance", tag: "Maintenance", color: "#4ade80", rgb: "74,222,128" },
    ],
  },
}

export default function Page() {
  return <ServicePageLayout color="#fbbf24" rgb="251,191,36" jsonLd={jsonLd} content={content} />
}
