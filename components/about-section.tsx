"use client"

import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { ref, isInView } = useInView()
  const { t } = useLanguage()

  const stats = [
    { value: "15+", label: t.about.stats.yearsExp },
    { value: "21", label: t.about.stats.teams },
    { value: "500+", label: t.about.stats.people },
    { value: "4", label: t.about.stats.companies },
  ]

  return (
    <section id="about" className="py-14 md:py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <h2 className="text-base tracking-[0.3em] uppercase text-primary font-medium">
              {t.about.heading}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl text-foreground font-medium text-pretty">
              {t.about.lead}
            </p>
            <p className="text-pretty">{t.about.p1}</p>
            <p className="text-pretty">{t.about.p2}</p>
            <p className="text-pretty">{t.about.p3}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-secondary/80 border border-border/50"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
