"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function Overlay({ containerRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"],
  });

  // ── Phase 1: center (0 → 30%) — visibile da subito ─────────────────
  const p1opacity = useTransform(
    scrollYProgress,
    [0, 0.24, 0.32],
    [1, 1, 0]
  );
  const p1y = useTransform(scrollYProgress, [0, 0.06], ["0rem", "0rem"]);

  // ── Phase 2: left (30 → 60%) ────────────────────────────────────────
  const p2opacity = useTransform(
    scrollYProgress,
    [0.30, 0.38, 0.52, 0.60],
    [0, 1, 1, 0]
  );
  const p2x = useTransform(scrollYProgress, [0.30, 0.38], ["-2rem", "0rem"]);

  // ── Phase 3: right (60 → 100%) ──────────────────────────────────────
  const p3opacity = useTransform(
    scrollYProgress,
    [0.60, 0.67, 0.90, 1.0],
    [0, 1, 1, 0]
  );
  const p3x = useTransform(scrollYProgress, [0.60, 0.67], ["2rem", "0rem"]);

  // ── Scroll indicator fades out early ────────────────────────────────
  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.12],
    [0, 1, 0]
  );

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">

      {/* ── Phase 1: headline, centered ── */}
      <motion.div
        style={{ opacity: p1opacity, y: p1y }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="font-sora font-bold text-4xl md:text-6xl lg:text-[4.5rem] text-[#F2F0EB] leading-[1.08] max-w-3xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)]">
          Trasformo siti vecchi<br />in macchine da clienti.
        </h1>
        <p className="mt-6 text-[#F2F0EB]/65 text-base md:text-lg max-w-md leading-relaxed drop-shadow-[0_1px_12px_rgba(0,0,0,0.8)]">
          15 anni di esperienza corporate (EY, Alibaba).<br />
          Oggi porto quella stessa precisione nel restyling<br className="hidden md:block" />
          di siti per attività locali.
        </p>
      </motion.div>

      {/* ── Phase 2: experience, left-aligned ── */}
      <motion.div
        style={{ opacity: p2opacity, x: p2x }}
        className="absolute inset-y-0 left-0 flex flex-col justify-center pl-8 md:pl-16 lg:pl-24 max-w-sm md:max-w-md"
      >
        <span className="text-[#E8622A] text-[10px] tracking-[0.35em] uppercase mb-5 font-inter">
          Esperienza
        </span>
        <h2 className="font-sora font-bold text-3xl md:text-5xl text-[#F2F0EB] leading-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)]">
          Corporate<br />precision.<br />Local impact.
        </h2>
        <p className="mt-5 text-[#F2F0EB]/60 text-sm md:text-base max-w-[260px] leading-relaxed drop-shadow-[0_1px_12px_rgba(0,0,0,0.8)]">
          EY · Alibaba · 15 anni di business<br />internazionale applicati al piccolo<br />business locale italiano.
        </p>
      </motion.div>

      {/* ── Phase 3: method, right-aligned ── */}
      <motion.div
        style={{ opacity: p3opacity, x: p3x }}
        className="absolute inset-y-0 right-0 flex flex-col justify-center pr-8 md:pr-16 lg:pr-24 items-end text-right max-w-sm md:max-w-md ml-auto"
      >
        <span className="text-[#E8622A] text-[10px] tracking-[0.35em] uppercase mb-5 font-inter">
          Il metodo
        </span>
        <h2 className="font-sora font-bold text-3xl md:text-5xl text-[#F2F0EB] leading-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.9)]">
          Ogni sito<br />su misura.<br />Zero template.
        </h2>
        <p className="mt-5 text-[#F2F0EB]/60 text-sm md:text-base max-w-[260px] leading-relaxed drop-shadow-[0_1px_12px_rgba(0,0,0,0.8)]">
          Ristoranti, studi professionali, negozi.<br />Un sito costruito come se fosse<br />il tuo unico cliente.
        </p>
      </motion.div>

      {/* ── Scroll hint ── */}
      <motion.div
        style={{ opacity: scrollHintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] tracking-[0.35em] uppercase font-inter">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </div>
  );
}
