"use client"

import { useState, useEffect } from "react"
import { Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface ContactRevealProps {
  encodedEmail: string // email string reversed
}

export function ContactReveal({ encodedEmail }: ContactRevealProps) {
  const [step, setStep] = useState<"hidden" | "challenge" | "revealed">("hidden")
  const [nums, setNums] = useState({ a: 0, b: 0 })
  const [answer, setAnswer] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const { t } = useLanguage()

  useEffect(() => {
    setNums({
      a: Math.floor(Math.random() * 8) + 1,
      b: Math.floor(Math.random() * 8) + 1,
    })
  }, [])

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return // silently reject bots
    if (parseInt(answer, 10) === nums.a + nums.b) {
      setEmail(encodedEmail.split("").reverse().join(""))
      setStep("revealed")
    } else {
      setError(true)
      setAnswer("")
    }
  }

  if (step === "hidden") {
    return (
      <button
        onClick={() => setStep("challenge")}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
      >
        <Mail className="w-4 h-4" />
        {t.contact.show}
      </button>
    )
  }

  if (step === "challenge") {
    return (
      <form onSubmit={handleVerify} className="flex items-center gap-3 flex-wrap">
        {/* Honeypot — hidden from humans, bots tend to fill it */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {t.contact.challenge} {nums.a} + {nums.b}{t.contact.challengeQ}
        </span>
        <input
          type="number"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-16 px-2 py-1.5 rounded-lg border border-border bg-background text-sm text-center focus:outline-none focus:ring-1 focus:ring-primary"
          autoFocus
          min={0}
          max={99}
        />
        <button
          type="submit"
          className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          OK
        </button>
        {error && (
          <span className="text-sm text-destructive">{t.contact.error}</span>
        )}
      </form>
    )
  }

  return (
    <a
      href={`mailto:${email}`}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm font-medium"
    >
      <Mail className="w-4 h-4" />
      {email}
    </a>
  )
}
