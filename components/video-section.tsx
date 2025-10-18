export function VideoSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">
            See <span className="text-primary">Happy Kids</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Real moments of joy with our musical instruments
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((image) => (
            <div
              key={image}
              className="relative group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={image === 1 ? "/happy-toddler-with-toy-instruments.jpg" : "/child-enjoying-musical-playtime.jpg"}
                alt={`Happy child playing musical instrument ${image}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
