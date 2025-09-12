"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Users, Code, Sparkles } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "100%", label: "Client Satisfaction", icon: Sparkles },
    { number: "100%", label: "Passion & Dedication", icon: Rocket },
    { number: "3", label: "Talented Founders", icon: Users },
    { number: "Fresh", label: "Innovative Approach", icon: Code },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fresh Minds, Bold Ideas
              <span className="gradient-text-impressive block">Just Getting Started</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a brand new company with fresh perspectives and unlimited passion. Though we're just starting our
              journey, we bring innovative ideas and dedication to every project we touch.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`p-6 text-center hover-lift transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold gradient-text-impressive mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-r from-accent/5 to-secondary/5 border-accent/20 hover-lift">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text-impressive">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-6">
                <span className="text-pretty">
                  We envision a digital world where every brand has the power to tell their unique story through
                  breathtaking design and flawless functionality. In a landscape dominated by the ordinary, we dare to
                  be extraordinary. We believe that behind every pixel, every line of code, and every creative decision
                  lies the potential to move hearts, change minds, and transform businesses.
                </span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                <span className="text-pretty">
                  Though we're new to this journey, our dreams are boundless. We're not just building websites – we're
                  crafting digital experiences that will make people stop, stare, and remember. Every project is our
                  chance to prove that fresh perspectives and unwavering passion can create something truly magical.
                  This is just the beginning of our story, and we can't wait to write it with you.
                </span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
