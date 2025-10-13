"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <Button
      onClick={toggleTheme}
      size="icon"
      variant="outline"
      className="fixed top-4 right-4 z-50 rounded-full w-14 h-14 shadow-lg bg-transparent"
    >
      {isDark ? <Sun className="w-6 h-6 text-accent" /> : <Moon className="w-6 h-6 text-primary" />}
    </Button>
  )
}
