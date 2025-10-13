import { Navigation } from "@/components/navigation"
import { FloatingNotes } from "@/components/floating-notes"
import { Heart, Star, Sparkles, Users, Award, Target, Music, Shield, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <FloatingNotes />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-br from-pink to-blue rounded-3xl shadow-xl animate-bounce-slow">
              <Heart className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            About <span className="text-primary">ToddlerPiano</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            We're passionate about helping parents choose the perfect musical instruments for their little ones. Every
            instrument is carefully selected for safety, sound quality, and creative development.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Quality First",
                description: "We only recommend trusted brands with safe materials and excellent craftsmanship",
                color: "text-primary",
                bgColor: "bg-primary/10",
              },
              {
                icon: Heart,
                title: "Child Development",
                description: "Every instrument promotes musical growth, creativity, and cognitive development",
                color: "text-secondary",
                bgColor: "bg-secondary/10",
              },
              {
                icon: Sparkles,
                title: "Pure Joy",
                description: "Bright, fun instruments that spark imagination and bring smiles to little faces",
                color: "text-accent",
                bgColor: "bg-accent/10",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 ${item.bgColor} rounded-2xl group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-10 h-10 ${item.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed font-[family-name:var(--font-nunito)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-[family-name:var(--font-nunito)]">
                At ToddlerPiano, we believe every child deserves the opportunity to explore the magical world of music.
                Our mission is to make it easy for parents to find high-quality, safe, and engaging musical instruments
                that inspire creativity and joy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
                We carefully curate each product, considering factors like age-appropriateness, durability, sound
                quality, and educational value. Our goal is to be your trusted partner in nurturing your child's musical
                journey from their very first notes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: "10,000+ Happy Families", color: "from-pink to-primary" },
                { icon: Award, label: "Top-Rated Products", color: "from-blue to-secondary" },
                { icon: Shield, label: "Safety Certified", color: "from-accent to-yellow" },
                { icon: Smile, label: "100% Satisfaction", color: "from-primary to-pink" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-3`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="font-semibold text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Parents Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Expert Curation",
                description: "Every product is hand-picked by parents and music educators",
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "All instruments meet strict safety standards for toddlers",
              },
              {
                icon: Star,
                title: "Quality Guarantee",
                description: "We only feature brands known for durability and excellence",
              },
              {
                icon: Music,
                title: "Educational Value",
                description: "Instruments designed to support musical and cognitive development",
              },
              {
                icon: Heart,
                title: "Parent Approved",
                description: "Thousands of positive reviews from satisfied families",
              },
              {
                icon: Sparkles,
                title: "Fun & Engaging",
                description: "Colorful, interactive designs that capture children's imagination",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-[family-name:var(--font-nunito)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-br from-pink via-primary to-blue rounded-3xl p-12 shadow-2xl">
            <Music className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start the Musical Journey?</h2>
            <p className="text-lg text-white/90 mb-8 font-[family-name:var(--font-nunito)]">
              Explore our carefully curated collection of musical instruments for toddlers
            </p>
            <Link href="/">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
                Browse Instruments
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
