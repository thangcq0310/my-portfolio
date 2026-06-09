import { Link } from "react-router-dom";
import { BookOpen, FileSpreadsheet, Users, Package, Truck, BarChart3, ArrowRight } from "lucide-react";

const valueProps = [
  {
    idx: 0,
    icon: BookOpen,
    title: "Supply Chain Foundation",
    description: "Hiểu đúng vai trò, dòng chảy, trade-off giữa các khâu trong chuỗi cung ứng. Nền tảng để xây dựng hệ thống.",
    bgClass: "bg-blue-500/10",
    textClass: "text-blue-400"
  },
  {
    idx: 1,
    icon: FileSpreadsheet,
    title: "Planning",
    description: "Forecast, demand review, supply planning và S&OP. Dự báo nhu cầu và lập kế hoạch cung ứng hiệu quả.",
    bgClass: "bg-cyan-500/10",
    textClass: "text-cyan-400"
  },
  {
    idx: 2,
    icon: Users,
    title: "Procurement & Supplier",
    description: "Supplier management, lead time, MOQ và scorecard. Quản trị nhà cung cấp và đảm bảo nguồn cung ổn định.",
    bgClass: "bg-indigo-500/10",
    textClass: "text-indigo-400"
  },
  {
    idx: 3,
    icon: Package,
    title: "Inventory & Warehouse",
    description: "ABC/XYZ, safety stock, FIFO/FEFO, cycle count và KPI kho. Quản lý tồn kho và vận hành kho chuẩn.",
    bgClass: "bg-violet-500/10",
    textClass: "text-violet-400"
  },
  {
    idx: 4,
    icon: Truck,
    title: "Logistics & Distribution",
    description: "Transport, 3PL, SLA, OTIF và cost tracking. Tối ưu chi phí logistics và giao hàng đúng hạn.",
    bgClass: "bg-sky-500/10",
    textClass: "text-sky-400"
  },
  {
    idx: 5,
    icon: BarChart3,
    title: "Digital SCM & Performance",
    description: "Master data, dashboard, ERP/WMS readiness và AI prompts. Số hóa Supply Chain và theo dõi KPI hiệu suất.",
    bgClass: "bg-teal-500/10",
    textClass: "text-teal-400"
  }
];

export function ValueSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            SCM Thực Chiến giúp anh/chị như thế nào?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Six mảng kiến thức và công cụ giúp doanh nghiệp quản trị chuỗi cung ứng toàn diện.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((item) => (
            <div 
              key={item.idx} 
              className="glass-card p-6 rounded-2xl hover:bg-white/[0.07] transition-colors group border-blue-500/10"
            >
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.bgClass} flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 ${item.textClass}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="/scm/checklist" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
          >
            Bắt đầu với công cụ miễn phí <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}