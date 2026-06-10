import { Link, Navigate, useParams } from "react-router-dom"
import Container from "@/components/layout/Container"
import { SEO } from "@/components/SEO"
import { solutions } from "@/data/solutions"

export function SolutionDetail() {
  const { slug } = useParams()
  const solution = solutions.find((item) => item.slug === slug)

  if (!solution) {
    return <Navigate to="/solutions" replace />
  }

  return (
    <>
      <SEO
        title={`${solution.title} | Công cụ & Giải pháp`}
        description={solution.description}
        url={`https://schub.vn${solution.href}`}
      />
      <Container>
        <div className="py-16">
          <Link to="/solutions" className="text-sm font-medium text-[var(--color-primary)] hover:underline">
            ← Quay lại Công cụ &amp; Giải pháp
          </Link>

          <section className="surface-panel mt-6 rounded-[var(--radius-xl)] p-8 lg:p-10">
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
              {solution.category}
            </span>
            <h1 className="mt-4 font-[var(--font-display)] text-4xl text-[var(--color-text)]">{solution.title}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">{solution.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {solution.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--color-border)] px-2.5 py-1 text-xs text-[var(--color-text-muted)]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
              <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Skeleton detail</p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                Đây là trang placeholder để sau này SCHub có thể gắn case study, feature list, roadmap triển khai và CTA chi tiết cho từng giải pháp.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </>
  )
}
