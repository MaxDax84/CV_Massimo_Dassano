# CLAUDE.md

Guida per Claude Code (claude.ai/code) in questo repository.

## Comandi

```bash
pnpm dev        # dev server su http://localhost:3000
pnpm build      # build di produzione — esegue DAVVERO il type-check TypeScript
pnpm start      # serve la build di produzione
```

Non ci sono test.

`pnpm lint` è dichiarato in `package.json` ma **non funziona**: ESLint non è tra le dipendenze del
progetto. Non è una regressione da sistemare di corsa, è lo stato storico. Il gate reale sulla qualità è
la validazione dei tipi che `pnpm build` esegue.

## Architettura

Sito commerciale di Massimo Dassano (MD Studio), Next.js 16 App Router, React 19, Tailwind CSS v4.
**Niente libreria di componenti**: tutto il sito è scritto a mano. C'era una installazione completa di
shadcn/ui (55 componenti in `components/ui/`) che nessuna pagina importava, rimossa a ottobre 2026 insieme
alle 42 dipendenze che si trascinava dietro. Se un giorno serve un componente, si reinstalla singolarmente
con `npx shadcn add <nome>` invece di reintrodurre l'intera libreria.
Dominio canonico **`https://www.massimodassano.it`** (con `www`): è in `BASE_URL`
(`app/layout.tsx`) e alimenta canonical, Open Graph, JSON-LD e sitemap. L'apex reindirizza al www.

**Eccezione da ricordare:** `public/robots.txt` è un file statico con il dominio **scritto a mano**, non
generato da `BASE_URL`. Se un giorno il dominio canonico cambia, robots.txt resta in silenzio sul vecchio
dominio e nessuno se ne accorge.

**Non è un sito a pagina singola.** Le route sono:

| Route | Cosa |
|---|---|
| `/` | Landing commerciale. `app/page.tsx`, ~1550 righe, in gran parte autonomo |
| `/cv` | Il vecchio sito-CV, composto dai componenti `*-section` |
| `/servizi/*` | 5 pagine servizio, tutte basate su `components/service-page.tsx` |
| `/lab` | Vetrina tecnica, componenti in `components/lab/` |
| `/lab/compleanno` | Pagina una tantum |
| `/privacy`, `/cookie-policy`, `/grazie` | Pagine di servizio |
| `/api/contact` | Handler del form di contatto |

**Attenzione a non confondere `/` e `/cv`.** I componenti `hero-section`, `about-section`,
`experience-section`, `education-section`, `skills-section`, `interests-section` appartengono **solo a
`/cv`**. La homepage ha il proprio hero scritto inline dentro `app/page.tsx` (titolo con `GlitchText` in
cornice HUD, sottotitolo con effetto macchina da scrivere). Modificare un `*-section` non cambia nulla
sulla homepage.

**i18n** — I testi stanno in `i18n/translations.ts` (~1100 righe), mappa indicizzata per `Lang`
(`it | en | fr | de | zh | sw | ql`). `LanguageProvider` (`contexts/language-context.tsx`) tiene lo stato;
i componenti chiamano `const { t } = useLanguage()`. **Le modifiche ai testi vanno lì**, non nei
componenti. La sezione `/lab` ha un contesto separato, `contexts/lab-lang-context.tsx`.

**Animazioni scroll-reveal** — `useInView` (`hooks/use-in-view.ts`), wrapper di IntersectionObserver che
scatta una volta sola e smette di osservare.

**Email di contatto** — `components/contact-reveal.tsx` riceve l'indirizzo come stringa rovesciata
(`encodedEmail`) e mostra un CAPTCHA matematico prima di rivelarlo, per bloccare gli scraper banali.

**Tema** — Tema scuro unico (navy profondo + ciano `--primary`), variabili CSS in `app/globals.css`.
Nessun toggle chiaro/scuro.

## La sezione /lab

**Sfondo video** (`components/lab/LabBackground.tsx`): video ospitato su CDN esterna (DigitalOcean
Spaces, già in allowlist nella CSP alla voce `media-src`). Il loop infinito è ottenuto con **due elementi
video in crossfade**: quando il primo si avvicina alla fine parte il secondo e si dissolvono l'uno
nell'altro, così non si vede lo stacco. Non sostituire con `loop` nativo, lo stacco tornerebbe visibile.

