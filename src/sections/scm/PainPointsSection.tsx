import { 
  FileSpreadsheet, 
  GitBranch, 
  Package, 
  BarChart3, 
  DollarSign, 
  Database, 
  Smartphone,
  AlertCircle
} from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "File tồn kho rời rạc, nhiều sheet, khó kiểm soát",
    description: "Dữ liệu nằm rải rác nhiều file, mỗi người quản lý một kiểu"
  },
  {
    icon: GitBranch,
    title: "Số liệu kho và kế toán thường xuyên lệch",
    description: "Hàng tồn trên sổ sách khác thực tế, không biết tin số nào"
  },
  {
    icon: Package,
    title: "Không biết tồn theo SKU, batch, expiry, kho, tuổi tồn",
    description: "Thiếu thông tin chi tiết để ra quyết định mua hàng, xuất hàng"
  },
  {
    icon: BarChart3,
    title: "Báo cáo nhập - xuất - tồn mất nhiều giờ",
    description: "Phải ngồi cộng tay từng dòng, cuối tháng mới biết tình trạng"
  },
  {
    icon: DollarSign,
    title: "Chi phí thuê kho và vận tải tăng nhưng thiếu dashboard",
    description: "Không theo dõi được chi phí logistics theo thời gian thực"
  },
  {
    icon: Database,
    title: "Có ERP/SAP nhưng master data và quy trình vận hành chưa chuẩn",
    description: "Phần mềm đắt đỏ nhưng dữ liệu đầu vào không chuẩn thì ra quyết định sai"
  },
  {
    icon: Smartphone,
    title: "Muốn số hóa kho nhưng chưa đủ điều kiện triển khai WMS lớn",
    description: "Cần bước đệm trước khi đầu tư hệ thống nghiệp vụ phức tạp"
  }
];

export function PainPointsSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Doanh nghiệp của anh/chị có đang gặp các vấn đề này?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đây là những nỗi đau phổ biến nhất mà chúng tôi gặp khi tư vấn cho doanh nghiệp Việt Nam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((point, idx) => (
            <div 
              key={idx} 
              className="glass-card p-5 rounded-2xl hover:bg-white/[0.07] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <point.icon className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-200 text-sm leading-tight">
                    {point.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-sm text-pink-400">
            <AlertCircle className="w-4 h-4" />
            <span>Đừng lo — SCM Thực Chiến có giải pháp cho từng vấn đề này</span>
          </div>
        </div>
      </div>
    </section>
  );
}