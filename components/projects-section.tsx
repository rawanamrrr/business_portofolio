"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

export function ProjectsSection() {
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

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              Our Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Project
              <span className="gradient-text block">That We're Proud Of</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here's our first project - a stunning website we created for a luxury perfume brand that showcases our
              dedication to excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="group overflow-hidden border-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm hover-lift transition-all duration-500">
              <div className="relative overflow-hidden">
                <div className="w-full h-64 md:h-80 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center relative">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white/80 mx-auto mb-4 animate-pulse" />
                    <p className="text-white/80 text-lg">Website Demo Video</p>
                    <p className="text-white/60 text-sm">Coming Soon</p>
                  </div>
                  {/* Placeholder for video - you can replace this div with actual video element */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="w-8 h-8"
                    onClick={() => window.open("http://www.sensefragrance.com", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-8">
                <Badge variant="outline" className="mb-4 text-sm">
                  Web Development & Brand Identity
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Sense Fragrance</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  A luxurious perfume brand website featuring elegant design, smooth animations, and an immersive user
                  experience that perfectly captures the essence of premium fragrances.
                </p>
                <Button
                  className="w-full md:w-auto hover-lift"
                  onClick={() => window.open("http://www.sensefragrance.com", "_blank")}
                >
                  Visit Live Website
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              This is just the beginning of our journey. More amazing projects coming soon!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
