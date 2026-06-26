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
  title: "Massimo Dassano — /lab",
  description:
    "Portfolio scrollytelling. Restyling siti per attività locali con approccio da ex consulente corporate.",
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
