import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const BASE_URL = 'https://massimodassano.it'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Massimo Dassano | Digital Growth Partner per piccole imprese',
    template: '%s | Massimo Dassano',
  },
  description:
    'Creo siti web personalizzati, restyling e landing page a Milano. Niente template: ogni progetto è unico, curato personalmente e su misura per te.',
  keywords: [
    'Massimo Dassano',
    'web creator',
    'freelance web designer',
    'creazione sito web',
    'sito web personalizzato',
    'restyling sito web',
    'rifacimento sito web',
    'ristrutturazione sito web',
    'manutenzione sito web',
    'creazione landing page',
    'landing page personalizzata',
    'sito web su misura',
    'realizzazione siti web',
    'sito web professionale',
    'web design personalizzato',
    'sito web senza template',
    'sito web piccole imprese',
    'sito web per professionisti',
    'aggiornamento sito web',
    'sito vetrina personalizzato',
    'creazione sito web da zero',
    'custom website design',
    'web designer for small business',
    'freelance web developer',
    'website design for professionals',
  ],
  authors: [{ name: 'Massimo Dassano', url: BASE_URL }],
  creator: 'Massimo Dassano',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    siteName: 'Massimo Dassano',
    title: 'Massimo Dassano | Digital Growth Partner per piccole imprese',
    description:
      'Siti web personalizzati, restyling, landing page e manutenzione. Niente template — ogni progetto è unico, pensato per te.',
    locale: 'it_IT',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Massimo Dassano — Digital Growth Partner per piccole imprese, Milano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massimo Dassano | Digital Growth Partner per piccole imprese',
    description:
      'Siti web personalizzati, restyling, landing page e manutenzione. Niente template — ogni progetto è unico.',
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
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Massimo Dassano',
    jobTitle: 'Digital Growth Partner per piccole imprese',
    url: BASE_URL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Milano',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.linkedin.com/in/massimo-dassano-a8b31a25/',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Massimo Dassano — Digital Growth Partner',
    description: 'Creazione siti web personalizzati, restyling e landing page',
    url: BASE_URL,
    areaServed: 'Italia',
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
