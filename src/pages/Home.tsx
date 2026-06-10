import { Link } from "react-router-dom"
import { ArrowRight, ClipboardCheck, TrendingUp, Warehouse, Database, BarChart3, Users, Scale, Target, Package, FileText, LayoutDashboard } from "lucide-react"
import Container from "../components/layout/Container"
import ArticleCard from "../components/cards/ArticleCard"
import { seedArticles } from "../data/seedData"
import { learningPaths } from "../data/learningPaths"

// Target audience cards
const targetUsers = [
  {
    title: "SCM / Logistics / Warehouse Manager",
    description: "Cần chuẩn hóa quy trình, KPI, chi phí logistics, kho vận và 3PL.",
    icon: Package,
  },
  {
    title: "Planning / Procurement / Inventory",
    description: "Cần hiểu forecast, demand planning, tồn kho, supplier lead time và chính sách bổ sung hàng.",
    icon: FileText,
  },
  {
    title: "SME Owner / Operations Manager",
    description: "Cần nhìn Supply Chain bằng ngôn ngữ dễ hiểu để ra quyết định vận hành.",
    icon: Users,
  },
  {
    title: "Đội triển khai ERP / WMS / SAP",
    description: "Cần chuẩn hóa master data, process, RACI và readiness trước khi triển khai hệ thống.",
    icon: Database,
  },
]

// Pain points - updated wording
const painPoints = [
  {
    title: "Tồn kho cao nhưng vẫn thiếu hàng",
    description: "Doanh nghiệp có nhiều tồn kho nhưng SKU cần giao lại thiếu, hàng nằm sai kho hoặc chưa rõ trạng thái khả dụng.",
    icon: Warehouse,
  },
  {
    title: "Forecast sai, kế hoạch bị động",
    description: "Sales, planning và production không dùng cùng một giả định nhu cầu, dẫn đến mua hàng và sản xuất thiếu ổn định.",
    icon: TrendingUp,
  },
  {
    title: "Master data không sạch",
    description: "Sai UoM, weight, shelf-life, batch rule hoặc location master làm sai tồn kho, chi phí và báo cáo.",
    icon: Database,
  },
  {
    title: "3PL, kho vận và chi phí khó kiểm soát",
    description: "Doanh nghiệp có dữ liệu nhưng chưa đủ SLA, KPI, cost-to-serve và cơ chế xử lý sai lệch.",
    icon: BarChart3,
  },
  {
    title: "Dashboard không giúp ra quyết định",
    description: "Báo cáo nhiều nhưng chưa gắn với action owner, ngưỡng cảnh báo và nhịp review.",
    icon: ClipboardCheck,
  },
]

// Four main paths
const mainPaths = [
  {
    title: "About",
    description: "Hiểu SCHub.vn là gì, dành cho ai và phương pháp tiếp cận thực chiến.",
    href: "/about",
    cta: "Tìm hiểu SCHub",
  },
  {
    title: "Learning Hub",
    description: "Học Supply Chain theo lộ trình từ nền tảng đến forecasting, S&OP và planning control.",
    href: "/learning",
    cta: "Xem lộ trình học",
  },
  {
    title: "Solutions",
    description: "Tìm checklist, công cụ, template, sản phẩm số hoặc dịch vụ để xử lý bài toán cụ thể.",
    href: "/solutions",
    cta: "Xem giải pháp",
  },
  {
    title: "Blog",
    description: "Đọc các bài viết thực chiến về planning, inventory, warehouse, 3PL, master data và KPI.",
    href: "/blog",
    cta: "Đọc blog",
  },
]

// Solutions 4 groups for preview
const solutionsGroups = [
  {
    title: "Tài nguyên",
    description: "Checklist, assessment và sample template để bắt đầu nhanh.",
    href: "/solutions/resources",
  },
  {
    title: "Sản phẩm số",
    description: "Template, eBook, playbook, SOP pack và dashboard starter.",
    href: "/solutions/products",
  },
  {
    title: "Công cụ",
    description: "Calculator, analyzer và mini tool hỗ trợ phân tích nhanh.",
    href: "/solutions/tools",
  },
  {
    title: "Dịch vụ",
    description: "Tư vấn, dashboard, chuẩn hóa KPI/SOP và triển khai công cụ nội bộ.",
    href: "/solutions/services",
  },
]

