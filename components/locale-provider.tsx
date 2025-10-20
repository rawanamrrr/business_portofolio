'use client'

import * as React from 'react'
import en from '../locales/en'
import ar from '../locales/ar'

export type Locale = 'en' | 'ar'

const LOCALE_STORAGE_KEY = 'digitiva-locale'

type Messages = typeof en

type I18nContextType = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (key: keyof Messages) => string
}

const I18nContext = React.createContext<I18nContextType | null>(null)

export function LocaleProvider({ children, initialLocale }: { children: React.ReactNode, initialLocale: Locale }) {
  const [locale, setLocaleState] = React.useState<Locale>(initialLocale)

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale
      document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
      document.cookie = `${LOCALE_STORAGE_KEY}=${locale}; path=/; max-age=31536000`
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    }
  }, [locale])

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l)
  }, [])

  const t = React.useCallback<I18nContextType['t']>((key) => {
    const dict = locale === 'ar' ? ar : en
    return dict[key] ?? key
  }, [locale])

  const value = React.useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = React.useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LocaleProvider')
  return ctx
}

