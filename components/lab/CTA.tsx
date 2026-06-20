"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLabLang } from "@/contexts/lab-lang-context";

const translations = {
  it: {
    eyebrow: "Inizia oggi",
    title: "Pronto a costruire\no a rinnovare il tuo sito?",
    subtitle: "Preventivo gratuito · Nessun impegno",
    type1_label: "Audit del sito",
    type1_sub: "Hai già un sito e vuoi capire cosa non va",
    type1_value: "Audit del sito esistente",
    type2_label: "Nuovo sito",
    type2_sub: "Vuoi costruire un sito da zero",
    type2_value: "Nuovo sito",
    type3_label: "Restyling del sito",
    type3_sub: "Hai già un sito e vuoi rinnovarlo",
    type3_value: "Restyling del sito esistente",
    back: "Indietro",
    name_label: "Nome",
    name_placeholder: "Mario Rossi",
    email_label: "Email",
    email_placeholder: "mario@esempio.it",
    msg_label: "Raccontami il progetto",
    msg_placeholder_audit: "Il mio sito è... vorrei capire perché non converte / appare datato...",
    msg_placeholder_new: "Ho bisogno di un sito per... il mio settore è... i miei clienti sono...",
    msg_placeholder_restyle: "Il mio sito attuale è... vorrei rinnovarlo perché... il mio obiettivo è...",
    submit: "Invia messaggio",
    sending: "Invio in corso...",
    success_title: "Messaggio ricevuto.",
    success_sub: "Ti rispondo entro 24–48h.",
    footer_note: "/lab · vetrina tecnica · massimodassano.it",
    err_required: "Campo obbligatorio",
    err_email: "Email non valida",
    err_send: "Errore nell'invio. Riprova o scrivimi su LinkedIn.",
  },
  en: {
    eyebrow: "Start today",
    title: "Ready to build\nor refresh your website?",
    subtitle: "Free quote · No commitment",
    type1_label: "Site audit",
    type1_sub: "You already have a site and want to know what's wrong",
    type1_value: "Site audit",
    type2_label: "New site",
    type2_sub: "You want to build a site from scratch",
    type2_value: "New site",
    type3_label: "Site restyling",
    type3_sub: "You already have a site and want to refresh it",
    type3_value: "Site restyling",
    back: "Back",
    name_label: "Name",
    name_placeholder: "John Smith",
    email_label: "Email",
    email_placeholder: "john@example.com",
    msg_label: "Tell me about your project",
    msg_placeholder_audit: "My site is... I'd like to understand why it doesn't convert...",
    msg_placeholder_new: "I need a site for... my industry is... my clients are...",
    msg_placeholder_restyle: "My current site is... I'd like to refresh it because... my goal is...",
    submit: "Send message",
    sending: "Sending...",
    success_title: "Message received.",
    success_sub: "I'll reply within 24–48h.",
    footer_note: "/lab · technical showcase · massimodassano.it",
    err_required: "Required field",
    err_email: "Invalid email",
    err_send: "Send error. Try again or message me on LinkedIn.",
  },
} as const;

export default function CTA() {
  const { lang } = useLabLang();
  const ht = translations[lang];

  const [tipo, setTipo] = useState("");
  const [form, setForm] = useState({ nome: "", email: "", messaggio: "", _hp: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nome.trim()) e.nome = ht.err_required;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = ht.err_email;
    if (!form.messaggio.trim()) e.messaggio = ht.err_required;
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
      setErrors({ messaggio: ht.err_send });
    } finally {
      setLoading(false);
    }
  };

  const inputCls = (err?: string) =>
    `w-full px-4 py-3 text-sm rounded-xl outline-none transition-all duration-200 bg-white/[0.10] text-[#F2F0EB] placeholder-white/40
     border ${err ? "border-red-400/60" : "border-white/20"}
     focus:border-[#E8622A]/70 focus:bg-white/[0.14] focus:shadow-[0_0_0_3px_rgba(232,98,42,0.10)]`;

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
            {ht.eyebrow}
          </span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-[#F2F0EB] mt-4 mb-4 leading-tight">
            {ht.title.split("\n").map((line, i) => (
              <React.Fragment key={i}>{line}{i === 0 && <br />}</React.Fragment>
            ))}
          </h2>
          <p className="text-[#F2F0EB]/45 text-sm font-inter">
            {ht.subtitle}
          </p>
        </motion.div>

        <motion.div layout transition={{ duration: 0.4, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          {/* Step 1 — choose type */}
          {!tipo && (
            <motion.div
              key="choose"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-3 gap-4"
            >
              <TypeButton
                label={ht.type1_label}
                sub={ht.type1_sub}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                }
                onClick={() => setTipo(ht.type1_value)}
              />
              <TypeButton
                label={ht.type2_label}
                sub={ht.type2_sub}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z"/>
                  </svg>
                }
                onClick={() => setTipo(ht.type2_value)}
              />
              <TypeButton
                label={ht.type3_label}
                sub={ht.type3_sub}
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                    <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>
                  </svg>
                }
                onClick={() => setTipo(ht.type3_value)}
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
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => {
                    setTipo("");
                    setErrors({});
                    setTimeout(() => {
                      document.getElementById("contatto")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 20);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/15 bg-white/[0.04] text-white/60 hover:text-white hover:border-white/30 text-xs font-inter transition-all duration-200 cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                    <path d="M19 12H5M12 5l-7 7 7 7"/>
                  </svg>
                  {ht.back}
                </button>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E8622A]/30 bg-[#E8622A]/8 text-[#E8622A] text-xs font-inter">
                  {tipo}
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot — hidden from humans, filled by bots */}
                <input type="text" name="website" tabIndex={-1} aria-hidden="true"
                  value={form._hp} onChange={e => setForm(f => ({ ...f, _hp: e.target.value }))}
                  style={{ position: "absolute", opacity: 0, pointerEvents: "none", height: 0, width: 0 }} />
                <div>
                  <label className="block text-xs font-medium mb-1.5 text-white/50 font-inter tracking-wide">
                    {ht.name_label} <span className="text-[#E8622A]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={ht.name_placeholder}
                    value={form.nome}
                    onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                    className={inputCls(errors.nome)}
                  />
                  {errors.nome && <p className="text-xs mt-1 text-red-400/80">{errors.nome}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-white/50 font-inter tracking-wide">
                    {ht.email_label} <span className="text-[#E8622A]">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder={ht.email_placeholder}
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={inputCls(errors.email)}
                  />
                  {errors.email && <p className="text-xs mt-1 text-red-400/80">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium mb-1.5 text-white/50 font-inter tracking-wide">
                    {ht.msg_label} <span className="text-[#E8622A]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder={tipo === ht.type1_value ? ht.msg_placeholder_audit : tipo === ht.type2_value ? ht.msg_placeholder_new : ht.msg_placeholder_restyle}
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
                    disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? ht.sending : ht.submit}
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
                {ht.success_title}
              </h3>
              <p className="text-[#F2F0EB]/50 text-sm font-inter">
                {ht.success_sub}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center text-[#F2F0EB]/18 text-[10px] tracking-[0.4em] uppercase font-inter"
        >
          {ht.footer_note}
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
        flex flex-col cursor-pointer"
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
