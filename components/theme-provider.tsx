'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Provide deterministic defaults to avoid SSR/CSR mismatches.
  const providerProps: ThemeProviderProps = {
    attribute: props.attribute ?? 'class',
    defaultTheme: (props as any).defaultTheme ?? 'light',
    enableSystem: (props as any).enableSystem ?? false,
    ...props,
  }

  return <NextThemesProvider {...providerProps}>{children}</NextThemesProvider>
}
