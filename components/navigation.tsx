"use client"

import { useState, useEffect } from "react"
import { Music } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`
      return
    }

    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group transition-transform hover:scale-105"
          >
            <div className="bg-gradient-to-br from-pink to-blue p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading text-xl font-bold text-foreground">ToddlerPiano</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground/80 hover:text-foreground font-medium transition-colors"
            >
              Home
            </button>
            <Link href="/reviews" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Reviews
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-foreground font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
