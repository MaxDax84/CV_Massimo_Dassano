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
  title: "Portfolio siti web: psicoterapia, gelateria, benessere, SaaS",
  description:
    "Sette progetti reali: restyling per studi di psicoterapia e riflessologia a Milano, siti da zero per gelateria artigianale, personal branding, band musicale e SaaS.",
  // Canonical proprio: senza questo la pagina eredita quello del root layout,
  // che punta alla home.
  alternates: {
    canonical: "/lab",
  },
  openGraph: {
    type: "website",
    url: "/lab",
    siteName: "Massimo Dassano",
    title: "Portfolio siti web: psicoterapia, gelateria, benessere, SaaS | Massimo Dassano",
    description:
      "Sette progetti reali: restyling per studi di psicoterapia e riflessologia a Milano, siti da zero per gelateria artigianale, personal branding, band musicale e SaaS.",
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
