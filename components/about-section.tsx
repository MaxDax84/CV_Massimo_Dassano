"use client"

import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { ref, isInView } = useInView()

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
              Profile
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg md:text-xl text-foreground font-medium text-pretty">
              Senior Manager with extensive international experience driving growth 
              through strategic B2B initiatives and ecosystem development.
            </p>
            
            <p className="text-pretty">
              With over 15 years of experience spanning multiple industries and geographies, 
              I specialize in B2B sales planning, sales development, and accounts & partners 
              management. My expertise lies in building and executing both direct and indirect 
              go-to-market strategies that deliver measurable results.
            </p>

            <p className="text-pretty">
              I have a proven track record in driving revenue growth through strategic alliances 
              and ecosystem development, backed by strong negotiation and stakeholder management 
              skills. My approach combines data-driven decision making with the ability to lead 
              cross-functional teams in highly competitive markets.
            </p>

            <p className="text-pretty">
              Currently focused on maximizing sales-out performance through ROI-based initiatives, 
              I bring a unique combination of analytical rigor and strategic vision to every 
              challenge.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "125+", label: "Partners Recruited" },
              { value: "$2M+", label: "Revenue Managed" },
              { value: "21", label: "Teams Coordinated" },
            ].map((stat, index) => (
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
