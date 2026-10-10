import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { InterestsSection } from "@/components/interests-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Chi sono: esperienza corporate e siti web su misura",
  description: "Quindici anni in aziende strutturate, da Ernst & Young ad Alibaba.com, a capire perché certi business crescono e altri si fermano. Oggi costruisco anche siti web per professionisti e piccole imprese a Milano.",
  alternates: {
    canonical: "https://www.massimodassano.it/cv",
  },
  openGraph: {
    title: "Chi sono: esperienza corporate e siti web su misura | Massimo Dassano",
    description: "Quindici anni in aziende strutturate, da Ernst & Young ad Alibaba.com. Oggi costruisco anche siti web per professionisti e piccole imprese a Milano.",
    url: "https://www.massimodassano.it/cv",
    locale: "it_IT",
  },
}

export default function CvPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <InterestsSection />
      <Footer />
    </main>
  )
}
