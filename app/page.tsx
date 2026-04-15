"use client"

import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { HonorsAwardsSection } from "@/components/honors-awards-section"
import { PhotoGallerySection } from "@/components/photo-gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePortfolioLanguage } from "@/hooks/use-portfolio-language"

export default function Home() {
  const { content } = usePortfolioLanguage()

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <HonorsAwardsSection />
          <PhotoGallerySection />
          <ContactSection />
        </main>
        <footer className="py-8 px-6 text-center text-muted-foreground text-sm border-t border-border">
          <p>{content.personal.copyright}</p>
        </footer>
      </div>
    </ThemeProvider>
  )
}
