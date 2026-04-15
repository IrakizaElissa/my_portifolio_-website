"use client"

import { useInView } from "@/hooks/use-in-view"
import { Trophy, Award } from "lucide-react"
import { usePortfolioLanguage } from "@/hooks/use-portfolio-language"

export function HonorsAwardsSection() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const { content } = usePortfolioLanguage()

  // Sample honors & awards data - you can customize this
  const honors = [
    {
      title: "Certificate of Completion: Working with Computers and Devices",
      organization: "Online Training",
      year: "2024",
      description: "Completed a practical course on using computers, peripherals, and basic device management.",
      icon: Trophy,
    },
    {
      title: "Certificate of Completion: Working and Collaborating Online",
      organization: "Online Training",
      year: "2024",
      description: "Finished training on online collaboration tools, digital communication, and remote teamwork.",
      icon: Award,
    },
    {
      title: "FIRST LEGO League Rwanda Medal",
      organization: "FIRST LEGO League Rwanda",
      year: "2024",
      description: "Participated in the first FIRST LEGO League challenge held in Rwanda and earned a medal in robotics competition.",
      icon: Trophy,
    },
  ]

  return (
    <section id="honors" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-sm uppercase tracking-wider text-primary mb-4 font-mono">Honors & Awards</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Recognition & Achievements</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Celebrating milestones and recognition received throughout my journey in technology and education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honors.map((honor, index) => {
            const Icon = honor.icon
            return (
              <div
                key={index}
                className={`bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{honor.title}</h4>
                <p className="text-primary text-sm mb-2">{honor.organization} • {honor.year}</p>
                <p className="text-muted-foreground text-sm">{honor.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
