import { Metadata } from "next"
import { ServicePageLayout, ServiceContent } from "@/components/service-page"

const BASE_URL = "https://massimodassano.it"
const URL = `${BASE_URL}/servizi/landing-page`

export const metadata: Metadata = {
  title: "Landing Page Personalizzate",
  description:
    "Landing page su misura per campagne, lanci di prodotto ed eventi: un obiettivo, una call to action, zero distrazioni. Pronta in pochi giorni.",
  keywords: [
    "landing page personalizzata",
    "creazione landing page",
    "landing page conversione",
    "pagina di atterraggio",
    "landing page pubblicità",
    "landing page design",
    "custom landing page",
    "high-converting landing page",
    "landing page for campaigns",
  ],
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Landing Page Personalizzate | Massimo Dassano",
    description:
      "Landing page su misura per campagne, lanci di prodotto ed eventi: un obiettivo, una call to action, zero distrazioni.",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landing Page Personalizzate",
  serviceType: "Creazione landing page",
  provider: { "@type": "Person", name: "Massimo Dassano", url: BASE_URL },
  areaServed: "Italia",
  url: URL,
}

const content: { it: ServiceContent; en: ServiceContent } = {
  it: {
    tag: "LANDING PAGE",
    title: "Landing Page Personalizzate",
    subtitle: "Una pagina, un obiettivo: far agire chi la visita",
    intro: "A volte non serve un sito intero — serve una pagina che convinca a fare una cosa precisa: prenotare, iscriversi, comprare, chiedere un preventivo. Una landing page è pensata per quello: un solo messaggio, una sola call to action, zero distrazioni. Perfetta per lanciare un prodotto, promuovere un evento o far partire una campagna pubblicitaria con una pagina di atterraggio all'altezza.",
    features: [
      "Un solo obiettivo di conversione, senza distrazioni",
      "Design su misura in linea con la campagna",
      "Ottimizzata per pubblicità Google/Meta Ads",
      "Tempi di consegna rapidi (pochi giorni)",
    ],
    process: [
      { step: "1. Obiettivo", desc: "Definiamo l'azione che vuoi che il visitatore compia." },
      { step: "2. Messaggio", desc: "Costruiamo insieme la proposta che lo convince a farlo." },
      { step: "3. Design", desc: "Una pagina, un focus, ottimizzata per convertire su ogni dispositivo." },
      { step: "4. Online", desc: "Pronta in pochi giorni, integrabile con le tue campagne pubblicitarie." },
    ],
    forWho: "Chi lancia un prodotto, organizza un evento, avvia una campagna a pagamento o vuole testare un'idea senza costruire un sito intero.",
    faq: {
      q: "Posso collegarla a Google Ads o Meta Ads da subito?",
      a: "Sì, la landing page viene costruita pensando fin dall'inizio al tracciamento delle conversioni, così puoi collegarla alle tue campagne pubblicitarie senza lavoro aggiuntivo.",
    },
    related: [
      { href: "/servizi/creazione-siti-web", label: "Creazione Siti Web da Zero", tag: "Ex Novo", color: "#00f5ff", rgb: "0,245,255" },
      { href: "/servizi/restyling-sito-web", label: "Restyling Sito Web", tag: "Restyling", color: "#a855f7", rgb: "168,85,247" },
      { href: "/servizi/manutenzione-sito-web", label: "Manutenzione Sito Web", tag: "Manutenzione", color: "#4ade80", rgb: "74,222,128" },
      { href: "/servizi/audit-digitale", label: "Audit Digitale", tag: "Diagnosi", color: "#fbbf24", rgb: "251,191,36" },
    ],
  },
  en: {
    tag: "LANDING PAGE",
    title: "Custom Landing Pages",
    subtitle: "One page, one goal: getting visitors to act",
    intro: "Sometimes you don't need a whole website — you need one page that convinces people to do one specific thing: book, sign up, buy, request a quote. A landing page is built for exactly that: one message, one call to action, zero distractions. Perfect for launching a product, promoting an event, or kicking off an ad campaign with a landing page that matches it.",
    features: [
      "One conversion goal, no distractions",
      "Custom design matched to the campaign",
      "Optimized for Google/Meta Ads",
      "Fast delivery (a few days)",
    ],
    process: [
      { step: "1. Goal", desc: "We define the action you want the visitor to take." },
      { step: "2. Message", desc: "We build together the pitch that convinces them to take it." },
      { step: "3. Design", desc: "One page, one focus, optimized to convert on every device." },
      { step: "4. Live", desc: "Ready in a few days, easy to plug into your ad campaigns." },
    ],
    forWho: "Anyone launching a product, organizing an event, running a paid campaign, or testing an idea without building a full website.",
    faq: {
      q: "Can I connect it to Google Ads or Meta Ads right away?",
      a: "Yes, the landing page is built with conversion tracking in mind from the start, so you can connect it to your ad campaigns with no extra work.",
    },
    related: [
      { href: "/servizi/creazione-siti-web", label: "Website from Scratch", tag: "From Scratch", color: "#00f5ff", rgb: "0,245,255" },
      { href: "/servizi/restyling-sito-web", label: "Website Restyling", tag: "Restyling", color: "#a855f7", rgb: "168,85,247" },
      { href: "/servizi/manutenzione-sito-web", label: "Website Maintenance", tag: "Maintenance", color: "#4ade80", rgb: "74,222,128" },
      { href: "/servizi/audit-digitale", label: "Digital Audit", tag: "Diagnosis", color: "#fbbf24", rgb: "251,191,36" },
    ],
  },
}

export default function Page() {
  return <ServicePageLayout color="#f0abfc" rgb="240,171,252" jsonLd={jsonLd} content={content} />
}
