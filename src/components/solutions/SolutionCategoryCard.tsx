import type { SolutionCategory } from "@/data/solutions"

interface SolutionCategoryCardProps {
  category: SolutionCategory
}

export function SolutionCategoryCard({ category }: SolutionCategoryCardProps) {
  return (
    <article className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
        {category.slug}
      </p>
      <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--color-text)]">
        {category.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
        {category.description}
      </p>
    </article>
  )
}
