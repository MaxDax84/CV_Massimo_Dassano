import { Resend } from "resend"
import { NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { nome, cognome, email, tipo, messaggio } = await req.json()

    if (!nome || !email || !messaggio) {
      return NextResponse.json({ error: "Campi obbligatori mancanti" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Sito Web <onboarding@resend.dev>",
      to: "massimo.dassano@gmail.com",
      replyTo: email,
      subject: `Richiesta sito web${tipo ? ` – ${tipo}` : ""} – ${nome} ${cognome}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 8px;">
          <h2 style="color: #111827; margin-bottom: 24px;">Nuova richiesta dal sito</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 140px; font-size: 14px;">Nome</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${nome} ${cognome}</td>
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
            Ricevuto da massimodassano.it · Rispondi direttamente a questa email per contattare ${nome}.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Errore invio email:", error)
    return NextResponse.json({ error: "Errore interno, riprova più tardi" }, { status: 500 })
  }
}
