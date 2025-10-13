"use client"

import type React from "react"
import { Navigation } from "@/components/navigation"
import { FloatingNotes } from "@/components/floating-notes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form:", formData)
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingNotes />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-block p-4 bg-primary/10 rounded-3xl mb-4">
            <MessageCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-[family-name:var(--font-nunito)]">
            Have questions about our musical instruments? We're here to help you find the perfect instrument for your
            little musician!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Email</div>
                      <a
                        href="mailto:info@toddlerpiano.com"
                        className="text-muted-foreground hover:text-primary transition-colors font-[family-name:var(--font-nunito)]"
                      >
                        info@toddlerpiano.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 transition-colors">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Phone</div>
                      <a
                        href="tel:+18001234567"
                        className="text-muted-foreground hover:text-secondary transition-colors font-[family-name:var(--font-nunito)]"
                      >
                        +1 (800) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Address</div>
                      <div className="text-muted-foreground font-[family-name:var(--font-nunito)]">
                        123 Music Street
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-blue/10 rounded-2xl group-hover:bg-blue/20 transition-colors">
                      <Clock className="w-6 h-6 text-blue" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Business Hours</div>
                      <div className="text-muted-foreground font-[family-name:var(--font-nunito)]">
                        Monday - Friday: 9:00 AM - 8:00 PM
                        <br />
                        Saturday - Sunday: 10:00 AM - 6:00 PM
                        <br />
                        <span className="text-sm">(Eastern Time)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8">
                <h3 className="font-bold text-xl mb-4">Why Contact Us?</h3>
                <ul className="space-y-3 text-muted-foreground font-[family-name:var(--font-nunito)]">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Expert advice on choosing the right instrument</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">✓</span>
                    <span>Product recommendations based on age and skill level</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">✓</span>
                    <span>Support with orders and shipping questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue mt-1">✓</span>
                    <span>Partnership and collaboration inquiries</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border/50">
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8 font-[family-name:var(--font-nunito)]">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-bold mb-2">Your Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="h-12 rounded-2xl"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Email Address *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="h-12 rounded-2xl"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Subject *</label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What is this about?"
                    className="h-12 rounded-2xl"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    className="min-h-40 rounded-2xl"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full group">
                  <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>

                <p className="text-sm text-muted-foreground text-center font-[family-name:var(--font-nunito)]">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">How long does shipping take?</h3>
              <p className="text-muted-foreground font-[family-name:var(--font-nunito)]">
                Standard shipping typically takes 5-7 business days. Express shipping options are available at checkout.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">What is your return policy?</h3>
              <p className="text-muted-foreground font-[family-name:var(--font-nunito)]">
                We offer a 30-day money-back guarantee on all products. Items must be in original condition with all
                packaging.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you offer gift wrapping?</h3>
              <p className="text-muted-foreground font-[family-name:var(--font-nunito)]">
                Yes! We offer complimentary gift wrapping on all orders. Just select the option at checkout.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Are your instruments safe for toddlers?</h3>
              <p className="text-muted-foreground font-[family-name:var(--font-nunito)]">
                All our instruments are made from non-toxic materials and meet international safety standards for
                children's toys.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
