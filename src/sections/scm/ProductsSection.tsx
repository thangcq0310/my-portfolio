import { Link } from "react-router-dom";
import { BookOpen, FileSpreadsheet, BarChart3, FileCheck, Package, Truck, ArrowRight, Bell } from "lucide-react";

const products = [
  {
    icon: BookOpen,
    title: "eBook: 30 Công Cụ Quản Trị Supply Chain Thực Chiến",
    description: "Hệ thống tất cả công cụ cần thiết trong một bộ sưu tập. Từ Excel đến SOP. Sắp ra mắt",
    tag: "eBook",
    price: "Sắp ra mắt",
    badge: "Sắp ra mắt"
  },
  {
    icon: FileSpreadsheet,
    title: "Planning Pack",
    description: "Mẫu forecast, S&OP, demand review và capacity planning.",
    tag: "Template",
    price: "Sắp ra mắt",
    badge: "Sắp ra mắt"
  },
  {
    icon: Package,
    title: "Procurement Pack",
    description: "Supplier scorecard, lead time tracking, MOQ và risk assessment.",
    tag: "Template",
    price: "Sắp ra mắt",
    badge: "Sắp ra mắt"
  },
  {
    icon: BarChart3,
    title: "Inventory & Warehouse Pack",
    description: "ABC/XYZ analysis, safety stock, FIFO/FEFO và cycle count.",
    tag: "Template",
    price: "Sắp ra mắt",
    badge: "Sắp ra mắt"
  },
  {
    icon: Truck,
    title: "Logistics & 3PL Pack",
    description: "SLA 3PL, KPI logistics, transport cost tracker và OTIF.",
    tag: "Template",
    price: "Sắp ra mắt",
    badge: "Sắp ra mắt"
  },
  {
    icon: FileCheck,
    title: "Digital SCM Pack",
    description: "Master data checklist, dashboard template, ERP/WMS readiness và AI prompts.",
    tag: "Template",
    price: "Sắp ra mắt",
    badge: "Sắp ra mắt"
  }
];

export function ProductsSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white/[0.02]" id="products">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Sách và template thực chiến
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Những sản phẩm đúc kết từ kinh nghiệm thực địa, giúp doanh nghiệp áp dụng ngay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="glass-card p-5 rounded-2xl hover:bg-white/[0.07] transition-colors group border-blue-500/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {product.tag}
                </span>
                {product.badge && (
                  <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {product.badge}
                  </span>
                )}
              </div>
              <product.icon className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-semibold mb-2 text-white text-sm leading-tight">
                {product.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs text-blue-400">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="/scm/shop" 
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700 transition-colors text-white"
          >
            Xem shop <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}