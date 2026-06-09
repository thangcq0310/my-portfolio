import { BookOpen, FileSpreadsheet, BookMarked, Users } from "lucide-react";

const valueProps = [
  {
    idx: 0,
    icon: BookOpen,
    title: "Kiến thức thực chiến",
    description: "Bài viết dễ hiểu về inventory, warehouse, logistics cost, S&OP, master data. Không học thuật, chỉ có cách làm.",
    bgClass: "bg-pink-500/10",
    textClass: "text-pink-400"
  },
  {
    idx: 1,
    icon: FileSpreadsheet,
    title: "Template áp dụng ngay",
    description: "Excel, KPI, SLA, checklist, SOP và dashboard mẫu. Tải về là dùng được, không cần cài đặt phức tạp.",
    bgClass: "bg-blue-500/10",
    textClass: "text-blue-400"
  },
  {
    idx: 2,
    icon: BookMarked,
    title: "Sách & eBook",
    description: "Hệ thống hóa kiến thức supply chain thành playbook thực tế cho doanh nghiệp Việt. Đọc là hiểu, hiểu là áp dụng được.",
    bgClass: "bg-violet-500/10",
    textClass: "text-violet-400"
  },
  {
    idx: 3,
    icon: Users,
    title: "Tư vấn triển khai",
    description: "Rà soát file tồn kho, thiết kế dashboard, chuẩn hóa quy trình kho vận. Hỗ trợ từng bước để ra kết quả.",
    bgClass: "bg-cyan-500/10",
    textClass: "text-cyan-400"
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
            Bốn mảng kiến thức và dịch vụ giúp doanh nghiệp quản trị chuỗi cung ứng hiệu quả hơn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {valueProps.map((item) => (
            <div 
              key={item.idx} 
              className="glass-card p-6 rounded-2xl hover:bg-white/[0.07] transition-colors group"
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
      </div>
    </section>
  );
}