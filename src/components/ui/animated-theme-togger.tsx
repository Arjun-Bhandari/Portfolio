"use client"

import { Moon, Sun } from "lucide-react"
import { cn } from "../../lib/utils"
import { useTheme } from "@/src/hooks/use-theme"
interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
const {isDark,buttonRef,toggleTheme } = useTheme(duration)
  return (
    
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18}/>}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
