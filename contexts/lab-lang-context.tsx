"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Lang = "it" | "en";

interface LabLangCtx {
  lang: Lang;
  toggle: () => void;
}

const LabLangContext = createContext<LabLangCtx>({ lang: "it", toggle: () => {} });

export function LabLangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");

  useEffect(() => {
    const saved = localStorage.getItem("md-lang") as Lang | null;
    if (saved === "it" || saved === "en") setLang(saved);
  }, []);

  const toggle = () => {
    const next: Lang = lang === "en" ? "it" : "en";
    setLang(next);
    localStorage.setItem("md-lang", next);
  };

  return (
    <LabLangContext.Provider value={{ lang, toggle }}>
      {children}
    </LabLangContext.Provider>
  );
}

export const useLabLang = () => useContext(LabLangContext);
