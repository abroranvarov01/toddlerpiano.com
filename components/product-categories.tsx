import { Music2, Drum, Guitar, Piano } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  {
    icon: Piano,
    title: "Pianos",
    description: "Keyboard instruments for first melodies",
    color: "bg-primary/10 hover:bg-primary/20",
    iconColor: "text-primary",
    count: "15+ models",
  },
  {
    icon: Music2,
    title: "Xylophones",
    description: "Colorful xylophones for ear training",
    color: "bg-secondary/10 hover:bg-secondary/20",
    iconColor: "text-secondary",
    count: "12+ models",
  },
  {
    icon: Drum,
    title: "Drums",
    description: "Percussion instruments for rhythm",
    color: "bg-accent/10 hover:bg-accent/20",
    iconColor: "text-accent",
    count: "10+ models",
  },
  {
    icon: Guitar,
    title: "Guitars",
    description: "Kids guitars and ukuleles",
    color: "bg-chart-4/10 hover:bg-chart-4/20",
    iconColor: "text-chart-4",
    count: "8+ models",
  },
]

export function ProductCategories() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Instrument <span className="text-primary">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Choose the perfect instrument for your little one
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.color} rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-card rounded-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <category.icon className={`w-12 h-12 ${category.iconColor}`} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-3">{category.title}</h3>
              <p className="text-muted-foreground text-center mb-4 leading-relaxed font-[family-name:var(--font-nunito)]">
                {category.description}
              </p>
              <p className="text-center text-sm font-semibold text-foreground/70">{category.count}</p>
              <div className="mt-6 flex justify-center">
                <Button variant="outline" className="rounded-full bg-transparent" asChild>
                  <Link href="/reviews">View All</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
