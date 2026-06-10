import { Link } from "react-router-dom"
import Container from "@/components/layout/Container"
import { seedArticles, seedBooks, seedTools } from "@/data/seedData"
import type { LearningPath } from "@/data/learningPaths"

interface LearningPathPageProps {
  path: LearningPath
}

const statusClasses: Record<string, string> = {
  "Đang phát triển": "border-[var(--color-warning)]/20 bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
  "Sắp ra mắt": "border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
}

export function LearningPathPage({ path }: LearningPathPageProps) {
  const relatedArticles = seedArticles.filter((article) =>
    article.tags.some((tag) => path.relatedTags.includes(tag)),
  ).slice(0, 3)

  const relatedProducts = seedBooks.filter((product) => path.relatedProducts.includes(product.slug))
  const relatedTools = seedTools.filter((tool) => path.relatedTools.includes(tool.slug))

  const placeholderCard = (title: string, body: string) => (
    <div className="surface-panel rounded-[var(--radius-xl)] p-5">
      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Placeholder</p>
      <h4 className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-text)]">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{body}</p>
    </div>
  )

  return (
    <Container>
      <div className="py-16">
        <div className="mb-6 text-sm text-[var(--color-text-muted)]">
          <Link to="/learning" className="hover:text-[var(--color-primary)]">Learning</Link>
          <span className="mx-2">/</span>
          <span>{path.vietnameseTitle}</span>
        </div>

        <section className="surface-panel rounded-[var(--radius-xl)] p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[path.status]}`}>
              {path.status}
            </span>
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
              Learning Path
            </span>
          </div>
          <p className="mt-5 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            SCHUB.VN LEARNING HUB
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">
            {path.vietnameseTitle}
          </h1>
          <p className="mt-2 text-lg text-[var(--color-text-muted)]">{path.title}</p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
            {path.description}
          </p>
          <Link
            to="/checklist"
            className="focus-ring mt-8 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
          >
            Nhận thông báo khi hoàn thiện
          </Link>
        </section>

        <section className="mt-10">
          <div className="mb-8 max-w-3xl">
            <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">Lesson skeleton</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Đây là khung học tập ban đầu để đội ngũ vận hành đi theo từng chủ đề, chưa phải nội dung hoàn chỉnh.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {path.lessons.map((lesson) => (
              <div key={lesson} className="surface-panel card-hover rounded-[var(--radius-xl)] p-5">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Lesson skeleton</p>
                <h3 className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-text)]">{lesson}</h3>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[var(--color-warning)]/20 bg-[var(--color-warning)]/10 px-3 py-1 text-xs font-medium text-[var(--color-warning)]">
                    Đang phát triển
                  </span>
                  <button type="button" className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                    Xem trước
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-3">
          <div>
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Bài viết liên quan</h2>
            <div className="mt-4 space-y-4">
              {relatedArticles.length > 0
                ? relatedArticles.map((article) => (
                    <Link key={article.slug} to={`/articles/${article.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-5">
                      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Article</p>
                      <h3 className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-text)]">{article.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{article.excerpt}</p>
                    </Link>
                  ))
                : placeholderCard("Bài viết đang được biên soạn", "SCHub sẽ bổ sung bài viết thực chiến cho chủ đề này khi Learning Hub hoàn thiện hơn.")}
            </div>
          </div>

          <div>
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Sản phẩm liên quan</h2>
            <div className="mt-4 space-y-4">
              {relatedProducts.length > 0
                ? relatedProducts.map((product) => (
                    <Link key={product.slug} to={`/books/${product.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-5">
                      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Digital product</p>
                      <h3 className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-text)]">{product.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{product.description}</p>
                    </Link>
                  ))
                : placeholderCard("Sản phẩm đang được chuẩn bị", "Khi có template hoặc playbook phù hợp, SCHub sẽ gắn vào lộ trình này.")}
            </div>
          </div>

          <div>
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Công cụ liên quan</h2>
            <div className="mt-4 space-y-4">
              {relatedTools.length > 0
                ? relatedTools.map((tool) => (
                    <div key={tool.slug} className="surface-panel card-hover rounded-[var(--radius-xl)] p-5">
                      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">Tool skeleton</p>
                      <h3 className="mt-3 font-[var(--font-display)] text-xl text-[var(--color-text)]">{tool.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{tool.description}</p>
                    </div>
                  ))
                : placeholderCard("Công cụ đang được lên khung", "SCHub sẽ bổ sung calculator hoặc assessment phù hợp khi tool skeleton sẵn sàng.")}
            </div>
          </div>
        </section>

        <section className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
          <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">Muốn học theo lộ trình thực chiến?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-muted)]">
            Để lại email để nhận checklist, template và thông báo khi các bài học mới được phát hành.
          </p>
          <Link
            to="/checklist"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105"
          >
            Làm checklist 50 điểm
          </Link>
        </section>
      </div>
    </Container>
  )
}
