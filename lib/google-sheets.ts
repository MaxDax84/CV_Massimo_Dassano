import { google } from "googleapis"

function getAuth() {
  const email = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const key = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n")
  if (!email || !key) return null

  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
}

/**
 * Neutralizza il rischio di formula injection (CSV injection).
 *
 * Difesa in profondità, su due livelli:
 *  1. `valueInputOption: "RAW"` impedisce a Google Sheets di interpretare
 *     qualsiasi contenuto come formula: il valore viene salvato alla lettera.
 *  2. Questo prefisso ad apice protegge il percorso a valle: se il foglio viene
 *     esportato in CSV e aperto con Excel/LibreOffice, quei client valutano
 *     comunque le celle che iniziano con = + - @ (o con tab / ritorno a capo).
 *
 * L'apice viene aggiunto solo ai valori effettivamente pericolosi, quindi in
 * condizioni normali le celle restano identiche a quanto scritto dall'utente.
 */
export function sanitizeCell(value: unknown): string {
  const str = value == null ? "" : String(value)
  return /^[=+\-@\t\r]/.test(str) ? `'${str}` : str
}

/** Aggiunge una riga al Google Sheet dei lead inbound. Best-effort: non lancia se non configurato. */
export async function appendLeadRow(row: string[]): Promise<void> {
  const auth = getAuth()
  const spreadsheetId = process.env.GOOGLE_SHEETS_LEADS_ID
  if (!auth || !spreadsheetId) {
    console.warn("Google Sheets logging non configurato: variabili d'ambiente mancanti")
    return
  }

  const sheets = google.sheets({ version: "v4", auth })
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "A1",
    // RAW: i valori non vengono mai interpretati come formule.
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row.map(sanitizeCell)] },
  })
}
