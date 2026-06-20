"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLabLang } from "@/contexts/lab-lang-context";

const VIDEO_SRC =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_cloud_animation_video.mp4";

const t = {
  it: {
    badge: "Benvenuto nel Laboratorio",
    eyebrow: "Restyling e costruzione di siti · Made in Italy",
    h1: ["Ogni sito dimenticato", "merita di tornare", "a brillare."],
    cta: "Guarda i progetti",
    scroll: "Scroll",
    nav: { projects: "Progetti", about: "Chi sono", contact: "Contatti", talk: "Parliamo" },
  },
  en: {
    badge: "Welcome to the Laboratorio",
    eyebrow: "Site restyling & building · Made in Italy",
    h1: ["Every forgotten website", "deserves to shine", "again."],
    cta: "Explore projects",
    scroll: "Scroll",
    nav: { projects: "Projects", about: "About", contact: "Contact", talk: "Let's talk" },
  },
} as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Double-buffer crossfade: eliminates the visible cut on loop
function VideoBackground() {
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef({ active: 1 as 1 | 2, fadeStart: -1 });
  const BEFORE = 1.5;

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
        const elapsed = Math.min(1, (performance.now() - stateRef.current.fadeStart) / (BEFORE * 1000));
        cur.style.opacity = String(1 - elapsed);
        nxt.style.opacity = String(elapsed);

        if (elapsed >= 1) {
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
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { lang, toggle } = useLabLang();
  const ht = t[lang];

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth >= 1024) { setNavVisible(true); return; }
      const y = window.scrollY;
      if (y < 80) setNavVisible(true);
      else if (y < lastScrollY.current) setNavVisible(true);
      else setNavVisible(false);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: ht.nav.projects, href: "#progetti" },
    { label: ht.nav.contact, href: "#contatto" },
  ];

  return (
    <>
      {/* ── Fixed background layers — subito visibile, PageTransition copre il caricamento ── */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(160deg, #02122c 0%, #061a3a 50%, #02122c 100%)" }}
      >
        <VideoBackground />
        <div className="absolute inset-0 bg-black/20" />
        {/* Foreground person — decommentare per reintrodurla
        <div
          className="absolute bottom-0 left-0 right-0 h-[80vh] bg-cover bg-bottom"
          style={{ backgroundImage: `url(https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_foreground_bg.png)` }}
        />
        */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-[#02122c] via-[#02122c]/80 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #02122cff 0%, #02122cfa 10%, #02122c80 25%, transparent 50%)",
          }}
        />
      </div>

      {/* ── Navbar fixed — nascosta in scroll-down, visibile in scroll-up ── */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-12 lg:px-24 py-5 lg:py-6 transition-colors duration-300"
        style={{ background: "rgba(2,18,44,0.85)", backdropFilter: "blur(12px)" }}
        animate={{ y: navVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* Logo — click torna alla homepage */}
        <a href="/" className="flex flex-col leading-none group">
          <span className="text-white font-sora font-semibold tracking-wide text-xl lg:text-2xl group-hover:text-white/80 transition-colors duration-200">
            Massimo Dassano
          </span>
          <span className="text-white/50 uppercase tracking-widest text-[0.55rem] lg:text-[0.7rem] mt-0.5">
            Laboratorio
          </span>
        </a>

        {/* Desktop links + lang toggle */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((l) => (
            <button key={l.label} onClick={() => scrollTo(l.href.replace("#", ""))}
              className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-inter cursor-pointer">
              {l.label}
            </button>
          ))}
          <button onClick={toggle}
            className="text-xs font-mono tracking-[0.14em] px-2.5 py-1 transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{ color: "#00f5ff", border: "1px solid rgba(0,245,255,0.28)", background: "rgba(0,245,255,0.05)" }}>
            {lang === "en" ? "IT" : "EN"}
          </button>
        </div>

        {/* Desktop CTA */}
        <button onClick={() => scrollTo("contatto")}
          className="group hidden lg:flex items-center space-x-3 text-white text-sm font-inter cursor-pointer">
          <span>{ht.nav.talk}</span>
          <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
            <svg className="w-4 h-4 text-white group-hover:text-[#050B14] transition-colors duration-300"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </button>

        {/* Mobile: lang toggle + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <button onClick={toggle}
            className="text-xs font-mono tracking-[0.14em] px-2 py-1 cursor-pointer"
            style={{ color: "#00f5ff", border: "1px solid rgba(0,245,255,0.28)", background: "rgba(0,245,255,0.05)" }}>
            {lang === "en" ? "IT" : "EN"}
          </button>
          <button className="text-white p-1 cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}>
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
        </div>
      </motion.nav>

      {/* Mobile dropdown — fixed, segue la navbar */}
      {menuOpen && (
        <motion.div
          className="lg:hidden fixed top-[72px] left-0 right-0 z-[59] bg-[#02122c]/97 backdrop-blur-md border-t border-white/10 px-6 py-6 flex flex-col gap-4"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {navLinks.map((l) => (
            <button key={l.label}
              className="text-white/80 hover:text-white text-base py-2 border-b border-white/10 font-inter text-left cursor-pointer"
              onClick={() => { scrollTo(l.href.replace("#", "")); setMenuOpen(false); }}>
              {l.label}
            </button>
          ))}
          <a href="/"
            className="flex items-center gap-2 text-white/50 hover:text-white text-sm py-2 font-inter transition-colors duration-200"
            onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Homepage
          </a>
        </motion.div>
      )}

      {/* ── Scrollable hero content — delay rispetto allo sfondo ── */}
      <motion.div
        className="relative z-[1] flex flex-col min-h-screen pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
      >

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
                {ht.badge}
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
              className="text-white/70 uppercase tracking-widest text-[0.7rem] md:text-[0.875rem] font-medium font-inter mb-8"
            >
              {ht.eyebrow}
            </motion.p>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-white font-sora font-bold leading-[1.08] tracking-tight
                text-5xl md:text-7xl lg:text-[5rem] mb-8"
            >
              {ht.h1[0]}<br className="hidden md:block" />
              {" "}{ht.h1[1]}<br className="hidden md:block" />
              {" "}{ht.h1[2]}
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
                  hover:bg-white/5 transition-all duration-300 cursor-pointer"
              >
                <span>{ht.cta}</span>
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
            <span className="text-white text-[9px] tracking-[0.35em] uppercase font-inter">{ht.scroll}</span>
            <svg className="w-4 h-4 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </>
  );
}
