import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    name: "Basic Piano",
    price: "$24.99",
    features: [
      { text: "15 keys", included: true },
      { text: "3 melodies", included: true },
      { text: "Light effects", included: false },
      { text: "Record melodies", included: false },
      { text: "Volume control", included: true },
    ],
    color: "border-muted",
  },
  {
    name: "Rainbow Piano",
    price: "$49.99",
    features: [
      { text: "25 keys", included: true },
      { text: "8 melodies", included: true },
      { text: "Light effects", included: true },
      { text: "Record melodies", included: true },
      { text: "Volume control", included: true },
    ],
    color: "border-primary",
    popular: true,
  },
  {
    name: "Premium Piano",
    price: "$79.99",
    features: [
      { text: "37 keys", included: true },
      { text: "15 melodies", included: true },
      { text: "Light effects", included: true },
      { text: "Record melodies", included: true },
      { text: "Volume control", included: true },
    ],
    color: "border-accent",
  },
]

export function Comparison() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Model <span className="text-primary">Comparison</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Choose the right option for your little one
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`bg-card rounded-3xl p-8 border-4 ${product.color} relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold shadow-lg">
                  POPULAR
                </div>
              )}

              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
              </div>

              <ul className="space-y-4 mb-8">
                {product.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-chart-4 flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                    <span
                      className={`font-[family-name:var(--font-nunito)] ${!feature.included && "text-muted-foreground"}`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full rounded-full" variant={product.popular ? "default" : "outline"}>
                <Link href="/reviews">Choose</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
