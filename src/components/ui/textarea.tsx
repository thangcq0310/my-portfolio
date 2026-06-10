import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "focus-ring flex min-h-[120px] w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-4 py-3 text-sm leading-6 text-[var(--color-text)] shadow-none transition-[border-color,background-color,box-shadow] duration-200 placeholder:text-[var(--color-text-muted)] hover:border-[var(--color-border-strong)] focus-visible:border-[var(--color-primary)] disabled:cursor-not-allowed disabled:bg-white/60 disabled:text-[var(--color-text-muted)] disabled:opacity-100",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }