"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Palette, Search, TrendingUp, Sparkles } from "lucide-react"
import { useSmartReveal } from "@/hooks/use-smart-reveal"
import { useI18n } from "@/components/locale-provider"

export function ServicesSection() {
  const isVisible = useSmartReveal({ delay: 140, maxJitter: 180 })
  const { t } = useI18n()

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      icon: Globe,
      title: t('services.item1.title'),
      description: t('services.item1.desc'),
      outcomes: [t('services.item1.o1'), t('services.item1.o2'), t('services.item1.o3'), t('services.item1.o4')],
    },
    {
      icon: Palette,
      title: t('services.item2.title'),
      description: t('services.item2.desc'),
      outcomes: [t('services.item2.o1'), t('services.item2.o2'), t('services.item2.o3'), t('services.item2.o4')],
    },
    {
      icon: Search,
      title: t('services.item3.title'),
      description: t('services.item3.desc'),
      outcomes: [t('services.item3.o1'), t('services.item3.o2'), t('services.item3.o3'), t('services.item3.o4')],
    },
    {
      icon: TrendingUp,
      title: t('services.item4.title'),
      description: t('services.item4.desc'),
      outcomes: [t('services.item4.o1'), t('services.item4.o2'), t('services.item4.o3'), t('services.item4.o4')],
    },
  ]

  return (
    <section id="services" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-muted/25 to-transparent dark:from-[#050b1e] dark:via-[#020512] dark:to-transparent" />
      <div className={`relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
        <div className="flex flex-col items-start gap-6">
          <Badge className="tagline-pill border border-border/60 bg-white/80 text-primary dark:border-white/10 dark:bg-primary/15">
            {t('services.badge')}
          </Badge>
          <h2 className="section-title text-foreground md:text-[3.25rem]">
            <span className="gradient-text-premium block">{t('services.h2_part1')}</span>
            {t('services.h2_part2')}
          </h2>
          <p className="section-subtitle text-left text-muted-foreground/85">
            {t('services.p')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="glass-panel glow-border flex flex-col gap-6 rounded-[2.5rem] border border-border/60 bg-white/85 p-10 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="flex flex-col gap-5">
              <div className="metric-chip bg-primary/10 text-primary dark:bg-primary/15">{t('services.card.metric_chip')}</div>
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">{t('services.card.h3')}</h3>
              <p className="text-sm text-muted-foreground/80">{t('services.card.p')}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  t('services.card.list1'),
                  t('services.card.list2'),
                  t('services.card.list3'),
                  t('services.card.list4'),
                ].map((line) => (
                  <div key={line} className="flex items-start gap-3 rounded-2xl border border-border/40 bg-white/70 px-4 py-4 text-sm text-muted-foreground dark:border-white/5 dark:bg-white/5">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="glass-panel hover-lift-strong group flex h-full flex-col gap-5 rounded-3xl border border-border/50 bg-white/80 p-7 backdrop-blur-md dark:border-white/10 dark:bg-white/5"
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <CardHeader className="flex flex-col gap-4 p-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/60 bg-white/80 text-primary transition group-hover:scale-105 dark:border-white/10 dark:bg-white/10">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-end gap-3 p-0">
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">{t('services.deliverables_label')}</span>
                  <ul className="space-y-2 text-sm text-muted-foreground/85">
                    {service.outcomes.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/80" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 rounded-3xl border border-border/60 bg-white/85 px-6 py-10 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="text-left text-base text-muted-foreground">{t('services.bottom.text')}</p>
          </div>
          <button className="ghost-button" onClick={() => handleScrollToSection("contact")}>
            {t('services.bottom.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}
