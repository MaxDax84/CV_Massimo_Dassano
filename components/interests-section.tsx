"use client"

import { useInView } from "@/hooks/use-in-view"
import { Dumbbell, Lightbulb, Plane, Cpu } from "lucide-react"

const passions = [
  {
    icon: Dumbbell,
    title: "Tennis Coaching",
    description:
      "Passionate about tennis, both as a player and coach, combining physical discipline with strategic thinking.",
  },
  {
    icon: Lightbulb,
    title: "Chess Player",
    description:
      "Strategic board game enthusiast, applying analytical thinking and long-term planning on the chessboard.",
  },
  {
    icon: Cpu,
    title: "Emerging Technologies & AI",
    description:
      "Deeply interested in artificial intelligence and emerging tech trends that are reshaping business and society.",
  },
  {
    icon: Plane,
    title: "Cultural Exploration",
    description:
      "Avid traveler with a passion for discovering new cultures, perspectives, and ways of doing business globally.",
  },
]

export function InterestsSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-14 md:py-20 relative">
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
              Beyond Work
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {passions.map((passion, index) => {
              const Icon = passion.icon
              return (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-secondary/80 border border-border/50 hover:border-primary/30 transition-all hover:bg-secondary"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {passion.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {passion.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