export function Home() {
  const featuredArticles = seedArticles.filter(a => a.featured).slice(0, 3)
  const featuredLearningPaths = learningPaths.filter((path) => 
    ["supply-chain-foundation", "forecasting", "sop"].includes(path.slug)
  )

  return (
    <div>
      {/* 1. Hero */}
      <section className="bg-[var(--color-surface)] py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-[var(--color-secondary)]">SCHub.vn</p>
              <h1 className="font-[var(--font-display)] text-3xl font-bold leading-tight text-[var(--color-text)] md:text-4xl lg:text-5xl">
                Supply Chain thực chiến cho doanh nghiệp Việt Nam
              </h1>
              <p className="mt-6 mb-8 max-w-xl text-lg text-[var(--color-text-muted)]">
                SCHub.vn giúp người làm Supply Chain học có hệ thống, lấy tài nguyên phù hợp và áp dụng công cụ, template, checklist vào vận hành thực tế.
              </p>
              <div className="mb-8 flex flex-wrap gap-4">
                <Link to="/learning" className="rounded-[var(--radius-md)] border border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:bg-[#0a4242]">
                  Bắt đầu với Learning Hub
                </Link>
                <Link to="/solutions" className="flex items-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-3 font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-border-strong)]">
                  <Scale className="h-5 w-5" />
                  Xem Solutions
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
                <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/10 p-4">
                  <p className="mb-1 text-xs text-white/60">Inventory Accuracy</p>
                  <p className="text-xl font-bold text-[#16A34A]">98.2%</p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/10 p-4">
                  <p className="mb-1 text-xs text-white/60">S&OP Rhythm</p>
                  <p className="text-xl font-bold text-white">Monthly</p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/10 p-4">
                  <p className="mb-1 text-xs text-white/60">3PL SLA</p>
                  <p className="text-xl font-bold text-[#16A34A]">96.5%</p>
                </div>
                <div className="rounded-[var(--radius-md)] border border-white/10 bg-white/10 p-4">
                  <p className="mb-1 text-xs text-white/60">Logistics Cost</p>
                  <p className="text-xl font-bold text-[#D97706]">12.4%</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Who is this for? */}
      <section className="bg-[var(--color-surface-raised)] py-20">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">SCHub.vn dành cho ai?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">Chọn nhóm phù hợp với vai trò và nhu cầu của bạn.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {targetUsers.map((user, i) => (
              <div key={i} className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
                <user.icon className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] font-semibold text-[var(--color-text)]">{user.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{user.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Pain points - updated wording */}
      <section className="py-20">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Những điểm nghẽn SCHub.vn tập trung giải quyết</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">5 bài toán phổ biến trong vận hành Supply Chain tại doanh nghiệp Việt Nam.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* 4. Four main paths */}
      <section className="bg-[var(--color-surface-raised)] py-20">
        <Container>
          <h2 className="mb-4 text-center font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Bắt đầu từ đâu?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-[var(--color-text-muted)]">Chọn một hướng phù hợp với nhu cầu hiện tại: hiểu SCHub.vn, học theo lộ trình, lấy giải pháp hoặc đọc bài viết thực chiến.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {mainPaths.map((path) => (
              <Link key={path.title} to={path.href} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
                <h3 className="mb-3 font-[var(--font-display)] text-xl font-semibold text-[var(--color-text)]">{path.title}</h3>
                <p className="mb-4 text-sm text-[var(--color-text-muted)]">{path.description}</p>
                <span className="text-sm font-medium text-[var(--color-primary)]">{path.cta}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Learning Hub preview */}
      <section className="py-20">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Learning Hub</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">Các lộ trình học giúp bạn hiểu vấn đề, đọc bài viết liên quan và tìm tài nguyên phù hợp để áp dụng vào vận hành.</p>
            </div>
            <Link to="/learning" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              Xem toàn bộ Learning Hub <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredLearningPaths.map((path) => (
              <Link key={path.slug} to={`/learning/${path.slug}`} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Lộ trình học</p>
                <h3 className="mt-3 font-[var(--font-display)] text-2xl text-[var(--color-text)]">{path.vietnameseTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{path.description}</p>
                <div className="mt-5 text-sm font-medium text-[var(--color-primary)]">Xem lộ trình</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Solutions preview */}
      <section className="bg-[var(--color-surface-raised)] py-20">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Solutions</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">Tài nguyên, sản phẩm số, công cụ và dịch vụ được đóng gói theo các bài toán Supply Chain thực tế.</p>
            </div>
            <Link to="/solutions" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              Xem tất cả Solutions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionsGroups.map((group) => (
              <Link key={group.title} to={group.href} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
                <LayoutDashboard className="mb-4 h-8 w-8 text-[var(--color-primary)]" />
                <h3 className="mb-2 font-[var(--font-display)] text-xl text-[var(--color-text)]">{group.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{group.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Blog preview */}
      <section className="py-20">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="font-[var(--font-display)] text-2xl font-bold text-[var(--color-text)]">Blog thực chiến</h2>
              <p className="mt-3 max-w-2xl text-[var(--color-text-muted)]">Các bài viết ngắn, thực dụng, tập trung vào vấn đề vận hành và cách xử lý.</p>
            </div>
            <Link to="/blog" className="flex items-center gap-1 text-[var(--color-primary)] hover:opacity-80">
              Xem tất cả bài viết <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Final CTA - Checklist */}
      <section className="bg-[var(--color-primary)] py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 font-[var(--font-display)] text-2xl font-bold text-white md:text-3xl">
              Bắt đầu bằng việc tự đánh giá Supply Chain
            </h2>
            <p className="mb-8 text-slate-300">
              Làm checklist 50 điểm để xác định điểm nghẽn trong planning, procurement, inventory, warehouse & logistics, data/KPI/digital và governance.
            </p>
            <Link to="/solutions/checklist" className="inline-flex rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-8 py-4 font-medium text-white transition-colors hover:brightness-105">
              Làm checklist 50 điểm
            </Link>
          </div>
        </Container>
      </section>
    </div>
  )
}