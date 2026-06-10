import { ExternalLink } from "lucide-react"
import type { Book } from "../../types"

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  const difficultyColors = {
    beginner: "border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    intermediate: "border-[var(--color-warning)]/20 bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
    advanced: "border-[var(--color-danger)]/20 bg-[var(--color-danger)]/10 text-[var(--color-danger)]",
  }

  const difficultyLabels = {
    beginner: "Cơ bản",
    intermediate: "Trung cấp",
    advanced: "Nâng cao",
  }

  return (
    <div className="surface-panel card-hover flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] border-[var(--color-border)]">
      <div className="bg-[var(--color-primary)] p-5 text-white">
        <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-white/70">SCHUB.VN LIBRARY</p>
        <div className="mt-5 h-px w-12 bg-[var(--color-secondary)]" />
        <p className="mt-4 text-xs uppercase tracking-wide text-white/70">Book &amp; template</p>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-[var(--font-display)] text-xl leading-tight text-[var(--color-text)]">{book.title}</h3>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">{book.author}</p>
        <p className="mt-4 flex-1 text-sm text-[var(--color-text-muted)] line-clamp-2">{book.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className={`rounded-full border px-2.5 py-1 text-xs font-medium ${difficultyColors[book.difficulty]}`}>
            {difficultyLabels[book.difficulty]}
          </span>
          {book.externalUrl && (
            <a
              href={book.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
              aria-label={`Mở tài nguyên ${book.title}`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
