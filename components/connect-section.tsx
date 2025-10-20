"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useSmartReveal } from "@/hooks/use-smart-reveal"
import { useI18n } from "@/components/locale-provider"

export function ConnectSection() {
  const isVisible = useSmartReveal({ delay: 180, maxJitter: 220 })
  const [submitting, setSubmitting] = useState(false)
  const { t } = useI18n()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const form = new FormData(e.currentTarget)
    console.log(Object.fromEntries(form.entries()))
    await new Promise((r) => setTimeout(r, 700))
    setSubmitting(false)
  }

  return (
    <section id="connect" className="relative overflow-hidden py-28">
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className={`section-head max-w-2xl mx-auto text-center ${isVisible ? "visible" : ""}`} data-animate>
          <div className="badge mx-auto">{t('connect.badge')}</div>
          <h2 className="mx-auto">{t('connect.h2')}</h2>
          <p className="text-muted-foreground mt-3">{t('connect.p')}</p>
        </div>

        <div className="mt-10 connect-grid grid gap-6 md:grid-cols-3">
          <Card className={`glass-panel glow-border md:col-span-2 p-6 md:p-8 ${isVisible ? "visible" : ""}`} data-animate>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2" aria-label="connect form" style={{ touchAction: 'manipulation' }}>
              <div className="block">
                <label htmlFor="connect-name" className="text-sm font-medium text-foreground">{t('connect.label_name')}</label>
                <input 
                  id="connect-name"
                  type="text" 
                  name="name" 
                  placeholder={t('connect.placeholder_fullname')} 
                  required 
                  className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                  style={{ WebkitAppearance: 'none', touchAction: 'manipulation' }}
                />
              </div>

              <div className="block">
                <label htmlFor="connect-email" className="text-sm font-medium text-foreground">{t('connect.label_email')}</label>
                <input 
                  id="connect-email"
                  type="email" 
                  name="email" 
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  placeholder={t('connect.placeholder_email')} 
                  required 
                  className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                  style={{ WebkitAppearance: 'none', touchAction: 'manipulation' }}
                />
              </div>

              <div className="block">
                <label htmlFor="connect-brand" className="text-sm font-medium text-foreground">{t('connect.label_brand')}</label>
                <input 
                  id="connect-brand"
                  type="text" 
                  name="brand" 
                  placeholder={t('connect.placeholder_brand')} 
                  className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                  style={{ WebkitAppearance: 'none', touchAction: 'manipulation' }}
                />
              </div>

              <div className="block">
                <label htmlFor="connect-timeline" className="text-sm font-medium text-foreground">{t('connect.label_timeline')}</label>
                <select 
                  id="connect-timeline"
                  name="timeline" 
                  className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                  style={{ WebkitAppearance: 'none', touchAction: 'manipulation' }}
                >
                  <option value="">{t('connect.option_select')}</option>
                  <option>{t('connect.option_within1')}</option>
                  <option>{t('connect.option_2to3')}</option>
                  <option>{t('connect.option_unspecified')}</option>
                </select>
              </div>
              <div className="block md:col-span-2">
                <label htmlFor="connect-vision" className="text-sm font-medium text-foreground">{t('connect.label_vision')}</label>
                <textarea 
                  id="connect-vision"
                  name="vision" 
                  rows={5} 
                  placeholder={t('connect.placeholder_vision')} 
                  className="mt-1 block w-full rounded-md border border-muted-foreground bg-background px-3 py-3 text-base focus:border-primary focus:ring focus:ring-primary/50"
                  style={{ WebkitAppearance: 'none', touchAction: 'manipulation' }}
                />
              </div>

              <div className="md:col-span-2 mt-4 flex justify-center">
                <Button className="primary-button px-6 py-3 text-sm font-medium" type="submit" disabled={submitting}>
                  {t('connect.submit')}
                </Button>
              </div>
            </form>
          </Card>

          <aside className={`connect-aside ${isVisible ? "visible" : ""}`} data-animate>
            <Card className="connect-card p-6 glass-panel glow-border">
              <CardContent>
                <div className="text-sm text-muted-foreground">{t('contact.side.prefer_direct')}</div>
                <h3 className="mt-2 text-foreground font-semibold">{t('contact.side.email_team')}</h3>
                <p className="text-sm text-muted-foreground mt-2">digitivaa@gmail.com</p>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">{t('contact.side.note')}</p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  )
}
