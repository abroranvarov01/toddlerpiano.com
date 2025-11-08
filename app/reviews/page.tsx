import { Navigation } from "@/components/navigation"
import { FloatingNotes } from "@/components/floating-notes"
import { Star, Quote, ThumbsUp, Calendar, Music, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "MukikiM Rock and Roll It Play by Color Piano",
    slug: "mukikim-rock-and-roll-piano", // Added slug for routing
    image: "https://m.media-amazon.com/images/I/81r69l8pPeL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/MukikiM-Rock-Roll-play-color/dp/B071HPPSB8",
    rating: 4.4,
    reviews: 225,
    price: "$59.99",
    summary:
      "Portable, flexible piano with color-coded keys for easy learning. Great for kids to explore music anywhere.",
  },
  {
    id: 2,
    name: "Fisher-Price Classic Infant Trio Gift Set",
    slug: "fisher-price-infant-trio", // Added slug for routing
    image: "https://m.media-amazon.com/images/I/61gg-o7oPML._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Fisher-Price-Classic-Infant-Trio/dp/B07JGTNRFK",
    rating: 4.8,
    reviews: 1234,
    price: "$29.99",
    summary: "Includes xylophone, tambourine, and maracas. Perfect for infants to develop motor skills and rhythm.",
  },
  {
    id: 3,
    name: "Stoie's Musical Instruments Set for Toddlers",
    slug: "stoies-musical-instruments-set", // Added slug for routing
    image: "https://m.media-amazon.com/images/I/71cPoZ9534L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Instruments-Toddlers-Xylophone-Tambourine-Educational/dp/B0C1YDMVY9",
    rating: 4.6,
    reviews: 587,
    price: "$32.99",
    summary: "Wooden instrument set with xylophone, tambourine, and more. Safe and durable for toddler music play.",
  },
  {
    id: 4,
    name: "Keyboard & Xylophone Musical Instrument Set",
    slug: "keyboard-xylophone-set", // Added slug for routing
    image: "https://m.media-amazon.com/images/I/71sU6VdZH2L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Keyboard-Xylophone-Instrument-Learning-Developmental/dp/B07WNJY42C",
    rating: 4.3,
    reviews: 412,
    price: "$39.99",
    summary: "Dual keyboard and xylophone toy for kids. Encourages musical creativity and early learning.",
  },
  {
    id: 5,
    name: "Loog Mini Acoustic Guitar for Children",
    slug: "loog-mini-acoustic-guitar", // Added slug for routing
    image: "https://m.media-amazon.com/images/I/714ZXMfWbXL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Loog-Acoustic-Guitar-Children-Beginners/dp/B072B9V2KB",
    rating: 4.7,
    reviews: 896,
    price: "$89.00",
    summary: "3-string acoustic guitar designed for kids. Easy to play with app-based learning support.",
  },
  {
    id: 6,
    name: "Electric Drum Set with Recording",
    slug: "electric-drum-set", // Added slug for routing
    image: "https://m.media-amazon.com/images/I/71tKXDqEnIL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Electric-Electronic-Practice-Recording-Speaker/dp/B0B2JFZYZK",
    rating: 4.5,
    reviews: 321,
    price: "$69.99",
    summary: "Electronic drum set with recording feature and built-in speaker. Ideal for young drummers.",
  },
  {
    id: 7,
    name: "Fisher-Price Deluxe Kick & Play Piano Gym",
    slug: "fisher-price-piano-gym", // Added slug for routing
    image: "https://m.media-amazon.com/images/I/81CXYaraFDL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Fisher-Price-Playmat-Musical-Learning-Content/dp/B0CBQXD4PG",
    rating: 4.8,
    reviews: 2456,
    price: "$49.99",
    summary: "Musical playmat with piano keys for infants. Promotes sensory development with lights and sounds.",
  },
  {
    id: 8,
    name: "TAIMASI Musical Instruments Set",
    slug: "taimasi-instruments-set", // Added slug for routing
    image: "https://m.media-amazon.com/images/I/817-cDUVLWL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/TAIMASI-Instruments-Percussion-Tambourine-Xylophone/dp/B07W4H8N39",
    rating: 4.5,
    reviews: 672,
    price: "$29.99",
    summary: "Comprehensive percussion set with tambourine, xylophone, and more. Great for group play.",
  },
  {
    id: 9,
    name: "BlueWood Triangle Foldable Climbing Montessori",
    slug: "bluewood-climbing-triangle", // Added slug for routing
    image: "https://m.media-amazon.com/images/I/716Wr3MdeKL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/BlueWood-Triangle-Foldable-Climbing-Montessori/dp/B0CT5GC65G",
    rating: 4.6,
    reviews: 134,
    price: "$129.99",
    summary: "Montessori climbing triangle with musical elements. Encourages physical and sensory development.",
  },
]

