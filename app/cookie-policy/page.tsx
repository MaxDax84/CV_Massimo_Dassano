import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | Massimo Dassano",
  description: "Informativa sull'utilizzo dei cookie ai sensi del GDPR e del D.Lgs. 196/2003.",
  robots: { index: false },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 rounded-full" style={{ background: "#a855f7", boxShadow: "0 0 8px rgba(168,85,247,0.7)" }} />
        <h2 className="text-lg font-bold text-white">{title}</h2>
      </div>
      <div className="pl-4 space-y-3 text-sm leading-relaxed" style={{ color: "rgba(155,180,215,0.85)", borderLeft: "1px solid rgba(168,85,247,0.08)" }}>
        {children}
      </div>
    </div>
  )
}

function CookieTable({ rows }: { rows: { nome: string; tipo: string; scopo: string; durata: string; terze?: string }[] }) {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full text-xs" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid rgba(168,85,247,0.2)" }}>
            {["Nome / Categoria", "Tipo", "Scopo", "Durata", "Terze parti"].map(h => (
              <th key={h} className="text-left py-2 pr-4 font-semibold" style={{ color: "rgba(168,85,247,0.85)" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid rgba(168,85,247,0.06)" }}>
              <td className="py-2.5 pr-4 font-mono" style={{ color: "#a855f7" }}>{r.nome}</td>
              <td className="py-2.5 pr-4">{r.tipo}</td>
              <td className="py-2.5 pr-4">{r.scopo}</td>
              <td className="py-2.5 pr-4 whitespace-nowrap">{r.durata}</td>
              <td className="py-2.5">{r.terze ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CookiePolicyPage() {
  return (
    <main style={{ background: "#030610", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 px-6 py-4 flex items-center gap-4"
        style={{ background: "rgba(3,6,16,0.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(168,85,247,0.08)" }}>
        <Link href="/"
          className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3"
          style={{ color: "rgba(168,85,247,0.75)" }}>
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
        <div className="w-px h-4" style={{ background: "rgba(168,85,247,0.15)" }} />
        <span className="text-sm font-mono" style={{ color: "rgba(168,85,247,0.45)" }}>COOKIE POLICY</span>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.45))" }} />
            <span className="text-xs font-mono tracking-[0.3em]" style={{ color: "rgba(168,85,247,0.5)" }}>DOCUMENTO LEGALE</span>
            <div className="h-px flex-1 max-w-16" style={{ background: "linear-gradient(90deg, rgba(168,85,247,0.45), transparent)" }} />
          </div>
          <h1 className="text-4xl font-black text-white mb-4" style={{ textShadow: "0 0 30px rgba(168,85,247,0.15)" }}>
            Cookie Policy
          </h1>
          <p style={{ color: "rgba(140,165,200,0.7)" }} className="text-sm">
            Informativa sull&apos;utilizzo dei cookie ai sensi del GDPR (Reg. UE 2016/679) e del D.Lgs. 196/2003 (Codice Privacy)<br />
            Ultimo aggiornamento: giugno 2026
          </p>
        </div>

        {/* Sections */}
        <Section title="1. Cosa sono i Cookie">
          <p>
            I cookie sono piccoli file di testo che i siti web salvano sul tuo browser o dispositivo durante la navigazione.
            Servono a far funzionare il sito correttamente, a ricordare le tue preferenze e, in alcuni casi, a raccogliere
            informazioni statistiche sull&apos;utilizzo del sito.
          </p>
          <p>
            Ai sensi della normativa vigente, i cookie si distinguono in <span className="text-white font-medium">tecnici</span> (necessari al funzionamento,
            non richiedono consenso) e <span className="text-white font-medium">di profilazione o analitici non anonimi</span> (richiedono consenso preventivo).
          </p>
        </Section>

        <Section title="2. Cookie utilizzati da questo sito">
          <p>Il sito <span className="text-white">massimodassano.it</span> utilizza esclusivamente le seguenti tipologie di cookie:</p>

          <div className="mt-4 space-y-6">
            {/* Technical */}
            <div className="p-4 rounded-lg" style={{ background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.12)" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ background: "#a855f7", boxShadow: "0 0 6px rgba(168,85,247,0.7)" }} />
                <span className="font-semibold text-white text-sm">Cookie Tecnici (necessari)</span>
                <span className="text-xs px-2 py-0.5 rounded font-mono ml-auto" style={{ background: "rgba(74,222,128,0.1)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)" }}>
                  Nessun consenso richiesto
                </span>
              </div>
              <p className="text-xs mb-3">
                Essenziali per il funzionamento del sito. Non raccolgono informazioni personali identificative e non possono essere disabilitati senza compromettere la fruibilità del sito.
              </p>
              <CookieTable rows={[
                { nome: "__vercel_live_token", tipo: "Tecnico", scopo: "Gestione sessione e sicurezza del server di hosting", durata: "Sessione", terze: "Vercel Inc." },
                { nome: "Preferenze browser", tipo: "Tecnico", scopo: "Memorizzazione preferenze di visualizzazione", durata: "Sessione", terze: "—" },
              ]} />
            </div>

            {/* Analytics */}
            <div className="p-4 rounded-lg" style={{ background: "rgba(168,85,247,0.04)", border: "1px solid rgba(168,85,247,0.12)" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ background: "#a855f7", boxShadow: "0 0 6px rgba(168,85,247,0.7)" }} />
                <span className="font-semibold text-white text-sm">Cookie Analitici (anonimi)</span>
                <span className="text-xs px-2 py-0.5 rounded font-mono ml-auto" style={{ background: "rgba(168,85,247,0.1)", color: "#a855f7", border: "1px solid rgba(168,85,247,0.2)" }}>
                  Dati anonimi
                </span>
              </div>
              <p className="text-xs mb-3">
                Utilizziamo <span className="text-white">Vercel Analytics</span>, un servizio di analisi privacy-first che <strong className="text-white">non installa cookie sul tuo dispositivo</strong> e non raccoglie dati personali identificativi. Le statistiche sono aggregate e anonimizzate (paese, tipo di dispositivo, pagine visitate) e non consentono l&apos;identificazione dell&apos;utente.
              </p>
              <CookieTable rows={[
                { nome: "Vercel Analytics", tipo: "Analitico anonimo", scopo: "Statistiche di visita aggregate (pageview, dispositivo, paese)", durata: "Nessun cookie", terze: "Vercel Inc. (USA)" },
              ]} />
              <p className="text-xs mt-3" style={{ color: "rgba(140,165,200,0.6)" }}>
                Vercel Analytics è conforme al GDPR. Non utilizza cookie di tracciamento e non condivide dati con terze parti per finalità pubblicitarie.
                Informativa Vercel: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#a855f7" }} className="underline underline-offset-2">vercel.com/legal/privacy-policy</a>
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-lg" style={{ background: "rgba(74,222,128,0.04)", border: "1px solid rgba(74,222,128,0.12)" }}>
            <p className="text-xs">
              <span className="font-semibold text-white">✓ Nessun cookie di profilazione o marketing.</span>{" "}
              Questo sito non utilizza cookie di tracciamento pubblicitario, cookie di social network o cookie di profilazione di terze parti.
            </p>
          </div>
        </Section>

        <Section title="3. Cookie di Terze Parti">
          <p>Il sito si avvale dei seguenti fornitori terzi:</p>
          <div className="mt-3 space-y-3">
            {[
              {
                nome: "Vercel Inc.",
                sede: "340 Pine Street, Suite 701, San Francisco, CA 94104, USA",
                ruolo: "Hosting del sito e analytics anonimi",
                gdpr: "Adeguatezza e Standard Contractual Clauses (SCC)",
                link: "https://vercel.com/legal/privacy-policy",
              },
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ background: "rgba(168,85,247,0.03)", border: "1px solid rgba(168,85,247,0.1)" }}>
                <div className="font-semibold text-white mb-2">{p.nome}</div>
                <div className="space-y-1 text-xs">
                  <div><span className="text-white">Sede: </span>{p.sede}</div>
                  <div><span className="text-white">Ruolo: </span>{p.ruolo}</div>
                  <div><span className="text-white">Trasferimento extra-UE: </span>{p.gdpr}</div>
                  <div>
                    <span className="text-white">Privacy Policy: </span>
                    <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: "#a855f7" }} className="underline underline-offset-2">
                      {p.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="4. Come Gestire i Cookie">
          <p>
            Poiché questo sito utilizza esclusivamente cookie tecnici e analytics anonimi (senza cookie sul dispositivo),
            non è necessario un sistema di consenso ai cookie. Tuttavia, puoi gestire i cookie tecnici tramite le impostazioni del tuo browser:
          </p>
          <div className="mt-3 space-y-2">
            {[
              { browser: "Google Chrome", path: "Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti" },
              { browser: "Mozilla Firefox", path: "Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web" },
              { browser: "Safari", path: "Preferenze → Privacy → Gestisci dati siti web" },
              { browser: "Microsoft Edge", path: "Impostazioni → Cookie e autorizzazioni sito → Cookie e dati del sito" },
            ].map((b, i) => (
              <div key={i} className="flex gap-3 text-xs">
                <div className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ background: "#a855f7" }} />
                <span><span className="text-white font-medium">{b.browser}: </span>{b.path}</span>
              </div>
            ))}
          </div>
          <p className="mt-3">
            La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento del sito.
          </p>
        </Section>

        <Section title="5. Modifiche alla Cookie Policy">
          <p>
            Il Titolare si riserva il diritto di aggiornare questa Cookie Policy in qualsiasi momento, ad esempio in seguito a
            modifiche normative o all&apos;introduzione di nuovi servizi. Le modifiche saranno pubblicate su questa pagina con
            indicazione della data di aggiornamento.
          </p>
        </Section>

        <Section title="6. Contatti">
          <p>
            Per qualsiasi domanda relativa all&apos;utilizzo dei cookie su questo sito, puoi contattare il Titolare del Trattamento:
          </p>
          <div className="mt-2">
            <div><span className="text-white">Massimo Dassano</span></div>
            <div>Email: <span style={{ color: "#a855f7" }}>massimo.dassano@gmail.com</span></div>
            <div className="mt-2">
              Per la Privacy Policy completa consulta:{" "}
              <Link href="/privacy" style={{ color: "#a855f7" }} className="underline underline-offset-4 hover:opacity-80 transition-opacity">
                massimodassano.it/privacy
              </Link>
            </div>
          </div>
        </Section>

        {/* Back link */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(168,85,247,0.08)" }}>
          <Link href="/"
            className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3 w-fit"
            style={{ color: "rgba(168,85,247,0.65)" }}>
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>
        </div>
      </div>
    </main>
  )
}
