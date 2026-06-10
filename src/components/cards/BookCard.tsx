import { ExternalLink } from "lucide-react";
import type { Book } from "../../types";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const difficultyColors = {
    beginner: "bg-emerald-50 text-emerald-700 border-emerald-200",
    intermediate: "bg-amber-50 text-amber-700 border-amber-200",
    advanced: "bg-red-50 text-red-700 border-red-200",
  };
  
  const difficultyLabels = {
    beginner: "Cơ bản",
    intermediate: "Trung cấp",
    advanced: "Nâng cao",
  };
  
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-300 hover:shadow-md transition-all h-full flex flex-col">
      {/* Visual header */}
      <div className="h-3 bg-emerald-600" />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-slate-900 mb-1">{book.title}</h3>
        <p className="text-sm text-slate-500 mb-2">{book.author}</p>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">{book.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${difficultyColors[book.difficulty]}`}>
            {difficultyLabels[book.difficulty]}
          </span>
          {book.externalUrl && (
            <a href={book.externalUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}