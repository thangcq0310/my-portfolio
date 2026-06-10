import type { Tool } from "../../types"

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const pricingColors = {
    free: "border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    freemium: "border-[var(--color-warning)]/20 bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
    paid: "border-[var(--color-danger)]/20 bg-[var(--color-danger)]/10 text-[var(--color-danger)]",
  }

  const pricingLabels = {
    free: "Miễn phí",
    freemium: "Freemium",
    paid: "Trả phí",
  }

  return (
    <div className="surface-panel card-hover flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border-[var(--color-border)]">
      <div className="bg-[var(--color-secondary)] p-5 text-white">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white/70">SCHUB.VN TOOLKIT</p>
        <div className="mt-5 h-px w-12 bg-white/70" />
        <p className="mt-4 text-xs uppercase tracking-wide text-white/70">{tool.category}</p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[var(--font-display)] text-xl leading-tight text-[var(--color-text)]">{tool.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm text-[var(--color-text-muted)]">{tool.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="text-xs uppercase tracking-wide text-[var(--color-text-muted)]">{tool.category}</span>
          <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${pricingColors[tool.pricing]}`}>
            {pricingLabels[tool.pricing]}
          </span>
        </div>
      </div>
    </div>
  )
}
