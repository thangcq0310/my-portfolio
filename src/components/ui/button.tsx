import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-md)] border text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[loading=true]:cursor-progress data-[loading=true]:opacity-75",
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-foreground)] shadow-[var(--shadow-panel)] hover:-translate-y-0.5 hover:bg-[#0b3b3b] active:translate-y-0",
        destructive:
          "border-[var(--color-danger)] bg-[var(--color-danger)] text-white shadow-[var(--shadow-panel)] hover:-translate-y-0.5 hover:brightness-95 active:translate-y-0",
        outline:
          "border-[var(--color-border-strong)] bg-[var(--color-surface-raised)] text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:bg-white active:translate-y-0",
        secondary:
          "border-[var(--color-secondary)] bg-[var(--color-secondary)] text-[var(--color-secondary-foreground)] shadow-[var(--shadow-panel)] hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0",
        ghost: "border-transparent bg-transparent text-[var(--color-text-muted)] hover:border-[var(--color-border)] hover:bg-white hover:text-[var(--color-text)]",
        link: "h-auto rounded-none border-transparent p-0 text-[var(--color-primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-5 py-2.5",
        sm: "min-h-9 px-3.5 py-2 text-xs",
        lg: "min-h-12 px-6 py-3 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }