import { Metadata } from "next"
import { ServicePageLayout, ServiceContent } from "@/components/service-page"

const BASE_URL = "https://massimodassano.it"
const URL = `${BASE_URL}/servizi/manutenzione-sito-web`

export const metadata: Metadata = {
  title: "Manutenzione Sito Web",
  description:
    "Manutenzione e aggiornamento continuativo del tuo sito web: contenuti, sicurezza, piccole modifiche. Supporto diretto, senza ticket o attese.",
  keywords: [
    "manutenzione sito web",
    "aggiornamento sito web",
    "assistenza sito web",
    "supporto sito web",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Manutenzione Sito Web | Massimo Dassano",
    description:
      "Manutenzione e aggiornamento continuativo del tuo sito web: contenuti, sicurezza, piccole modifiche.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Manutenzione Sito Web",
  serviceType: "Manutenzione sito web",
  provider: { "@type": "Person", name: "Massimo Dassano", url: BASE_URL },
  areaServed: "Italia",
  url: URL,
}

const content: { it: ServiceContent; en: ServiceContent } = {
  it: {
    tag: "MANUTENZIONE",
    title: "Manutenzione Sito Web",
    subtitle: "Per chi ha già un sito e vuole tenerlo aggiornato, sicuro e funzionante",
    intro: "Un sito web non è un progetto che finisce alla consegna — è qualcosa che va tenuto aggiornato: nuovi contenuti, piccole modifiche, controlli di sicurezza, aggiornamenti tecnici. Offro supporto continuativo per chi non ha tempo o competenze per occuparsene da solo, che il sito l'abbia costruito io o qualcun altro.",
    features: [
      "Aggiornamento testi, foto e contenuti su richiesta",
      "Controlli di sicurezza e aggiornamenti tecnici",
      "Piccole modifiche di design o funzionalità",
      "Supporto diretto, senza ticket o attese",
    ],
    process: [
      { step: "1. Valutazione", desc: "Guardo il sito esistente per capire cosa serve e con che frequenza." },
      { step: "2. Accordo", desc: "Definiamo insieme un pacchetto di ore o un intervento puntuale, in base alle tue esigenze." },
      { step: "3. Interventi", desc: "Mi occupo delle modifiche richieste, di solito entro 24-48h." },
      { step: "4. Aggiornamento continuo", desc: "Il sito resta aggiornato, sicuro e coerente nel tempo." },
    ],
    forWho: "Chi ha già un sito (costruito da me o da altri) e vuole che resti aggiornato senza doverci pensare, o chi non ha le competenze tecniche per modificarlo da solo.",
    faq: {
      q: "Serve un contratto fisso o posso chiedere solo interventi puntuali?",
      a: "Entrambi. Puoi scegliere un pacchetto di ore mensile se aggiorni spesso il sito, oppure chiedere un intervento puntuale solo quando ti serve — nessun vincolo obbligatorio.",
    },
    related: [
      { href: "/servizi/creazione-siti-web", label: "Creazione Siti Web da Zero", tag: "Ex Novo", color: "#00f5ff", rgb: "0,245,255" },
      { href: "/servizi/restyling-sito-web", label: "Restyling Sito Web", tag: "Restyling", color: "#a855f7", rgb: "168,85,247" },
      { href: "/servizi/landing-page", label: "Landing Page Personalizzate", tag: "Landing Page", color: "#f0abfc", rgb: "240,171,252" },
      { href: "/servizi/audit-digitale", label: "Audit Digitale", tag: "Diagnosi", color: "#fbbf24", rgb: "251,191,36" },
    ],
  },
  en: {
    tag: "MAINTENANCE",
    title: "Website Maintenance",
    subtitle: "For those who already have a website and want to keep it updated, secure and running",
    intro: "A website isn't a project that ends at delivery — it's something that needs ongoing care: new content, small changes, security checks, technical updates. I offer ongoing support for those who don't have the time or skills to handle it themselves, whether I built the site or someone else did.",
    features: [
      "Text, photo and content updates on request",
      "Security checks and technical updates",
      "Small design or feature changes",
      "Direct support, no tickets or waiting",
    ],
    process: [
      { step: "1. Assessment", desc: "I look at the existing site to understand what's needed and how often." },
      { step: "2. Agreement", desc: "We define together an hours package or a one-off intervention, based on your needs." },
      { step: "3. Interventions", desc: "I handle the requested changes, usually within 24-48h." },
      { step: "4. Ongoing updates", desc: "The site stays updated, secure and consistent over time." },
    ],
    forWho: "Anyone with an existing website (built by me or someone else) who wants it to stay updated without having to think about it, or who doesn't have the technical skills to edit it themselves.",
    faq: {
      q: "Do I need a fixed contract, or can I request one-off interventions?",
      a: "Both. You can choose a monthly hours package if you update the site often, or request a one-off intervention only when you need it — no mandatory commitment.",
    },
    related: [
      { href: "/servizi/creazione-siti-web", label: "Website from Scratch", tag: "From Scratch", color: "#00f5ff", rgb: "0,245,255" },
      { href: "/servizi/restyling-sito-web", label: "Website Restyling", tag: "Restyling", color: "#a855f7", rgb: "168,85,247" },
      { href: "/servizi/landing-page", label: "Custom Landing Pages", tag: "Landing Page", color: "#f0abfc", rgb: "240,171,252" },
      { href: "/servizi/audit-digitale", label: "Digital Audit", tag: "Diagnosis", color: "#fbbf24", rgb: "251,191,36" },
    ],
  },
}

export default function Page() {
  return <ServicePageLayout color="#4ade80" rgb="74,222,128" jsonLd={jsonLd} content={content} />
}
