"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"
import { LanguageToggle } from "@/components/language-toggle"
import { useI18n } from "@/components/locale-provider"
import { scrollToSection as scrollToSectionUtil } from "@/lib/scroll-utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useI18n()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigate = (sectionId: string) => {
    // Scroll immediately first
    scrollToSectionUtil(sectionId)
    // Then close menu if it's open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 transition-all duration-500 ${
          isScrolled
            ? "bg-background shadow-xl shadow-black/20 rounded-3xl border border-border/60 dark:bg-background nav-scrolled"
            : "bg-white shadow-lg border border-border/50 rounded-3xl dark:bg-background dark:border-white/10 nav-top"
        }`}
      >
        <div className="flex items-center gap-4 py-3">
          <button
            className="flex items-center gap-4 rounded-2xl bg-white px-4 py-2 text-left text-foreground shadow-sm transition hover:bg-white/95 dark:bg-white/5 dark:text-white"
            aria-label={t('nav.go_to_top')}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-primary/25">
              <Image src="/digitiva-logo.png" alt="Digitiva" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="gradient-text-premium text-base font-semibold tracking-tight sm:text-xl">Digitiva</span>
              <span className="section-heading hidden text-[11px] tracking-[0.35em] text-muted-foreground/80 sm:inline">{t('nav.brand_subtagline')}</span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-2 rounded-full border border-border/40 bg-white px-4 py-2 text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.45em]">{t('nav.tagline')}</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 py-3">
          {([{ key: 'nav.about', id: 'about' }, { key: 'nav.capabilities', id: 'services' }, { key: 'nav.work', id: 'projects' }, { key: 'nav.collective', id: 'team' }, { key: 'nav.partner', id: 'contact' }] as const).map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavigate(item.id)}
              className="nav-link text-foreground"
              aria-current={false}
            >
              {t(item.key)}
            </button>
          ))}

          <div className="flex items-center gap-3">
            <LanguageToggle />
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label={t('nav.aria_toggle_theme')}
                className="rounded-full border border-border/40 bg-white p-2 text-primary transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            )}
            <Button
              className="primary-button px-5 py-2"
              onClick={() => handleNavigate("contact")}
            >
              {t('nav.start_project')}
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden py-3">
          <LanguageToggle />
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={t('nav.aria_toggle_theme')}
              className="rounded-full border border-white/10 bg-white/5 p-2 text-primary transition hover:bg-white/10"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}
          <Button variant="ghost" size="icon" className="rounded-full border border-white/10 bg-white/5" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
      <div
        className="relative mx-auto mt-3 max-w-6xl px-4 transition-all duration-500 md:hidden opacity-100 z-50"
      >
        <div className="overflow-hidden rounded-3xl border border-border/50 bg-white px-6 py-6 shadow-xl dark:border-white/10 dark:bg-background pointer-events-auto antialiased" style={{ transform: 'translateZ(0)', willChange: 'transform', backfaceVisibility: 'hidden', WebkitFontSmoothing: 'antialiased' }}>
          <div className="flex flex-col gap-4">
            {([{ key: 'nav.about', id: 'about' }, { key: 'nav.capabilities', id: 'services' }, { key: 'nav.work', id: 'projects' }, { key: 'nav.collective', id: 'team' }, { key: 'nav.partner', id: 'contact' }] as const).map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-left text-sm font-medium text-foreground transition hover:bg-muted dark:bg-background dark:text-foreground dark:hover:bg-muted/20"
              >
                {t(item.key)}
                <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground/60">{t('nav.view')}</span>
              </button>
            ))}

            <Button className="primary-button w-full justify-center" onClick={() => handleNavigate("contact")}>
              {t('nav.start_project')}
            </Button>
          </div>
        </div>
      </div>
      )}
    </nav>
  )
}
