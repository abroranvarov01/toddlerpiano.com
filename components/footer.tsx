import { Music, Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">ToddlerPiano</span>
            </div>
            <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
              Musical instruments for developing your child's creative abilities
            </p>
          </div>

          {/* Links */}
          

          

          
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground font-[family-name:var(--font-nunito)]">
          <p>&copy; 2025 ToddlerPiano.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
