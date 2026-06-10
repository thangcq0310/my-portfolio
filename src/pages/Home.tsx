import { Link } from "react-router-dom"
import { ArrowRight, FileText, Wrench, ClipboardCheck, TrendingUp, Warehouse, Database, BarChart3, Users, ClipboardList, Scale, Target } from "lucide-react"
import Container from "../components/layout/Container"
import ArticleCard from "../components/cards/ArticleCard"
import BookCard from "../components/cards/BookCard"
import ToolCard from "../components/cards/ToolCard"
import { seedArticles, seedBooks, seedTools } from "../data/seedData"

const topics = [
  "Tất cả", "Warehouse", "Inventory", "Cold Chain", "FEFO/FIFO", "WMS", "3PL", "S&OP",
  "Demand Planning", "Procurement", "Logistics Cost", "Digital SCM"
]

const painPoints = [
  {
    title: "Forecast sai, kế hoạch cung ứng bị động",
    description: "Doanh nghiệp thiếu dự báo chính xác dẫn đến mua hàng muộn, sản xuất chậm.",
    icon: TrendingUp,
  },
  {
    title: "Tồn kho cao nhưng vẫn thiếu hàng",
    description: "Hàng tồn nhiều nhưng SKU cần bán lại không có, ứ đọng vốn.",
    icon: Warehouse,
  },
  {
    title: "Kho vận thủ công, số liệu NXT chậm",
    description: "Quy trình thủ công, tồn kho thực tế không khớp hệ thống.",
    icon: ClipboardList,
  },
  {
    title: "Có ERP/SAP nhưng master data và KPI chưa chuẩn",
    description: "Dữ liệu sai UoM, weight, batch rule làm sai toàn bộ báo cáo.",
    icon: Database,
  },
]

const pillars = [
  { title: "Planning", description: "Forecast, S&OP, capacity, supply plan" },
  { title: "Procurement", description: "Supplier, MOQ, lead time, purchasing plan" },
  { title: "Inventory", description: "ABC/XYZ, safety stock, reorder point, aging" },
  { title: "Warehouse & Logistics", description: "FIFO/FEFO, location, 3PL, transport cost" },
  { title: "Data, KPI & Digital", description: "Dashboard, master data, ERP/WMS, Power BI" },
  { title: "Process & Governance", description: "SOP, RACI, meeting rhythm, performance review" },
]

const scmMetrics = [
  { label: "Inventory Accuracy", value: "98.2%", status: "good" },
  { label: "S&OP Rhythm", value: "Monthly", status: "neutral" },
  { label: "3PL SLA", value: "96.5%", status: "good" },
  { label: "Logistics Cost", value: "12.4%", status: "warning" },
  { label: "Master Data", value: "12/42", status: "warning" },
  { label: "Digital Tools", value: "3/10", status: "critical" },
]

const services = [
  { title: "Supply Chain Assessment", icon: FileText, desc: "Đánh giá hiện trạng 6 trụ cột SCM" },
  { title: "Dashboard & Reporting", icon: BarChart3, desc: "Dashboard forecast, tồn kho, logistics" },
  { title: "Process & KPI Standardization", icon: Wrench, desc: "SOP, KPI, RACI matrix" },
  { title: "Digital SCM Tools", icon: Database, desc: "Excel, Power BI, ERP readiness" },
]

