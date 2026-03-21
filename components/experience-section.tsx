"use client"

import { useInView } from "@/hooks/use-in-view"
import { Briefcase, ChevronRight } from "lucide-react"

const experiences = [
  {
    company: "Alibaba.com Italy",
    role: "Sales Planning & Strategy (South EU)",
    period: "2021 — Present",
    description:
      "Driving double-digit growth of Alibaba.com's B2B market in Southern Europe through direct sales and channels strategy.",
    highlights: [
      "Led cross-functional initiatives across Sales, Marketing and Operations to enhance operational excellence – including new product launches, CRM & Data Platform roll-out, regional pricing, revenue model transformation, customer experience localization and overall business performance review",
      "Managed sales performance and partner ROI, overseeing incentive design, sales-out tracking, and performance metrics to ensure full transparency and accountability across the commercial ecosystem",
      "Owned budgeting and financial negotiations with HQ, supporting the planning and management of revenues, headcount, and P&L targets, while monitoring ongoing performance and efficiency metrics",
      "Developed strategic accounts and partnerships, engaging with C-level stakeholders to co-design joint business plans that ensured partner profitability and alignment with Alibaba.com's regional growth strategy (USD 2.0M+ revenues, 10 direct HC, 3 channel partners, 35+ indirect HC)",
      "Led the rollout of the Alibaba.com Partner Program, successfully recruiting, onboarding, and enabling 125+ new partners in 12 months across Southern Europe",
      "Acted as the primary liaison between HQ in China and local leadership, ensuring strategic alignment, knowledge transfer, and execution excellence",
    ],
  },
  {
    company: "Nidec ASI S.p.A.",
    role: "Global Business & Commercial Development and CRM Manager",
    period: "2015 — 2021",
    description:
      "Direct report of the CEO, in charge of the coordination of the sales teams world-wide, and the strategic growth programs.",
    highlights: [
      "Coordinated 21 regional teams, serving as a key connection between Top Management and teams for deploying global strategies",
      "Prepared the 5-year Strategic Plan and set sales targets & incentive plans for 300 sales people",
      "Administered Salesforce.com for 10 BUs, 21 teams, and 500+ users, leading platform design, implementation, and maintenance, including training and onboarding of new teams",
    ],
  },
  {
    company: "Keyence Italia S.p.A.",
    role: "Key Account Manager & Business Developer",
    period: "2014 — 2015",
    description:
      "Accountable for the factory automation division in Northern Italy area, driving B2B direct & indirect sales activities.",
    highlights: [
      "Achieved +30% growth in sales year-over-year",
      "Managed approximately 300 direct customers",
      "Coordinated network of 25 dealers for indirect sales channel",
    ],
  },
  {
    company: "Ernst & Young Financial-Business Advisors S.p.A.",
    role: "Senior Consultant in Performance Improvements",
    period: "2010 — 2014",
    description:
      "Delivered strategic consulting projects across multiple industries, driving organizational transformation and operational excellence.",
    highlights: [
      "Completed 10 projects across 6 clients, specializing in change management, sales & marketing, strategy & operations, process improvements, and business planning",
    ],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView()

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
              Experience
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                        {exp.company}
                      </h3>
                      <p className="text-primary font-medium">{exp.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
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
