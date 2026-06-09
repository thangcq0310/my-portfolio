import { Link } from "react-router-dom";
import { ArrowRight, FileSpreadsheet, BarChart3, Package, TrendingDown, Clock, DollarSign, BookOpen } from "lucide-react";

const articles = [
  {
    title: "7 lỗi phổ biến khi quản lý tồn kho bằng Excel",
    description: "Cách khắc phục những sai lầm thường gặp khi dùng Excel quản lý kho.",
    category: "Excel",
    categoryColor: "text-green-400",
    href: "#"
  },
  {
    title: "ABC Analysis là gì và áp dụng thế nào?",
    description: "Phương pháp phân loại SKU theo giá trị giúp tối ưu tồn kho và chi phí.",
    category: "Inventory",
    categoryColor: "text-blue-400",
    href: "#"
  },
  {
    title: "Safety Stock hiểu đơn giản cho doanh nghiệp Việt",
    description: "Cách tính tồn kho an toàn để tránh thiếu hàng mà không ứ đọng vốn.",
    category: "Inventory",
    categoryColor: "text-blue-400",
    href: "#"
  },
  {
    title: "Cách làm báo cáo nhập - xuất - tồn",
    description: "Hướng dẫn từng bước làm báo cáo NXT tự động trong 15 phút.",
    category: "Báo cáo",
    categoryColor: "text-purple-400",
    href: "#"
  },
  {
    title: "KPI kho vận cần theo dõi hàng tháng",
    description: "10 chỉ tiêu quan trọng nhất để đo lường hiệu suất kho và logistics.",
    category: "KPI",
    categoryColor: "text-pink-400",
    href: "#"
  },
  {
    title: "Cách kiểm soát chi phí thuê kho ngoài",
    description: "Mẫu hợp đồng, cách tính giá và đàm phán với 3PL.",
    category: "Cost",
    categoryColor: "text-orange-400",
    href: "#"
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
              Những bài viết được đánh giá cao nhất từ cộng đồng SCM Việt Nam.
            </p>
          </div>
          <Link 
            to="/scm#articles" 
            className="hidden md:inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium"
          >
            Xem tất cả <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, idx) => (
            <Link 
              key={idx} 
              to={article.href}
              className="glass-card p-5 rounded-2xl hover:bg-white/[0.07] transition-colors group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs ${article.categoryColor}`}>
                  {article.category}
                </span>
              </div>
              <h3 className="font-semibold mb-2 text-white text-base leading-tight group-hover:text-pink-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-pink-400">
                <span>Đọc bài viết</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link 
            to="/scm#articles" 
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium"
          >
            Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}