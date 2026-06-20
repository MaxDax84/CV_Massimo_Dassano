"use client";

import { motion } from "framer-motion";
import { useLabLang } from "@/contexts/lab-lang-context";

const t = {
  it: {
    eyebrow: "Chi sono",
    title: "Consulente corporate\ndiventato artigiano del web.",
    p1: "Ho trascorso 15 anni in ambienti corporate internazionali — da EY ad Alibaba — dove ogni progetto richiedeva precisione, attenzione al dettaglio e risultati misurabili.",
    p2: "Oggi applico quella stessa mentalità al restyling di siti web per piccole attività locali italiane: ristoranti, studi professionali, negozi. Niente template, niente soluzioni generiche.",
    p3: "Ogni sito è costruito su misura per la persona che ci sta dietro e per i clienti che vuole raggiungere. Un approccio artigianale con il rigore di una multinazionale.",
    stats: [
      { value: "15+", label: "Anni in ambienti corporate" },
      { value: "5", label: "Progetti nel portfolio" },
      { value: "0", label: "Template usati" },
    ],
  },
  en: {
    eyebrow: "About me",
    title: "Corporate consultant\nturned web artisan.",
    p1: "I spent 15 years in international corporate environments — from EY to Alibaba — where every project demanded precision, attention to detail and measurable results.",
    p2: "Today I apply that same mindset to website restyling for small Italian local businesses: restaurants, professional studios, shops. No templates, no generic solutions.",
    p3: "Every site is built around the person behind it and the clients they want to reach. An artisan approach with the rigour of a multinational.",
    stats: [
      { value: "15+", label: "Years in corporate" },
      { value: "5", label: "Portfolio projects" },
      { value: "0", label: "Templates used" },
    ],
  },
} as const;

export default function About() {
  const { lang } = useLabLang();
  const ht = t[lang];
  const [titleA, titleB] = ht.title.split("\n");

  return (
    <section className="relative z-[1] py-24 px-6 md:px-12 lg:px-24 border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#E8622A] text-[10px] tracking-[0.35em] uppercase font-inter">
            {ht.eyebrow}
          </span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#F2F0EB] mt-4 mb-8 leading-snug">
            {titleA}<br />{titleB}
          </h2>
          <div className="space-y-4 text-[#F2F0EB]/60 text-base leading-relaxed font-inter">
            <p>{ht.p1}</p>
            <p>{ht.p2}</p>
            <p>{ht.p3}</p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-8"
        >
          {ht.stats.map((s) => (
            <div key={s.label} className="flex items-end gap-5 border-b border-white/[0.06] pb-8 last:border-0 last:pb-0">
              <span className="font-sora font-bold text-5xl md:text-6xl text-[#E8622A] leading-none">
                {s.value}
              </span>
              <span className="text-[#F2F0EB]/50 text-sm font-inter leading-snug mb-1">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
