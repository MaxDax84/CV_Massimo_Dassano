import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Massimo Dassano",
  description: "Informativa sul trattamento dei dati personali ai sensi del GDPR (Reg. UE 2016/679).",
  robots: { index: false },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-6 rounded-full" style={{ background: "#00f5ff", boxShadow: "0 0 8px rgba(0,245,255,0.7)" }} />
        <h2 className="text-lg font-bold text-white">{title}</h2>
      </div>
      <div className="pl-4 space-y-3 text-sm leading-relaxed" style={{ color: "rgba(155,180,215,0.85)", borderLeft: "1px solid rgba(0,245,255,0.08)" }}>
        {children}
      </div>
    </div>
  )
}

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="font-semibold text-white">{label}: </span>
      {children}
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <main style={{ background: "#030610", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 px-6 py-4 flex items-center gap-4"
        style={{ background: "rgba(3,6,16,0.92)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(0,245,255,0.08)" }}>
        <Link href="/"
          className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3"
          style={{ color: "rgba(0,245,255,0.75)" }}>
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
        <div className="w-px h-4" style={{ background: "rgba(0,245,255,0.15)" }} />
        <span className="text-sm font-mono" style={{ color: "rgba(0,245,255,0.45)" }}>PRIVACY POLICY</span>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 max-w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,255,0.45))" }} />
            <span className="text-xs font-mono tracking-[0.3em]" style={{ color: "rgba(0,245,255,0.5)" }}>DOCUMENTO LEGALE</span>
            <div className="h-px flex-1 max-w-16" style={{ background: "linear-gradient(90deg, rgba(0,245,255,0.45), transparent)" }} />
          </div>
          <h1 className="text-4xl font-black text-white mb-4" style={{ textShadow: "0 0 30px rgba(0,245,255,0.15)" }}>
            Privacy Policy
          </h1>
          <p style={{ color: "rgba(140,165,200,0.7)" }} className="text-sm">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)<br />
            Ultimo aggiornamento: giugno 2026
          </p>
        </div>

        {/* Sections */}
        <Section title="1. Titolare del Trattamento">
          <Item label="Nome">Massimo Dassano</Item>
          <Item label="Sede">Milano (MI), Italia</Item>
          <Item label="Email">massimo.dassano@gmail.com</Item>
          <Item label="Sito web">massimodassano.it</Item>
          <p className="mt-2">
            Il Titolare è la persona fisica o giuridica che determina le finalità e i mezzi del trattamento dei dati personali.
          </p>
        </Section>

        <Section title="2. Dati Raccolti e Modalità di Raccolta">
          <p>
            Questo sito raccoglie dati personali nelle seguenti modalità:
          </p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Dati di navigazione: indirizzi IP, tipo di browser, sistema operativo, pagine visitate, durata della visita. Questi dati sono raccolti automaticamente dai sistemi informatici e log dei server.",
              "Dati di contatto via form: il sito dispone di moduli di contatto (nella homepage e nella sezione Laboratorio) tramite i quali è possibile inviare nome, indirizzo email e un messaggio. Questi dati vengono trasmessi via email al titolare tramite il servizio Resend e utilizzati esclusivamente per rispondere alla richiesta.",
              "Dati di contatto tramite email o LinkedIn: se decidi di contattarmi direttamente, trattiamo i dati da te forniti esclusivamente per rispondere alla tua richiesta.",
              "Dati analitici aggregati: tramite Vercel Analytics vengono raccolte statistiche anonime e aggregate sulle visite al sito, senza identificazione personale dell'utente.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#00f5ff" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="3. Finalità e Base Giuridica del Trattamento">
          <div className="space-y-4">
            {[
              {
                finalita: "Gestione del sito e sicurezza informatica",
                base: "Legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR)",
                dettaglio: "Per garantire il corretto funzionamento del sito e proteggere l'integrità dei sistemi.",
              },
              {
                finalita: "Risposta a richieste di contatto",
                base: "Esecuzione di misure precontrattuali o consenso (art. 6, par. 1, lett. b/a GDPR)",
                dettaglio: "Per gestire le comunicazioni e rispondere alle richieste ricevute.",
              },
              {
                finalita: "Statistiche di utilizzo anonime",
                base: "Legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR)",
                dettaglio: "Per migliorare l'esperienza utente tramite dati aggregati e non identificativi.",
              },
            ].map((r, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ background: "rgba(0,245,255,0.03)", border: "1px solid rgba(0,245,255,0.08)" }}>
                <div className="font-semibold text-white mb-1">{r.finalita}</div>
                <div className="text-xs mb-1" style={{ color: "rgba(0,245,255,0.65)" }}>{r.base}</div>
                <div>{r.dettaglio}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="4. Conservazione dei Dati">
          <p>
            I dati personali sono conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti:
          </p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Dati di navigazione e log: conservati per un massimo di 30 giorni, salvo necessità di accertamento di reati.",
              "Dati di contatto: conservati per il tempo necessario a gestire la richiesta e, successivamente, fino a 2 anni per eventuali esigenze contrattuali.",
              "Dati analitici aggregati: conservati secondo le politiche di Vercel Analytics (dati anonimi, nessun limite temporale specifico).",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#00f5ff" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="5. Comunicazione e Trasferimento dei Dati">
          <p>
            I dati personali non sono venduti, ceduti o comunicati a terzi, salvo nei seguenti casi:
          </p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Vercel Inc. (hosting e analytics): i servizi di hosting sono forniti da Vercel Inc., con sede negli Stati Uniti. Il trasferimento avviene nel rispetto delle garanzie previste dal GDPR (Standard Contractual Clauses). Vercel Analytics opera in modalità privacy-first, senza raccogliere dati personali identificativi.",
              "Resend Inc. (invio email): i dati inseriti nei moduli di contatto (nome ed email) vengono trasmessi tramite Resend, un servizio di email transazionale con sede negli Stati Uniti, nel rispetto delle garanzie GDPR applicabili.",
              "Autorità competenti: in caso di richiesta delle autorità giudiziarie o di pubblica sicurezza, i dati potranno essere comunicati nei limiti di legge.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#00f5ff" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="6. Diritti dell'Interessato">
          <p>
            Ai sensi degli artt. 15–22 del GDPR, hai il diritto di:
          </p>
          <ul className="list-none space-y-2 mt-2">
            {[
              "Accesso: ottenere conferma che sia o meno in corso un trattamento di dati personali che ti riguardano.",
              "Rettifica: ottenere la correzione di dati inesatti o incompleti.",
              "Cancellazione (diritto all'oblio): ottenere la cancellazione dei dati, nei casi previsti dalla legge.",
              "Limitazione: ottenere la limitazione del trattamento in determinati casi.",
              "Portabilità: ricevere i dati in formato strutturato e leggibile da dispositivo automatico.",
              "Opposizione: opporti al trattamento basato su legittimo interesse.",
              "Revoca del consenso: revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento precedente.",
              "Reclamo: proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#00f5ff" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            Per esercitare i tuoi diritti, contatta il Titolare all&apos;indirizzo: <span style={{ color: "#00f5ff" }}>massimo.dassano@gmail.com</span>
          </p>
        </Section>

        <Section title="7. Cookie">
          <p>
            Questo sito utilizza cookie tecnici necessari al funzionamento e cookie analitici in forma anonima.
            Per informazioni dettagliate consulta la nostra{" "}
            <Link href="/cookie-policy" style={{ color: "#00f5ff" }} className="underline underline-offset-4 hover:opacity-80 transition-opacity">
              Cookie Policy
            </Link>.
          </p>
        </Section>

        <Section title="8. Modifiche alla Privacy Policy">
          <p>
            Il Titolare si riserva il diritto di apportare modifiche alla presente informativa. Le modifiche saranno
            pubblicate su questa pagina con indicazione della data di aggiornamento. Si invita a consultarla periodicamente.
          </p>
        </Section>

        {/* Back link */}
        <div className="mt-16 pt-8" style={{ borderTop: "1px solid rgba(0,245,255,0.08)" }}>
          <Link href="/"
            className="flex items-center gap-2 text-sm transition-all duration-200 hover:gap-3 w-fit"
            style={{ color: "rgba(0,245,255,0.65)" }}>
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>
        </div>
      </div>
    </main>
  )
}
