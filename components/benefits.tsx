import { Shield, Truck, Award, HeadphonesIcon } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Safety",
    description: "All instruments are certified and safe for children",
    color: "bg-primary/10",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Delivery across the US in 2-5 days",
    color: "bg-secondary/10",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "1-year warranty on all products",
    color: "bg-accent/10",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Always ready to help with your choice",
    color: "bg-chart-4/10",
  },
]

export function Benefits() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            Why <span className="text-primary">Choose Us</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`${benefit.color} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-card rounded-2xl shadow-md">
                  <benefit.icon className="w-10 h-10 text-foreground" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed font-[family-name:var(--font-nunito)]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
