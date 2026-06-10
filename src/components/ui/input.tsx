import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "focus-ring flex min-h-11 w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-2.5 text-sm text-[var(--color-text)] shadow-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-[var(--color-text-muted)] hover:border-[var(--color-border-strong)] focus-visible:border-[var(--color-primary)] disabled:cursor-not-allowed disabled:bg-white/60 disabled:text-[var(--color-text-muted)] disabled:opacity-100 file:border-0 file:bg-transparent file:text-sm file:font-medium",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }