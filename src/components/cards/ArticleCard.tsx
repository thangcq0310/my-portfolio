import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";
import type { Article } from "../../types";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="aspect-video bg-slate-100 flex items-center justify-center">
        {article.coverImage ? (
          <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-slate-400 text-4xl">📄</span>
        )}
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {article.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-sky-100 text-sky-700 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTimeMinutes} phút
          </span>
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {article.authorName}
          </span>
        </div>
      </div>
    </Link>
  );
}