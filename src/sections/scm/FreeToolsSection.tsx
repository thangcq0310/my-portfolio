import { Link } from "react-router-dom";
import { Download, BarChart3, FileSpreadsheet, ClipboardCheck, Truck, Clock, Calendar, FileCheck } from "lucide-react";

const freeTools = [
  {
    icon: ClipboardCheck,
    title: "Checklist 50 điểm tự đánh giá năng lực Supply Chain",
    description: "Tự đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse, Logistics, Data & Digital. Xác định điểm mạnh và rủi ro cần cải thiện.",
    badge: "Miễn phí",
    badgeColor: "bg-blue-600",
    href: "/scm/checklist"
  }
];

const upcomingTools = [
  {
    icon: BarChart3,
    title: "File ABC/XYZ Analysis mẫu",
    description: "Phân loại SKU theo giá trị và tần suất để tập trung quản lý đúng mặt hàng."
  },
  {
    icon: Calendar,
    title: "Mẫu S&OP Calendar",
    description: "Lịch trình Sales & Operations Planning hàng tháng cho doanh nghiệp."
  },
  {
    icon: FileCheck,
    title: "Mẫu Supplier Scorecard",
    description: "Đánh giá nhà cung cấp theo chất lượng, giao hàng, giá cả và tính linh hoạt."
  },
  {
    icon: Truck,
    title: "Mẫu KPI Logistics",
    description: "Các chỉ tiêu cần theo dõi: OTIF, Transport Cost, Vehicle Utilization..."
  },
  {
    icon: FileSpreadsheet,
    title: "Checklist ERP/WMS Readiness",
    description: "Kiểm tra mức độ sẵn sàng trước khi triển khai ERP hoặc WMS."
  }
];

export function FreeToolsSection() {
  return (
    <section className="py-16 md:py-24 px-4" id="free-tools">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Công cụ miễn phí để bắt đầu chuẩn hóa vận hành
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Những công cụ đơn giản nhưng hiệu quả để anh/chị cải thiện ngay quy trình Supply Chain.
          </p>
        </div>

        {/* Main tool - Checklist 50 điểm */}
        <div className="mb-10">
          {freeTools.map((tool, idx) => (
            <Link 
              key={idx} 
              to={tool.href}
              className="block glass-card p-6 md:p-8 rounded-2xl hover:bg-white/[0.07] transition-all group border-2 border-blue-500/30 hover:border-blue-500/50"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {tool.title}
                    </h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium text-white ${tool.badgeColor}`}>
                      {tool.badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2 text-white">
                    <Download className="w-4 h-4" />
                    Tải checklist miễn phí
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Upcoming tools */}
        <div>
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Sắp ra mắt</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcomingTools.map((tool, idx) => (
              <div 
                key={idx} 
                className="glass-card p-5 rounded-2xl opacity-60 hover:opacity-100 transition-opacity border border-white/5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <tool.icon className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-gray-300">
                      {tool.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}