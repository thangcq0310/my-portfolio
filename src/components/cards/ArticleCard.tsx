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
      className="block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-md transition-all h-full"
    >
      {/* Primary color header */}
      <div className="h-2 bg-[#072C2C]" />
      <div className="p-5">
        {/* Label */}
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
          Supply Chain Playbook
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {article.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs font-medium uppercase">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2 leading-snug">
          {article.title}
        </h3>
        
        {/* Excerpt */}
        <p className="text-sm text-slate-600 line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-slate-500 mt-auto">
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