"use client"

import { useInView } from "@/hooks/use-in-view"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const COMPANIES = [
  "Alibaba.com Italy",
  "Nidec ASI S.p.A.",
  "Keyence Italia S.p.A.",
  "Ernst & Young Financial-Business Advisors S.p.A.",
]

const PERIODS = [
  "2021 — Present",
  "2015 — 2021",
  "2014 — 2015",
  "2010 — 2014",
]

export function ExperienceSection() {
  const { ref, isInView } = useInView()
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-14 md:py-20 bg-secondary/30 relative">
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
              {t.experience.heading}
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-12">
            {t.experience.jobs.map((job, index) => (
              <div
                key={index}
                className="group relative pl-8 border-l-2 border-border hover:border-primary/50 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {COMPANIES[index]}
                      </h3>
                      <p className="text-primary font-medium">{job.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {PERIODS[index]}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{job.description}</p>

                  <ul className="space-y-2">
                    {job.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex gap-2 text-sm text-muted-foreground"
                      >
                        <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
