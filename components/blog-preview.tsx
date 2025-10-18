import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "How to Choose Your Toddler's First Musical Instrument",
    excerpt: "A complete guide to selecting the right instrument based on your child's age and interests",
    image: "/toddler-with-musical-instrument-guide.jpg",
    date: "March 15, 2024",
  },
  {
    title: "5 Reasons to Start Musical Development at an Early Age",
    excerpt: "Scientific research shows the positive impact of music on children's development",
    image: "/child-brain-development-music.jpg",
    date: "March 10, 2024",
  },
  {
    title: "Top 10 Children's Songs for Learning Piano",
    excerpt: "Simple and fun melodies that are easy for beginner musicians to master",
    image: "/sheet-music-for-kids-piano.jpg",
    date: "March 5, 2024",
  },
]

export function BlogPreview() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Helpful <span className="text-primary">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Tips and recommendations for children's musical development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="text-sm text-muted-foreground font-[family-name:var(--font-nunito)]">{post.date}</div>
                <h3 className="text-xl font-bold text-balance leading-tight">{post.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
                  {post.excerpt}
                </p>
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
