"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Sparkles } from "lucide-react"
import { useSmartReveal } from "@/hooks/use-smart-reveal"
import { useI18n } from "@/components/locale-provider"

export function TeamSection() {
  const isVisible = useSmartReveal({ delay: 200, maxJitter: 240 })
  const { t } = useI18n()

  const team = [
    {
      name: "Hana Rabeea",
      role: "Co-Founder & Developer",
      bio: "A visionary developer with an extraordinary eye for detail and user experience. Hana transforms complex ideas into elegant digital solutions that captivate and inspire. Her fresh perspective from AI studies brings innovative approaches to every project.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wgPDX174t0hNIRf2YJZF4qyK18qz9N.png",
      color: "from-purple-500 via-pink-500 to-purple-600",
      social: { linkedin: "https://www.linkedin.com/in/hana-rabeea-771619240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", email: "hanarabeea707@gmail.com" },
    },
    {
      name: "Rawan Amr",
      role: "Co-Founder & Developer",
      bio: "A creative powerhouse who breathes life into brands through stunning visual storytelling. Rawan's artistic genius combined with technical expertise creates unforgettable digital experiences that resonate deeply with audiences.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P8ACw9w7bvaCFVS4LmNejIyrAzxILl.png",
      color: "from-blue-500 via-cyan-400 to-blue-600",
      social: { linkedin: "https://www.linkedin.com/in/rawan-amr-a28b5624b", email: "rawanamr20002@icloud.com" },
    },
    {
      name: "Zeyad Abo Eleneen",
      role: "Co-Founder & Developer",
      bio: "A brilliant architect of digital solutions with an unstoppable passion for innovation. Zeyad's expertise in cutting-edge technologies and AI-driven development pushes boundaries and delivers exceptional results that exceed expectations.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FIPNpEwVYeH4ta5nBdV0nei3CRxhae.png",
      color: "from-green-500 via-emerald-400 to-green-600",
      social: { linkedin: "http://linkedin.com/in/zeyad-abo-eleneen-b636b6282", email: "zeyad5zoks@gmail.com" },
    },
  ]

  return (
    <section id="team" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/25 to-transparent dark:from-[#050b1d] dark:via-[#020511] dark:to-transparent" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6">
        <div className={`flex flex-col items-center gap-6 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <Badge className="tagline-pill border border-border/60 bg-white/80 text-accent-foreground dark:border-white/10 dark:bg-accent/20">
            {t('team.badge')}
          </Badge>
          <h2 className="section-title text-foreground md:text-[3.25rem]">
            {t('team.h2')}
          </h2>
          <p className="section-subtitle text-muted-foreground/85">{t('team.p')}</p>
        </div>

        <div className={`grid gap-8 md:grid-cols-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
          {team.map((member, index) => (
            <Card
              key={member.name}
              className="glass-panel glow-border group flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-border/50 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative flex h-80 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent dark:from-white/10 dark:via-white/5" />
                <div className="relative h-64 w-64 overflow-hidden rounded-full border border-border/50 dark:border-white/15">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute bottom-6 flex w-full justify-center gap-3">
                  {[
                    { type: 'linkedin', url: member.social.linkedin },
                    { type: 'email', url: member.social.email }
                  ].map(({ type, url }, idx) => {
                    const icons = [Linkedin, Mail]
                    const Icon = icons[idx]
                    return (
                      <Button
                        key={`${member.name}-${type}`}
                        size="icon"
                        variant="secondary"
                        className="h-11 w-11 rounded-full border border-border/40 bg-white/80 text-muted-foreground backdrop-blur transition hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white/80"
                        onClick={() => {
                          if (!url || url === "#") return
                          if (type === 'email') {
                            window.location.href = `mailto:${url}`
                            return
                          }
                          window.open(url, "_blank")
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </Button>
                    )
                  })}
                </div>
              </div>
              <CardContent className="flex flex-1 flex-col gap-4 p-8 text-left">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">{t('team.founder_label')}</p>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-accent-foreground/90">{
                  t(
                    member.name === "Hana Rabeea"
                      ? 'team.member.hana.role'
                      : member.name === "Rawan Amr"
                        ? 'team.member.rawan.role'
                        : 'team.member.zeyad.role'
                  )
                }</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{
                  t(
                    member.name === "Hana Rabeea"
                      ? 'team.member.hana.bio'
                      : member.name === "Rawan Amr"
                        ? 'team.member.rawan.bio'
                        : 'team.member.zeyad.bio'
                  )
                }</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
