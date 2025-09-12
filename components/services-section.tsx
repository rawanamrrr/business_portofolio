"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Palette, Search, TrendingUp } from "lucide-react"

export function ServicesSection() {
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

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites built with modern technology for optimal performance and user experience.",
      features: ["Responsive Design", "Fast Loading", "Modern Frameworks", "Mobile-First"],
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete brand identity solutions that capture your essence and resonate with your audience.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
      color: "from-purple-500/10 to-pink-500/10",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your online visibility and reach more customers with our SEO strategies.",
      features: ["Search Optimization", "Keyword Research", "Technical SEO", "Performance Tracking"],
      color: "from-green-500/10 to-emerald-500/10",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to grow your online presence and engage your audience.",
      features: ["Social Media", "Content Strategy", "Analytics", "Growth Optimization"],
      color: "from-orange-500/10 to-red-500/10",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Do Best
              <span className="gradient-text-impressive block">Fresh & Focused</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As a new company, we focus on delivering exceptional results in the areas where we excel most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover-lift transition-all duration-500 border-0 bg-gradient-to-br ${service.color} backdrop-blur-sm ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
