"use client";

import { useState } from "react";
import Link from "next/link";

const NOME = "Lorenzo";
const DATA = "Sabato 17 Ottobre 2026";
const ORA = "16:00";
const INDIRIZZO = "Via Brera 5, 20121 Milano (MI)";
const MAPS_URL = "https://maps.google.com/?q=Via+Brera+5,+Milano";

const BANDA = [
  { name: "Rufy",  color: "#16a34a", bg: "#dcfce7", desc: "Il capo della banda!", rumore: "ROOAAR!" },
  { name: "Pippi", color: "#ea580c", bg: "#ffedd5", desc: "La più veloce di tutti!", rumore: "GRRRR!" },
  { name: "Gus",   color: "#7c3aed", bg: "#ede9fe", desc: "Il più simpatico!",       rumore: "WOOOP!" },
];

const DinoSvg = ({ color }: { color: string }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-20 mx-auto">
    <ellipse cx="60" cy="72" rx="32" ry="20" fill={color} opacity="0.2"/>
    <path d="M30 60 Q28 40 40 30 Q52 18 68 22 Q82 26 84 40 Q88 55 80 65 Q70 75 55 74 Q38 73 30 60Z" fill={color}/>
    <path d="M84 40 Q95 35 100 28 Q96 38 90 44Z" fill={color}/>
    <circle cx="72" cy="34" r="5" fill="white"/>
    <circle cx="73" cy="34" r="2.5" fill="#1a1a1a"/>
    <path d="M55 74 Q50 85 42 88 Q48 82 52 78Z" fill={color}/>
    <path d="M62 74 Q60 86 65 90 Q64 82 66 78Z" fill={color}/>
    <path d="M30 60 Q18 62 14 58 Q22 58 28 56Z" fill={color}/>
    <path d="M40 30 Q38 18 44 12 Q42 22 46 26Z" fill={color} opacity="0.8"/>
    <path d="M52 18 Q54 8 60 6 Q56 14 58 20Z" fill={color} opacity="0.8"/>
  </svg>
);

