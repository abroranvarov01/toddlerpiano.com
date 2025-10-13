import { Button } from "@/components/ui/button"
import { Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export function TopProduct() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-bounce-gentle">
                BEST SELLER!
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-xl">
                <img
                  src="/colorful-toy-piano-for-toddlers.jpg"
                  alt="Kids Piano"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
                  Rainbow <span className="text-primary">Piano</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
                  The most popular piano for toddlers! 25 keys, 8 built-in melodies, light effects, and safe materials.
                </p>
              </div>

              <ul className="space-y-3 font-[family-name:var(--font-nunito)]">
                {["25 colorful keys", "8 built-in melodies", "Light effects", "Safe plastic", "Ages: 1-5 years"].map(
                  (feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ),
                )}
              </ul>

              <div className="flex gap-4 pt-4">
                <Button size="lg" className="flex-1 text-lg py-6 rounded-full" asChild>
                  <Link href="/reviews">
                    <ArrowRight className="mr-2" />
                    Read More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
