"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_cloud_animation_video.mp4";

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
    a.muted = true;
    b.muted = true;

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

    const tryPlay = () => {
      a.play().catch(() => {});
    };

    const playPromise = a.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // autoplay bloccato (es. iOS Low Power Mode): riprova al primo tocco o scroll
        document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
        document.addEventListener("scroll", tryPlay, { once: true, passive: true });
      });
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("scroll", tryPlay);
    };
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

export default function LabBackground() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ background: "linear-gradient(160deg, #02122c 0%, #061a3a 50%, #02122c 100%)" }}
    >
      <VideoBackground />
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
