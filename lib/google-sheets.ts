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
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  })
}
