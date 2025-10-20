import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/providers"
import { LocaleProvider } from "@/components/locale-provider"
import { cookies } from "next/headers"

export const metadata: Metadata = {
  title: "Digitiva Portfolio",
  description: "Digitiva Portfolio website",
  generator: "digitiva",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const saved = cookieStore.get("digitiva-locale")?.value
  const initialLocale = saved === "ar" || saved === "en" ? (saved as "ar" | "en") : "en"
  const dir = initialLocale === "ar" ? "rtl" : "ltr"

  return (
    <html lang={initialLocale} dir={dir} suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <LocaleProvider initialLocale={initialLocale}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            storageKey="digitiva-theme-v2"
          >
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
