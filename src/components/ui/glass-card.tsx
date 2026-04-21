import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "pink" | "blue" | "emerald" | "amber"
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variantClasses = {
      default: "glass-card",
      pink: "bg-pink-500/10 border-pink-500/20 glass-card",
      blue: "bg-blue-500/10 border-blue-500/20 glass-card",
      emerald: "bg-emerald-500/10 border-emerald-500/20 glass-card",
      amber: "bg-amber-500/10 border-amber-500/20 glass-card",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "p-6",
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassCard.displayName = "GlassCard"

export { GlassCard }