import { Link, useParams } from "react-router-dom"
import Container from "@/components/layout/Container"
import { seedBooks } from "@/data/seedData"

export function ProductDetail() {
  const { slug } = useParams()
  const product = seedBooks.find((book) => book.slug === slug)

  if (!product) {
    return (
      <Container>
        <div className="py-16">
          <h1 className="font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">Không tìm thấy sản phẩm</h1>
          <Link to="/books" className="mt-6 inline-flex text-sm font-medium text-[var(--color-primary)] hover:underline">
            ← Quay lại Sản phẩm số
          </Link>
        </div>
      </Container>
    )
  }

  const statusMessage = product.status === "Đang phát triển"
    ? "Sản phẩm đang được xây dựng. Anh/chị có thể để lại email để nhận thông báo khi bản đầu tiên được phát hành."
    : "Sản phẩm đã có cấu trúc nội dung chính và đang được hoàn thiện trước khi phát hành."

  const statusClassName = product.status === "Đang phát triển"
    ? "border-[var(--color-warning)]/20 bg-[var(--color-warning)]/10 text-[var(--color-warning)]"
    : "border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]"

  return (
    <Container>
      <div className="py-16">
        <Link to="/books" className="inline-flex text-sm font-medium text-[var(--color-primary)] hover:underline">
          ← Quay lại Sản phẩm số
        </Link>

        <section className="surface-panel mt-6 rounded-[var(--radius-xl)] p-8 lg:p-10">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)]">
              {product.category}
            </span>
            <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusClassName}`}>
              {product.status}
            </span>
          </div>

          <p className="mt-5 font-[var(--font-mono)] text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            SCHUB.VN DIGITAL PRODUCT
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-4xl font-bold text-[var(--color-text)]">
            {product.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
            {product.description}
          </p>

          <div className="mt-8 border-t border-[var(--color-border)] pt-6">
            <p className="text-sm text-[var(--color-text-muted)]">Giá</p>
            <p className="mt-1 font-[var(--font-display)] text-2xl text-[var(--color-text)]">{product.price}</p>
          </div>

          <Link
            to="/checklist"
            className="focus-ring mt-8 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-110"
          >
            {product.ctaLabel}
          </Link>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Sản phẩm này giải quyết vấn đề gì?</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Sản phẩm giúp đội ngũ Supply Chain chuẩn hóa cách phân tích, báo cáo hoặc triển khai một nghiệp vụ cụ thể mà không phải bắt đầu từ trang trắng.
            </p>
          </div>

          <div className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Ai nên dùng?</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Phù hợp với trưởng kho, logistics manager, supply chain analyst, planning, procurement, kế toán kho và quản lý vận hành cần công cụ thực tế để áp dụng nhanh.
            </p>
          </div>

          <div className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Bên trong sẽ có gì?</h2>
            <ul className="mt-4 space-y-3 text-[var(--color-text-muted)]">
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />File template hoặc playbook chính</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />Hướng dẫn sử dụng</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />Ví dụ dữ liệu mẫu hoặc case áp dụng</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />Checklist kiểm tra trước khi triển khai</li>
              <li className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-secondary)]" />Gợi ý KPI theo dõi</li>
            </ul>
          </div>

          <div className="surface-panel card-hover rounded-[var(--radius-xl)] p-6">
            <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-text)]">Trạng thái phát triển</h2>
            <p className="mt-3 text-[var(--color-text-muted)]">{statusMessage}</p>
            <Link
              to="/checklist"
              className="focus-ring mt-6 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)] px-6 py-3 font-medium text-white transition-colors hover:brightness-105"
            >
              Để lại email nhận thông báo
            </Link>
          </div>
        </section>
      </div>
    </Container>
  )
}
