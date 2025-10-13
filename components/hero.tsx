"use client"

import { Button } from "@/components/ui/button"
import { Music, Sparkles } from "lucide-react"
import { PianoKeys } from "./piano-keys"
import Link from "next/link"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Animated sparkle icon */}
          <div className="flex justify-center">
            <div className="animate-bounce-gentle">
              <Sparkles className="w-16 h-16 text-primary" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-balance leading-tight">
            <span className="text-primary">Music</span> <span className="text-secondary">for</span>{" "}
            <span className="text-accent">Toddlers</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Discover the world of music with ToddlerPiano! The best instruments for developing your child's creative
            abilities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full animate-glow group" asChild>
              <Link href="/reviews">
                <Music className="mr-2 group-hover:rotate-12 transition-transform" />
                Choose Instrument
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          {/* Interactive Piano Keys */}
          <div className="pt-12">
            <PianoKeys />
          </div>
        </div>
      </div>

      {/* Decorative musical notes */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">🎵</div>
      <div className="absolute bottom-32 right-20 text-5xl animate-float opacity-20" style={{ animationDelay: "1s" }}>
        🎶
      </div>
      <div className="absolute top-40 right-32 text-4xl animate-float opacity-20" style={{ animationDelay: "2s" }}>
        🎼
      </div>
    </section>
  )
}
