"use client"

import { useInView } from "@/hooks/use-in-view"
import { Mail, Github, Linkedin, MapPin, Clock, Twitter, Instagram, Send } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import data from "@/data/portfolio.json"

export function ContactSection() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const socialLinks = [
    data.personal.github ? { href: data.personal.github, icon: Github, label: "GitHub" } : null,
    data.personal.linkedin ? { href: data.personal.linkedin, icon: Linkedin, label: "LinkedIn" } : null,
    data.personal.x ? { href: data.personal.x, icon: Twitter, label: "X" } : null,
    data.personal.instagram ? { href: data.personal.instagram, icon: Instagram, label: "Instagram" } : null,
    { href: `mailto:${data.personal.email}`, icon: Mail, label: "Email" },
  ].filter(Boolean) as { href: string; icon: typeof Github; label: string }[]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" ref={ref} className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-sm uppercase tracking-wider text-primary mb-4 font-mono">{data.contact.sectionTitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{data.contact.heading}</h3>
          <p className="text-muted-foreground max-w-lg mx-auto">{data.contact.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="bg-card border border-border rounded-xl p-8">
              <h4 className="text-xl font-semibold text-foreground mb-6">Send me a message</h4>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h5 className="text-lg font-medium text-foreground mb-2">Message sent!</h5>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div
            className={`space-y-8 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${data.personal.email}`}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {data.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                  <p className="text-foreground">{data.personal.availability}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">{data.personal.location}</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-xl">
              <p className="text-muted-foreground text-center mb-6">Find me on</p>
              <div className="flex flex-wrap gap-4 justify-center">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                      className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
