import { Link } from "react-router-dom"
import { ArrowRight, Package, FileText, Wrench, ClipboardCheck } from "lucide-react"
import Container from "../components/layout/Container"
import ArticleCard from "../components/cards/ArticleCard"
import BookCard from "../components/cards/BookCard"
import ToolCard from "../components/cards/ToolCard"
import { seedArticles, seedBooks, seedTools } from "../data/seedData"

const topics = [
  "Tất cả", "Warehouse", "Inventory", "Cold Chain", "FEFO/FIFO", "WMS", "3PL", "S&OP",
  "Demand Planning", "Procurement", "Logistics Cost", "Digital SCM"
]

export function Home() {
  const featuredArticles = seedArticles.filter(a => a.featured).slice(0, 6)
  const featuredBooks = seedBooks.filter(b => b.featured).slice(0, 3)
  const featuredTools = seedTools.filter(t => t.featured).slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Làm chủ Chuỗi Cung Ứng hiện đại
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Kiến thức, công cụ và kinh nghiệm thực chiến giúp người Việt quản trị planning, procurement, inventory, warehouse, logistics và digital SCM hiệu quả hơn.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/articles" className="px-6 py-3 bg-sky-500 font-medium rounded-lg hover:bg-sky-600 transition-colors">
                Khám phá bài viết
              </Link>
              <Link to="/checklist" className="px-6 py-3 bg-orange-500 font-medium rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2">
                <ClipboardCheck className="w-5 h-5" />
                Tải checklist miễn phí
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Topics */}
      <section className="py-8 border-b border-slate-200">
        <Container>
          <div className="flex flex-wrap gap-2">
            {topics.map(topic => (
              <Link
                key={topic}
                to={`/articles?tag=${encodeURIComponent(topic)}`}
                className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-sky-500 hover:text-sky-600 transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <Container>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Bài viết nổi bật</h2>
            <Link to="/articles" className="text-sky-600 hover:text-sky-700 flex items-center gap-1">
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      {/* Free Checklist CTA */}
      <section className="py-16 bg-sky-50">
        <Container>
          <div className="text-center">
            <ClipboardCheck className="w-12 h-12 text-sky-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Checklist 50 điểm tự đánh giá năng lực Supply Chain
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-6">
              Tự đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital, People/Process/Governance.
            </p>
            <Link to="/checklist" className="inline-flex px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors">
              Tải checklist miễn phí
            </Link>
          </div>
        </Container>
      </section>

      {/* Books Preview */}
      <section className="py-16">
        <Container>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Sách & Template</h2>
            <Link to="/books" className="text-sky-600 hover:text-sky-700 flex items-center gap-1">
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </Container>
      </section>

      {/* Tools Preview */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Công cụ</h2>
            <Link to="/tools" className="text-sky-600 hover:text-sky-700 flex items-center gap-1">
              Xem tất cả <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Dịch vụ tư vấn</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Supply Chain Assessment", icon: FileText, desc: "Đánh giá hiện trạng 6 trụ cột SCM" },
              { title: "Dashboard & Reporting", icon: Package, desc: "Dashboard forecast, tồn kho, logistics" },
              { title: "Process & KPI Standardization", icon: Wrench, desc: "SOP, KPI, RACI matrix" },
              { title: "Digital SCM Tools", icon: Wrench, desc: "Excel, Power BI, ERP readiness" },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
                <service.icon className="w-10 h-10 text-sky-500 mb-4" />
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
              Xem chi tiết dịch vụ
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}