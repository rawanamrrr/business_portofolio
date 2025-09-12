"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Github, Mail } from "lucide-react"

export function TeamSection() {
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

  const team = [
    {
      name: "Hana Rabeea",
      role: "Co-Founder & Developer",
      bio: "A visionary developer with an extraordinary eye for detail and user experience. Hana transforms complex ideas into elegant digital solutions that captivate and inspire. Her fresh perspective from AI studies brings innovative approaches to every project.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wgPDX174t0hNIRf2YJZF4qyK18qz9N.png",
      color: "from-purple-500 via-pink-500 to-purple-600",
      social: { linkedin: "#", github: "#", email: "hana@digitiva.com" },
    },
    {
      name: "Rawan Amr",
      role: "Co-Founder & Developer",
      bio: "A creative powerhouse who breathes life into brands through stunning visual storytelling. Rawan's artistic genius combined with technical expertise creates unforgettable digital experiences that resonate deeply with audiences.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P8ACw9w7bvaCFVS4LmNejIyrAzxILl.png",
      color: "from-blue-500 via-cyan-400 to-blue-600",
      social: { linkedin: "#", github: "#", email: "rawan@digitiva.com" },
    },
    {
      name: "Zeyad Aboelennen",
      role: "Co-Founder & Developer",
      bio: "A brilliant architect of digital solutions with an unstoppable passion for innovation. Zeyad's expertise in cutting-edge technologies and AI-driven development pushes boundaries and delivers exceptional results that exceed expectations.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FIPNpEwVYeH4ta5nBdV0nei3CRxhae.png",
      color: "from-green-500 via-emerald-400 to-green-600",
      social: { linkedin: "#", github: "#", email: "zeyad@digitiva.com" },
    },
  ]

  return (
    <section id="team" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              Our Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Founders
              <span className="gradient-text-impressive block">Building the Future</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're a fresh team of passionate creators with AI expertise, ready to bring your digital vision to life
              with innovation and dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-0 bg-card hover-lift transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-80 p-4">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group-hover:animate-bounce group-hover:scale-105 transition-all duration-300">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transition-all duration-500"
                      />
                    </div>

                    <div className="absolute inset-0 overflow-visible opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full animate-float"
                          style={{
                            left: `${20 + Math.cos((i * Math.PI * 2) / 8) * 40}%`,
                            top: `${20 + Math.sin((i * Math.PI * 2) / 8) * 40}%`,
                            animationDelay: `${i * 0.2}s`,
                            animationDuration: `${2 + Math.random()}s`,
                          }}
                        />
                      ))}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex gap-3 justify-center">
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-10 h-10 social-connect backdrop-blur-sm bg-white/20 hover:bg-white/30 border-white/30"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-10 h-10 social-connect backdrop-blur-sm bg-white/20 hover:bg-white/30 border-white/30"
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                        <Button
                          size="icon"
                          variant="secondary"
                          className="w-10 h-10 social-connect backdrop-blur-sm bg-white/20 hover:bg-white/30 border-white/30"
                        >
                          <Mail className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
