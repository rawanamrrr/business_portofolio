"use client"

import { Mail, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useI18n } from "@/components/locale-provider"
import { scrollToSection } from "@/lib/scroll-utils"

const currentYear = new Date().getFullYear()

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-white via-muted/30 to-muted/60 py-16 backdrop-blur-sm dark:border-white/10 dark:from-background/40 dark:via-background dark:to-background/80">
      <div className="absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
        <div className="absolute right-[-10%] top-[35%] h-64 w-64 rounded-full bg-accent/10 blur-3xl dark:bg-accent/15" />
        <div className="absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-[45%] bg-white/60 opacity-40 blur-3xl dark:bg-white/5" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex max-w-md flex-col gap-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.45em] text-muted-foreground/80 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-muted-foreground/70">
              <Sparkles className="h-4 w-4 text-primary" />
              Digitiva
            </div>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
              {t('footer.h2')}
            </h2>
            <p className="text-sm text-muted-foreground">{t('footer.p')}</p>
            <Button asChild className="primary-button w-max">
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}>{t('footer.cta')}</a>
            </Button>
          </div>

          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            

            <div className="flex flex-col gap-4 text-sm text-muted-foreground/80">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/60">{t('footer.navigate')}</p>
              <a href="#about" className="transition hover:text-primary" onClick={(e) => { e.preventDefault(); scrollToSection("about") }}>{t('nav.about')}</a>
              <a href="#services" className="transition hover:text-primary" onClick={(e) => { e.preventDefault(); scrollToSection("services") }}>{t('nav.capabilities')}</a>
              <a href="#projects" className="transition hover:text-primary" onClick={(e) => { e.preventDefault(); scrollToSection("projects") }}>{t('nav.work')}</a>
              <a href="#team" className="transition hover:text-primary" onClick={(e) => { e.preventDefault(); scrollToSection("team") }}>{t('nav.collective')}</a>
              <a href="#contact" className="transition hover:text-primary" onClick={(e) => { e.preventDefault(); scrollToSection("contact") }}>{t('nav.partner')}</a>
            </div>

            <div className="flex flex-col gap-4 text-sm text-muted-foreground">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/60">{t('footer.connect')}</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a className="transition hover:text-primary" href="mailto:digitivaa@gmail.com">
                  digitivaa@gmail.com
                </a>
              </p>
              <Link className="transition hover:text-primary" href="https://linkedin.com/company/digitiva" target="_blank" rel="noreferrer">
                {t('contact.social.linkedin')}
              </Link>
              <Link className="transition hover:text-primary" href="https://instagram.com/digitiva" target="_blank" rel="noreferrer">
                {t('contact.social.instagram')}
              </Link>
              <Link className="transition hover:text-primary" href="https://facebook.com" target="_blank" rel="noreferrer">
                {t('contact.social.facebook')}
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-8 text-xs text-muted-foreground dark:border-white/10">
          <p className="text-center tracking-[0.3em] uppercase">&copy; {currentYear} Digitiva. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
