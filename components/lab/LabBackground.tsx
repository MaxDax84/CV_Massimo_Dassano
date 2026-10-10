"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC   = "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_cloud_animation_video.mp4";
const POSTER_SRC  = "/lab-hero-poster.jpg";
const TRIM_END    = 0.5;   // seconds to cut from the end
const CROSSFADE   = 900;   // crossfade duration in ms
const PRELOAD_AT  = 0.6;   // fraction of clip A after which clip B starts buffering
const MOBILE_MAX  = 767;   // viewport width (px) up to which we serve the poster only

/**
 * Lo sfondo del /lab è un video da 3,46 MB. Il loop senza stacco richiede DUE elementi
 * video in crossfade (vedi CLAUDE.md), ma caricarli entrambi all'avvio significava
 * scaricare 6,9 MB per visita. Quindi:
 *   - il secondo video parte con preload="none" e viene caricato solo al 60% del primo;
 *   - su mobile e con prefers-reduced-motion servito solo il poster (0 MB di video).
 */
type Mode = "pending" | "video" | "poster";

export default function LabBackground() {
  const vARef     = useRef<HTMLVideoElement>(null);
  const vBRef     = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"A" | "B">("A");
  const fadingRef = useRef(false);
  const bArmedRef = useRef(false);
  const [mode, setMode] = useState<Mode>("pending");

  // Decide una volta sola, lato client, se il video va servito o no.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small   = window.innerWidth <= MOBILE_MAX;
    setMode(reduced || small ? "poster" : "video");
  }, []);

  // Senza video il poster è già lo sfondo definitivo: sblocca subito il contenuto,
  // altrimenti LabContentWrapper aspetterebbe il fallback da 1,5s.
  useEffect(() => {
    if (mode !== "poster") return;
    document.dispatchEvent(new CustomEvent("lab:video-playing"));
  }, [mode]);

  useEffect(() => {
    if (mode !== "video") return;
    const vA = vARef.current;
    const vB = vBRef.current;
    if (!vA || !vB) return;

    vA.muted = true;
    vB.muted = true;

    // Tell LabContentWrapper the video has started
    const notifyPlaying = () => {
      document.dispatchEvent(new CustomEvent("lab:video-playing"));
    };
    vA.addEventListener("playing", notifyPlaying, { once: true });

    const tryPlay = () => vA.play().catch(() => {});
    tryPlay();
    document.addEventListener("touchstart",  tryPlay, { once: true, passive: true });
    document.addEventListener("pointerdown", tryPlay, { once: true, passive: true });

    const onVisibility = () => {
      const cur = activeRef.current === "A" ? vA : vB;
      if (!document.hidden && cur.paused) cur.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Il secondo elemento serve solo a fine clip: lo carichiamo in anticipo, non all'avvio.
    const armSecondVideo = () => {
      if (bArmedRef.current) return;
      bArmedRef.current = true;
      vB.preload = "auto";
      vB.load();
    };

    // Crossfade: fade out current, fade in next
    const crossfade = () => {
      if (fadingRef.current) return;
      fadingRef.current = true;

      const cur  = activeRef.current === "A" ? vA : vB;
      const next = activeRef.current === "A" ? vB : vA;

      armSecondVideo();
      next.currentTime = 0;
      next.play().catch(() => {});

      cur.style.transition  = `opacity ${CROSSFADE}ms ease-in-out`;
      next.style.transition = `opacity ${CROSSFADE}ms ease-in-out`;
      cur.style.opacity     = "0";
      next.style.opacity    = "1";

      setTimeout(() => {
        cur.pause();
        cur.currentTime  = 0;
        cur.style.transition = "";
        activeRef.current    = activeRef.current === "A" ? "B" : "A";
        fadingRef.current    = false;
      }, CROSSFADE + 50);
    };

    const onTimeUpdate = () => {
      const cur = activeRef.current === "A" ? vA : vB;
      if (!cur.duration || fadingRef.current) return;
      if (cur.currentTime / cur.duration >= PRELOAD_AT) armSecondVideo();
      if (cur.duration - cur.currentTime <= TRIM_END + CROSSFADE / 1000) {
        crossfade();
      }
    };

    vA.addEventListener("timeupdate", onTimeUpdate);
    vB.addEventListener("timeupdate", onTimeUpdate);

    return () => {
      vA.removeEventListener("playing",    notifyPlaying);
      vA.removeEventListener("timeupdate", onTimeUpdate);
      vB.removeEventListener("timeupdate", onTimeUpdate);
      document.removeEventListener("touchstart",       tryPlay);
      document.removeEventListener("pointerdown",      tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [mode]);

  const base: React.CSSProperties = {
    position: "absolute",
    top: 0, left: 0,
    width: "100%", height: "100%",
    objectFit: "cover",
    display: "block",
  };

  return (
    <div
      id="lab-background"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: `#000 url(${POSTER_SRC}) center / cover no-repeat`,
        width: "100%",
        height: "100%",
      }}
    >
      {mode === "video" && (
        <>
          <video ref={vARef} src={VIDEO_SRC} poster={POSTER_SRC} autoPlay muted playsInline preload="auto" style={{ ...base, opacity: 1 }} />
          <video ref={vBRef} src={VIDEO_SRC} poster={POSTER_SRC}          muted playsInline preload="none" style={{ ...base, opacity: 0 }} />
        </>
      )}
      {/* Patina scura: il video è troppo luminoso per leggere bene il testo bianco sopra */}
      <div
        style={{
          ...base,
          background:
            "linear-gradient(180deg, rgba(2,6,14,0.72) 0%, rgba(2,6,14,0.5) 20%, rgba(2,6,14,0.56) 80%, rgba(2,6,14,0.75) 100%)",
        }}
      />
    </div>
  );
}
