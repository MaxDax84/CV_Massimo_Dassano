"use client"

import { useInView } from "@/hooks/use-in-view"
import { Database, LineChart, Zap, Target, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const TECH_SKILLS = [
  { name: "Salesforce.com", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "Microsoft Office Suite", category: "Productivity" },
  { name: "LinkedIn", category: "Networking" },
]

const INTEREST_ICONS = [Database, LineChart, Zap, Target, Users]

export function SkillsSection() {
  const { ref, isInView } = useInView()
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-14 md:py-20 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-base tracking-[0.3em] uppercase text-primary font-medium">
              {t.skills.heading}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Core Competencies */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              {t.skills.core}
            </h3>
            <div className="flex flex-wrap gap-3">
              {t.skills.competencies.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {t.skills.technical}
              </h3>
              <div className="space-y-3">
                {TECH_SKILLS.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/60 border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Interests */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {t.skills.focus}
              </h3>
              <div className="space-y-3">
                {t.skills.interests.map((label, index) => {
                  const Icon = INTEREST_ICONS[index]
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-secondary/60 border border-border/50 hover:border-primary/30 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">{label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
