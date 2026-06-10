import { Link } from "react-router-dom"
import Container from "@/components/layout/Container"
import { learningPaths } from "@/data/learningPaths"

const statusClasses: Record<string, string> = {
  "Đang phát triển": "border-[var(--color-warning)]/20 bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
  "Sắp ra mắt": "border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
}

export function Learning() {
  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Learning Hub Supply Chain</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Các lộ trình học thực chiến giúp bạn đi từ nền tảng Supply Chain đến demand analysis, demand management, forecasting, S&OP và operations planning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <Link key={path.slug} to={`/learning/${path.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[path.status]}`}>
                  {path.status}
                </span>
              </div>
              <p className="mt-4 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Lộ trình học</p>
              <h2 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--color-text)]">{path.vietnameseTitle}</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{path.title}</p>
              <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">{path.description}</p>
              <div className="mt-5 text-sm font-medium text-[var(--color-primary)]">Xem lộ trình</div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}
