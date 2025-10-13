"use client"

import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"
import { useState, useEffect } from "react"

export function CookieBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted")
    if (!accepted) {
      setShow(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-card border-2 border-primary rounded-3xl p-6 shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
            <Cookie className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-3 flex-1">
            <h4 className="font-bold">We use cookies</h4>
            <p className="text-sm text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
              To improve site performance and personalize your experience
            </p>
            <div className="flex gap-3">
              <Button onClick={acceptCookies} size="sm" className="rounded-full">
                Accept
              </Button>
              <Button onClick={() => setShow(false)} size="sm" variant="outline" className="rounded-full">
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
