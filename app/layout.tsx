import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/contexts/language-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const BASE_URL = 'https://massimodassano.it'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Massimo Dassano | Web Creator & Web Interior Designer',
    template: '%s | Massimo Dassano',
  },
  description:
    'Creo siti web personalizzati da zero, restyling di siti esistenti, landing page e manutenzione siti web. Niente template, niente pacchetti fissi: ogni progetto è unico, curato personalmente e pensato per te.',
  keywords: [
    'Massimo Dassano',
    'web creator',
    'web interior designer',
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
    'restyling grafico sito',
    'sito vetrina personalizzato',
    'creazione sito web da zero',
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
    title: 'Massimo Dassano | Web Creator & Web Interior Designer',
    description:
      'Siti web personalizzati, restyling, landing page e manutenzione. Niente template — ogni progetto è unico, pensato per te.',
    locale: 'it_IT',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Massimo Dassano — Web Creator & Web Interior Designer, Milano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massimo Dassano | Web Creator & Web Interior Designer',
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
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Massimo Dassano — Web Creator',
    url: BASE_URL,
    description:
      'Creazione di siti web personalizzati, restyling di siti esistenti, landing page e manutenzione. Ogni progetto è unico, curato personalmente, senza template o pacchetti predefiniti.',
    founder: {
      '@type': 'Person',
      name: 'Massimo Dassano',
      sameAs: 'https://www.linkedin.com/in/massimo-dassano-a8b31a25/',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Milano',
      addressRegion: 'MI',
      addressCountry: 'IT',
    },
    areaServed: [
      { '@type': 'City', name: 'Milano' },
      { '@type': 'Country', name: 'Italy' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi Web',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Restyling Sito Web',
            description: 'Modernizzazione e redesign di siti web esistenti e datati.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '200',
            priceCurrency: 'EUR',
            minPrice: '200',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Creazione Sito Web',
            description: 'Realizzazione di siti web personalizzati da zero, senza template.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '500',
            priceCurrency: 'EUR',
            minPrice: '500',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sito Web Completo',
            description: 'Sito web completo multi-pagina con blog, analytics e SEO avanzato.',
          },
          priceSpecification: {
            '@type': 'PriceSpecification',
            price: '1500',
            priceCurrency: 'EUR',
            minPrice: '1500',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Creazione Landing Page',
            description: 'Landing page personalizzata ad alta conversione, senza template predefiniti.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Manutenzione Sito Web',
            description: 'Aggiornamento, manutenzione e ottimizzazione di siti web esistenti.',
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'massimo.dassano@gmail.com',
      availableLanguage: ['Italian', 'English'],
    },
    sameAs: [
      'https://www.linkedin.com/in/massimo-dassano-a8b31a25/',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Massimo Dassano',
    url: BASE_URL,
    jobTitle: 'Web Creator & Web Interior Designer',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Milano',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.linkedin.com/in/massimo-dassano-a8b31a25/',
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
