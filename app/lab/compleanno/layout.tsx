import type { Metadata } from "next";
import { Baloo_2, Fredoka } from "next/font/google";

const baloo2 = Baloo_2({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-baloo2", display: "swap" });
const fredokaOne = Fredoka({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-fredoka-one", display: "swap" });

export const metadata: Metadata = {
  title: "🦕 Compleanno di Lorenzo!",
  description: "Sabato 14 Settembre 2024 · Via Brera 5, Milano · Unisciti a noi per festeggiare!",
  robots: "noindex",
};

export default function CompleannnoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        #lab-background { display: none !important; }
        body { background-color: #FFF8F0 !important; }
      `}</style>
      <div className={`${baloo2.variable} ${fredokaOne.variable}`}>
        {children}
      </div>
    </>
  );
}