export function Home() {
  const featuredArticles = seedArticles.filter(a => a.featured).slice(0, 6)
  const featuredBooks = seedBooks.filter(b => b.featured).slice(0, 3)
  const featuredTools = seedTools.filter(t => t.featured).slice(0, 4)

  return (
    <div>
      {/* Hero - 2 columns */}
      <section className="bg-slate-50 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-sm font-medium text-[#FF5F03] uppercase tracking-wider mb-4">SCHub.vn / Supply Chain Knowledge</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
                Hệ thống kiến thức &amp; công cụ Supply Chain thực chiến cho doanh nghiệp Việt Nam
              </h1>
              <p className="text-lg text-slate-600 mt-6 mb-8 max-w-xl">
                SCHub.vn giúp nhà quản lý và đội ngũ vận hành chuẩn hóa planning, procurement, inventory, warehouse, logistics cost và digital SCM bằng bài viết thực chiến, template và playbook dễ áp dụng.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/articles" className="px-6 py-3 bg-[#072C2C] text-white font-medium rounded-lg hover:bg-[#0a4242] transition-colors">
                  Khám phá bài viết
                </Link>
                <Link to="/checklist" className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5" />
                  Tải checklist 50 điểm
                </Link>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#072C2C]" />
                  Tập trung vào bài toán thực tế của doanh nghiệp Việt Nam
                </li>
                <li className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#072C2C]" />
                  Có template, checklist và playbook áp dụng ngay
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#072C2C]" />
                  Phù hợp cho SCM, Logistics, Warehouse, Planning, Procurement
                </li>
              </ul>
            </div>

            {/* Right: SCM Control Room Mock */}
            <div className="bg-[#072C2C] rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold">SCM Control Room</h3>
                <div className="w-2 h-2 bg-[#FF5F03] rounded-full animate-pulse" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {scmMetrics.map((metric, i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-4">
                    <p className="text-slate-400 text-xs mb-1">{metric.label}</p>
                    <p className={`text-xl font-bold ${
                      metric.status === "good" ? "text-[#16A34A]" :
                      metric.status === "warning" ? "text-[#D97706]" : "text-[#DC2626]"
                    }`}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-slate-100">
        <Container>
          <h2 className="text-2xl font-bold text-[#0F172A] text-center mb-4">Doanh nghiệp thường gặp gì?</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">Những bài toán phổ biến trong vận hành chuỗi cung ứng tại Việt Nam.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((pain, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <pain.icon className="w-8 h-8 text-[#072C2C] mb-4" />
                <h3 className="font-semibold text-[#0F172A] mb-2">{pain.title}</h3>
                <p className="text-sm text-slate-600">{pain.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6 Pillars Section */}
      <section className="py-16">
        <Container>
          <h2 className="text-2xl font-bold text-[#0F172A] text-center mb-4">6 trụ cột nội dung</h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12">Kiến thức và công cụ cho toàn bộ chuỗi cung ứng.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((pillar, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 hover:border-[#072C2C] transition-colors">
                <h3 className="font-semibold text-[#0F172A]">{pillar.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Topics */}
      <section className="py-8 border-t border-slate-200">
        <Container>
          <div className="flex flex-wrap gap-2">
            {topics.map(topic => (
              <Link key={topic} to={`/articles?tag=${encodeURIComponent(topic)}`} className="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-600 hover:border-[#072C2C] hover:text-[#072C2C] transition-colors">
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
            <h2 className="text-2xl font-bold text-[#0F172A]">Bài viết thực chiến mới nhất</h2>
            <Link to="/articles" className="text-[#072C2C] hover:opacity-80 flex items-center gap-1">
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
      <section className="py-16 bg-slate-100">
        <Container>
          <div className="text-center">
            <ClipboardCheck className="w-12 h-12 text-[#072C2C] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Checklist 50 điểm tự đánh giá năng lực Supply Chain</h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-6">Tự đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse &amp; Logistics, Data/KPI/Digital, People/Process/Governance.</p>
            <Link to="/checklist" className="inline-flex px-6 py-3 bg-[#FF5F03] text-white font-medium rounded-lg hover:bg-[#ff7a33] transition-colors">
              Tải checklist miễn phí
            </Link>
          </div>
        </Container>
      </section>

      {/* Books Preview */}
      <section className="py-16">
        <Container>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#0F172A]">Sách, template &amp; playbook</h2>
            <Link to="/books" className="text-[#072C2C] hover:opacity-80 flex items-center gap-1">
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
            <h2 className="text-2xl font-bold text-[#0F172A]">Công cụ miễn phí &amp; template vận hành</h2>
            <Link to="/tools" className="text-[#072C2C] hover:opacity-80 flex items-center gap-1">
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
          <h2 className="text-2xl font-bold text-[#0F172A] text-center mb-12">Dịch vụ triển khai thực tế</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
                <service.icon className="w-10 h-10 text-[#072C2C] mb-4" />
                <h3 className="font-semibold text-[#0F172A] mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services" className="inline-flex px-6 py-3 bg-[#072C2C] text-white font-medium rounded-lg hover:bg-[#0a4242] transition-colors">
              Xem chi tiết dịch vụ
            </Link>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#072C2C]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Bắt đầu chuẩn hóa Supply Chain từ bộ checklist 50 điểm
            </h2>
            <p className="text-slate-300 mb-8">
              Tự đánh giá năng lực SCM của doanh nghiệp và nhận kế hoạch cải thiện phù hợp với mức độ trưởng thành hiện tại.
            </p>
            <Link to="/checklist" className="inline-flex px-8 py-4 bg-[#FF5F03] text-white font-medium rounded-lg hover:bg-[#ff7a33] transition-colors">
              Tải checklist miễn phí
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}