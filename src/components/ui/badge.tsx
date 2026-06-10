import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[#072C2C] text-white",
        secondary: "border-transparent bg-[#FF5F03] text-white",
        destructive: "border-transparent bg-[#DC2626] text-white",
        success: "border-transparent bg-[#16A34A] text-white",
        warning: "border-transparent bg-[#D97706] text-white",
        outline: "text-[#0F172A] border-slate-300",
        primary: "border-[#072C2C]/20 bg-[#072C2C]/10 text-[#072C2C]",
        accent: "border-[#FF5F03]/20 bg-[#FF5F03]/10 text-[#FF5F03]",
        emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
        amber: "border-amber-500/20 bg-amber-500/10 text-amber-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }