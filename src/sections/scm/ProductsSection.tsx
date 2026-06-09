import { Link } from "react-router-dom";
import { BookOpen, FileSpreadsheet, BarChart3, FileCheck, Bell } from "lucide-react";

const products = [
  {
    icon: BookOpen,
    title: "eBook: 30 Công Cụ Quản Trị Supply Chain",
    description: "Hệ thống tất cả công cụ cần thiết trong một bộ sưu tập. Từ Excel đến SOP.",
    tag: "eBook",
    price: "Sắp ra mắt"
  },
  {
    icon: FileSpreadsheet,
    title: "Template Excel Quản Lý Tồn Kho",
    description: "File Excel có sẵn công thức, auto tính toán, in báo cáo. Dùng ngay không cần chỉnh sửa.",
    tag: "Template",
    price: "Sắp ra mắt"
  },
  {
    icon: BarChart3,
    title: "Bộ KPI Kho Vận",
    description: "Tập hợp các chỉ tiêu cần theo dõi theo ngày, tuần, tháng. Có dashboard mẫu.",
    tag: "KPI",
    price: "Sắp ra mắt"
  },
  {
    icon: FileCheck,
    title: "Bộ SLA Thuê Kho Ngoài / 3PL",
    description: "Mẫu hợp đồng, SLA, KPIs để đánh giá nhà cung cấp dịch vụ kho ngoài.",
    tag: "Template",
    price: "Sắp ra mắt"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <div 
              key={idx} 
              className="glass-card p-5 rounded-2xl hover:bg-white/[0.07] transition-colors group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded-full text-xs bg-white/10 text-gray-400">
                  {product.tag}
                </span>
              </div>
              <product.icon className="w-8 h-8 text-pink-400 mb-3" />
              <h3 className="font-semibold mb-2 text-white text-sm leading-tight">
                {product.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="pt-2 border-t border-white/10">
                <span className="text-xs text-pink-400">{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="#contact" 
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/10"
          >
            <Bell className="w-4 h-4" />
            Nhận thông báo khi ra mắt
          </Link>
        </div>
      </div>
    </section>
  );
}