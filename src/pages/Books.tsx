import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BookCard from "../components/cards/BookCard";
import { seedBooks } from "../data/seedData";

export default function Books() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Sách & Template</h1>
        <p className="text-slate-600 mb-12">Kho sách và template về Supply Chain Management</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seedBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}