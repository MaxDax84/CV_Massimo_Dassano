import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-fredoka" });
const nunito = Nunito({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Compleanno Lorenzo 🦕",
  description: "Invito al primo compleanno di Lorenzo — tema dinosauri!",
  robots: "noindex",
};

export default function CompleannnoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${fredoka.variable} ${nunito.variable}`}>
      {children}
    </div>
  );
}
