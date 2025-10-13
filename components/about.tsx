import { Heart, Star, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <Heart className="w-12 h-12 text-primary animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            About <span className="text-primary">ToddlerPiano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            We help parents choose the perfect musical instruments for their little ones. Each instrument is carefully
            selected for safety, sound quality, and creative development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Star,
              title: "Quality",
              description: "Only trusted brands and safe materials",
              color: "text-primary",
            },
            {
              icon: Heart,
              title: "Development",
              description: "Instruments that promote musical growth",
              color: "text-secondary",
            },
            {
              icon: Sparkles,
              title: "Joy",
              description: "Bright, fun instruments that kids love",
              color: "text-accent",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-muted rounded-2xl group-hover:scale-110 transition-transform">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed font-[family-name:var(--font-nunito)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
