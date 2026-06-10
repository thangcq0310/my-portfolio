import { Link } from "react-router-dom"
import Container from "@/components/layout/Container"

interface Resource {
  title: string
  type: string
  status: string
  learningPath: string
  description: string
  href: string
  ctaLabel: string
}

const resources: Resource[] = [
  {
    title: "Checklist 50 điểm tự đánh giá Supply Chain",
    type: "Checklist",
    status: "Miễn phí",
    learningPath: "Tất cả",
    description: "Tự đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital, People/Process/Governance.",
    href: "/solutions/checklist",
    ctaLabel: "Làm checklist"
  },
  {
    title: "Master Data Audit Checklist",
    type: "Checklist",
    status: "Miễn phí",
    learningPath: "Nền tảng Supply Chain",
    description: "Checklist rà soát master data trước khi triển khai SAP/WMS, tập trung vào UoM, gross weight, batch rule, shelf-life và location master.",
    href: "/solutions/products/master-data-audit-checklist",
    ctaLabel: "Tải checklist"
  },
  {
    title: "Supply Chain Maturity Assessment",
    type: "Assessment",
    status: "Sắp ra mắt",
    learningPath: "Nền tảng Supply Chain",
    description: "Đánh giá mức độ trưởng thành SCM từ ad-hoc đến integrated, collaborative supply chain.",
    href: "/solutions/tools",
    ctaLabel: "Xem công cụ"
  },
  {
    title: "S&OP Readiness Check",
    type: "Assessment",
    status: "Sắp ra mắt",
    learningPath: "S&OP",
    description: "Đánh giá mức độ sẵn sàng triển khai S&OP process trong doanh nghiệp.",
    href: "/solutions/tools",
    ctaLabel: "Xem công cụ"
  },
  {
    title: "Forecast Error Calculator",
    type: "Công cụ",
    status: "Đang phát triển",
    learningPath: "Dự báo nhu cầu",
    description: "Dùng khi bạn có forecast và actual nhưng chưa biết đo sai số bằng MAD, MAPE, tracking signal hoặc bias.",
    href: "/solutions/tools",
    ctaLabel: "Xem công cụ"
  },
  {
    title: "ABC/XYZ Inventory Analysis Template",
    type: "Template",
    status: "Đang phát triển",
    learningPath: "Quản trị nhu cầu",
    description: "Template phân loại SKU theo giá trị và độ biến động nhu cầu, xác định nhóm hàng cần kiểm soát tồn kho chặt hơn.",
    href: "/solutions/products/abc-xyz-inventory-analysis-template",
    ctaLabel: "Xem sản phẩm"
  },
]

const statusClasses: Record<string, string> = {
  "Miễn phí": "border-[var(--color-success)]/20 bg-[var(--color-success)]/10 text-[var(--color-success)]",
  "Sắp ra mắt": "border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
  "Đang phát triển": "border-[var(--color-warning)]/20 bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
}

export function Resources() {
  return (
    <Container>
      <div className="py-16">
        <div className="mb-10 max-w-4xl">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Tài nguyên Supply Chain</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Checklist, assessment, sample template và công cụ giúp bạn bắt đầu từ vấn đề thực tế trước khi đi sâu vào sản phẩm số hoặc dịch vụ.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.title} to={resource.href} className="surface-panel card-hover block rounded-[var(--radius-xl)] p-6">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
                  {resource.type}
                </span>
                <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[resource.status]}`}>
                  {resource.status}
                </span>
              </div>
              <h2 className="mt-4 font-[var(--font-display)] text-xl text-[var(--color-text)]">{resource.title}</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{resource.description}</p>
              <div className="mt-2 text-xs text-[var(--color-text-muted)]">
                Lộ trình: <span className="text-[var(--color-primary)]">{resource.learningPath}</span>
              </div>
              <div className="mt-4 text-sm font-medium text-[var(--color-primary)]">{resource.ctaLabel}</div>
            </Link>
          ))}
        </div>

        <section className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Không biết nên bắt đầu từ tài nguyên nào?</h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--color-text-muted)]">
            Hãy làm checklist 50 điểm trước để xác định điểm nghẽn chính trong vận hành Supply Chain.
          </p>
          <Link
            to="/solutions/checklist"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105"
          >
            Làm checklist 50 điểm
          </Link>
        </section>
      </div>
    </Container>
  )
}