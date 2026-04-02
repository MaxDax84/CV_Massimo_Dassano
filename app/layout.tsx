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
  title: 'Massimo Dassano | Senior Sales & Business Development Manager',
  description: 'Senior Manager with 15+ years of international experience in B2B sales planning, strategic partnerships, and global business development. Based in Milan, Italy.',
  keywords: [
    'Massimo Dassano',
    'Sales Manager',
    'Business Development',
    'B2B Sales Planning',
    'Strategic Partnerships',
    'Go-to-Market Strategy',
    'Alibaba',
    'Nidec',
    'Milan',
    'Italy',
  ],
  authors: [{ name: 'Massimo Dassano', url: BASE_URL }],
  creator: 'Massimo Dassano',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'profile',
    url: BASE_URL,
    siteName: 'Massimo Dassano',
    title: 'Massimo Dassano | Senior Sales & Business Development Manager',
    description: 'Senior Manager with 15+ years of international experience in B2B sales planning, strategic partnerships, and global business development. Based in Milan, Italy.',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Massimo Dassano – Senior Sales & Business Development Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massimo Dassano | Senior Sales & Business Development Manager',
    description: 'Senior Manager with 15+ years of international experience in B2B sales planning, strategic partnerships, and global business development.',
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Massimo Dassano',
  url: BASE_URL,
  jobTitle: 'Senior Sales & Business Development Manager',
  description: 'Senior Manager with 15+ years of international experience in B2B sales planning, strategic partnerships, and global business development.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Milan',
    addressCountry: 'IT',
  },
  sameAs: [
    'https://www.linkedin.com/in/massimo-dassano-a8b31a25/',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
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
