import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const BASE_URL = 'https://www.massimodassano.it'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Creazione siti web su misura a Milano | Massimo Dassano',
    template: '%s | Massimo Dassano',
  },
  description:
    'Creo siti web personalizzati, restyling e landing page a Milano. Niente template: ogni progetto è unico, curato personalmente e su misura per te.',
  authors: [{ name: 'Massimo Dassano', url: BASE_URL }],
  creator: 'Massimo Dassano',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Massimo Dassano',
    title: 'Creazione siti web su misura a Milano | Massimo Dassano',
    description:
      'Siti web personalizzati, restyling, landing page e manutenzione. Niente template: ogni progetto è unico, pensato per te.',
    locale: 'it_IT',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Massimo Dassano, web designer a Milano: creazione siti web su misura',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creazione siti web su misura a Milano | Massimo Dassano',
    description:
      'Siti web personalizzati, restyling, landing page e manutenzione. Niente template: ogni progetto è unico.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-dark-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

const PERSON_ID = `${BASE_URL}/#person`
const BUSINESS_ID = `${BASE_URL}/#business`

/**
 * Person e ProfessionalService sono due nodi dello stesso grafo, legati da
 * `@id` stabili e da founder / worksFor: senza quei riferimenti i motori li
 * leggono come due entità indipendenti.
 *
 * Volutamente ASSENTI:
 * - `Review` e `aggregateRating`: Google scarta le recensioni self-serving su
 *   Organization/LocalBusiness, non produrrebbero rich result.
 * - `vatID` / `taxID` e `telephone`: dati non pubblicati sul sito. Da
 *   aggiungere solo con informazioni fornite dal proprietario.
 * - `email`: scelta esplicita del proprietario. L'indirizzo sta dietro il
 *   CAPTCHA di `ContactReveal` e metterlo qui lo rimetterebbe in chiaro
 *   nell'HTML, vanificando quella protezione. Al suo posto `contactPoint`
 *   rimanda al form, così i motori hanno comunque una via di contatto.
 */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: 'Massimo Dassano',
    jobTitle: 'Web designer',
    url: BASE_URL,
    image: `${BASE_URL}/opengraph-image`,
    worksFor: { '@id': BUSINESS_ID },
    knowsAbout: [
      'Creazione siti web',
      'Restyling siti web',
      'Landing page',
      'Web design',
      'SEO tecnico',
      'Core Web Vitals',
      'Next.js',
      'React',
      'Accessibilità web',
      'Conformità GDPR e cookie policy',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Milano',
      addressRegion: 'Lombardia',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.linkedin.com/in/massimo-dassano-a8b31a25/',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: 'MD Studio (Massimo Dassano)',
    description:
      'Creazione siti web su misura, restyling, landing page, manutenzione e audit digitale per professionisti e piccole imprese.',
    url: BASE_URL,
    image: `${BASE_URL}/opengraph-image`,
    logo: `${BASE_URL}/apple-icon.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Richiesta preventivo',
      url: `${BASE_URL}/#contatto`,
      availableLanguage: ['it', 'en'],
    },
    founder: { '@id': PERSON_ID },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Milano',
      addressRegion: 'Lombardia',
      addressCountry: 'IT',
    },
    areaServed: [
      { '@type': 'City', name: 'Milano' },
      { '@type': 'AdministrativeArea', name: 'Lombardia' },
      { '@type': 'Country', name: 'Italia' },
    ],
    knowsLanguage: ['it', 'en'],
    sameAs: [
      'https://www.linkedin.com/in/massimo-dassano-a8b31a25/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Creazione siti web da zero',
            url: `${BASE_URL}/servizi/creazione-siti-web`,
            serviceType: 'Sviluppo sito web',
            provider: { '@id': BUSINESS_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Restyling sito web',
            url: `${BASE_URL}/servizi/restyling-sito-web`,
            serviceType: 'Rifacimento sito web',
            provider: { '@id': BUSINESS_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing page personalizzate',
            url: `${BASE_URL}/servizi/landing-page`,
            serviceType: 'Realizzazione landing page',
            provider: { '@id': BUSINESS_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenzione sito web',
            url: `${BASE_URL}/servizi/manutenzione-sito-web`,
            serviceType: 'Manutenzione e aggiornamento sito web',
            provider: { '@id': BUSINESS_ID },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit digitale',
            url: `${BASE_URL}/servizi/audit-digitale`,
            serviceType: 'Analisi SEO, performance e UX del sito',
            provider: { '@id': BUSINESS_ID },
          },
        },
      ],
    },
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';window.addEventListener('pageshow',function(){window.scrollTo(0,0);setTimeout(function(){window.scrollTo(0,0);},80);});(function(){var l=localStorage.getItem('md-lang');if(l==='en')document.documentElement.lang='en';})();" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
