import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Supply Chain là gì và khác gì Logistics?",
    description: "Hiểu đúng khái niệm và phạm vi của Supply Chain để xây dựng chiến lược phù hợp.",
    category: "Foundation",
    categoryColor: "text-blue-400",
    href: "/scm/blog/supply-chain-la-gi"
  },
  {
    title: "Vì sao doanh nghiệp vừa tồn kho cao vừa thiếu hàng?",
    description: "Phân tích nguyên nhân và cách giải quyết tình trạng Inventory paradox.",
    category: "Inventory",
    categoryColor: "text-cyan-400",
    href: "/scm/blog/ton-kho-cao-van-thieu-hang"
  },
  {
    title: "Forecast sai ảnh hưởng thế nào đến mua hàng, sản xuất và kho?",
    description: "Tác động dây chuyền của forecast không chính xác đến toàn bộ chuỗi cung ứng.",
    category: "Planning",
    categoryColor: "text-indigo-400",
    href: "/scm/blog/forecast-sai-anh-huong-gi"
  },
  {
    title: "Supplier Lead Time là gì và vì sao cần quản trị?",
    description: "Quản lý lead time để đảm bảo nguồn cung ổn định và tối ưu điểm đặt hàng.",
    category: "Procurement",
    categoryColor: "text-violet-400",
    href: "/scm/blog/supplier-lead-time"
  },
  {
    title: "ABC/XYZ Analysis trong quản trị tồn kho",
    description: "Phương pháp phân loại SKU theo giá trị và tần suất để tối ưu quản lý.",
    category: "Inventory",
    categoryColor: "text-cyan-400",
    href: "/scm/blog/abc-xyz-analysis"
  },
  {
    title: "KPI Supply Chain cần theo dõi hàng tháng",
    description: "Các chỉ tiêu quan trọng để đo lường hiệu suất chuỗi cung ứng.",
    category: "Digital SCM",
    categoryColor: "text-teal-400",
    href: "/scm/blog/kpi-supply-chain"
  },
  {
    title: "S&OP là gì và SME có cần không?",
    description: "Sales & Operations Planning cho doanh nghiệp vừa và nhỏ.",
    category: "Planning",
    categoryColor: "text-indigo-400",
    href: "/scm/blog/sop-la-gi"
  },
  {
    title: "Khi nào doanh nghiệp nên dùng Excel, Power BI, WMS hoặc ERP?",
    description: "Hướng dẫn lựa chọn công cụ phù hợp với mức độ trưởng thành của doanh nghiệp.",
    category: "Digital SCM",
    categoryColor: "text-teal-400",
    href: "/scm/blog/cong-cu-digital-scm"
  }
];

export function ArticlesSection() {
  return (
    <section className="py-16 md:py-24 px-4" id="articles">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Bài viết nên đọc trước
            </h2>
            <p className="text-muted-foreground">
              Những bài viết cốt lõi giúp xây dựng nền tảng Supply Chain vững chắc.
            </p>
          </div>
          <Link 
            to="/scm/blog" 
            className="hidden md:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
          >
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, idx) => (
            <Link 
              key={idx} 
              to={article.href}
              className="glass-card p-5 rounded-2xl hover:bg-white/[0.07] transition-colors group border-blue-500/10"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs ${article.categoryColor}`}>
                  {article.category}
                </span>
              </div>
              <h3 className="font-semibold mb-2 text-white text-base leading-tight group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-400">
                <span>Đọc bài viết</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link 
            to="/scm/blog" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
          >
            Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}