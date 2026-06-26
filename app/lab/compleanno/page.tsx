"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";

/* ── Dettagli festeggiato ── */
const NOME        = "Lorenzo";
const DATA_LABEL  = "17 Maggio 2027";
const DATA_FULL   = "Domenica 17 Maggio 2027";
const ORA         = "16:00";
const INDIRIZZO1  = "Via Brera 5";
const INDIRIZZO2  = "20121 Milano (MI)";
const PARTY_DATE  = new Date("2027-05-17T16:00:00");
const MAPS_QUERY  = "Via+Brera+5,+20121+Milano+MI+Italia";

/* immagini dino (in /public/compleanno/) */
const IMG_RUFY  = "/compleanno/dino-max.png"; // brontosauro
const IMG_PIPPI = "/compleanno/dino-ele.png"; // T-Rex
const IMG_GUS   = "/compleanno/dino-edo.png"; // raptor

/* ── Audio helpers ── */
let _ctx: AudioContext | null = null;
let _noiseBuf: AudioBuffer | null = null;

function _initAudio(): boolean {
  const AC = (window as any).AudioContext || (window as any).webkitAudioContext;
  if (!AC) return false;
  if (!_ctx) {
    _ctx = new AC() as AudioContext;
    const sr = (_ctx as AudioContext).sampleRate;
    _noiseBuf = (_ctx as AudioContext).createBuffer(1, sr * 2, sr);
    const d = _noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if ((_ctx as AudioContext).state === "suspended") (_ctx as AudioContext).resume();
  return true;
}

function _playRoar() {
  const ctx = _ctx; const buf = _noiseBuf;
  if (!ctx || !buf) return;
  try {
    const t = ctx.currentTime;
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f1 = ctx.createBiquadFilter(); f1.type = "bandpass"; f1.Q.value = 7;
    const f2 = ctx.createBiquadFilter(); f2.type = "bandpass"; f2.Q.value = 5;
    const f3 = ctx.createBiquadFilter(); f3.type = "bandpass"; f3.Q.value = 3;
    f1.frequency.setValueAtTime(100, t); f1.frequency.linearRampToValueAtTime(210, t + .2); f1.frequency.linearRampToValueAtTime(80, t + 1.1);
    f2.frequency.setValueAtTime(380, t); f2.frequency.linearRampToValueAtTime(640, t + .25); f2.frequency.linearRampToValueAtTime(260, t + 1.1);
    f3.frequency.setValueAtTime(1400, t); f3.frequency.linearRampToValueAtTime(2100, t + .1); f3.frequency.exponentialRampToValueAtTime(700, t + .5);
    const g1 = ctx.createGain(); g1.gain.value = 0.65;
    const g2 = ctx.createGain(); g2.gain.value = 0.55;
    const g3 = ctx.createGain(); g3.gain.value = 0.15;
    const sub = ctx.createOscillator(); sub.type = "sawtooth";
    sub.frequency.setValueAtTime(42, t); sub.frequency.linearRampToValueAtTime(72, t + .18); sub.frequency.linearRampToValueAtTime(28, t + 1.1);
    const sg = ctx.createGain(); sg.gain.value = 0.35;
    const master = ctx.createGain();
    master.gain.setValueAtTime(0, t); master.gain.linearRampToValueAtTime(.8, t + .06);
    master.gain.setValueAtTime(.8, t + .45); master.gain.exponentialRampToValueAtTime(.001, t + 1.2);
    src.connect(f1); f1.connect(g1); g1.connect(master);
    src.connect(f2); f2.connect(g2); g2.connect(master);
    src.connect(f3); f3.connect(g3); g3.connect(master);
    sub.connect(sg); sg.connect(master); master.connect(ctx.destination);
    src.start(t); sub.start(t); src.stop(t + 1.2); sub.stop(t + 1.2);
  } catch (_) {}
}

function _playHonk() {
  const ctx = _ctx; if (!ctx) return;
  try {
    const t = ctx.currentTime;
    const osc = ctx.createOscillator(); osc.type = "sine";
    osc.frequency.setValueAtTime(110, t); osc.frequency.linearRampToValueAtTime(230, t + .35);
    osc.frequency.setValueAtTime(230, t + .4); osc.frequency.linearRampToValueAtTime(95, t + 1.0);
    const lfo = ctx.createOscillator(); lfo.frequency.value = 7;
    const lfoG = ctx.createGain(); lfoG.gain.value = 14;
    lfo.connect(lfoG); lfoG.connect(osc.frequency);
    const osc2 = ctx.createOscillator(); osc2.type = "triangle";
    osc2.frequency.setValueAtTime(220, t); osc2.frequency.linearRampToValueAtTime(460, t + .35);
    osc2.frequency.linearRampToValueAtTime(190, t + 1.0);
    const g2 = ctx.createGain(); g2.gain.value = 0.12;
    const master = ctx.createGain();
    master.gain.setValueAtTime(0, t); master.gain.linearRampToValueAtTime(.55, t + .08);
    master.gain.setValueAtTime(.55, t + .55); master.gain.exponentialRampToValueAtTime(.001, t + 1.1);
    osc.connect(master); osc2.connect(g2); g2.connect(master); master.connect(ctx.destination);
    lfo.start(t); osc.start(t); osc2.start(t);
    lfo.stop(t + 1.1); osc.stop(t + 1.1); osc2.stop(t + 1.1);
  } catch (_) {}
}

function _playChirps() {
  const ctx = _ctx; if (!ctx) return;
  try {
    const t = ctx.currentTime;
    const master = ctx.createGain(); master.gain.value = 0.55;
    master.connect(ctx.destination);
    for (let i = 0; i < 4; i++) {
      const onset = t + i * .1;
      const o = ctx.createOscillator(); o.type = "square";
      o.frequency.setValueAtTime(1300 - i * 60, onset);
      o.frequency.exponentialRampToValueAtTime(500, onset + .08);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, onset); g.gain.linearRampToValueAtTime(.6, onset + .008);
      g.gain.exponentialRampToValueAtTime(.001, onset + .1);
      o.connect(g); g.connect(master); o.start(onset); o.stop(onset + .11);
    }
    const t2 = t + .48;
    const sc = ctx.createOscillator(); sc.type = "sawtooth";
    sc.frequency.setValueAtTime(900, t2); sc.frequency.linearRampToValueAtTime(1700, t2 + .1);
    sc.frequency.exponentialRampToValueAtTime(380, t2 + .4);
    const sg = ctx.createGain();
    sg.gain.setValueAtTime(0, t2); sg.gain.linearRampToValueAtTime(.35, t2 + .02);
    sg.gain.exponentialRampToValueAtTime(.001, t2 + .45);
    sc.connect(sg); sg.connect(master); sc.start(t2); sc.stop(t2 + .46);
  } catch (_) {}
}

/* ── Dino config ── */
const DINO_CFG = {
  lungo:  { anim: "honking", play: _playHonk,   speeches: ["ROAAARRR! 🦖", "Sono Rufy, il gigante! 💙", "Ho i denti ENORMI! 🦷", "Buon compleanno Lorenzo! 🎉", "Sono il più grande! 💪", "GRRRR! 🦖", "Nessuno mi ferma! 🦖", "Un anno già! Che bello! 🎈"] },
  rex:    { anim: "roaring", play: _playRoar,   speeches: ["ROAAAR! 🦖", "Sono Pippi la feroce! 💕", "Buon Compleanno Lorenzo! 🎉", "Vieni alla festa! 🥳", "Braccia piccole, denti grandi! 🦷", "Un anno già! ✨", "Ti voglio bene! ❤️", "GRRRR! 🦖"] },
  raptor: { anim: "dashing", play: _playChirps, speeches: ["Sono Gus! 🦖", "Che bella festa! 🎂", "Sono velocissimo! ⚡", "La torta è per Lorenzo! 🍰", "Vieni a festeggiare! 🎈", "Sono il più furbo! 🧠", "Un anno! 🎉", "WROAAR! 🦖"] },
};

/* ── Confetti ── */
function launchConfetti() {
  const root = document.getElementById("confetti-root");
  if (!root) return;
  const colors = ["#F5D47E","#F4A8C7","#8DCFCA","#E8916A","#7EAD7A","#ffffff","#C9AEDE"];
  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const p = document.createElement("div"); p.className = "cp";
      p.style.cssText = [
        `left:${Math.random() * 100}vw`,
        `background:${colors[Math.floor(Math.random() * colors.length)]}`,
        `width:${Math.random() * 10 + 6}px`,
        `height:${Math.random() * 10 + 6}px`,
        `border-radius:${Math.random() > .5 ? "50%" : "2px"}`,
        `animation-duration:${Math.random() * 2 + 2}s`,
        `animation-delay:${Math.random() * .4}s`,
      ].join(";");
      root.appendChild(p);
      p.addEventListener("animationend", () => p.remove());
    }, i * 18);
  }
}

