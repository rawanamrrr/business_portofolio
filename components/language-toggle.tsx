'use client'

import * as React from 'react'
import { useI18n } from '@/components/locale-provider'

export function LanguageToggle() {
  const { locale, setLocale, t } = useI18n()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isAR = locale === 'ar'

  return (
    <button
      type="button"
      onClick={() => setLocale(isAR ? 'en' : 'ar')}
      aria-label={isAR ? 'Switch to English' : 'التبديل إلى العربية'}
      className="rounded-full border border-border/40 bg-white px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm transition hover:bg-white/90 dark:border-white/10 dark:bg-white/5"
    >
      <span className={isAR ? 'opacity-60' : 'opacity-100'}>{t('toggle.language.en')}</span>
      <span className="px-1.5">|</span>
      <span className={isAR ? 'opacity-100' : 'opacity-60'}>{t('toggle.language.ar')}</span>
    </button>
  )
}
