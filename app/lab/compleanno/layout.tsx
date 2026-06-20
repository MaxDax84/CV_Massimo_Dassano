import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🦕 Compleanno di Lorenzo!",
  description: "Sabato 14 Settembre 2024 · Via Brera 5, Milano · Unisciti a noi per festeggiare!",
  robots: "noindex",
};

export default function CompleannnoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
