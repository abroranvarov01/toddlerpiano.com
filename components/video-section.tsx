import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            See How <span className="text-primary">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Video reviews of our instruments from real parents
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((video) => (
            <div
              key={video}
              className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={`/happy-toddler-playing-musical-instrument-.jpg?height=400&width=600&query=happy toddler playing musical instrument ${video}`}
                alt={`Video ${video}`}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