const allReviews = [
  {
    name: "Anna M.",
    rating: 5,
    date: "March 15, 2024",
    product: "MukikiM Rock and Roll It Play by Color Piano",
    text: "Bought this piano for my daughter's 2nd birthday. She loves it! Plays every day and has already learned several melodies. The sound quality is excellent and not annoying at all.",
    avatar: "👩",
    helpful: 24,
  },
  {
    name: "David K.",
    rating: 5,
    date: "March 10, 2024",
    product: "Fisher-Price Classic Infant Trio Gift Set",
    text: "Excellent quality! Pleasant sound, not annoying. My son has been enjoying it for six months now. Very durable and well-made.",
    avatar: "👨",
    helpful: 18,
  },
  {
    name: "Elena S.",
    rating: 5,
    date: "March 8, 2024",
    product: "Stoie's Musical Instruments Set for Toddlers",
    text: "Ordered this set. Arrived quickly, great packaging. The child is happy, we're satisfied! The colors are vibrant and engaging.",
    avatar: "👩‍🦰",
    helpful: 15,
  },
  {
    name: "Michael T.",
    rating: 5,
    date: "March 5, 2024",
    product: "Electric Drum Set with Recording",
    text: "My 3-year-old absolutely loves this drum set! It's the perfect size for little hands and the sound is surprisingly good. Great for developing rhythm skills.",
    avatar: "👨‍🦱",
    helpful: 21,
  },
  {
    name: "Sarah L.",
    rating: 4,
    date: "March 1, 2024",
    product: "Loog Mini Acoustic Guitar for Children",
    text: "Nice little guitar for toddlers. My daughter enjoys strumming it. Only wish it came with a strap, but overall very happy with the purchase.",
    avatar: "👩‍🦱",
    helpful: 12,
  },
  {
    name: "James P.",
    rating: 5,
    date: "February 28, 2024",
    product: "TAIMASI Musical Instruments Set",
    text: "Bought the complete set for my twins. Best decision ever! They play together and it's helping them learn to share. Quality is top-notch.",
    avatar: "👨‍🦲",
    helpful: 30,
  },
  {
    name: "Lisa W.",
    rating: 5,
    date: "February 25, 2024",
    product: "MukikiM Rock and Roll It Play by Color Piano",
    text: "This piano is amazing! The keys light up when pressed which my son finds fascinating. He's learning colors and music at the same time.",
    avatar: "👩‍🦳",
    helpful: 19,
  },
  {
    name: "Robert H.",
    rating: 5,
    date: "February 20, 2024",
    product: "Electric Drum Set with Recording",
    text: "Sturdy construction and fun design. My daughter has been drumming for weeks and it still looks brand new. Highly recommend!",
    avatar: "👨‍🦰",
    helpful: 16,
  },
  {
    name: "Maria G.",
    rating: 5,
    date: "February 15, 2024",
    product: "Fisher-Price Classic Infant Trio Gift Set",
    text: "Beautiful xylophone with a lovely tone. My 18-month-old is learning to make music and it's wonderful to watch. Great educational toy!",
    avatar: "👩",
    helpful: 22,
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingNotes />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold text-balance">
            Customer <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Read what parents are saying about ToddlerPiano instruments
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">1,000+</div>
              <div className="text-muted-foreground font-[family-name:var(--font-nunito)]">Happy Families</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-accent text-accent" />
                ))}
              </div>
              <div className="text-muted-foreground font-[family-name:var(--font-nunito)]">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground font-[family-name:var(--font-nunito)]">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Reviews Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Product <span className="text-primary">Reviews</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
              Explore detailed reviews for each of our musical instruments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/reviews/${product.slug}`}
                className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 bg-gradient-to-br from-pink/10 via-blue/10 to-accent/10">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{product.name}</h3>
                    <Music className="w-6 h-6 text-primary" />
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < product.rating ? "fill-accent text-accent" : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground font-[family-name:var(--font-nunito)]">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
                    {product.summary}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read Reviews
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Customer <span className="text-primary">Testimonials</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
              What parents are saying about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allReviews.map((review, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/20" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{review.avatar}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <div className="flex gap-1 mb-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="font-[family-name:var(--font-nunito)]">{review.date}</span>
                </div>

                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {review.product}
                </div>

                <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)] mb-4">
                  {review.text}
                </p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4 border-t border-border">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="font-[family-name:var(--font-nunito)]">
                    {review.helpful} people found this helpful
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-pink/20 via-blue/20 to-accent/20 rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Share Your <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
              Have you purchased from ToddlerPiano? We'd love to hear your feedback!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Write a Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
