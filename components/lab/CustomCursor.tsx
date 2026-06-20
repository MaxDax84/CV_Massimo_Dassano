"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const orangeRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    setActive(true);
    document.documentElement.classList.add("custom-cursor");

    let tx = -300, ty = -300;
    // Ring tracks almost instantly; blobs lag behind for aura effect
    let rx = -300, ry = -300;
    let ox = -300, oy = -300;
    let bx = -300, by = -300;
    let rscale = 1, oscale = 1, bscale = 1;
    let targetScale = 1;
    let rafId: number;

    function onMove(e: MouseEvent) {
      tx = e.clientX;
      ty = e.clientY;
      const el = document.elementFromPoint(tx, ty);
      targetScale = el?.closest("a, button, [role='button']") ? 2.2 : 1;
    }

    function tick() {
      rx += (tx - rx) * 0.9;
      ry += (ty - ry) * 0.9;
      ox += (tx - ox) * 0.1;
      oy += (ty - oy) * 0.1;
      bx += (tx - bx) * 0.055;
      by += (ty - by) * 0.055;
      rscale += (targetScale - rscale) * 0.14;
      oscale += (targetScale - oscale) * 0.12;
      bscale += (targetScale - bscale) * 0.08;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%) scale(${rscale.toFixed(3)})`;
        // Fade ring when hovered (blobs take over emphasis)
        ringRef.current.style.opacity = String(Math.max(0, 1 - (rscale - 1) * 0.5));
      }
      if (orangeRef.current) {
        orangeRef.current.style.transform = `translate(${ox}px,${oy}px) translate(-50%,-50%) scale(${oscale.toFixed(3)})`;
      }
      if (blueRef.current) {
        blueRef.current.style.transform = `translate(${bx}px,${by}px) translate(-50%,-50%) scale(${bscale.toFixed(3)})`;
      }

      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[50] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Precision ring — sharp, fast, shows exactly where cursor points */}
      <div
        ref={ringRef}
        className="absolute top-0 left-0 w-[14px] h-[14px] rounded-full will-change-transform"
        style={{
          border: "1.5px solid rgba(255,255,255,0.85)",
          boxShadow: "0 0 6px rgba(232,98,42,0.5)",
        }}
      />
      {/* Orange blob */}
      <div
        ref={orangeRef}
        className="absolute top-0 left-0 w-[220px] h-[220px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, rgba(232,98,42,0.62) 0%, rgba(232,98,42,0.2) 45%, transparent 70%)",
          filter: "blur(18px)",
        }}
      />
      {/* Blue blob */}
      <div
        ref={blueRef}
        className="absolute top-0 left-0 w-[340px] h-[340px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle at center, rgba(80,120,255,0.35) 0%, rgba(80,120,255,0.08) 50%, transparent 70%)",
          filter: "blur(36px)",
        }}
      />
    </div>
  );
}
