"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_cloud_animation_video.mp4";

function VideoBackground({ onPlaying }: { onPlaying: () => void }) {
  const vRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    v.muted = true;

    v.addEventListener("playing", onPlaying, { once: true });

    const tryPlay = () => { v.play().catch(() => {}); };

    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
        document.addEventListener("scroll", tryPlay, { once: true, passive: true });
      });
    }

    return () => {
      v.removeEventListener("playing", onPlaying);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("scroll", tryPlay);
    };
  }, [onPlaying]);

  return (
    <div className="absolute inset-0">
      <video
        ref={vRef}
        src={VIDEO_SRC}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
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
