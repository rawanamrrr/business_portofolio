"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Sparkles } from "lucide-react"
import { useSmartReveal } from "@/hooks/use-smart-reveal"
import { useI18n } from "@/components/locale-provider"

export function ProjectsSection() {
  const isVisible = useSmartReveal({ delay: 180, maxJitter: 200 })
  const { t } = useI18n()

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/25 to-transparent dark:from-[#040714] dark:via-[#050b1f] dark:to-transparent" />
      <div className={`relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="flex flex-col items-start gap-6">
          <Badge className="tagline-pill border border-border/60 bg-white/80 text-accent-foreground dark:border-white/10 dark:bg-accent/20">Featured Projects</Badge>
          <h2 className="section-title text-foreground md:text-[3.25rem]">
            <span className="gradient-text-premium block">Our Recent Work</span>
            Crafting digital experiences that inspire.
          </h2>
          <p className="section-subtitle text-left text-muted-foreground">Explore our latest projects showcasing innovation, design excellence, and technical mastery.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <Card className="glass-panel glow-border relative overflow-hidden rounded-[2.75rem] border border-border/60 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="absolute -left-12 top-10 h-48 w-48 rounded-full bg-primary/15 blur-3xl dark:bg-primary/25" />
            <div className="absolute -right-16 bottom-4 h-56 w-56 rounded-full bg-accent/15 blur-3xl dark:bg-accent/20" />
            <div className="relative">
              <div className="relative h-80 w-full overflow-hidden md:h-[26rem] bg-gradient-to-br from-primary/15 via-accent/15 to-muted/40 dark:from-primary/25 dark:via-accent/25 dark:to-background/60">
                <video 
                  className="h-full w-full object-contain"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/sense-video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="relative p-10">
                <div className="flex flex-col gap-4 mb-6">
                  <h3 className="text-3xl font-semibold text-foreground">
                    <span className="gradient-text-premium">{t('projects.title')}</span>
                  </h3>
                  <p className="text-lg text-muted-foreground">{t('projects.subtitle')}</p>
                  <p className="text-sm text-muted-foreground">{t('projects.description')}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="flex flex-col gap-5">
                    <div className="metric-chip w-max bg-primary/10 text-primary dark:bg-white/10">{t('projects.metric_chip')}</div>
                    <h4 className="text-xl font-semibold text-foreground">{t('projects.h3')}</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[t('projects.impact1'), t('projects.impact2'), t('projects.impact3')].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4 rounded-3xl border border-border/40 bg-white/80 p-6 text-sm text-muted-foreground backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between">
                      <span>{t('projects.launch_timeline')}</span>
                      <span className="text-foreground font-semibold">{t('projects.launch_timeline_value')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{t('projects.disciplines')}</span>
                      <span className="text-foreground font-semibold">{t('projects.disciplines_value')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{t('projects.deliverables')}</span>
                      <span className="text-foreground font-semibold">{t('projects.deliverables_value')}</span>
                    </div>
                    <Button
                      className="primary-button justify-center"
                      onClick={() => window.open("http://www.sensefragrance.com", "_blank")}
                    >
                      {t('projects.button_visit')}
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass-panel glow-border relative overflow-hidden rounded-[2.75rem] border border-border/60 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="absolute -left-12 top-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl dark:bg-accent/20" />
            <div className="absolute -right-16 bottom-4 h-56 w-56 rounded-full bg-primary/15 blur-3xl dark:bg-primary/25" />
            <div className="relative">
              <div className="relative h-80 w-full overflow-hidden md:h-[26rem] bg-gradient-to-br from-accent/15 via-primary/15 to-muted/40 dark:from-accent/25 dark:via-primary/25 dark:to-background/60">
                <video 
                  className="h-full w-full object-contain"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/engagement-video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="relative p-10">
                <div className="flex flex-col gap-4 mb-6">
                  <h3 className="text-3xl font-semibold text-foreground">
                    <span className="gradient-text-premium">{t('projects.engagement.title')}</span>
                  </h3>
                  <p className="text-lg text-muted-foreground">{t('projects.engagement.subtitle')}</p>
                  <p className="text-sm text-muted-foreground">{t('projects.engagement.description')}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="flex flex-col gap-5">
                    <div className="metric-chip w-max bg-accent/10 text-accent dark:bg-white/10">{t('projects.engagement.metric_chip')}</div>
                    <h4 className="text-xl font-semibold text-foreground">{t('projects.engagement.h3')}</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[t('projects.engagement.impact1'), t('projects.engagement.impact2'), t('projects.engagement.impact3')].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4 rounded-3xl border border-border/40 bg-white/80 p-6 text-sm text-muted-foreground backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-center justify-between">
                      <span>{t('projects.engagement.launch_timeline')}</span>
                      <span className="text-foreground font-semibold">{t('projects.engagement.launch_timeline_value')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{t('projects.engagement.disciplines')}</span>
                      <span className="text-foreground font-semibold">{t('projects.engagement.disciplines_value')}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{t('projects.engagement.deliverables')}</span>
                      <span className="text-foreground font-semibold">{t('projects.engagement.deliverables_value')}</span>
                    </div>
                    <Button
                      className="primary-button justify-center"
                      onClick={() => window.open("https://zeyadandrawan.site", "_blank")}
                    >
                      {t('projects.engagement.button_visit')}
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

