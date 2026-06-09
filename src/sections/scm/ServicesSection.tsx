import { Link } from "react-router-dom";
import { Search, BarChart3, Settings, MessageCircle, Bot } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Supply Chain Assessment",
    description: "Rà soát toàn diện 6 nhóm: Planning, Procurement, Inventory, Warehouse, Logistics, Data & KPI. Xác định điểm mạnh, điểm yếu và lộ trình cải thiện.",
    priceRange: "Từ 3-10 triệu",
    priceColor: "text-blue-400",
    deliverables: [
      "Báo cáo hiện trạng 6 trụ cột SCM",
      "Danh sách vấn đề ưu tiên",
      "Roadmap cải thiện 30–90 ngày",
    ],
    href: "/scm/services"
  },
  {
    icon: BarChart3,
    title: "Dashboard & Reporting",
    description: "Thiết kế dashboard theo dõi forecast, tồn kho, mua hàng, kho vận, logistics cost. Kết nối Excel hoặc data nguồn.",
    priceRange: "Từ 5-20 triệu",
    priceColor: "text-cyan-400",
    deliverables: [
      "Dashboard forecast, tồn kho, mua hàng, logistics cost",
      "Bộ KPI đề xuất theo chức năng",
      "Hướng dẫn cập nhật và duy trì dữ liệu",
    ],
    href: "/scm/services"
  },
  {
    icon: Settings,
    title: "Process & KPI Standardization",
    description: "Chuẩn hóa quy trình, KPI, biểu mẫu và SOP. Xây dựng nền tảng vững chắc trước khi số hóa.",
    priceRange: "Từ 10-50 triệu",
    priceColor: "text-indigo-400",
    deliverables: [
      "SOP/flow vận hành",
      "KPI theo chức năng",
      "RACI trách nhiệm giữa các phòng ban",
    ],
    href: "/scm/services"
  },
  {
    icon: Bot,
    title: "Digital SCM Tools",
    description: "Excel template, Power BI, Power Apps và AI assistant. Công cụ số hóa phù hợp với mức độ trưởng thành của doanh nghiệp.",
    priceRange: "Theo yêu cầu",
    priceColor: "text-violet-400",
    deliverables: [
      "Excel template / Power BI / Power Apps",
      "Hướng dẫn sử dụng",
      "Cấu trúc dữ liệu đầu vào",
    ],
    href: "/scm/services"
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white/[0.02]" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Dịch vụ thực chiến cho doanh nghiệp
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Các gói dịch vụ được thiết kế theo nhu cầu và ngân sách của doanh nghiệp vừa và nhỏ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-2xl hover:bg-white/[0.07] transition-colors group flex flex-col border-blue-500/10"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {service.description}
              </p>
              {service.deliverables && (
                <ul className="mb-4 space-y-1.5">
                  {service.deliverables.map((d, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5">•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              <div className="pt-4 border-t border-white/10">
                <span className={`text-sm font-semibold ${service.priceColor}`}>
                  {service.priceRange}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="/scm/services" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Liên hệ tư vấn
          </Link>
        </div>
      </div>
    </section>
  );
}