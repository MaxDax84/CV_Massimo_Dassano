import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import { LabLangProvider } from "@/contexts/lab-lang-context";
import LabBackground from "@/components/lab/LabBackground";
import LabContentWrapper from "@/components/lab/LabContentWrapper";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Senza brand: il template del root layout aggiunge già "| Massimo Dassano".
  title: "/lab — Vetrina tecnica",
  description:
    "Portfolio scrollytelling. Restyling siti per attività locali con approccio da ex consulente corporate.",
  // Canonical proprio: senza questo la pagina eredita quello del root layout,
  // che punta alla home.
  alternates: {
    canonical: "/lab",
  },
  openGraph: {
    type: "website",
    url: "/lab",
    siteName: "Massimo Dassano",
    title: "/lab — Vetrina tecnica | Massimo Dassano",
    description:
      "Portfolio scrollytelling. Restyling siti per attività locali con approccio da ex consulente corporate.",
    locale: "it_IT",
  },
};

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <LabLangProvider>
      <div className={`${sora.variable} ${inter.variable}`}>
        <LabBackground />
        <style>{`body { background-color: #000; }`}</style>
        <LabContentWrapper>
          {children}
        </LabContentWrapper>
      </div>
    </LabLangProvider>
  );
}
