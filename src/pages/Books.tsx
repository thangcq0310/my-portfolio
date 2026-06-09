import BookCard from "../components/cards/BookCard"
import { seedBooks } from "../data/seedData"

export function Books() {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Sách & Template</h1>
      <p className="text-slate-600 mb-12">Kho sách và template về Supply Chain Management</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seedBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}