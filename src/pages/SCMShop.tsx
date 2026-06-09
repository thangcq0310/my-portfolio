import { motion } from "framer-motion"
import { Package, BookOpen, FileSpreadsheet, ShoppingCart, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { SEO } from "@/components/SEO"
import { GlassCard } from "@/components/ui/glass-card"

const products = [
  {
    slug: "kiem-kho-thong-minh",
    name: "Kiểm kê thông minh",
    description: "Quy trình và template kiểm kê tồn kho chuẩn SCM. Áp dụng cho kho công nghiệp và thương mại.",
    price: 499000,
    icon: Package,
  },
  {
    slug: "scm-thuc-chien",
    name: "SCM Thực Chiến",
    description: "eBook toàn diện 200+ trang về quản lý tồn kho, đặt hàng, và tối ưu logistics.",
    price: 199000,
    icon: BookOpen,
  },
  {
    slug: "excel-inventory",
    name: "Excel Inventory",
    description: "Template Excel quản lý tồn kho với dashboard, inventory turnover, và alert tự động.",
    price: 99000,
    icon: FileSpreadsheet,
  },
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price)
}

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
      <SEO
        title="SCM Shop - Sản Phẩm & Công Cụ"
        description="Mua sắm công cụ, template và tài liệu SCM. Kiểm kê thông minh, eBook, Excel templates."
        type="product"
      />
      
      <div className="min-h-[calc(100vh-4rem)] p-6">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <ShoppingCart className="w-4 h-4" />
              SCM Store
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Công Cụ & Tài Liệu SCM
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Các công cụ và tài liệu thực chiến giúp bạn quản lý tồn kho hiệu quả hơn.
            </p>
          </header>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {products.map((product) => (
              <motion.div key={product.slug} variants={item}>
                <GlassCard className="h-full flex flex-col p-6 group hover:border-pink-500/30 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mb-4 group-hover:bg-pink-500/30 transition-colors">
                    <product.icon className="w-7 h-7 text-pink-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                    <span className="text-xl font-bold text-pink-400">
                      {formatPrice(product.price)}
                    </span>
                    <Link
                      to={`/order?product=${product.slug}`}
                      className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      Mua ngay
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12 text-muted-foreground text-sm">
            <p>
              Cần tư vấn riêng?{" "}
              <Link to="/scm/services" className="text-pink-400 hover:underline">
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