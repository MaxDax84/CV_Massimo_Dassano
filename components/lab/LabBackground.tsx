"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_cloud_animation_video.mp4";

function VideoBackground({ onPlaying }: { onPlaying: () => void }) {
  const v1 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number>(0);
  const stateRef = useRef({ active: 1 as 1 | 2, fadeStart: -1 });
  const BEFORE = 1.5;

  useEffect(() => {
    const a = v1.current;
    const b = v2.current;
    if (!a || !b) return;
    a.muted = true;
    b.muted = true;

    a.addEventListener("playing", onPlaying, { once: true });

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

    const tryPlay = () => { a.play().catch(() => {}); };

    const playPromise = a.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
        document.addEventListener("scroll", tryPlay, { once: true, passive: true });
      });
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      a.removeEventListener("playing", onPlaying);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("scroll", tryPlay);
    };
  }, [onPlaying]);

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

export default function LabBackground() {
  const posterRef = useRef<HTMLImageElement>(null);

  const handlePlaying = () => {
    const el = posterRef.current;
    if (!el) return;
    el.style.transition = "opacity 0.6s ease";
    el.style.opacity = "0";
  };

  const cls = "absolute inset-0 w-full h-full object-cover";

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ background: "#02122c" }}
    >
      {/* Video sotto */}
      <VideoBackground onPlaying={handlePlaying} />
      {/* Poster direttamente nel div fixed — un solo livello, non può scrollare */}
      <img
        ref={posterRef}
        src="/lab-hero-poster.jpg"
        className={cls}
        style={{ opacity: 1 }}
        alt=""
      />
      {/* Overlay gradient sopra tutto */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-[#02122c] via-[#02122c]/80 to-transparent" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #02122cff 0%, #02122cfa 10%, #02122c80 25%, transparent 50%)",
        }}
      />
    </div>
  );
}
