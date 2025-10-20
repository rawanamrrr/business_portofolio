"use client"

import { type CSSProperties } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Users, Compass, Cpu } from "lucide-react"
import { useSmartReveal } from "@/hooks/use-smart-reveal"
import { useI18n } from "@/components/locale-provider"

export function AboutSection() {
  const isVisible = useSmartReveal({ delay: 120, maxJitter: 140 })
  const { t } = useI18n()

  const stats = [
    { number: "+46%", label: t('about.stats1.label'), icon: Rocket },
    { number: "92", label: t('about.stats2.label'), icon: Users },
    { number: "11", label: t('about.stats3.label'), icon: Compass },
    { number: t('about.stats4.number'), label: t('about.stats4.label'), icon: Cpu },
  ]

  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/25 to-transparent dark:from-[#070d1d] dark:via-[#030711] dark:to-transparent" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6">
        <div
          className={`grid gap-10 lg:grid-cols-[1.1fr_0.9fr] ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={isVisible ? ({ "--fade-duration": "0.36s" } as CSSProperties) : undefined}
        >
          <div className="flex flex-col gap-8">
            <Badge className="w-max rounded-full border border-border/60 bg-white/80 px-5 py-2 text-xs uppercase tracking-[0.35em] text-muted-foreground dark:border-white/10 dark:bg-white/5 dark:text-muted-foreground/80">
              {t('about.badge')}
            </Badge>
            <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
              <span className="gradient-text-premium block">{t('about.h2_part1')}</span>
              {t('about.h2_part2')}
            </h2>
            <p className="section-subtitle text-left text-muted-foreground/90">
              {t('about.p')}
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="glass-panel glow-border animate-fade-in-up flex flex-col gap-3 rounded-3xl border border-border/60 bg-white/80 p-6 text-left backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                  style={{ animationDelay: `${index * 0.06}s`, "--fade-duration": "0.32s" } as CSSProperties}
                >
                  <stat.icon className="h-6 w-6 text-primary" />
                  <span className="text-3xl font-semibold text-foreground">{stat.number}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70">{stat.label}</span>
                </Card>
              ))}
            </div>
          </div>

          <Card
            className="glass-panel glow-border animate-fade-in-up relative flex flex-col gap-6 overflow-hidden rounded-[2.5rem] border border-border/60 bg-white/85 p-10 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
            style={isVisible ? ({ animationDelay: "0.16s", "--fade-duration": "0.4s" } as CSSProperties) : undefined}
          >
            <div className="absolute -top-16 right-0 h-40 w-40 rounded-full bg-primary/15 blur-3xl dark:bg-primary/20" />
            <div className="absolute -bottom-16 left-12 h-44 w-44 rounded-full bg-accent/15 blur-3xl dark:bg-accent/20" />
            <div className="relative flex flex-col gap-5">
              <div className="metric-chip w-max bg-white/10 text-xs text-primary">{t('about.metric_chip')}</div>
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">{t('about.card.h3')}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground/80">{t('about.card.p')}</p>
              <div className="grid gap-4">
                {[
                  t('about.card.list1'),
                  t('about.card.list2'),
                  t('about.card.list3'),
                  t('about.card.list4')
                ].map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="animate-fade-in-up flex items-center gap-3 rounded-2xl border border-border/40 bg-white/70 px-4 py-3 text-sm text-muted-foreground dark:border-white/5 dark:bg-white/5"
                    style={{ animationDelay: `${0.24 + index * 0.05}s`, "--fade-duration": "0.34s" } as CSSProperties}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
