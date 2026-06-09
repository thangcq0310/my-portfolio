import { 
  Package, 
  DollarSign, 
  Database, 
  Smartphone,
  AlertCircle,
  TrendingDown,
  Clock,
  Users,
  Warehouse
} from "lucide-react";

const painPoints = [
  {
    icon: Users,
    title: "Sales, planning, mua hàng, sản xuất và kho chưa cùng một bộ số liệu",
    description: "Mỗi phòng ban một file Excel, số liệu không khớp, mất thời gian đối chiếu"
  },
  {
    icon: TrendingDown,
    title: "Forecast thiếu chính xác, kế hoạch cung ứng thường xuyên bị động",
    description: "Không có phương pháp dự báo phù hợp, mua hàng hoặc sản xuất cứ phải điều chỉnh liên tục"
  },
  {
    icon: Clock,
    title: "Mua hàng chưa kiểm soát tốt MOQ, lead time và hiệu suất nhà cung cấp",
    description: "Đặt hàng không đúng thời điểm, hoặc dư hàng do không theo dõi supplier performance"
  },
  {
    icon: Package,
    title: "Tồn kho cao nhưng vẫn thiếu hàng cho đơn cần giao",
    description: "Hàng tồn nhiều nhưng SKU cần giao không có, ngược lại hàng slow-moving chiếm diện tích"
  },
  {
    icon: Warehouse,
    title: "Kho vận xử lý thủ công, báo cáo nhập - xuất - tồn chậm",
    description: "Phải ngồi cộng tay từng dòng cuối tháng mới biết tình trạng, không theo thời gian thực"
  },
  {
    icon: DollarSign,
    title: "Chi phí logistics tăng nhưng thiếu dashboard bóc tách nguyên nhân",
    description: "Biết chi phí cao nhưng không biết vì sao, không theo dõi được cost driver"
  },
  {
    icon: Database,
    title: "Có ERP/SAP nhưng master data, quy trình và KPI chưa được chuẩn hóa",
    description: "Phần mềm đắt đỏ nhưng dữ liệu đầu vào không chuẩn, báo cáo ra không đúng"
  },
  {
    icon: Smartphone,
    title: "Muốn số hóa Supply Chain nhưng chưa biết bắt đầu từ đâu",
    description: "Cần bước đệm trước khi đầu tư WMS/ERP, chưa có file, quy trình và KPI chuẩn"
  }
];

export function PainPointsSection() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Chuỗi cung ứng của doanh nghiệp có đang bị vận hành rời rạc?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đây là những nỗi đau phổ biến nhất mà chúng tôi gặp khi tư vấn cho doanh nghiệp Việt Nam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map((point, idx) => (
            <div 
              key={idx} 
              className="glass-card p-5 rounded-2xl hover:bg-white/[0.07] transition-colors group border-blue-500/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <point.icon className="w-5 h-5 text-blue-400" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400">
            <AlertCircle className="w-4 h-4" />
            <span>Đừng lo — SCM Thực Chiến có giải pháp cho từng vấn đề này</span>
          </div>
        </div>
      </div>
    </section>
  );
}