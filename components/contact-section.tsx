"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Facebook, Instagram, Send, Sparkles } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    {
      icon: Mail,
      label: "Email Us",
      href: "mailto:hello@digitiva.com",
      color: "from-red-500 to-orange-500",
      description: "Drop us a line anytime",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/digitiva",
      color: "from-blue-600 to-blue-700",
      description: "Connect professionally",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://facebook.com/digitiva",
      color: "from-blue-500 to-blue-600",
      description: "Follow our journey",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/digitiva",
      color: "from-pink-500 to-purple-600",
      description: "See our creative work",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              Let's Connect
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create
              <span className="gradient-text-impressive block">Something Amazing?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're excited to hear about your project and explore how we can bring your vision to life. Connect with us
              through any of these channels!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20 hover-lift mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text-impressive">Connect With Us</h3>
                  <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                </div>
                <p className="text-muted-foreground">Choose your preferred way to get in touch</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="group hover-lift transition-all duration-300 hover:scale-105 social-connect overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <social.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                          {social.label}
                        </h4>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </Card>

            {/* Animated CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6 animate-pulse-glow bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 text-white transition-all duration-500 transform hover:scale-105"
              >
                <Send className="mr-2 w-5 h-5" />
                Start Your Project Today
                <Sparkles className="ml-2 w-5 h-5 animate-sparkle" />
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-border">
            <div className="text-2xl font-bold gradient-text-impressive mb-4">Digitiva</div>
            <p className="text-muted-foreground mb-4">Where fresh ideas meet digital excellence.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
