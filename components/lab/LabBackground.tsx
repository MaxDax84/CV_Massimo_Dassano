"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC =
  "https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_cloud_animation_video.mp4";
const POSTER_SRC = "/lab-hero-poster.jpg";

export default function LabBackground() {
  const vRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = vRef.current;
    if (!v) return;
    v.muted = true;
    let mounted = true;

    const tryPlay = () => { v.play().catch(() => {}); };

    const p = v.play();
    if (p !== undefined) {
      p.catch(() => {
        if (!mounted) return;
        // iOS: defer autoplay to first user gesture
        document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
        document.addEventListener("scroll", tryPlay, { once: true, passive: true });
      });
    }

    // Re-play when tab becomes visible again (iOS pauses video in background)
    const onVisibility = () => {
      if (!document.hidden && v.paused) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      mounted = false;
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("scroll", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ background: "#02122c" }}
    >
      {/*
        poster= on the video element itself: browser renders poster and video
        at identical dimensions via the same element — zero layout shift when
        playback starts, no separate <img> with different object-position.
      */}
      <video
        ref={vRef}
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay gradients */}
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
