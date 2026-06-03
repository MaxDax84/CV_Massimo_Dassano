import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { InterestsSection } from "@/components/interests-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "Il mio background | Massimo Dassano",
  description: "Senior Manager con 15+ anni di esperienza internazionale in B2B sales planning, strategic partnerships e global business development.",
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
