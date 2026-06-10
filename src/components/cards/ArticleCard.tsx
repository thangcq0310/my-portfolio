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
      className="block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-300 hover:shadow-md transition-all"
    >
      {/* Editorial cover when no image */}
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-50 flex flex-col justify-end p-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {article.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-sky-100 text-sky-700 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs text-slate-400 mb-1">SCHub.vn Playbook</p>
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 leading-snug">{article.title}</h3>
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