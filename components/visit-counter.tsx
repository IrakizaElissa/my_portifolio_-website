"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export function VisitCounter() {
  const [visits, setVisits] = useState<number>(0)

  useEffect(() => {
    const stored = localStorage.getItem("visit-count")
    const currentVisits = stored ? parseInt(stored, 10) : 0
    const newVisits = currentVisits + 1

    setVisits(newVisits)
    localStorage.setItem("visit-count", newVisits.toString())
  }, [])

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground">
      <Eye className="w-4 h-4" />
      <span>{visits} visits</span>
    </div>
  )
}