/* ══════════════════════════════════════ */
export default function CompleannnoPage() {
  const [cdText, setCdText] = useState("");
  const [rsvpNome, setRsvpNome] = useState("");
  const [rsvpOk, setRsvpOk] = useState("");
  const [rsvpErr, setRsvpErr] = useState("");
  const dinoIdx    = useRef<Record<string, number>>({ lungo: 0, rex: 0, raptor: 0 });
  const dinoLocked = useRef<Record<string, boolean>>({ lungo: false, rex: false, raptor: false });

  /* Countdown */
  useEffect(() => {
    function update() {
      const diff = PARTY_DATE.getTime() - Date.now();
      if (diff <= 0) { setCdText("🎉 La festa è già avvenuta!"); return; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const pad = (n: number) => String(n).padStart(2, "0");
      if (d > 1)      setCdText(`${d} giorni`);
      else if (d === 1) setCdText(`Domani! ${pad(h)}:${pad(m)}:${pad(s)}`);
      else            setCdText(`Oggi! ${pad(h)}:${pad(m)}:${pad(s)}`);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  /* Balloons */
  useEffect(() => {
    const rootEl = document.getElementById("balloons-root");
    if (!(rootEl instanceof HTMLElement)) return;
    const root = rootEl;
    function spawnBalloon() {
      const el = document.createElement("div"); el.className = "balloon";
      const left = Math.random() * 88 + 4;
      const w    = Math.random() * 12 + 20;
      const dur  = Math.random() * 9 + 13;
      const sway = (Math.random() * 2 - 1) * 22;
      el.style.cssText = `left:${left}%;width:${w}px;height:${(w * 1.35).toFixed(1)}px;animation-duration:${dur}s;--sway:${sway}px`;
      root.appendChild(el);
      el.addEventListener("animationend", () => { el.remove(); spawnBalloon(); });
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < 10; i++) timers.push(setTimeout(spawnBalloon, Math.random() * 9000));
    const interval = setInterval(spawnBalloon, 2200);
    return () => { timers.forEach(clearTimeout); clearInterval(interval); };
  }, []);

  /* Mouse tracking for rex dino */
  useEffect(() => {
    function onMove(e: MouseEvent) {
      if (dinoLocked.current.rex) return;
      const w = document.getElementById("wrapRex");
      if (!w) return;
      const r = w.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / window.innerWidth;
      const dy = (e.clientY - r.top  - r.height / 2) / window.innerHeight;
      w.style.transform = `rotate(${dx * 12}deg) translateY(${dy * -8}px)`;
    }
    function onLeave() {
      const w = document.getElementById("wrapRex");
      if (w && !dinoLocked.current.rex) w.style.transform = "";
    }
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => { document.removeEventListener("mousemove", onMove); document.removeEventListener("mouseleave", onLeave); };
  }, []);

  /* Dino interaction */
  const interactDino = useCallback((id: "lungo" | "rex" | "raptor") => {
    if (dinoLocked.current[id]) return;
    _initAudio();
    dinoLocked.current[id] = true;
    const cfg  = DINO_CFG[id];
    const cap  = id.charAt(0).toUpperCase() + id.slice(1);
    const wrap   = document.getElementById("wrap"   + cap);
    const bubble = document.getElementById("bubble" + cap);
    if (!wrap || !bubble) return;
    bubble.textContent = cfg.speeches[dinoIdx.current[id]++ % cfg.speeches.length];
    wrap.classList.add(cfg.anim);
    requestAnimationFrame(() => setTimeout(cfg.play, 0));
    setTimeout(() => { wrap.classList.remove(cfg.anim); dinoLocked.current[id] = false; }, 1800);
  }, []);

  /* RSVP */
  function confirmRsvp() {
    const name = rsvpNome.trim();
    setRsvpOk(""); setRsvpErr("");
    if (!name) { setRsvpErr("Inserisci il tuo nome prima di confermare! 🦖"); return; }
    const key = "lorenzo_rsvp_v1";
    const confirmed: string[] = JSON.parse(localStorage.getItem(key) || "[]");
    if (confirmed.includes(name.toLowerCase())) { setRsvpErr(`${name} ha già confermato la presenza! 🦕`); return; }
    confirmed.push(name.toLowerCase());
    localStorage.setItem(key, JSON.stringify(confirmed));
    setRsvpOk(`Evviva ${name}! A presto alla festa! 🎉`);
    setRsvpNome("");
    launchConfetti();
    setTimeout(() => setRsvpOk(""), 5000);
  }

  return (
    <>

      {/* ── CSS identico all'originale ── */}
      <style>{`
        *,*::before,*::after{margin:0;padding:0;box-sizing:border-box;}
        :root{
          --bg:#FFF8F0;--sage:#7EAD7A;--sage-dk:#5A8756;--sage-lt:#B8D9B5;
          --peach:#E8916A;--peach-lt:#F7C9B0;--yellow:#F5D47E;--yellow-lt:#FBF0C0;
          --pink:#F4A8C7;--pink-lt:#FDDCEE;--mint:#8DCFCA;--lavender:#C9AEDE;
          --brown:#5D3A1A;--brown-lt:#9B7060;--white:#FFFFFF;
          --r-xl:24px;--r-lg:18px;--r-md:12px;--r-sm:8px;
          --shadow:0 4px 20px rgba(93,58,26,.10);--shadow-lg:0 8px 32px rgba(93,58,26,.15);
        }
        body{font-family:var(--font-baloo2),'Baloo 2',sans-serif;background:var(--bg);min-height:100vh;overflow-x:hidden;color:var(--brown);}
        .ambient{position:fixed;pointer-events:none;font-size:2.6rem;opacity:.16;animation:ambient-float 7s ease-in-out infinite;z-index:0;user-select:none;}
        @keyframes ambient-float{0%,100%{transform:translateY(0) rotate(-8deg) scale(1);}50%{transform:translateY(-22px) rotate(8deg) scale(1.07);}}
        .container{max-width:860px;margin:0 auto;padding:0 16px max(100px,calc(80px + env(safe-area-inset-bottom,0px)));position:relative;z-index:1;}
        .bunting-wrap{overflow:hidden;line-height:0;}
        .bunting-svg{width:100%;display:block;}
        .hero{text-align:center;padding:max(40px,calc(18px + env(safe-area-inset-top,0px))) 16px 28px;}
        .hero-pill{display:inline-block;background:var(--sage);color:#fff;font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:1.1rem;padding:8px 26px;border-radius:50px;box-shadow:0 4px 14px rgba(90,135,86,.28);margin-bottom:20px;animation:pill-bounce 1.8s ease-in-out infinite;}
        @keyframes pill-bounce{0%,100%{transform:translateY(0) rotate(-1deg);}50%{transform:translateY(-6px) rotate(1deg);}}
        .hero-title{font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:clamp(1.6rem,5vw,2.7rem);color:var(--brown);line-height:1.2;margin:18px 0 2px;animation:title-wobble 3s ease-in-out infinite;}
        @keyframes title-wobble{0%,100%{transform:rotate(-.4deg);}50%{transform:rotate(.4deg);}}
        .hero-name{display:block;font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:clamp(3.2rem,12vw,7rem);color:var(--peach);line-height:1;text-shadow:3px 3px 0 rgba(232,145,106,.20);}
        .bday-one{display:inline-flex;flex-direction:column;align-items:center;margin:18px auto 18px;background:var(--white);border:2px solid var(--peach-lt);box-shadow:var(--shadow);border-radius:28px;padding:14px 38px;animation:badge-pop 2.2s ease-in-out infinite;}
        .bday-cake{font-size:2.8rem;line-height:1;}
        .bday-num{font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:clamp(5rem,17vw,9rem);color:var(--peach);line-height:1;text-shadow:3px 3px 0 rgba(232,145,106,.20);}
        .bday-label{font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:1.4rem;color:var(--brown);margin-top:-6px;background:var(--yellow-lt);border:1.5px solid var(--yellow);box-shadow:0 2px 8px rgba(200,160,64,.18);padding:3px 18px;border-radius:20px;}
        @keyframes badge-pop{0%,100%{transform:scale(1) rotate(-2deg);}50%{transform:scale(1.04) rotate(2deg);}}
        .hero-sub{font-size:1rem;color:var(--brown-lt);font-weight:700;margin-bottom:16px;}
        .cd-row{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin:10px 0 18px;}
        .cd-block{background:var(--white);border:1.5px solid var(--sage-lt);box-shadow:var(--shadow);border-radius:var(--r-lg);padding:12px 18px;min-width:140px;text-align:center;}
        .cd-label{font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:.85rem;color:var(--brown);margin-bottom:6px;}
        .cd-text{font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:1.05rem;color:var(--brown);display:flex;align-items:center;justify-content:center;gap:6px;flex-wrap:wrap;}
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:32px 0;}
        @media(max-width:540px){.info-grid{grid-template-columns:1fr;}}
        .info-card{border-radius:var(--r-xl);padding:28px 22px;text-align:center;box-shadow:var(--shadow);border:1.5px solid transparent;transition:transform .15s ease,box-shadow .15s ease;}
        .info-card--when{background:#FFF9E8;border-color:rgba(245,212,126,.5);}
        .info-card--where{background:#F0F9F0;border-color:rgba(126,173,122,.30);}
        .info-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg);}
        .info-icon{font-size:2.8rem;display:block;margin-bottom:10px;animation:icon-pop 2.2s ease-in-out infinite;}
        @keyframes icon-pop{0%,100%{transform:scale(1) rotate(-4deg);}50%{transform:scale(1.14) rotate(4deg);}}
        .info-label{font-size:.75rem;text-transform:uppercase;letter-spacing:2px;color:var(--brown);font-weight:800;margin-bottom:7px;opacity:.48;}
        .info-value{font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:1.5rem;color:var(--brown);line-height:1.3;}
        .info-sub{font-size:.88rem;color:var(--brown-lt);margin-top:5px;font-weight:600;}
        .card{background:var(--white);border-radius:var(--r-xl);border:1.5px solid rgba(93,58,26,.07);box-shadow:var(--shadow);padding:34px 30px;margin:20px 0;position:relative;overflow:hidden;text-align:center;}
        .card-title{font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:1.85rem;color:var(--brown);margin-bottom:6px;}
        .card-sub{color:var(--brown-lt);font-size:.96rem;margin-bottom:22px;line-height:1.5;font-weight:600;}
        .card--map{padding-bottom:0;}
        .map-address{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:4px 8px;background:var(--mint);color:var(--brown);font-weight:800;font-size:.94rem;padding:10px 20px;border-radius:var(--r-md);margin-bottom:18px;border:1.5px solid rgba(141,207,202,.40);box-shadow:0 2px 10px rgba(141,207,202,.22);}
        .map-iframe{width:100%;height:320px;border:none;display:block;border-top:1.5px solid rgba(93,58,26,.07);margin-top:4px;border-radius:0 0 calc(var(--r-xl) - 4px) calc(var(--r-xl) - 4px);}
        .card--dino::after{content:'🌿';position:absolute;bottom:-10px;right:-10px;font-size:8rem;opacity:.05;pointer-events:none;}
        .dino-trio{display:flex;justify-content:center;align-items:flex-end;gap:18px;flex-wrap:wrap;padding:10px 0 4px;}
        .dino-unit{display:flex;flex-direction:column;align-items:center;}
        .dino-name{font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:1rem;color:var(--brown);margin-top:8px;background:var(--yellow-lt);border:1.5px solid var(--yellow);box-shadow:0 2px 8px rgba(200,160,64,.16);padding:3px 14px;border-radius:20px;}
        .dino-wrap{position:relative;cursor:pointer;display:inline-block;-webkit-tap-highlight-color:transparent;outline:none;transition:transform .08s ease;}
        .dino-char{display:block;user-select:none;animation:dino-breathe 3.5s ease-in-out infinite;transform-origin:bottom center;}
        .dino-char--lungo{height:185px;filter:drop-shadow(2px 6px 12px rgba(93,58,26,.18));animation:dino-breathe-flip 3.5s ease-in-out infinite;}
        .dino-char--rex{height:185px;filter:drop-shadow(2px 6px 12px rgba(93,58,26,.18));}
        .dino-char--raptor{height:116px;filter:drop-shadow(2px 6px 12px rgba(93,58,26,.18));}
        @keyframes dino-breathe{0%,100%{transform:scaleY(1) translateY(0);}50%{transform:scaleY(1.04) translateY(-5px);}}
        @keyframes dino-breathe-flip{0%,100%{transform:scaleX(-1) scaleY(1) translateY(0);}50%{transform:scaleX(-1) scaleY(1.04) translateY(-5px);}}
        .dino-wrap.roaring .dino-char{animation:anim-roar .65s ease forwards;}
        @keyframes anim-roar{0%{transform:scale(1) rotate(0deg);}15%{transform:scale(1.4) rotate(-6deg);}30%{transform:scale(1.38) rotate(6deg);}50%{transform:scale(1.35) rotate(-4deg);}70%{transform:scale(1.25) rotate(3deg);}100%{transform:scale(1) rotate(0deg);}}
        .dino-wrap.honking .dino-char{animation:anim-honk .9s ease forwards;}
        .dino-wrap.honking .dino-char--lungo{animation:anim-honk-flip .9s ease forwards;}
        @keyframes anim-honk{0%{transform:scale(1);}20%{transform:scaleY(1.3) scaleX(.84) translateY(-14px);}45%{transform:scaleY(1.25) scaleX(.87) translateY(-11px) rotate(5deg);}70%{transform:scaleY(1.08) scaleX(.96);}100%{transform:scale(1);}}
        @keyframes anim-honk-flip{0%{transform:scaleX(-1);}20%{transform:scaleX(-.84) scaleY(1.3) translateY(-14px);}45%{transform:scaleX(-.87) scaleY(1.25) translateY(-11px) rotate(-5deg);}70%{transform:scaleX(-.96) scaleY(1.08);}100%{transform:scaleX(-1);}}
        .dino-wrap.dashing .dino-char{animation:anim-dash .55s ease forwards;}
        @keyframes anim-dash{0%{transform:translateX(0) rotate(0deg);}12%{transform:translateX(-22px) scaleX(.78) rotate(-12deg);}28%{transform:translateX(18px) scaleX(1.1) rotate(7deg);}48%{transform:translateX(-10px) rotate(-4deg);}68%{transform:translateX(6px) rotate(2deg);}100%{transform:translateX(0) rotate(0deg);}}
        .dino-bubble{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%) scale(0);transform-origin:bottom center;background:var(--yellow-lt);color:var(--brown);font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:1.05rem;padding:8px 18px;border-radius:50px;white-space:nowrap;border:1.5px solid var(--yellow);box-shadow:0 4px 14px rgba(200,160,64,.20);pointer-events:none;opacity:0;z-index:10;transition:transform .28s cubic-bezier(.34,1.56,.64,1),opacity .22s;}
        .dino-bubble::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border:8px solid transparent;border-top-color:var(--yellow);border-bottom:0;}
        .dino-bubble::before{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid transparent;border-top-color:var(--yellow-lt);border-bottom:0;margin-top:-1px;z-index:1;}
        .dino-wrap.roaring .dino-bubble,.dino-wrap.honking .dino-bubble,.dino-wrap.dashing .dino-bubble{transform:translateX(-50%) scale(1);opacity:1;}
        .dino-hint-row{text-align:center;margin-top:14px;}
        .dino-hint{font-size:.88rem;color:var(--brown);font-weight:700;background:rgba(141,207,202,.30);padding:5px 16px;border-radius:20px;border:1.5px solid rgba(141,207,202,.45);display:inline-block;animation:hint-fade 2s ease-in-out infinite;}
        @keyframes hint-fade{0%,100%{opacity:.4;}50%{opacity:.95;}}
        .card--rsvp::after{content:'🌿';position:absolute;bottom:-14px;right:-14px;font-size:7rem;opacity:.05;pointer-events:none;}
        .rsvp-form{display:flex;gap:12px;flex-wrap:wrap;}
        .rsvp-input{flex:1;min-width:190px;padding:15px 20px;border:1.5px solid rgba(93,58,26,.16);border-radius:var(--r-md);font-family:'Baloo 2',sans-serif;font-size:1rem;font-weight:700;color:var(--brown);background:#fff;outline:none;box-shadow:0 2px 8px rgba(93,58,26,.05);transition:border-color .15s,box-shadow .15s;}
        .rsvp-input:focus{border-color:var(--sage);box-shadow:0 0 0 3px rgba(126,173,122,.16);}
        .rsvp-input::placeholder{color:#C4A898;font-weight:400;}
        .rsvp-btn{padding:15px 28px;background:var(--peach);color:#fff;border:none;border-radius:var(--r-md);font-family:var(--font-fredoka-one),'Fredoka One',cursive;font-size:1.1rem;cursor:pointer;white-space:nowrap;box-shadow:0 4px 16px rgba(232,145,106,.32);transition:transform .12s,box-shadow .12s;}
        .rsvp-btn:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(232,145,106,.40);}
        .rsvp-btn:active{transform:translateY(1px);}
        .feedback{display:none;align-items:center;gap:10px;padding:13px 18px;border-radius:var(--r-sm);margin-top:14px;font-weight:700;font-size:.97rem;box-shadow:var(--shadow);}
        .feedback.show{display:flex;}
        .feedback--ok{background:#E8F7EE;color:var(--sage-dk);animation:slide-down .35s ease;}
        .feedback--err{background:#FFEAEA;color:#B00020;animation:shake .45s ease;}
        @keyframes slide-down{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:translateY(0);}}
        @keyframes shake{0%,100%{transform:translateX(0);}20%,60%{transform:translateX(-8px);}40%,80%{transform:translateX(8px);}}
        #balloons-root{position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;}
        .balloon{position:absolute;bottom:-90px;border-radius:50% 50% 46% 46%/56% 56% 44% 44%;background:radial-gradient(circle at 36% 30%,#FF7070 0%,#CC1818 55%,#980E0E 100%);pointer-events:none;animation:balloon-rise linear forwards;}
        .balloon::before{content:'';position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);border-left:4px solid transparent;border-right:4px solid transparent;border-top:8px solid #9A0E0E;}
        .balloon::after{content:'';position:absolute;top:calc(100% + 7px);left:50%;transform:translateX(-50%);width:1px;height:36px;background:#9A0E0E;}
        @keyframes balloon-rise{0%{opacity:0;transform:translateY(0) translateX(0) rotate(-3deg);}6%{opacity:0.38;}25%{transform:translateY(-25vh) translateX(var(--sway)) rotate(3deg);opacity:0.38;}50%{transform:translateY(-50vh) translateX(calc(var(--sway)*-.7)) rotate(-2deg);opacity:0.38;}75%{transform:translateY(-75vh) translateX(calc(var(--sway)*.85)) rotate(2deg);opacity:0.28;}92%{opacity:0.14;}100%{opacity:0;transform:translateY(-120vh) translateX(0) rotate(0deg);}}
        #confetti-root{position:fixed;inset:0;pointer-events:none;z-index:9999;}
        .cp{position:absolute;border-radius:2px;animation:cp-fall linear forwards;}
        @keyframes cp-fall{0%{top:-30px;opacity:1;transform:rotate(0deg) translateX(0);}100%{top:110vh;opacity:0;transform:rotate(720deg) translateX(80px);}}
        .footer{text-align:center;padding:28px 16px 10px;color:var(--brown-lt);opacity:.72;font-size:.92rem;font-weight:700;}
        .footer-lab{display:inline-flex;align-items:center;gap:6px;margin-top:8px;font-size:.82rem;opacity:.6;color:var(--brown-lt);text-decoration:none;}
        .footer-lab:hover{opacity:1;}
        @media(max-width:480px){
          .hero{padding-top:14px;}.card{padding:26px 16px;}.card-title{font-size:1.55rem;}
          .rsvp-form{flex-direction:column;}.rsvp-btn{text-align:center;}.map-iframe{height:250px;}
          .map-address{font-size:.80rem;}.dino-char--lungo{height:150px;}.dino-char--rex{height:150px;}
          .dino-char--raptor{height:93px;}.dino-bubble{font-size:.9rem;padding:7px 14px;}
          .cd-block{min-width:116px;padding:10px 12px;}
        }
      `}</style>

      {/* ── Background dino pattern ── */}
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        style={{ position:"fixed",inset:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none",opacity:0.55,filter:"blur(0.5px)" }}>
        <defs>
          <pattern id="dp" width="480" height="480" patternUnits="userSpaceOnUse">
            <g transform="rotate(-8, 43, 46)"><image href={IMG_RUFY}  x="5"   y="8"   width="76" height="76" opacity="0.55"/></g>
            <g transform="rotate(7, 245, 30)"><image href={IMG_PIPPI} x="220" y="5"   width="50" height="50" opacity="0.52"/></g>
            <g transform="rotate(-5, 416, 46)"><image href={IMG_GUS}  x="385" y="15"  width="62" height="62" opacity="0.54"/></g>
            <g transform="rotate(10, 99, 189)"><image href={IMG_PIPPI} x="65" y="155" width="68" height="68" opacity="0.50"/></g>
            <g transform="rotate(-9, 322, 172)"><image href={IMG_RUFY} x="280" y="130" width="84" height="84" opacity="0.56"/></g>
            <g transform="rotate(5, 452, 182)"><image href={IMG_GUS}  x="430" y="160" width="44" height="44" opacity="0.51"/></g>
            <g transform="rotate(7, 38, 338)"><image href={IMG_GUS}   x="10"  y="310" width="56" height="56" opacity="0.53"/></g>
            <g transform="rotate(-6, 214, 314)"><image href={IMG_RUFY} x="190" y="290" width="48" height="48" opacity="0.50"/></g>
            <g transform="rotate(4, 385, 335)"><image href={IMG_PIPPI} x="345" y="295" width="80" height="80" opacity="0.55"/></g>
            <g transform="rotate(-10, 127, 442)"><image href={IMG_RUFY} x="100" y="415" width="54" height="54" opacity="0.52"/></g>
            <g transform="rotate(9, 318, 423)"><image href={IMG_GUS}   x="295" y="400" width="46" height="46" opacity="0.51"/></g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dp)"/>
      </svg>

      {/* Ambient floaties */}
      <div className="ambient" style={{top:"6%",  left:"1%",  animationDuration:"6s"}}>🎈</div>
      <div className="ambient" style={{top:"52%", right:"1%", animationDuration:"9s",  animationDelay:"-3s"}}>🎈</div>
      <div className="ambient" style={{top:"28%", left:".5%", fontSize:"2rem",  animationDelay:"-1.5s"}}>🌿</div>
      <div className="ambient" style={{top:"74%", right:"1%", fontSize:"2.2rem", animationDelay:"-5s"}}>🎈</div>
      <div className="ambient" style={{top:"18%", right:"2%", fontSize:"1.8rem", animationDelay:"-2.5s"}}>🌿</div>
      <div className="ambient" style={{top:"62%", left:"1%",  fontSize:"1.9rem", animationDelay:"-4s"}}>🎈</div>

      <div id="confetti-root" />
      <div id="balloons-root" />

      {/* ── Garland ── */}
      <div className="bunting-wrap">
        <svg className="bunting-svg" viewBox="0 0 800 92" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M-5 18 Q200 4 400 30 Q600 54 805 18" stroke="#C8A850" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="58"  y1="13" x2="58"  y2="59" stroke="#C8A850" strokeWidth="1.5"/><polygon points="42,13 74,13 58,59"   fill="#F4A8C7"/>
          <line x1="138" y1="7"  x2="138" y2="53" stroke="#C8A850" strokeWidth="1.5"/><polygon points="122,7 154,7 138,53"  fill="#F5D47E"/>
          <line x1="218" y1="6"  x2="218" y2="52" stroke="#C8A850" strokeWidth="1.5"/><polygon points="202,6 234,6 218,52"  fill="#7EAD7A"/>
          <line x1="298" y1="13" x2="298" y2="59" stroke="#C8A850" strokeWidth="1.5"/><polygon points="282,13 314,13 298,59" fill="#E8916A"/>
          <line x1="378" y1="23" x2="378" y2="69" stroke="#C8A850" strokeWidth="1.5"/><polygon points="362,23 394,23 378,69" fill="#8DCFCA"/>
          <line x1="458" y1="35" x2="458" y2="81" stroke="#C8A850" strokeWidth="1.5"/><polygon points="442,35 474,35 458,81" fill="#C9AEDE"/>
          <line x1="538" y1="43" x2="538" y2="85" stroke="#C8A850" strokeWidth="1.5"/><polygon points="522,43 554,43 538,85" fill="#F4A8C7"/>
          <line x1="618" y1="41" x2="618" y2="83" stroke="#C8A850" strokeWidth="1.5"/><polygon points="602,41 634,41 618,83" fill="#F5D47E"/>
          <line x1="698" y1="31" x2="698" y2="75" stroke="#C8A850" strokeWidth="1.5"/><polygon points="682,31 714,31 698,75" fill="#7EAD7A"/>
          <line x1="773" y1="20" x2="773" y2="64" stroke="#C8A850" strokeWidth="1.5"/><polygon points="757,20 789,20 773,64" fill="#E8916A"/>
        </svg>
      </div>

      <div className="container">

        {/* ── Hero ── */}
        <section className="hero">
          <div className="hero-pill">🦕 Sei invitato alla festa! 🦖</div>
          <h1 className="hero-title">
            Buon Compleanno<br />
            <span className="hero-name">{NOME}!</span>
          </h1>
          <div className="bday-one">
            <span className="bday-cake">🎂</span>
            <div className="bday-num">1</div>
            <div className="bday-label">anno 🎈</div>
          </div>
          <p className="hero-sub">☀️ {NOME} ha completato il suo primo giro intorno al sole! 🌍</p>
          <div className="cd-row">
            <div className="cd-block">
              <div className="cd-label">🎉 alla Festa</div>
              <div className="cd-text">{cdText}</div>
            </div>
          </div>
        </section>

        {/* ── Info cards ── */}
        <div className="info-grid">
          <div className="info-card info-card--when">
            <span className="info-icon">
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="45" height="45" aria-hidden="true">
                <rect x="4" y="9" width="40" height="34" rx="5" fill="#FFF9E8" stroke="#C8A850" strokeWidth="2"/>
                <rect x="4" y="9" width="40" height="13" rx="5" fill="#E8916A"/>
                <rect x="4" y="16" width="40" height="6" fill="#E8916A"/>
                <rect x="14" y="4" width="4" height="10" rx="2" fill="#C8A850"/>
                <rect x="30" y="4" width="4" height="10" rx="2" fill="#C8A850"/>
                <rect x="10" y="27" width="6" height="5" rx="1.5" fill="#F5D47E"/>
                <rect x="21" y="27" width="6" height="5" rx="1.5" fill="#F5D47E"/>
                <rect x="32" y="27" width="6" height="5" rx="1.5" fill="#F5D47E"/>
                <rect x="10" y="35" width="6" height="5" rx="1.5" fill="#F5D47E"/>
                <rect x="21" y="35" width="6" height="5" rx="1.5" fill="#F5D47E"/>
                <rect x="32" y="35" width="6" height="5" rx="1.5" fill="#F5D47E"/>
              </svg>
            </span>
            <div className="info-label">Quando</div>
            <div className="info-value">{DATA_LABEL}</div>
            <div className="info-value" style={{fontSize:"1.15rem",color:"var(--peach)",marginTop:"2px"}}>🕒 ore {ORA}</div>
            <div className="info-sub">{DATA_FULL.split(" ")[0]} — segnalo sul calendario!</div>
          </div>
          <div className="info-card info-card--where">
            <span className="info-icon">📍</span>
            <div className="info-label">Dove</div>
            <div className="info-value">{INDIRIZZO1}</div>
            <div className="info-sub">{INDIRIZZO2}</div>
          </div>
        </div>

        {/* ── Mappa ── */}
        <section className="card card--map">
          <h2 className="card-title">🗺️ Come arrivare</h2>
          <div className="map-address">
            <span>📍</span><span>{INDIRIZZO1}</span>
            <span>–</span><span>{INDIRIZZO2}</span>
          </div>
          <iframe
            className="map-iframe"
            src={`https://maps.google.com/maps?q=${MAPS_QUERY}&output=embed&hl=it&z=16`}
            loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
            title={`Mappa festa di ${NOME}`}
          />
        </section>

        {/* ── Dino trio ── */}
        <section className="card card--dino">
          <h2 className="card-title">🦕 Incontra la banda!</h2>
          <p className="card-sub">Tre dinosauri ti aspettano — dagli un tocco e scopri cosa combinano!</p>
          <div className="dino-trio">

            {/* RUFY — brontosauro */}
            <div className="dino-unit">
              <div className="dino-wrap" id="wrapLungo" onClick={() => interactDino("lungo")}
                role="button" aria-label="Saluta Rufy">
                <div className="dino-bubble" id="bubbleLungo" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="dino-char dino-char--lungo" src={IMG_RUFY} alt="Rufy" draggable={false} />
              </div>
              <div className="dino-name">Rufy</div>
            </div>

            {/* PIPPI — T-Rex */}
            <div className="dino-unit">
              <div className="dino-wrap" id="wrapRex" onClick={() => interactDino("rex")}
                role="button" aria-label="Saluta Pippi">
                <div className="dino-bubble" id="bubbleRex" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="dino-char dino-char--rex" src={IMG_PIPPI} alt="Pippi" draggable={false} />
              </div>
              <div className="dino-name">Pippi</div>
            </div>

            {/* GUS — raptor */}
            <div className="dino-unit">
              <div className="dino-wrap" id="wrapRaptor" onClick={() => interactDino("raptor")}
                role="button" aria-label="Saluta Gus">
                <div className="dino-bubble" id="bubbleRaptor" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="dino-char dino-char--raptor" src={IMG_GUS} alt="Gus" draggable={false} />
              </div>
              <div className="dino-name">Gus</div>
            </div>

          </div>
          <div className="dino-hint-row">
            <span className="dino-hint">👆 Clicca su ognuno di loro!</span>
          </div>
        </section>

        {/* ── RSVP ── */}
        <section className="card card--rsvp">
          <h2 className="card-title">🦕 Conferma la tua presenza!</h2>
          <p className="card-sub">
            Inserisci il tuo nome per far sapere che ci sarai.<br />
            Non lasciare {NOME} solo con i dinosauri! 🦖
          </p>
          <div className="rsvp-form">
            <input
              type="text" className="rsvp-input"
              placeholder="Il tuo nome..." maxLength={50} autoComplete="off"
              value={rsvpNome}
              onChange={e => setRsvpNome(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") confirmRsvp(); }}
            />
            <button className="rsvp-btn" onClick={confirmRsvp}>🎉 Ci sarò!</button>
          </div>
          <div className={`feedback feedback--ok${rsvpOk ? " show" : ""}`}>
            <span>🦕</span><span>{rsvpOk}</span>
          </div>
          <div className={`feedback feedback--err${rsvpErr ? " show" : ""}`}>
            <span>🦖</span><span>{rsvpErr}</span>
          </div>
        </section>

        <footer className="footer">
          <p>Con amore per {NOME} 🦕❤️</p>
          <Link href="/lab" className="footer-lab">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Torna al Laboratorio
          </Link>
        </footer>

      </div>
    </>
  );
}
