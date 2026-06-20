"use client";

import { motion } from "framer-motion";

const badges = [
  "EY · Alibaba",
  "15 anni di esperienza",
  "Zero template",
  "Su misura",
  "Made in Italy",
  "Mobile-first",
  "Piccolo business",
  "Risultati misurabili",
];

export default function About() {
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
            Chi sono
          </span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#F2F0EB] mt-4 mb-8 leading-snug">
            Consulente corporate<br />diventato artigiano del web.
          </h2>
          <div className="space-y-4 text-[#F2F0EB]/60 text-base leading-relaxed font-inter">
            <p>
              Ho trascorso 15 anni in ambienti corporate internazionali — da EY
              ad Alibaba — dove ogni progetto richiedeva precisione, attenzione
              al dettaglio e risultati misurabili.
            </p>
            <p>
              Oggi applico quella stessa mentalità al restyling di siti web per
              piccole attività locali italiane: ristoranti, studi professionali,
              negozi. Niente template, niente soluzioni generiche.
            </p>
            <p>
              Ogni sito è costruito su misura per la persona che ci sta dietro
              e per i clienti che vuole raggiungere. Un approccio artigianale
              con il rigore di una multinazionale.
            </p>
          </div>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03]
                text-[#F2F0EB]/65 text-sm font-inter backdrop-blur-sm
                transition-colors duration-200 hover:border-[#E8622A]/30 hover:text-[#F2F0EB]/90"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
