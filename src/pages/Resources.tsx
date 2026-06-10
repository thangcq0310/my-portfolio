import { Link } from "react-router-dom"
import Container from "@/components/layout/Container"

const resources = [
  {
    title: "Checklist 50 điểm tự đánh giá Supply Chain",
    type: "Checklist",
    status: "Miễn phí",
    href: "/solutions/checklist",
  },
  {
    title: "Supply Chain Maturity Assessment",
    type: "Assessment",
    status: "Sắp ra mắt",
    href: "/solutions/tools",
  },
  {
    title: "Master Data Audit Checklist",
    type: "Checklist",
    status: "Miễn phí",
    href: "/solutions/products/master-data-audit-checklist",
  },
  {
    title: "S&OP Readiness Check",
    type: "Assessment",
    status: "Sắp ra mắt",
    href: "/solutions/tools",
  },
  {
    title: "Forecast Error Calculator",
    type: "Tool",
    status: "Đang phát triển",
    href: "/solutions/tools",
  },
  {
    title: "ABC/XYZ Inventory Analysis Template",
    type: "Template",
    status: "Đang phát triển",
    href: "/solutions/products/abc-xyz-inventory-analysis-template",
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
            Checklist, assessment, sample template và tài liệu miễn phí giúp đội ngũ Supply Chain bắt đầu từ vấn đề thực tế trước khi dùng công cụ, sản phẩm số hoặc dịch vụ.
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
              <h2 className="mt-4 font-[var(--font-display)] text-2xl text-[var(--color-text)]">{resource.title}</h2>
              <div className="mt-5 text-sm font-medium text-[var(--color-primary)]">Xem tài nguyên</div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}
