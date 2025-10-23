"use client"

import { FormEvent, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Facebook, Instagram, Send, Sparkles } from "lucide-react"
import { TikTokIcon } from "@/components/icons/tiktok-icon"
import { useSmartReveal } from "@/hooks/use-smart-reveal"
import { useI18n } from "@/components/locale-provider"

export function ContactSection() {
  const isVisible = useSmartReveal({ delay: 220, maxJitter: 260 })
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const { t } = useI18n()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formElement = e.currentTarget

    setSubmitting(true)
    setStatus(null)

    const form = new FormData(formElement)
    const payload = {
      name: form.get("name")?.toString() ?? "",
      email: form.get("email")?.toString() ?? "",
      brand: form.get("brand")?.toString() ?? "",
      timeline: form.get("timeline")?.toString() ?? "",
      vision: form.get("vision")?.toString() ?? "",
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.message ?? "Failed to send your message.")
      }

      setStatus({ type: "success", message: data?.message ?? "Thanks! We'll be in touch shortly." })
      formElement.reset()
    } catch (error) {
      console.error("Contact form submission failed", error)
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message right now.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  const socialLinks = [
    {
      icon: Mail,
      label: t('contact.social.email'),
      href: "mailto:digitivaa@gmail.com",
      color: "from-red-500 to-orange-500",
      description: t('contact.social.email_desc'),
    },
    {
      icon: Facebook,
      label: t('contact.social.facebook'),
      href: "https://www.facebook.com/share/17if8Q2zx4/?mibextid=wwXIfr",
      color: "from-blue-500 to-blue-600",
      description: t('contact.social.facebook_desc'),
    },
    {
      icon: Instagram,
      label: t('contact.social.instagram'),
      href: "https://www.instagram.com/digitivaco?igsh=MXNteGgyZjIzenQwaQ==",
      color: "from-pink-500 to-purple-600",
      description: t('contact.social.instagram_desc'),
    },
    {
      icon: TikTokIcon,
      label: t('contact.social.tiktok'),
      href: "https://www.tiktok.com/@digitivaco?_t=ZS-90iVO8hoyQq&_r=1",
      color: "from-black to-gray-800",
      description: t('contact.social.tiktok_desc'),
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              {t('contact.badge')}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('contact.h2_part1')}
              <span className="gradient-text-impressive block">{t('contact.h2_part2')}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t('contact.p')}</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            <div className="connect-grid relative grid gap-6 md:grid-cols-3">
              <Card
                className={`glass-panel glow-border md:col-span-2 p-6 md:p-8 ${isVisible ? "animate-fade-in-up" : "opacity-0"} relative`}
                data-animate
              >
                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2" aria-label="connect form" style={{ touchAction: 'manipulation' }}>
                  <div className="block">
                    <label htmlFor="contact-name" className="text-sm font-medium text-foreground">{t('contact.label_name')}</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder={t('contact.placeholder_fullname')}
                      required
                      className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                      style={{ WebkitAppearance: "none", touchAction: "manipulation" }}
                    />
                  </div>

                  <div className="block">
                    <label htmlFor="contact-email" className="text-sm font-medium text-foreground">{t('contact.label_email')}</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      inputMode="email"
                      autoComplete="email"
                      autoCapitalize="off"
                      autoCorrect="off"
                      placeholder={t('contact.placeholder_email')}
                      required
                      className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                      style={{ WebkitAppearance: "none", touchAction: "manipulation" }}
                    />
                  </div>

                  <div className="block">
                    <label htmlFor="contact-brand" className="text-sm font-medium text-foreground">{t('contact.label_brand')}</label>
                    <input
                      id="contact-brand"
                      type="text"
                      name="brand"
                      placeholder={t('contact.placeholder_brand')}
                      className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                      style={{ WebkitAppearance: "none", touchAction: "manipulation" }}
                    />
                  </div>

                  <div className="block">
                    <label htmlFor="contact-timeline" className="text-sm font-medium text-foreground">{t('contact.label_timeline')}</label>
                    <select
                      id="contact-timeline"
                      name="timeline"
                      className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                      style={{ WebkitAppearance: "none", touchAction: "manipulation" }}
                    >
                      <option value="">{t('contact.option_select_timeline')}</option>
                      <option>{t('contact.option_within1')}</option>
                      <option>{t('contact.option_1to2')}</option>
                      <option>{t('contact.option_cant_tell')}</option>
                    </select>
                  </div>

                  <div className="block md:col-span-2">
                    <label htmlFor="contact-vision" className="text-sm font-medium text-foreground">{t('contact.label_vision')}</label>
                    <textarea
                      id="contact-vision"
                      name="vision"
                      rows={5}
                      placeholder={t('contact.placeholder_vision')}
                      className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                      style={{ WebkitAppearance: "none", touchAction: "manipulation" }}
                    />
                  </div>

                  <div className="md:col-span-2 mt-4 flex justify-center">
                    <Button className="primary-button px-6 py-3 text-sm font-medium" type="submit" disabled={submitting}>
                      {submitting ? t('contact.submit_sending') : t('contact.submit')}
                    </Button>
                  </div>
                  {status && (
                    <p
                      className={`md:col-span-2 text-center text-sm font-medium ${
                        status.type === "success" ? "text-primary" : "text-destructive"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                </form>
              </Card>

              <aside className={`connect-aside ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} data-animate style={{ animationDelay: "0.1s" }}>
                <Card className="connect-card p-6 glass-panel glow-border">
                  <CardContent>
                    <div className="text-sm text-muted-foreground">{t('contact.side.prefer_direct')}</div>
                    <h3 className="mt-2 text-foreground font-semibold">{t('contact.side.email_team')}</h3>
                    <p className="text-sm text-muted-foreground mt-2">digitivaa@gmail.com</p>
                    <div className="mt-4">
                      <p className="text-sm text-muted-foreground">{t('contact.side.note')}</p>
                    </div>
                    <div className="mt-6 text-center">
                      <Button
                        size="lg"
                        onClick={() => window.location.href = "mailto:digitivaa@gmail.com"}
                        className="w-full text-base px-6 py-6 animate-pulse-glow bg-gradient-to-r from-purple-700 to-blue-700 hover:from-purple-800 hover:to-blue-800 text-white transition-all duration-500 transform hover:scale-105"
                      >
                        <Send className="mr-2 w-5 h-5" />
                        {t('contact.side.cta')}
                        <Sparkles className="ml-2 w-5 h-5 animate-sparkle" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20 hover-lift">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text-impressive">{t('contact.connect_with_us')}</h3>
                  <Sparkles className="w-6 h-6 text-accent animate-pulse" />
                </div>
                <p className="text-muted-foreground">{t('contact.choose_preferred')}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block transition-all duration-500 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="group hover-lift transition-all duration-300 hover:scale-105 social-connect overflow-hidden">
                      <CardContent className="p-6 text-center">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <social.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors">
                          {social.label}
                        </h4>
                        <p className="text-sm text-muted-foreground">{social.description}</p>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </Card>

            {/* Footer */}
            <div className="text-center mt-16 pt-8 border-t border-border">
              <div className="text-2xl font-bold gradient-text-impressive mb-4">Digitiva</div>
              <p className="text-muted-foreground mb-4">{t('contact.footer.tagline')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
