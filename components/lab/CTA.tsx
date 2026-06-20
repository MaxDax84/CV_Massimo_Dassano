"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tipo = "Audit del sito esistente" | "Nuovo sito o restyling" | "";

export default function CTA() {
  const [tipo, setTipo] = useState<Tipo>("");
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nome.trim()) e.nome = "Campo obbligatorio";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Email non valida";
    if (!form.messaggio.trim()) e.messaggio = "Campo obbligatorio";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, tipo }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setErrors({ messaggio: "Errore nell'invio. Riprova o scrivimi su LinkedIn." });
    } finally {
      setLoading(false);
    }
  };

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 bg-white/[0.04] text-[#F2F0EB] placeholder-white/25
     border ${err ? "border-red-400/50" : "border-white/10"}
     focus:border-[#E8622A]/60 focus:shadow-[0_0_0_3px_rgba(232,98,42,0.08)]`;

  return (
    <section className="relative z-[1] py-32 px-6 border-t border-white/[0.05]">
      <div className="max-w-xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-[#E8622A] text-[10px] tracking-[0.35em] uppercase font-inter">
            Inizia oggi
          </span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-[#F2F0EB] mt-4 mb-4 leading-tight">
            Pronto a costruire<br />o a rinnovare il tuo sito?
          </h2>
          <p className="text-[#F2F0EB]/45 text-sm font-inter">
            Preventivo gratuito · Nessun impegno
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Step 1 — choose type */}
          {!tipo && (
            <motion.div
              key="choose"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 gap-4"
            >
              <TypeButton
                label="Audit del sito"
                sub="Hai già un sito e vuoi capire cosa non va"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                }
                onClick={() => setTipo("Audit del sito esistente")}
              />
              <TypeButton
                label="Nuovo sito o restyling"
                sub="Vuoi costruire da zero o rinnovare quello che hai"
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/>
                  </svg>
                }
                onClick={() => setTipo("Nuovo sito o restyling")}
              />
            </motion.div>
          )}

          {/* Step 2 — form */}
          {tipo && !sent && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              {/* Back button + selected type badge */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => { setTipo(""); setErrors({}); }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/[0.04] text-white/60 hover:text-white hover:border-white/30 text-xs font-inter transition-all duration-200"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                  Indietro
                </button>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E8622A]/30 bg-[#E8622A]/8 text-[#E8622A] text-xs font-inter">
                  {tipo}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Nome */}
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-white/50 font-inter tracking-wide">
                    Nome <span className="text-[#E8622A]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Mario Rossi"
                    value={form.nome}
                    onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                    className={inputCls(errors.nome)}
                  />
                  {errors.nome && <p className="text-xs mt-1 text-red-400/80">{errors.nome}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-white/50 font-inter tracking-wide">
                    Email <span className="text-[#E8622A]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="mario@esempio.it"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={inputCls(errors.email)}
                  />
                  {errors.email && <p className="text-xs mt-1 text-red-400/80">{errors.email}</p>}
                </div>

                {/* Messaggio */}
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-white/50 font-inter tracking-wide">
                    Raccontami il progetto <span className="text-[#E8622A]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder={
                      tipo === "Audit del sito esistente"
                        ? "Il mio sito è... vorrei capire perché non converte / appare datato..."
                        : "Ho bisogno di un sito per... il mio settore è... i miei clienti sono..."
                    }
                    value={form.messaggio}
                    onChange={e => setForm(f => ({ ...f, messaggio: e.target.value }))}
                    className={`${inputCls(errors.messaggio)} resize-none`}
                  />
                  {errors.messaggio && <p className="text-xs mt-1 text-red-400/80">{errors.messaggio}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-sora font-semibold text-sm text-white
                    bg-[#E8622A] hover:bg-[#F5A45C] transition-all duration-300
                    hover:shadow-[0_0_40px_rgba(232,98,42,0.4)] hover:scale-[1.02]
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Invio in corso..." : "Invia messaggio"}
                </button>
              </form>
            </motion.div>
          )}

          {/* Step 3 — success */}
          {sent && (
            <motion.div
              key="sent"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <div className="text-4xl mb-4">✦</div>
              <h3 className="font-sora font-bold text-2xl text-[#F2F0EB] mb-3">
                Messaggio ricevuto.
              </h3>
              <p className="text-[#F2F0EB]/50 text-sm font-inter">
                Ti rispondo entro 24–48h.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center text-[#F2F0EB]/18 text-[10px] tracking-[0.4em] uppercase font-inter"
        >
          /lab · vetrina tecnica · massimodassano.it
        </motion.p>
      </div>
    </section>
  );
}

function TypeButton({
  label, sub, icon, onClick,
}: {
  label: string; sub: string; icon: React.ReactNode; onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group text-left p-6 rounded-2xl border border-white/[0.07] bg-white/[0.025]
        backdrop-blur-md transition-all duration-300
        hover:border-[#E8622A]/40 hover:bg-white/[0.04]
        hover:shadow-[0_0_32px_rgba(232,98,42,0.12)]
        flex flex-col"
    >
      <div className="text-[#E8622A] mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
        {icon}
      </div>
      <div className="font-sora font-semibold text-[#F2F0EB] text-base mb-2 group-hover:text-white transition-colors">
        {label}
      </div>
      <div className="text-[#F2F0EB]/40 text-xs font-inter leading-relaxed">
        {sub}
      </div>
    </motion.button>
  );
}
