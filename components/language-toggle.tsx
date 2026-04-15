"use client"

import { Globe } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { usePortfolioLanguage } from "@/hooks/use-portfolio-language"

export function LanguageToggle() {
  const { language, setLanguage, content } = usePortfolioLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("mousedown", onPointerDown)
    window.addEventListener("keydown", onEscape)
    return () => {
      window.removeEventListener("mousedown", onPointerDown)
      window.removeEventListener("keydown", onEscape)
    }
  }, [])

  return (
    <div ref={ref} className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="w-9 h-9 text-muted-foreground hover:text-primary transition-colors"
        onClick={() => setOpen((value) => !value)}
        aria-label={content.ui.languageLabel}
      >
        <Globe className="h-5 w-5" />
      </Button>

      {open && (
        <div className="absolute right-0 top-12 w-44 rounded-xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-md">
          <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{content.ui.languageLabel}</p>
          {Object.entries(content.ui.languages).map(([code, label]) => (
            <button
              key={code}
              onClick={() => {
                setLanguage(code as any)
                setOpen(false)
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${
                language === code ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
              }`}
            >
              <span>{label}</span>
              <span className="text-xs uppercase">{code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
