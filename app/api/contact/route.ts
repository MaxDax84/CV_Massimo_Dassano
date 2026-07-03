import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"
import { appendLeadRow } from "@/lib/google-sheets"

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiter: max 3 requests per IP in 10 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>()
const LIMIT = 3
const WINDOW_MS = 10 * 60 * 1000

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

    const { nome, cognome, email, tipo, messaggio, _hp } = await req.json()

    // Honeypot: bot fill hidden fields, humans don't
    if (_hp) return NextResponse.json({ success: true })

    if (!nome || !email || !messaggio) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 })
    }

    const nomeCompleto = [nome, cognome].filter(Boolean).join(" ")

    await resend.emails.send({
      from: "Sito Web <noreply@massimodassano.it>",
      to: "massimo.dassano@gmail.com",
      replyTo: email,
      subject: `Richiesta sito web${tipo ? ` – ${tipo}` : ""} – ${nomeCompleto}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
          <h2 style="color: #111827; margin-bottom: 24px;">Nuova richiesta dal sito</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 140px; font-size: 14px;">Nome</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${nomeCompleto}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Tipo progetto</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${tipo || "Non specificato"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">Messaggio:</p>
            <div style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${messaggio}</div>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            Ricevuto da massimodassano.it · Rispondi direttamente a questa email per contattare ${nomeCompleto}.
          </p>
        </div>
      `,
    })

    try {
      await appendLeadRow([
        new Date().toISOString(),
        nomeCompleto,
        email,
        tipo || "Non specificato",
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
