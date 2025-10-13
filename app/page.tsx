import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { ProductCategories } from "@/components/product-categories"
import { TopProduct } from "@/components/top-product"
import { Benefits } from "@/components/benefits"
import { VideoSection } from "@/components/video-section"
import { Comparison } from "@/components/comparison"
import { Reviews } from "@/components/reviews"
import { BlogPreview } from "@/components/blog-preview"
import { Newsletter } from "@/components/newsletter"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingNotes } from "@/components/floating-notes"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navigation />
      <FloatingNotes />
      <ThemeToggle />
      <Hero />
      <About />
      <ProductCategories />
      <TopProduct />
      <Benefits />
      <VideoSection />
      <Comparison />
      <Reviews />
      <BlogPreview />
      <Newsletter />
      <Contact />
      <Footer />
      <CookieBanner />
    </main>
  )
}
