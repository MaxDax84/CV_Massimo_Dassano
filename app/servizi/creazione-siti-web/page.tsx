import { Metadata } from "next"
import { ServicePageLayout, ServiceContent } from "@/components/service-page"

const BASE_URL = "https://massimodassano.it"
const URL = `${BASE_URL}/servizi/creazione-siti-web`

export const metadata: Metadata = {
  title: "Creazione Siti Web da Zero",
  description:
    "Creo siti web personalizzati da zero per professionisti e piccole imprese: design su misura, mobile-first, SEO ottimizzato. Preventivo gratuito.",
  keywords: [
    "creazione siti web",
    "sito web da zero",
    "sito web personalizzato",
    "sito web su misura",
    "sito web professionisti",
    "sito web piccole imprese",
    "custom website from scratch",
    "web designer freelance",
    "custom website design",
    "website for small business",
    "professional website design",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Creazione Siti Web da Zero | Massimo Dassano",
    description:
      "Creo siti web personalizzati da zero per professionisti e piccole imprese: design su misura, mobile-first, SEO ottimizzato.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Creazione Siti Web da Zero",
  serviceType: "Sviluppo sito web",
  provider: { "@type": "Person", name: "Massimo Dassano", url: BASE_URL },
  areaServed: "Italia",
  url: URL,
}

const content: { it: ServiceContent; en: ServiceContent } = {
  it: {
    tag: "EX NOVO",
    title: "Creazione Siti Web da Zero",
    subtitle: "Per chi vuole iniziare a farsi trovare online dai clienti giusti",
    intro: "Partiamo da un foglio bianco e costruiamo insieme la tua identità digitale: design personalizzato, struttura pensata per i tuoi obiettivi, ottimizzato per convertire visitatori in clienti. Nessun tema preimpostato — colori, font e struttura vengono scelti in base al tuo settore e a chi vuoi raggiungere, non pescati da un catalogo.",
    features: [
      "Design custom su misura, zero template",
      "Mobile-first & responsive su ogni dispositivo",
      "SEO tecnico ottimizzato fin dal primo giorno",
      "Sito veloce, sicuro e pronto per crescere",
    ],
    process: [
      { step: "1. Ascolto", desc: "Parliamo del tuo settore, dei tuoi obiettivi e di chi vuoi raggiungere." },
      { step: "2. Struttura", desc: "Definiamo insieme le pagine e i contenuti necessari, senza sprechi." },
      { step: "3. Design & sviluppo", desc: "Costruisco il sito da zero in codice, curato in ogni dettaglio." },
      { step: "4. Consegna", desc: "Online in circa una settimana per una presenza essenziale, 3-4 per un sito completo." },
    ],
    forWho: "Professionisti e piccole imprese che non hanno ancora un sito, o che finora si sono affidati solo ai social e vogliono una base solida e di proprietà, che nessun cambio di algoritmo può portarti via.",
    faq: {
      q: "Posso iniziare anche se non ho ancora tutti i contenuti pronti?",
      a: "Sì. Un'idea di cosa vuoi comunicare e qualche riferimento di stile bastano per iniziare — testi e foto mancanti li costruiamo insieme durante il percorso.",
    },
    related: [
      { href: "/servizi/restyling-sito-web", label: "Restyling Sito Web", tag: "Restyling", color: "#a855f7", rgb: "168,85,247" },
      { href: "/servizi/landing-page", label: "Landing Page Personalizzate", tag: "Landing Page", color: "#f0abfc", rgb: "240,171,252" },
      { href: "/servizi/manutenzione-sito-web", label: "Manutenzione Sito Web", tag: "Manutenzione", color: "#4ade80", rgb: "74,222,128" },
      { href: "/servizi/audit-digitale", label: "Audit Digitale", tag: "Diagnosi", color: "#fbbf24", rgb: "251,191,36" },
    ],
  },
  en: {
    tag: "FROM SCRATCH",
    title: "Website from Scratch",
    subtitle: "For those who want to start getting found online by the right customers",
    intro: "We start from a blank page and build your digital identity together: custom design, structure tailored to your goals, optimized to turn visitors into clients. No preset themes — colors, fonts and structure are chosen based on your industry and audience, not picked from a catalog.",
    features: [
      "Custom design, no templates",
      "Mobile-first & responsive on every device",
      "Technical SEO optimized from day one",
      "Fast, secure and ready to grow",
    ],
    process: [
      { step: "1. Listening", desc: "We talk about your industry, your goals and who you want to reach." },
      { step: "2. Structure", desc: "We define together the pages and content you need, without waste." },
      { step: "3. Design & development", desc: "I build the site from scratch in code, crafted in every detail." },
      { step: "4. Delivery", desc: "Live in about a week for an essential presence, 3-4 weeks for a complete site." },
    ],
    forWho: "Professionals and small businesses who don't have a website yet, or who have relied only on social media so far and want a solid, owned foundation that no algorithm change can take away from you.",
    faq: {
      q: "Can I start even if I don't have all the content ready yet?",
      a: "Yes. An idea of what you want to communicate and a few style references are enough to get started — we build any missing text and photos together along the way.",
    },
    related: [
      { href: "/servizi/restyling-sito-web", label: "Website Restyling", tag: "Restyling", color: "#a855f7", rgb: "168,85,247" },
      { href: "/servizi/landing-page", label: "Custom Landing Pages", tag: "Landing Page", color: "#f0abfc", rgb: "240,171,252" },
      { href: "/servizi/manutenzione-sito-web", label: "Website Maintenance", tag: "Maintenance", color: "#4ade80", rgb: "74,222,128" },
      { href: "/servizi/audit-digitale", label: "Digital Audit", tag: "Diagnosis", color: "#fbbf24", rgb: "251,191,36" },
    ],
  },
}

export default function Page() {
  return <ServicePageLayout color="#00f5ff" rgb="0,245,255" jsonLd={jsonLd} content={content} />
}
