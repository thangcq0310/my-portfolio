import { useState } from "react"
import Container from "../components/layout/Container"
import ToolCard from "../components/cards/ToolCard"
import { seedTools } from "../data/seedData"

const categories = ["Tất cả", "Excel Template", "Logistics", "Cold Chain", "Cost Analysis", "Inventory", "Planning"]

export function Tools() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const filtered = seedTools.filter((tool) => {
    if (selectedCategory !== "Tất cả" && tool.category !== selectedCategory) return false
    return true
  })

  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-3xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Công cụ</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Công cụ hỗ trợ quản trị Supply Chain với cấu trúc rõ ràng cho planning, inventory, logistics và cost control.
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
      </div>
    </Container>
  )
}
