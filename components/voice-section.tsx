"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useSmartReveal } from "@/hooks/use-smart-reveal"
import { useI18n } from "@/components/locale-provider"

export function VoicesSection() {
  const isVisible = useSmartReveal({ delay: 240, maxJitter: 240 })
  const { t } = useI18n()

  const voices = [
    {
      quote: t('voices.item1.quote'),
      author: t('voices.item1.author'),
    },
    {
      quote: t('voices.item2.quote'),
      author: t('voices.item2.author'),
    },
  ]

  return (
    <section id="voices" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-muted/25 to-transparent dark:from-[#040610] dark:via-transparent dark:to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className={`section-head max-w-2xl mx-auto text-center ${isVisible ? "visible" : ""}`} data-animate>
          <div className="badge mx-auto">{t('voices.badge')}</div>
          <h2 className="mx-auto">{t('voices.h2')}</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {voices.map((v, i) => (
            <Card
              key={i}
              className={`glass-panel glow-border relative overflow-hidden rounded-[2rem] border border-border/50 bg-white/85 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <CardContent className="flex flex-col items-center text-center gap-4">
                <div className="avatar" aria-hidden />
                <div>
                  <p className="text-lg leading-relaxed text-foreground">{v.quote}</p>
                  <div className="mt-4 text-sm text-muted-foreground">{v.author}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
