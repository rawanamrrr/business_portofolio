"use client"

import { useEffect, useMemo, useRef, useState } from "react"

interface SmartRevealOptions {
  /** Base delay before revealing, in milliseconds. */
  delay?: number
  /** Adds random jitter (0..maxJitter) to the base delay for organic staggering. */
  maxJitter?: number
}

export function useSmartReveal(options?: SmartRevealOptions) {
  const { delay = 0, maxJitter = 0 } = options ?? {}
  const [isActive, setIsActive] = useState(false)
  const hasStarted = useRef(false)

  const computedDelay = useMemo(() => {
    if (maxJitter <= 0) return delay
    return delay + Math.random() * maxJitter
  }, [delay, maxJitter])

  useEffect(() => {
    if (hasStarted.current) return
    hasStarted.current = true

    const timer = window.setTimeout(() => setIsActive(true), computedDelay)
    return () => window.clearTimeout(timer)
  }, [computedDelay])

  return isActive
}
