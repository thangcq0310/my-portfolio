import { Link } from "react-router-dom";
import { Download, BarChart3, FileSpreadsheet, ClipboardCheck, Truck, Clock } from "lucide-react";

const freeTools = [
  {
    icon: ClipboardCheck,
    title: "Checklist 30 điểm kiểm tra hệ thống tồn kho",
    description: "Kiểm tra ngay file Excel của bạn đang thiếu những gì để chuẩn hóa.",
    badge: "Miễn phí",
    badgeColor: "bg-pink-500",
    href: "#free-tools"
  }
];

const upcomingTools = [
  {
    icon: BarChart3,
    title: "ABC Analysis mẫu",
    description: "Phân loại SKU theo giá trị để tập trung quản lý đúng mặt hàng."
  },
  {
    icon: FileSpreadsheet,
    title: "Mẫu báo cáo NXT",
    description: "Báo cáo nhập - xuất - tồn tự động, chỉ cần nhập liệu."
  },
  {
    icon: Truck,
    title: "Mẫu KPI kho vận",
    description: "Các chỉ tiêu cần theo dõi: OTIF, Pick Rate, Accuracy..."
  },
  {
    icon: Clock,
    title: "Checklist 3PL",
    description: "Đánh giá nhà cung cấp dịch vụ kho ngoài trước khi ký hợp đồng."
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
            Những công cụ đơn giản nhưng hiệu quả để anh/chị cải thiện ngay quy trình kho.
          </p>
        </div>

        {/* Main tool - Checklist */}
        <div className="mb-8">
          {freeTools.map((tool, idx) => (
            <Link 
              key={idx} 
              to={tool.href}
              className="block glass-card p-6 md:p-8 rounded-2xl hover:bg-white/[0.07] transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center group-hover:bg-pink-500/30 transition-colors">
                  <tool.icon className="w-7 h-7 text-pink-400" />
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
                  <div className="bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl font-semibold transition-colors flex items-center gap-2 text-white">
                    <Download className="w-4 h-4" />
                    Tải về
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Upcoming tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {upcomingTools.map((tool, idx) => (
            <div 
              key={idx} 
              className="glass-card p-5 rounded-2xl opacity-70 hover:opacity-100 transition-opacity"
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
    </section>
  );
}