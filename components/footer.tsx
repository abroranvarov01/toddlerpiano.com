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
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2 font-[family-name:var(--font-nunito)]">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Pianos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Xylophones
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Drums
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Guitars
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul className="space-y-2 font-[family-name:var(--font-nunito)]">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Social Media</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, color: "hover:text-primary" },
                { icon: Facebook, color: "hover:text-secondary" },
                { icon: Youtube, color: "hover:text-accent" },
                { icon: Twitter, color: "hover:text-chart-4" },
              ].map((social, index) => (
                <a key={index} href="#" className={`p-3 bg-muted rounded-2xl ${social.color} transition-colors`}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground font-[family-name:var(--font-nunito)]">
          <p>&copy; 2025 ToddlerPiano.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
