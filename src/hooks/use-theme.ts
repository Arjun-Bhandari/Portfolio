'use client'
import { useTheme as useNextTheme } from 'next-themes'
import { useCallback, useRef, useState, useEffect } from 'react'
import { flushSync } from 'react-dom'

export const useTheme = (duration = 400) => {
  const { resolvedTheme, setTheme } = useNextTheme()
  const [isDark, setIsDark] = useState(resolvedTheme === 'dark')
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setIsDark(resolvedTheme === 'dark'), [resolvedTheme])

  const toggleTheme = useCallback(() => {
    if (!buttonRef.current) return
    const newTheme = isDark ? 'light' : 'dark'

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme) 
      })
    })

    transition.ready.then(() => {
      const { top, left, width, height } = buttonRef.current!.getBoundingClientRect()
      const x = left + width / 2
      const y = top + height / 2
      const maxRadius = Math.hypot(
        Math.max(left, window.innerWidth - left),
        Math.max(top, window.innerHeight - top)
      )

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }, [isDark, setTheme, duration])

  return { isDark, toggleTheme, buttonRef }
}
