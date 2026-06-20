"use client";

import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 151;

function frameSrc(i: number) {
  return `/sequence/frame_${String(i).padStart(3, "0")}_delay-0.066s.png`;
}

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

export default function ScrollyCanvas({ containerRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadPct, setLoadPct] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let logW = 0;
    let logH = 0;
    let currentFrame = 0;
    const images: HTMLImageElement[] = [];

    function draw(idx: number) {
      const img = images[idx];
      if (!img?.complete || !img.naturalWidth) return;
      const cr = logW / logH;
      const ir = img.naturalWidth / img.naturalHeight;
      let sx = 0,
        sy = 0,
        sw = img.naturalWidth,
        sh = img.naturalHeight;
      if (ir > cr) {
        // image wider: crop sides
        sw = sh * cr;
        sx = (img.naturalWidth - sw) / 2;
      } else {
        // image taller: crop top/bottom
        sh = sw / cr;
        sy = (img.naturalHeight - sh) / 2;
      }
      ctx!.clearRect(0, 0, logW, logH);
      ctx!.drawImage(img, sx, sy, sw, sh, 0, 0, logW, logH);
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      logW = window.innerWidth;
      logH = window.innerHeight;
      canvas!.width = logW * dpr;
      canvas!.height = logH * dpr;
      canvas!.style.width = logW + "px";
      canvas!.style.height = logH + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(currentFrame);
    }

    function onScroll() {
      const el = containerRef.current;
      if (!el) return;
      const top = el.offsetTop;
      const height = el.offsetHeight;
      const winH = window.innerHeight;
      const progress = Math.max(
        0,
        Math.min(1, (window.scrollY - top) / (height - winH))
      );
      currentFrame = Math.min(
        TOTAL_FRAMES - 1,
        Math.round(progress * (TOTAL_FRAMES - 1))
      );
      draw(currentFrame);
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    let loaded = 0;

    function onLoad(i: number) {
      loaded++;
      setLoadPct(Math.round((loaded / TOTAL_FRAMES) * 100));
      if (i === 0) draw(0);
      if (loaded === TOTAL_FRAMES) setReady(true);
    }

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.onload = () => onLoad(i);
      img.onerror = () => onLoad(i); // count errors so loader never stalls
      img.src = frameSrc(i);
      images.push(img);
    }

    onScroll();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [containerRef]);

  return (
    <>
      <canvas ref={canvasRef} className="absolute top-0 left-0 block" />

      {/* Loading overlay */}
      <div
        className={`absolute inset-0 z-50 bg-[#090E1B] flex flex-col items-center justify-center transition-opacity duration-700 ${
          ready ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="relative w-44 h-px bg-white/10">
          <div
            className="absolute inset-y-0 left-0 bg-[#E8622A] transition-[width] duration-150"
            style={{ width: `${loadPct}%` }}
          />
        </div>
        <p className="mt-5 text-white/30 text-[10px] tracking-[0.4em] uppercase font-inter">
          {loadPct}%
        </p>
      </div>
    </>
  );
}
