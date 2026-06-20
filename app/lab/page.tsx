import Hero from "@/components/lab/Hero";
import Projects from "@/components/lab/Projects";
import About from "@/components/lab/About";
import CTA from "@/components/lab/CTA";
import CustomCursor from "@/components/lab/CustomCursor";

export default function LabPage() {
  return (
    <main className="bg-[#090E1B] min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Hero />
      <div id="progetti" />
      <Projects />
      <div id="about" />
      <About />
      <CTA />
    </main>
  );
}
