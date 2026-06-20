"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VIDEO_SRC =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_cloud_animation_video.mp4";
const FG_IMG =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_foreground_bg.png";

const NAV_LINKS = [
  { label: "Progetti", href: "#progetti" },
  { label: "Chi sono", href: "#about" },
  { label: "Contatti", href: "https://www.massimodassano.it", external: true },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Double-buffer crossfade: eliminates the visible cut on loop
function VideoBackground() {
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef({ active: 1 as 1 | 2, fadeStart: -1 });
  const BEFORE = 1.5; // seconds before end to start crossfade

  useEffect(() => {
    const a = v1.current;
    const b = v2.current;
    if (!a || !b) return;

    function tick() {
      const { active, fadeStart } = stateRef.current;
      const cur = active === 1 ? a! : b!;
      const nxt = active === 1 ? b! : a!;

      const dur = cur.duration;
      if (!isNaN(dur) && dur > 0 && dur - cur.currentTime <= BEFORE) {
        if (fadeStart < 0) {
          nxt.currentTime = 0;
          nxt.play().catch(() => {});
          stateRef.current.fadeStart = performance.now();
        }
        const t = Math.min(1, (performance.now() - stateRef.current.fadeStart) / (BEFORE * 1000));
        cur.style.opacity = String(1 - t);
        nxt.style.opacity = String(t);

        if (t >= 1) {
          cur.pause();
          cur.style.opacity = "0";
          nxt.style.opacity = "1";
          stateRef.current = { active: active === 1 ? 2 : 1, fadeStart: -1 };
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    a.play().catch(() => {});
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const cls = "absolute inset-0 w-full h-full object-cover";
  return (
    <div className="absolute inset-0">
      <video ref={v1} src={VIDEO_SRC} muted playsInline preload="auto"
        className={cls} style={{ opacity: 1 }} />
      <video ref={v2} src={VIDEO_SRC} muted playsInline preload="auto"
        className={cls} style={{ opacity: 0 }} />
    </div>
  );
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── Fixed background layers (stay put while content scrolls) ── */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <VideoBackground />
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute bottom-0 left-0 right-0 h-[80vh] bg-cover bg-bottom"
          style={{ backgroundImage: `url(${FG_IMG})` }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-[#02122c] via-[#02122c]/80 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #02122cff 0%, #02122cfa 10%, #02122c80 25%, transparent 50%)",
          }}
        />
      </div>

      {/* ── Scrollable hero content ── */}
      <div className="relative z-[1] flex flex-col min-h-screen">

        {/* ── Navbar ── */}
        <nav className="flex justify-between items-center w-full px-6 md:px-12 lg:px-24 py-6 lg:py-8">
          {/* Logo */}
          <div className="flex flex-col leading-none">
            <span className="text-white font-sora font-semibold tracking-wide text-xl lg:text-2xl">
              Massimo Dassano
            </span>
            <span className="text-white/50 uppercase tracking-widest text-[0.55rem] lg:text-[0.7rem] mt-0.5">
              LAB
            </span>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_LINKS.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-inter"
                >
                  {l.label}
                </a>
              ) : (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href.replace("#", ""))}
                  className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-inter"
                >
                  {l.label}
                </button>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <a
            href="https://www.massimodassano.it"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden lg:flex items-center space-x-3 text-white text-sm font-inter"
          >
            <span>Parliamo</span>
            <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
              <svg
                className="w-4 h-4 text-white group-hover:text-[#050B14] transition-colors duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="lg:hidden absolute top-[72px] left-0 right-0 z-50 bg-[#02122c]/95 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((l) =>
              l.external ? (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white text-base py-2 border-b border-white/10 last:border-0 font-inter"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ) : (
                <button
                  key={l.label}
                  className="text-white/80 hover:text-white text-base py-2 border-b border-white/10 last:border-0 font-inter text-left"
                  onClick={() => {
                    scrollTo(l.href.replace("#", ""));
                    setMenuOpen(false);
                  }}
                >
                  {l.label}
                </button>
              )
            )}
          </div>
        )}

        {/* ── Hero content ── */}
        <div className="flex-grow flex items-center justify-center text-center mt-12 lg:mt-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl">

            {/* Welcome badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-white text-xs font-inter font-medium tracking-[0.25em] uppercase">
                Benvenuto nel Lab
              </span>
            </motion.div>

            {/* Eyebrow / subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="text-white/70 uppercase tracking-widest text-[0.7rem] md:text-[0.875rem] font-medium font-inter mb-8"
            >
              Restyling e costruzione di siti · Made in Italy
            </motion.p>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-white font-sora font-bold leading-[1.08] tracking-tight
                text-5xl md:text-7xl lg:text-[5rem] mb-8"
            >
              Ogni sito dimenticato<br className="hidden md:block" />
              {" "}merita di tornare<br className="hidden md:block" />
              {" "}a brillare.
            </motion.h1>

            {/* CTA pill button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <button
                onClick={() => scrollTo("progetti")}
                className="group inline-flex items-center pl-6 pr-2 py-2 rounded-full
                  border border-white/20 backdrop-blur-sm text-white text-sm font-inter font-medium
                  hover:bg-white/5 transition-all duration-300"
              >
                <span>Guarda i progetti</span>
                <span className="ml-3 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center
                  group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-white group-hover:text-[#050B14] transition-colors duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="flex justify-center pb-8 opacity-40">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-[9px] tracking-[0.35em] uppercase font-inter">Scroll</span>
            <svg className="w-4 h-4 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
