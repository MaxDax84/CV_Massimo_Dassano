'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const CONSENT_KEY = 'md_cookie_banner_dismissed'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    localStorage.setItem(CONSENT_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Informativa cookie"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl px-5 py-4 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
          <span className="text-foreground font-semibold">Cookie & Privacy — </span>
          Questo sito usa cookie tecnici necessari e{' '}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Vercel Analytics
          </a>{' '}
          (statistiche aggregate, anonime, senza cookie di tracciamento).
          Nessun cookie pubblicitario o di profilazione.{' '}
          <Link
            href="/cookie-policy"
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Cookie Policy
          </Link>
          {' · '}
          <Link
            href="/privacy"
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 cursor-pointer px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
        >
          Ho capito
        </button>
      </div>
    </div>
  )
}
