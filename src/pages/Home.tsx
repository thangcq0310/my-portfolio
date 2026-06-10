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
      <section className="bg-[var(--color-surface)] py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--color-secondary)]">SCHub.vn / Supply Chain Knowledge</p>
              <h1 className="font-[var(--font-display)] text-3xl font-bold leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl">
                Hệ thống kiến thức &amp; công cụ Supply Chain thực chiến cho doanh nghiệp Việt Nam
              </h1>
              <p className="mt-6 mb-8 max-w-xl text-lg text-[var(--color-text-muted)]">
                SCHub.vn giúp nhà quản lý và đội ngũ vận hành chuẩn hóa planning, procurement, inventory, warehouse, logistics cost và digital SCM bằng bài viết thực chiến, template và playbook dễ áp dụng.
              </p>
              <div className="mb-8 flex flex-wrap gap-4">
                <Link to="/articles" className="rounded-[var(--radius-md)] border border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0a4242]">
                  Khám phá bài viết
                </Link>
                <Link to="/checklist" className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-3 font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]">
                  <ClipboardCheck className="h-5 w-5" />
                  Tải checklist 50 điểm
                </Link>
              </div>
              <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-[var(--color-primary)]" />
                  Tập trung vào bài toán thực tế của doanh nghiệp Việt Nam
                </li>
                <li className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-[var(--color-primary)]" />
                  Có template, checklist và playbook áp dụng ngay
                </li>
                <li className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-[var(--color-primary)]" />
                  Phù hợp cho SCM, Logistics, Warehouse, Planning, Procurement
                </li>
              </ul>
            </div>

            <div className="rounded-[var(--radius-xl)] bg-[var(--color-primary)] p-6 shadow-[var(--shadow-panel-hover)]">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-[var(--font-display)] font-semibold text-white">SCM Control Room</h3>
                <div className="h-2 w-2 rounded-full bg-[var(--color-secondary)] animate-pulse" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {scmMetrics.map((metric, i) => (
                  <div key={i} className="rounded-[var(--radius-md)] border border-white/10 bg-white/10 p-4">
                    <p className="mb-1 text-xs text-white/60">{metric.label}</p>
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

      <section className="bg-[var(--color-surface-raised)] py-20">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Doanh nghiệp thường gặp gì?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">Các điểm nghẽn thường làm doanh nghiệp vừa thiếu hàng, vừa tồn cao, vừa khó kiểm soát chi phí logistics.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((pain, i) => (
              <div key={i} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
                <pain.icon className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] font-semibold text-[var(--color-text)]">{pain.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{pain.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">6 trụ cột nội dung</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">Mỗi trụ cột được xây theo logic: vấn đề vận hành → nguyên tắc quản trị → template áp dụng → KPI theo dõi.</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <div key={i} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
                <h3 className="font-[var(--font-display)] font-semibold text-[var(--color-text)]">{pillar.title}</h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{pillar.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border)] py-8">
        <Container>
          <div className="flex flex-wrap gap-2">
            {topics.map(topic => (
              <Link key={topic} to={`/articles?tag=${encodeURIComponent(topic)}`} className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1.5 text-sm text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                {topic}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Bài viết thực chiến mới nhất</h2>
            <Link to="/articles" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface)] py-16">
        <Container>
          <div className="text-center">
            <ClipboardCheck className="mx-auto mb-4 h-12 w-12 text-[var(--color-primary)]" />
            <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Checklist 50 điểm tự đánh giá năng lực Supply Chain</h2>
            <p className="mx-auto mb-6 max-w-xl text-[var(--color-text-muted)]">Tự đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse &amp; Logistics, Data/KPI/Digital, People/Process/Governance.</p>
            <Link to="/checklist" className="inline-flex rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105">
              Tải checklist miễn phí
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Sản phẩm số Supply Chain</h2>
            <Link to="/books" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-surface-raised)] py-16">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Công cụ miễn phí &amp; template vận hành</h2>
            <Link to="/tools" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              Xem tất cả <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredTools.map(tool => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="mb-12 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Dịch vụ triển khai thực tế</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <div key={i} className="surface-panel rounded-[var(--radius-xl)] p-6">
                <service.icon className="mb-4 h-10 w-10 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] font-semibold text-[var(--color-text)]">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="inline-flex rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0a4242]">
              Xem chi tiết dịch vụ
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-[var(--color-primary)] py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold text-white md:text-3xl">
              Bắt đầu chuẩn hóa Supply Chain từ bộ checklist 50 điểm
            </h2>
            <p className="mb-8 text-slate-300">
              Tự đánh giá năng lực SCM của doanh nghiệp và nhận kế hoạch cải thiện phù hợp với mức độ trưởng thành hiện tại.
            </p>
            <Link to="/checklist" className="inline-flex rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-8 py-4 font-medium text-white transition-colors hover:brightness-105">
              Tải checklist miễn phí
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