export default function CompleannnoPage() {
  const [dinoAttivo, setDinoAttivo] = useState<string | null>(null);
  const [rsvpNome, setRsvpNome] = useState("");
  const [rsvpInviato, setRsvpInviato] = useState(false);

  return (
    <main style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif", background: "#FFF9F0", minHeight: "100vh", overflowX: "hidden" }}>

      {/* Pallini decorativi sfondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[
          { top: "8%", left: "5%", size: 18, color: "#fbbf24" },
          { top: "15%", right: "8%", size: 12, color: "#34d399" },
          { top: "35%", left: "2%", size: 22, color: "#f472b6" },
          { top: "50%", right: "4%", size: 14, color: "#818cf8" },
          { top: "70%", left: "6%", size: 10, color: "#fb923c" },
          { top: "80%", right: "10%", size: 20, color: "#4ade80" },
          { top: "25%", left: "50%", size: 8, color: "#e879f9" },
          { top: "60%", left: "45%", size: 16, color: "#facc15" },
        ].map((dot, i) => (
          <div key={i} className="absolute rounded-full opacity-40"
            style={{ top: dot.top, left: (dot as any).left, right: (dot as any).right, width: dot.size, height: dot.size, background: dot.color }} />
        ))}
      </div>

      {/* ── HERO ── */}
      <section className="relative text-center px-6 pt-16 pb-12">
        <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-4" style={{ color: "#fb923c", fontFamily: "var(--font-nunito)" }}>
          Un anno intorno al sole
        </p>
        <h1 className="font-bold leading-tight mb-3"
          style={{ fontFamily: "var(--font-fredoka), Fredoka, sans-serif", fontSize: "clamp(3rem, 12vw, 5.5rem)", color: "#1a1a1a", lineHeight: 1.1 }}>
          {NOME}<br />
          <span style={{ color: "#16a34a" }}>compie 1 anno!</span>
        </h1>
        <p className="text-lg mt-4 max-w-sm mx-auto" style={{ color: "#6b7280" }}>
          Vieni a festeggiare con noi e con la banda dei dinosauri
        </p>
        <div className="mt-8 flex justify-center">
          <span className="text-5xl" role="img" aria-label="dinosauro">🦕</span>
        </div>
      </section>

      {/* ── INFO FESTA ── */}
      <section className="px-6 pb-14 max-w-lg mx-auto">
        <div className="rounded-3xl p-8 shadow-lg"
          style={{ background: "white", border: "2px solid #fde68a" }}>
          <h2 className="font-bold text-center mb-6 text-2xl"
            style={{ fontFamily: "var(--font-fredoka)", color: "#1a1a1a" }}>
            Quando e dove?
          </h2>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "#fef9c3" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-base" style={{ color: "#1a1a1a" }}>{DATA}</p>
                <p className="text-sm" style={{ color: "#6b7280" }}>alle ore {ORA}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: "#dcfce7" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 21s-8-7.5-8-12a8 8 0 0 1 16 0c0 4.5-8 12-8 12z"/><circle cx="12" cy="9" r="3"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-base" style={{ color: "#1a1a1a" }}>{INDIRIZZO}</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium mt-1 inline-flex items-center gap-1 cursor-pointer"
                  style={{ color: "#16a34a" }}>
                  Apri in Maps
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA BANDA ── */}
      <section className="px-6 pb-16 max-w-lg mx-auto">
        <h2 className="font-bold text-center mb-2 text-3xl"
          style={{ fontFamily: "var(--font-fredoka)", color: "#1a1a1a" }}>
          Incontra la banda!
        </h2>
        <p className="text-center text-sm mb-8" style={{ color: "#9ca3af" }}>
          Clicca su ogni dinosauro per sentirlo ruggire
        </p>
        <div className="grid grid-cols-3 gap-4">
          {BANDA.map((dino) => (
            <button
              key={dino.name}
              onClick={() => setDinoAttivo(dinoAttivo === dino.name ? null : dino.name)}
              className="rounded-3xl p-4 text-center transition-all duration-200 cursor-pointer"
              style={{
                background: dino.bg,
                border: `2px solid ${dino.color}40`,
                transform: dinoAttivo === dino.name ? "scale(1.05)" : "scale(1)",
                boxShadow: dinoAttivo === dino.name ? `0 8px 30px ${dino.color}40` : "none",
              }}>
              <DinoSvg color={dino.color} />
              <p className="font-bold mt-2 text-lg" style={{ fontFamily: "var(--font-fredoka)", color: dino.color }}>
                {dino.name}
              </p>
              {dinoAttivo === dino.name ? (
                <p className="text-sm font-bold mt-1 animate-bounce" style={{ color: dino.color }}>
                  {dino.rumore}
                </p>
              ) : (
                <p className="text-xs mt-1" style={{ color: "#6b7280" }}>{dino.desc}</p>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── RSVP ── */}
      <section className="px-6 pb-20 max-w-lg mx-auto">
        <div className="rounded-3xl p-8 text-center"
          style={{ background: "#16a34a", color: "white" }}>
          <h2 className="font-bold text-3xl mb-2" style={{ fontFamily: "var(--font-fredoka)" }}>
            Ci sei?
          </h2>
          <p className="text-green-100 text-sm mb-6">
            Facci sapere entro il 10 Ottobre!
          </p>
          {rsvpInviato ? (
            <div className="py-6">
              <div className="text-4xl mb-3">🎉</div>
              <p className="font-bold text-xl" style={{ fontFamily: "var(--font-fredoka)" }}>
                Ci vediamo alla festa!
              </p>
              <p className="text-green-100 text-sm mt-1">Non vediamo l'ora!</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (rsvpNome.trim()) setRsvpInviato(true); }}
              className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Il tuo nome"
                value={rsvpNome}
                onChange={(e) => setRsvpNome(e.target.value)}
                className="w-full px-5 py-3 rounded-2xl text-center text-base outline-none"
                style={{ background: "rgba(255,255,255,0.2)", border: "2px solid rgba(255,255,255,0.35)", color: "white", fontFamily: "var(--font-nunito)" }}
              />
              <button type="submit"
                className="w-full py-3.5 rounded-2xl font-bold text-base cursor-pointer transition-all duration-200"
                style={{ background: "white", color: "#16a34a", fontFamily: "var(--font-fredoka)", fontSize: "1.1rem" }}>
                Ci sono!
              </button>
              <button type="button"
                className="w-full py-3 rounded-2xl font-semibold text-sm cursor-pointer"
                style={{ background: "rgba(255,255,255,0.12)", color: "white", fontFamily: "var(--font-nunito)" }}>
                Non riesco a venire
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="text-center pb-10 px-6">
        <p className="text-xs mb-3" style={{ color: "#d1d5db" }}>
          Con tutto l'amore della famiglia di {NOME} ❤️
        </p>
        <Link href="/lab"
          className="inline-flex items-center gap-1.5 text-xs transition-colors duration-200"
          style={{ color: "#9ca3af" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Torna al Laboratorio
        </Link>
      </footer>
    </main>
  );
}
