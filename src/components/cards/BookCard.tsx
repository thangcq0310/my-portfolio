import { ExternalLink } from "lucide-react";
import type { Book } from "../../types";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const difficultyColors = {
    beginner: "bg-emerald-100 text-emerald-700",
    intermediate: "bg-amber-100 text-amber-700",
    advanced: "bg-red-100 text-red-700",
  };
  
  const difficultyLabels = {
    beginner: "Cơ bản",
    intermediate: "Trung cấp",
    advanced: "Nâng cao",
  };
  
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-slate-900 mb-1">{book.title}</h3>
      <p className="text-sm text-slate-600 mb-2">{book.author}</p>
      <p className="text-sm text-slate-500 mb-3 line-clamp-2">{book.description}</p>
      <div className="flex items-center justify-between">
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${difficultyColors[book.difficulty]}`}>
          {difficultyLabels[book.difficulty]}
        </span>
        {book.externalUrl && (
          <a href={book.externalUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}