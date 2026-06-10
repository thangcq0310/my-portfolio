import { useState } from "react"
import Container from "../components/layout/Container"
import BookCard from "../components/cards/BookCard"
import { seedBooks } from "../data/seedData"

const categories = ["Tất cả", "Template Excel", "Playbook / eBook", "SOP Pack", "Dashboard Pack", "Checklist Pack"]

// TODO: rename /books to /products when routing is finalized.
export function Books() {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const filteredBooks = seedBooks.filter((book) => {
    if (selectedCategory !== "Tất cả" && book.category !== selectedCategory) return false
    return true
  })

  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Sản phẩm số Supply Chain</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Template, playbook, SOP pack và dashboard starter giúp đội ngũ Supply Chain triển khai nhanh hơn với cấu trúc rõ ràng, dễ áp dụng và phù hợp với doanh nghiệp Việt Nam.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "rounded-full border border-[var(--color-primary)] bg-[var(--color-primary)] px-3 py-1.5 text-sm font-medium text-white"
                  : "rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
          <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)]">Muốn nhận checklist và thông báo sản phẩm mới?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text-muted)]">
            Để lại email để SCHub.vn gửi checklist miễn phí và thông báo khi template, playbook hoặc công cụ mới được phát hành.
          </p>
          <a
            href="/solutions/checklist"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105"
          >
            Để lại email
          </a>
        </div>
      </div>
    </Container>
  )
}
