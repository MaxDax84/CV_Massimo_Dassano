import { MetadataRoute } from 'next'

const BASE_URL = 'https://www.massimodassano.it'

/**
 * Date di ultima modifica reali, allineate all'ultimo commit che ha toccato
 * ciascuna pagina. Sono volutamente statiche: con `new Date()` il campo
 * `lastmod` cambiava a ogni build, segnalando ai crawler modifiche inesistenti.
 * Vanno aggiornate a mano quando il contenuto della pagina cambia davvero.
 *
 * `/privacy` e `/cookie-policy` sono ora indicizzabili ma restano fuori dalla
 * sitemap: sono pagine di servizio, non contenuto da far scoprire in ricerca.
 * Fuori anche `/grazie` (pagina di conferma) e `/lab/compleanno` (una tantum).
 */
const pages = [
  { path: '', lastModified: '2026-10-10', priority: 1 },
  { path: '/servizi', lastModified: '2026-10-10', priority: 0.9 },
  { path: '/lab', lastModified: '2026-10-10', priority: 0.8 },
  { path: '/servizi/creazione-siti-web', lastModified: '2026-10-10', priority: 0.8 },
  { path: '/servizi/restyling-sito-web', lastModified: '2026-10-10', priority: 0.8 },
  { path: '/servizi/landing-page', lastModified: '2026-10-10', priority: 0.8 },
  { path: '/servizi/manutenzione-sito-web', lastModified: '2026-10-10', priority: 0.8 },
  { path: '/servizi/audit-digitale', lastModified: '2026-10-10', priority: 0.8 },
  { path: '/cv', lastModified: '2026-10-10', priority: 0.6 },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
