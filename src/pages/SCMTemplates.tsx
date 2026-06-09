import React from "react";
import { Link } from "react-router-dom";

const scmTemplates = [
  {
    id: "1",
    name: "File Excel Quản Lý Tồn Kho Thông Minh",
    category: "Inventory",
    icon: "📊",
    description: "Tự động phân tích ABC, tính toán Reorder Point và báo cáo xuất nhập tồn.",
  },
  {
    id: "2",
    name: "SOP Vận Hành Kho Chuẩn 5S",
    category: "Warehouse",
    icon: "📋",
    description: "Quy trình vận hành kho chi tiết từng bước, giúp giảm sai sót và tối ưu năng suất.",
  },
  {
    id: "3",
    name: "Dashboard Theo Dõi KPI Logistics",
    category: "Logistics",
    icon: "📉",
    description: "Báo cáo trực quan các chỉ số chi phí vận chuyển, tỷ lệ giao hàng đúng hạn.",
  },
  {
    id: "4",
    name: "Template Đánh Giá Nhà Cung Cấp (SLA)",
    category: "Procurement",
    icon: "🤝",
    description: "Bảng điểm chấm công bằng, giúp lựa chọn và quản lý đối tác Logistics hiệu quả.",
  },
];

const SCMTemplates: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-bold mb-4 text-gradient">Templates SCM Thực Chiến</h1>
          <p className="text-muted-foreground">
            Thư viện các công cụ mẫu giúp bạn chuẩn hóa và tự động hóa quy trình Supply Chain ngay lập tức.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {scmTemplates.map((template) => (
            <div key={template.id} className="glass-card p-8 group hover:border-pink-500/40 transition-colors">
              <div className="flex items-start gap-6">
                <div className="text-4xl">{template.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">
                      {template.category}
                    </span>
                    <span className="text-xs text-muted-foreground">Miễn phí</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-pink-400 transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {template.description}
                  </p>
                  <button className="px-6 py-2 glass rounded-lg text-sm font-bold hover:bg-white/10 transition-colors">
                    Tải Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-12 text-center border-dashed border-2 border-white/10">
          <h2 className="text-2xl font-bold mb-4">Bạn cần một Template riêng biệt?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Em nhận thiết kế file Excel/Dashboard tùy chỉnh theo đúng đặc thù vận hành của doanh nghiệp anh.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 glass-btn rounded-xl font-bold">
            Liên hệ yêu cầu ngay
          </Link>
        </div>

        <div className="text-center mt-12 pb-12">
          <Link to="/scm" className="text-pink-400 hover:underline">
            ← Quay lại SCM Hub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SCMTemplates;