"use client"

import { useInView } from "@/hooks/use-in-view"
import { GraduationCap, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const INSTITUTIONS = [
  "Politecnico di Torino",
  "Politecnico di Milano",
  "West London College",
]

const YEARS = ["2010", "", "2010"]

const ICONS = [GraduationCap, GraduationCap, Globe]

const LANG_NAMES = ["Italian", "English"]
const LANG_PERCENTAGES = [100, 95]

export function EducationSection() {
  const { ref, isInView } = useInView()
  const { t } = useLanguage()

  return (
    <section id="education" className="py-14 md:py-20 relative">
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
              {t.education.heading}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {t.education.academicBg}
              </h3>
              {t.education.degrees.map((edu, index) => {
                const Icon = ICONS[index]
                return (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-secondary/80 border border-border/50 hover:border-primary/30 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h4 className="font-medium text-foreground">
                              {INSTITUTIONS[index]}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {edu.degree}
                            </p>
                          </div>
                          {YEARS[index] && (
                            <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded">
                              {YEARS[index]}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">
                {t.education.languages}
              </h3>
              <div className="space-y-6 p-6 rounded-lg bg-secondary/80 border border-border/50">
                {LANG_NAMES.map((name, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{name}</span>
                      <span className="text-sm text-primary">
                        {index === 0
                          ? t.education.langLevels.native
                          : t.education.langLevels.fluent}
                      </span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000"
                        style={{
                          width: isInView ? `${LANG_PERCENTAGES[index]}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
