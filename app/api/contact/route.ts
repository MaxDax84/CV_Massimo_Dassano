import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"
import { appendLeadRow } from "@/lib/google-sheets"

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiter: max 3 requests per IP in 10 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>()
const LIMIT = 3
const WINDOW_MS = 10 * 60 * 1000

const MAX_MESSAGGIO = 5000
const MAX_NOME = 100
const MAX_EMAIL = 254

/**
 * Valori ammessi per il campo "tipo".
 * Devono restare allineati con i select di `app/page.tsx` (contact.tipo_options)
 * e con i pulsanti di `components/lab/CTA.tsx` (typeN_value), IT + EN.
 */
const TIPI_VALIDI = new Set([
  // Homepage — IT
  "Diagnosi sito esistente",
  "Restyling sito esistente",
  "Nuovo sito di presenza online",
  "Nuovo sito completo",
  "Non so ancora, voglio informazioni",
  // Homepage — EN
  "Website diagnosis",
  "Restyling existing site",
  "New online presence site",
  "New complete site",
  "Not sure yet, I want information",
  // /lab CTA — IT
  "Audit del sito esistente",
  "Nuovo sito",
  "Restyling del sito esistente",
  // /lab CTA — EN
  "Site audit",
  "New site",
  "Site restyling",
])

/** Escape dei caratteri che potrebbero alterare la struttura HTML dell'email di notifica. */
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return false
  }
  if (entry.count >= LIMIT) return true
  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Troppe richieste. Riprova tra qualche minuto." }, { status: 429 })
    }

    const { nome, cognome, email, tipo, messaggio, privacy, _hp } = await req.json()

    // Honeypot: bot fill hidden fields, humans don't
    if (_hp) return NextResponse.json({ success: true })

    // Consenso GDPR: obbligatorio, il form non permette l'invio senza spunta.
    if (privacy !== true) {
      return NextResponse.json(
        { error: "È necessario accettare l'informativa privacy per inviare la richiesta." },
        { status: 400 },
      )
    }

    if (typeof nome !== "string" || typeof email !== "string" || typeof messaggio !== "string") {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 })
    }
    if (!nome.trim() || !email.trim() || !messaggio.trim()) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 })
    }

    if (nome.length > MAX_NOME || (typeof cognome === "string" && cognome.length > MAX_NOME)) {
      return NextResponse.json({ error: "Nome o cognome troppo lungo" }, { status: 400 })
    }
    if (email.length > MAX_EMAIL) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 })
    }
    if (messaggio.length > MAX_MESSAGGIO) {
      return NextResponse.json(
        { error: `Messaggio troppo lungo (massimo ${MAX_MESSAGGIO} caratteri)` },
        { status: 400 },
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 })
    }

    // Whitelist: qualsiasi valore fuori elenco viene scartato, non propagato come testo libero.
    const tipoValido = typeof tipo === "string" && TIPI_VALIDI.has(tipo) ? tipo : ""

    const nomeCompleto = [nome, typeof cognome === "string" ? cognome : ""]
      .map((v) => v.trim())
      .filter(Boolean)
      .join(" ")

    const safeNomeCompleto = escapeHtml(nomeCompleto)
    const safeEmail = escapeHtml(email)
    const safeTipo = escapeHtml(tipoValido || "Non specificato")
    const safeMessaggio = escapeHtml(messaggio)

    await resend.emails.send({
      from: "Sito Web <noreply@massimodassano.it>",
      to: "massimo.dassano@gmail.com",
      replyTo: email,
      subject: `Richiesta sito web${tipoValido ? ` – ${tipoValido}` : ""} – ${nomeCompleto}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
          <h2 style="color: #111827; margin-bottom: 24px;">Nuova richiesta dal sito</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 140px; font-size: 14px;">Nome</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${safeNomeCompleto}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">
                <a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Tipo progetto</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${safeTipo}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">Messaggio:</p>
            <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${safeMessaggio}</div>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            Ricevuto da massimodassano.it · Rispondi direttamente a questa email per contattare ${safeNomeCompleto}.
          </p>
        </div>
      `,
    })

    try {
      await appendLeadRow([
        new Date().toISOString(),
        nomeCompleto,
        email,
        tipoValido || "Non specificato",
        messaggio,
        "Da valutare",
      ])
    } catch (sheetError) {
      console.error("Errore log lead su Google Sheet:", sheetError)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Errore invio email:", error)
    return NextResponse.json({ error: "Errore interno, riprova più tardi" }, { status: 500 })
  }
}
