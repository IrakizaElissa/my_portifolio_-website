"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { VisitCounter } from "@/components/visit-counter"
import { usePortfolioLanguage } from "@/hooks/use-portfolio-language"
import { withBasePath } from "@/lib/base-path"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { content } = usePortfolioLanguage()
  const { personal } = content

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div>
            <div
              className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="text-primary text-lg mb-4 font-mono">{personal.greeting}</p>
            </div>

            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {personal.name}
            </h1>

            <h2
              className={`text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-8 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {personal.title}
            </h2>

            <p
              className={`text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {personal.tagline} Specializing in{" "}
              {personal.specializations.map((spec, i) => (
                <span key={spec}>
                  <span className="text-primary">{spec}</span>
                  {i < personal.specializations.length - 1 &&
                    (i === personal.specializations.length - 2 ? ", and " : ", ")}
                </span>
              ))}
              .
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all hover:scale-105"
              >
                Get in Touch
              </a>
            </div>

            <div
              className={`mt-8 transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <VisitCounter />
            </div>
          </div>

          <div
            className={`mx-auto w-full max-w-sm transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/70 p-3 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={withBasePath(personal.profileImage)}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}
