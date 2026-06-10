import { Link } from "react-router-dom"
import Container from "@/components/layout/Container"
import { learningPaths } from "@/data/learningPaths"

const statusClasses: Record<string, string> = {
  "Đang phát triển": "border-[var(--color-warning)]/20 bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
  "Sắp ra mắt": "border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
}

// Recommended learning order
const learningOrder = [
  { label: "Supply Chain Foundation", href: "/learning/supply-chain-foundation" },
  { label: "Demand Analysis", href: "/learning/demand-analysis" },
  { label: "Demand Management", href: "/learning/demand-management" },
  { label: "Forecasting", href: "/learning/forecasting" },
  { label: "S&OP", href: "/learning/sop" },
  { label: "Operations Planning", href: "/learning/operations-planning-control" },
]

export function Learning() {
  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Learning Hub Supply Chain</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Các learning path thực chiến giúp bạn đi từ Supply Chain Foundation đến Demand Analysis, Demand Management, Forecasting, S&OP và Operations Planning.
          </p>
        </div>

        {/* Learning order recommendation */}
        <div className="surface-panel mb-10 rounded-[var(--radius-xl)] p-6">
          <h2 className="font-[var(--font-display)] text-xl text-[var(--color-text)]">Nên học theo thứ tự nào?</h2>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Nếu mới bắt đầu, hãy đi từ foundation trước, sau đó chuyển sang demand, forecast, S&OP và planning control.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {learningOrder.map((item, i) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xs font-medium text-[var(--color-primary)]">
                  {i + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <Link key={path.slug} to={`/learning/${path.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[path.status]}`}>
                  {path.status}
                </span>
              </div>
              <p className="mt-4 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Learning Path</p>
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