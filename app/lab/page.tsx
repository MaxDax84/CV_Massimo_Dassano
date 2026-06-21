import Hero from "@/components/lab/Hero";
import Projects from "@/components/lab/Projects";
import CTA from "@/components/lab/CTA";
import CustomCursor from "@/components/lab/CustomCursor";
import Link from "next/link";

export default function LabPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Hero />
      <div id="progetti" />
      <Projects />
      <div id="contatto" />
      <CTA />
      <footer className="relative z-[1] py-6 px-6 border-t border-white/[0.05]">
        <div className="max-w-xl mx-auto flex flex-wrap items-center justify-center gap-3 text-[10px] font-inter"
          style={{ color: "rgba(242,240,235,0.25)" }}>
          <span>© {new Date().getFullYear()} Massimo Dassano</span>
          <span className="opacity-40">·</span>
          <Link href="/privacy" className="hover:text-white/60 transition-colors duration-200">Privacy Policy</Link>
          <span className="opacity-40">·</span>
          <Link href="/cookie-policy" className="hover:text-white/60 transition-colors duration-200">Cookie Policy</Link>
        </div>
      </footer>
    </main>
  );
}
