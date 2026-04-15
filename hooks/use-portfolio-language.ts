"use client"

import { useEffect, useState } from "react"
import { portfolioContent, type Language } from "@/data/portfolio-content"

const STORAGE_KEY = "portfolio-language"

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "fr" || value === "rw"
}

export function usePortfolioLanguage() {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguage(stored)) {
      setLanguage(stored)
      return
    }

    const browserLanguage = window.navigator.language.toLowerCase()
    if (browserLanguage.startsWith("fr")) {
      setLanguage("fr")
    } else if (browserLanguage.startsWith("rw")) {
      setLanguage("rw")
    }
  }, [])

  const updateLanguage = (value: Language) => {
    setLanguage(value)
    window.localStorage.setItem(STORAGE_KEY, value)
  }

  return {
    language,
    setLanguage: updateLanguage,
    content: portfolioContent[language],
  }
}
