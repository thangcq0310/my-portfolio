import { useState } from "react"
import Container from "../components/layout/Container"
import ToolCard from "../components/cards/ToolCard"
import { seedTools } from "../data/seedData"

const categories = ["Tất cả", "Inventory", "Planning", "3PL", "Logistics Cost", "Warehouse"]

export function Tools() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const filtered = seedTools.filter((tool) => {
    if (selectedCategory !== "Tất cả" && tool.category !== selectedCategory) return false
    return true
  })

  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Công cụ</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Các công cụ skeleton giúp SCHub thể hiện định hướng sản phẩm: calculator, estimator và planner hỗ trợ đội ngũ Supply Chain ra quyết định nhanh hơn.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={
                selectedCategory === cat
                  ? "rounded-full border border-[var(--color-secondary)] bg-[var(--color-secondary)] px-3 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
          <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">Muốn nhận checklist và thông báo sản phẩm mới?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-muted)]">
            Để lại email để SCHub.vn gửi checklist miễn phí và thông báo khi template, playbook hoặc công cụ mới được phát hành.
          </p>
          <a
            href="/solutions/checklist"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
          >
            Để lại email
          </a>
        </div>
      </div>
    </Container>
  )
}