Tre accorgimenti aggiunti a ottobre 2026, da non smontare per sbaglio:
- Il **secondo video sta a `preload="none"`** e viene caricato solo quando il primo supera il 60% della
  durata. Prima erano entrambi su `preload="auto"`: lo stesso file da 3,46 MB veniva scaricato due volte,
  circa 7 MB a visita.
- Su **mobile (≤767px) e con `prefers-reduced-motion: reduce` non viene montato nessun `<video>`**: resta
  il solo `poster` (`public/lab-hero-poster.jpg`, 180 KB), e `lab:video-playing` viene emesso subito, così
  `LabContentWrapper` non resta ad aspettare il proprio fallback.
- Il `poster` è impostato su entrambi i video e come sfondo del contenitore.

**Componenti effettivamente montati** in `/lab`: `Hero`, `Projects`, `CTA`, `CustomCursor` (dalla page) più
`LabBackground` e `LabContentWrapper` (dal layout). Se ne aggiungi uno, verifica che sia importato davvero:
qui è già successo che del codice restasse nel repo senza essere montato da nessuna parte.

**Animazione a frame rimossa (ottobre 2026).** Esisteva un `ScrollyCanvas.tsx` che disegnava su canvas 151
frame da `public/sequence/`, scrubbati con lo scroll. **Non era importato da nessuna pagina**: erano 175 MB
di PNG trascinati in ogni clone e in ogni deploy per un'animazione che nessun visitatore vedeva. Rimossi
componente e frame, insieme ad altri tre componenti orfani (`About`, `Overlay`, `PageTransition`).

Se un giorno si vuole rifare quell'effetto: esportare i frame **in WebP, non in PNG** (la conversione fatta
prima di cancellarli portava quei 175 MB a 9 MB a parità di resa). Il video al posto dei frame è stato
valutato e scartato: lo scrubbing di un video con lo scroll dà seeking a scatti e problemi su iOS, i frame
su canvas sono più affidabili.

## Form di contatto e sicurezza

`app/api/contact/route.ts` manda una mail con **Resend** e scrive una riga su **Google Sheets**
(`lib/google-sheets.ts`). Difese presenti, da non rimuovere:

- `valueInputOption: "RAW"` **più** sanitizzazione dei valori che iniziano con `= + - @`, contro la
  formula injection su Sheets. Serve la doppia protezione: RAW copre il foglio, l'apice copre l'export CSV
  aperto in Excel.
- `escapeHtml()` su tutti i campi interpolati nel template HTML della mail.
- Whitelist sul campo `tipo`, limiti di lunghezza, campo honeypot nascosto, rate limit in memoria,
  controllo server-side del consenso privacy.

Il rate limit è una `Map` in memoria: su serverless ogni istanza ha la sua, quindi è una barriera debole.
Per una protezione vera servirebbe uno storage esterno (KV/Upstash): non è stato fatto perché richiede di
attivare un servizio.

**CSP** — Definita in `next.config.mjs` insieme agli altri header di sicurezza. Aggiungendo uno script di
terze parti va aggiornata, altrimenti il browser lo blocca in silenzio. È già successo: Umami era stato
inserito dopo la CSP, veniva bloccato e non ha raccolto dati per due mesi senza che nessuno se ne
accorgesse. **Analytics attuale: solo Vercel Analytics** (cookieless). Umami è stato rimosso.

`images: { unoptimized: true }` in `next.config.mjs` è di fatto ininfluente: il progetto non usa
`next/image`, solo tag `<img>`.

## Convenzioni

- **Mai l'em dash (—) nei testi visibili.** Regola valida su tutti i siti di questo cliente: si usano
  virgola, due punti o parentesi.
- Prima di pubblicare modifiche al sito, verificare che il build passi: il type-check è attivo e un
  errore di tipo blocca il deploy su Vercel.
- Il working tree pesa circa 2,5 MB: non reintrodurre immagini non compresse. Prima di aggiungere asset
  pesanti, verificare che siano davvero referenziati da una pagina.
- **La storia git conserva ancora i vecchi PNG**, quindi `.git` pesa ~180 MB e un `git clone` li scarica
  comunque. Ripulirla richiede un `filter-repo` che riscrive tutti gli hash: non è stato fatto.
