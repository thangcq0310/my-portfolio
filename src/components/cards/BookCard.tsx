import { ExternalLink } from "lucide-react";
import type { Book } from "../../types";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const difficultyColors = {
    beginner: "bg-[#072C2C]/10 text-[#072C2C] border-[#072C2C]/20",
    intermediate: "bg-[#D97706]/10 text-[#D97706] border-[#D97706]/20",
    advanced: "bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/20",
  };
  
  const difficultyLabels = {
    beginner: "Cơ bản",
    intermediate: "Trung cấp",
    advanced: "Nâng cao",
  };
  
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all h-full flex flex-col">
      {/* Primary color header */}
      <div className="h-2 bg-[#072C2C]" />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-slate-900 mb-1">{book.title}</h3>
        <p className="text-sm text-slate-500 mb-2">{book.author}</p>
        <p className="text-sm text-slate-600 mb-4 line-clamp-2 flex-1">{book.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${difficultyColors[book.difficulty]}`}>
            {difficultyLabels[book.difficulty]}
          </span>
          {book.externalUrl && (
            <a href={book.externalUrl} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}