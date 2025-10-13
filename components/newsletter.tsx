"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-[3rem] p-12 text-center space-y-8">
          <div className="flex justify-center">
            <div className="p-6 bg-card rounded-3xl shadow-lg animate-bounce-gentle">
              <Mail className="w-12 h-12 text-primary" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            Subscribe to Our <span className="text-primary">Newsletter</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Get exclusive discounts, news about new products, and helpful tips for your child's musical development
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 rounded-full px-6 text-lg"
              required
            />
            <Button type="submit" size="lg" className="rounded-full px-8">
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-muted-foreground font-[family-name:var(--font-nunito)]">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
