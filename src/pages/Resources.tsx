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
    description: "Tự đánh giá 6 nhóm năng lực: Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital và Governance.",
    href: "/solutions/checklist",
    ctaLabel: "Làm checklist"
  },
  {
    title: "Master Data Audit Checklist",
    type: "Checklist",
    status: "Miễn phí",
    learningPath: "Supply Chain Foundation",
    description: "Rà soát Master Data trước khi triển khai ERP/WMS/SAP, tập trung vào UoM, gross weight, batch rule, shelf-life và location master.",
    href: "/solutions/products/master-data-audit-checklist",
    ctaLabel: "Xem checklist"
  },
  {
    title: "Supply Chain Maturity Assessment",
    type: "Assessment",
    status: "Sắp ra mắt",
    learningPath: "Supply Chain Foundation",
    description: "Đánh giá mức độ trưởng thành SCM từ ad-hoc đến integrated planning, cross-functional governance và data-driven decision.",
    href: "/solutions/tools",
    ctaLabel: "Xem tool"
  },
  {
    title: "S&OP Readiness Check",
    type: "Assessment",
    status: "Sắp ra mắt",
    learningPath: "S&OP",
    description: "Đánh giá readiness về data, meeting cadence, decision rights, demand review, supply review và executive alignment.",
    href: "/solutions/tools",
    ctaLabel: "Xem tool"
  },
  {
    title: "Forecast Error Calculator",
    type: "Tool",
    status: "Đang phát triển",
    learningPath: "Forecasting",
    description: "Dùng khi bạn có forecast và actual nhưng chưa biết đo sai số bằng MAD, MAPE, tracking signal hoặc forecast bias.",
    href: "/solutions/tools",
    ctaLabel: "Xem tool"
  },
  {
    title: "ABC/XYZ Inventory Analysis Template",
    type: "Template",
    status: "Đang phát triển",
    learningPath: "Inventory Control",
    description: "Phân loại SKU theo value và demand variability để xác định nhóm hàng cần kiểm soát inventory chặt hơn.",
    href: "/solutions/products/abc-xyz-inventory-analysis-template",
    ctaLabel: "Xem digital product"
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
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Resources cho Supply Chain</h1>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Checklist, assessment, sample template và tool giúp bạn bắt đầu từ vấn đề thực tế trước khi đi sâu vào digital product hoặc service.
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
                Learning Path: <span className="text-[var(--color-primary)]">{resource.learningPath}</span>
              </div>
              <div className="mt-4 text-sm font-medium text-[var(--color-primary)]">{resource.ctaLabel}</div>
            </Link>
          ))}
        </div>

        <section className="surface-panel mt-12 rounded-[var(--radius-xl)] p-8 text-center">
          <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Không biết nên bắt đầu từ resource nào?</h2>
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