import { useParams, Link } from "react-router-dom"
import { Clock, User, ArrowLeft } from "lucide-react"
import Container from "../components/layout/Container"
import { seedArticles } from "../data/seedData"

export function ArticleDetail() {
  const { slug } = useParams()
  const article = seedArticles.find(a => a.slug === slug)
  
  if (!article) {
    return (
      <Container>
        <div className="py-12 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Bài viết không tồn tại</h1>
          <Link to="/articles" className="text-sky-600 hover:text-sky-700">← Quay lại bài viết</Link>
        </div>
      </Container>
    )
  }
  
  const related = seedArticles
    .filter(a => a.id !== article.id && a.tags.some(t => article.tags.includes(t)))
    .slice(0, 3)

  return (
    <Container>
      <div className="py-12">
        <article className="max-w-3xl">
        <Link to="/articles" className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Quay lại
        </Link>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{article.title}</h1>
        
        <div className="flex items-center gap-6 text-sm text-slate-500 mb-8">
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {article.authorName}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readTimeMinutes} phút đọc
          </span>
        </div>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">{article.excerpt}</p>
          <div className="whitespace-pre-wrap">{article.body}</div>
        </div>
      </article>
      
      {related.length > 0 && (
          <div className="mt-12 pt-12 border-t">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Bài viết liên quan</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(a => (
                <Link key={a.id} to={`/articles/${a.slug}`} className="block bg-white rounded-xl border border-slate-200 p-4 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-slate-900 mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}