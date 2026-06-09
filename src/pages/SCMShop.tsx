import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { Package, BookOpen, FileSpreadsheet, ShoppingCart, ArrowRight, Calendar, Truck, FileCheck } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"

const products = [
  {
    slug: "ebook-30-cong-cu-scm",
    name: "eBook: 30 Công Cụ Quản Trị Supply Chain Thực Chiến",
    description: "Hệ thống tất cả công cụ cần thiết trong một bộ sưu tập. Từ Planning, Procurement đến Logistics.",
    price: "Sắp ra mắt",
    icon: BookOpen,
    badge: "Sắp ra mắt"
  },
  {
    slug: "planning-pack",
    name: "Planning Pack",
    description: "Mẫu forecast, S&OP calendar, demand review và capacity planning.",
    price: "Sắp ra mắt",
    icon: Calendar,
    badge: "Sắp ra mắt"
  },
  {
    slug: "procurement-pack",
    name: "Procurement Pack",
    description: "Supplier scorecard, lead time tracking, MOQ và risk assessment.",
    price: "Sắp ra mắt",
    icon: FileSpreadsheet,
    badge: "Sắp ra mắt"
  },
  {
    slug: "inventory-warehouse-pack",
    name: "Inventory & Warehouse Pack",
    description: "ABC/XYZ analysis, safety stock, FIFO/FEFO và cycle count template.",
    price: "Sắp ra mắt",
    icon: Package,
    badge: "Sắp ra mắt"
  },
  {
    slug: "logistics-3pl-pack",
    name: "Logistics & 3PL Pack",
    description: "SLA 3PL, KPI logistics, transport cost tracker và OTIF.",
    price: "Sắp ra mắt",
    icon: Truck,
    badge: "Sắp ra mắt"
  },
  {
    slug: "digital-scm-pack",
    name: "Digital SCM Pack",
    description: "Master data checklist, dashboard template, ERP/WMS readiness và AI prompts.",
    price: "Sắp ra mắt",
    icon: FileCheck,
    badge: "Sắp ra mắt"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

function SCMShop() {
  return (
    <>
      <Helmet>
        <title>Sách và Template Supply Chain Thực Chiến | SCM Thực Chiến</title>
        <meta name="description" content="Sách và template Supply Chain thực chiến. Planning Pack, Procurement Pack, Inventory & Warehouse Pack, Logistics & 3PL Pack, Digital SCM Pack." />
      </Helmet>
      
      <div className="min-h-[calc(100vh-4rem)] p-6">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <ShoppingCart className="w-4 h-4" />
              SCM Store
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Sách và Template <span className="text-blue-400">Supply Chain Thực Chiến</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Các công cụ và tài liệu thực chiến giúp bạn quản trị Supply Chain hiệu quả hơn.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <GlassCard key={product.slug} className="h-full flex flex-col p-6 group hover:border-blue-500/30 transition-colors border-blue-500/10">
                <div className="flex items-center gap-2 mb-3">
                  {product.badge && (
                    <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                  <product.icon className="w-7 h-7 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="text-sm text-blue-400">
                    {product.price}
                  </span>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium transition-colors text-white">
                    <span>Sắp ra mắt</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12 text-muted-foreground text-sm">
            <p>
              Cần tư vấn riêng?{" "}
              <Link to="/scm/services" className="text-blue-400 hover:underline">
                Xem dịch vụ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SCMShop