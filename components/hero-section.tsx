"use client"

import { useEffect, useState, type CSSProperties } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ShieldCheck, Zap, LayoutTemplate } from "lucide-react"
import { useI18n } from "@/components/locale-provider"
import { scrollToSection } from "@/lib/scroll-utils"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useI18n()

  const capabilityLines = [
    "hero.capabilities.list1",
    "hero.capabilities.list2",
    "hero.capabilities.list3",
    "hero.capabilities.list4",
  ] as const

  const capabilityMetrics = [
    {
      label: "hero.capabilities.metric1.label",
      value: "hero.capabilities.metric1.value",
    },
    {
      label: "hero.capabilities.metric2.label",
      value: "hero.capabilities.metric2.value",
    },
  ] as const

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-white via-muted/30 to-muted/60 dark:from-background dark:via-[#060b24] dark:to-[#090c2e]">
      <div className="absolute inset-0">
        <div className="absolute right-[-10%] top-1/3 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-accent/15 via-primary/15 to-transparent blur-3xl dark:from-accent/30 dark:via-primary/20" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 py-28 lg:flex-row lg:items-center lg:justify-between">

        <div
          className={`flex flex-1 flex-col gap-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={isVisible ? ({ "--fade-duration": "0.42s" } as CSSProperties) : undefined}
        >
          

          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-foreground md:text-6xl lg:text-7xl">
              <span className="gradient-text-premium block">{t('hero.headline_part1')}</span>{" "}
              {t('hero.headline_part2')}
            </h1>
          </div>

          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            {t('hero.subtext')}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="primary-button" size="lg" onClick={() => scrollToSection("contact")}>
              {t('hero.cta_primary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button className="ghost-button" size="lg" variant="outline" onClick={() => scrollToSection("projects")}>
              {t('hero.cta_secondary')}
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 text-sm text-muted-foreground sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: t('hero.feat1.title'), description: t('hero.feat1.desc') },
              { icon: Zap, label: t('hero.feat2.title'), description: t('hero.feat2.desc') },
              { icon: LayoutTemplate, label: t('hero.feat3.title'), description: t('hero.feat3.desc') },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`glass-panel glow-border ${isVisible ? "animate-fade-in-up" : "opacity-0"} flex flex-col gap-2 rounded-2xl p-5`}
                style={{ animationDelay: `${0.14 + index * 0.05}s`, "--fade-duration": "0.32s" } as CSSProperties}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
                <span className="text-xs text-muted-foreground/80">{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`relative flex flex-1 items-center justify-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={isVisible ? ({ animationDelay: "0.18s", "--fade-duration": "0.46s" } as CSSProperties) : undefined}
        >
          <div className="glass-panel hover-lift-strong relative w-full max-w-lg overflow-hidden rounded-[2.5rem] border border-border/60 bg-white/85 p-8 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="absolute -bottom-16 left-20 h-44 w-44 rounded-full bg-accent/20 blur-3xl dark:bg-accent/25" />

            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="section-heading text-xs text-muted-foreground/70">{t("hero.capabilities.badge")}</p>
                  <h2 className="text-2xl font-semibold text-foreground">{t("hero.capabilities.title")}</h2>
                </div>
                <div className="metric-chip">Q4 / 2025</div>
              </div>

              <div className="grid gap-4">
                {capabilityLines.map((lineKey) => (
                  <div key={lineKey} className="flex items-center gap-3 rounded-2xl border border-border/40 bg-white/75 px-4 py-3 text-sm text-muted-foreground backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    {t(lineKey)}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground/80">
                {capabilityMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-border/40 bg-white/70 px-4 py-3 text-muted-foreground dark:border-white/10 dark:bg-white/5">
                    <p className="text-foreground/70">{t(metric.label)}</p>
                    <p className="text-2xl font-semibold text-foreground">{t(metric.value)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-muted-foreground/70 md:flex">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
        {t('hero.scroll_hint')}
      </div>
    </section>
  )
}
