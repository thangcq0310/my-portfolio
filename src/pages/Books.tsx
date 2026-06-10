import Container from "../components/layout/Container"
import BookCard from "../components/cards/BookCard"
import { seedBooks } from "../data/seedData"

export function Books() {
  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-3xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Sách &amp; Template</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Kho sách, template và playbook giúp đội ngũ supply chain triển khai nhanh hơn với cấu trúc rõ ràng và tiêu chuẩn vận hành nhất quán.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {seedBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </Container>
  )
}
