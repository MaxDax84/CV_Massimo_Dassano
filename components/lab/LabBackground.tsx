"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC   = "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_cloud_animation_video.mp4";
const TRIM_END    = 0.5;   // seconds to cut from the end
const CROSSFADE   = 900;   // crossfade duration in ms

export default function LabBackground() {
  const vARef     = useRef<HTMLVideoElement>(null);
  const vBRef     = useRef<HTMLVideoElement>(null);
  const activeRef = useRef<"A" | "B">("A");
  const fadingRef = useRef(false);

  useEffect(() => {
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

    // Crossfade: fade out current, fade in next
    const crossfade = () => {
      if (fadingRef.current) return;
      fadingRef.current = true;

      const cur  = activeRef.current === "A" ? vA : vB;
      const next = activeRef.current === "A" ? vB : vA;

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
  }, []);

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
        background: "#000",
        width: "100%",
        height: "100%",
      }}
    >
      <video ref={vARef} src={VIDEO_SRC} autoPlay muted playsInline preload="auto" style={{ ...base, opacity: 1 }} />
      <video ref={vBRef} src={VIDEO_SRC}        muted playsInline preload="auto" style={{ ...base, opacity: 0 }} />
    </div>
  );
}
