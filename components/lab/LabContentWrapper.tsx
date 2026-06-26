"use client";

import { useEffect, useState } from "react";

export default function LabContentWrapper({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fallback: reveal content after 1.5s even if video never fires "playing"
    const fallback = setTimeout(() => setVisible(true), 1500);

    const onPlaying = () => {
      clearTimeout(fallback);
      setVisible(true);
    };

    document.addEventListener("lab:video-playing", onPlaying, { once: true });

    return () => {
      clearTimeout(fallback);
      document.removeEventListener("lab:video-playing", onPlaying);
    };
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.9s ease-out",
      }}
    >
      {children}
    </div>
  );
}
