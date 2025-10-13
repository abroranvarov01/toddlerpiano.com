import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Anna M.",
    rating: 5,
    text: "Bought the rainbow piano for my daughter's 2nd birthday. She loves it! Plays every day and has already learned several melodies.",
    avatar: "👩",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Excellent quality! Pleasant sound, not annoying. My son has been enjoying it for six months now.",
    avatar: "👨",
  },
  {
    name: "Elena S.",
    rating: 5,
    text: "Ordered a xylophone. Arrived quickly, great packaging. The child is happy, we're satisfied!",
    avatar: "👩‍🦰",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Parent <span className="text-primary">Reviews</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Over 1,000 happy families have already chosen ToddlerPiano
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{review.avatar}</div>
                <div>
                  <h4 className="font-bold text-lg">{review.name}</h4>
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
