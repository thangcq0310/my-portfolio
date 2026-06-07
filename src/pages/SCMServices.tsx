import React from "react";
import { Link } from "react-router-dom";

const scmServices = [
  {
    title: "Tư vấn & Chuẩn hóa Kho vận",
    price: "Custom",
    description: "Khảo sát, thiết kế Layout kho và xây dựng bộ SOP vận hành chuẩn 5S cho doanh nghiệp.",
    features: [
      "Thiết kế mặt bằng kho tối ưu",
      "Xây dựng quy trình nhập-xuất-tồn",
      "Đào tạo nhân sự vận hành",
      "Setup hệ thống Barcode/QR Code",
    ],
    highlight: false,
  },
  {
    title: "Chuyển đổi số Supply Chain",
    price: "Dựa trên quy mô",
    description: "Số hóa toàn bộ báo cáo và quy trình làm việc bằng công cụ Low-code & Automation.",
    features: [
      "Xây dựng Dashboard quản trị real-time",
      "Tự động hóa báo cáo Logistics",
      "Tích hợp dữ liệu SAP/ERP",
      "Hệ thống quản lý vận tải (TMS) tùy chỉnh",
    ],
    highlight: true,
  },
  {
    title: "Cố vấn Quản trị Tồn kho",
    price: "Theo tháng",
    description: "Đồng hành cùng doanh nghiệp tối ưu mức tồn kho, giảm đọng vốn và tránh thiếu hàng.",
    features: [
      "Phân tích tồn kho định kỳ",
      "Tối ưu Safety Stock & ROP",
      "Xử lý hàng chậm luân chuyển",
      "Chiến lược giảm chi phí lưu kho",
    ],
    highlight: false,
  },
];

const SCMServices: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4 text-gradient">Dịch Vụ SCM Thực Chiến</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Em mang đến những giải pháp thực tế, có thể áp dụng ngay để giải quyết triệt để các nỗi đau trong quản trị Chuỗi cung ứng.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {scmServices.map((service, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 flex flex-col ${
                service.highlight ? 'border-pink-500/50 shadow-[0_0_30px_-10px_rgba(236,72,153,0.3)]' : ''
              }`}
            >
              {service.highlight && (
                <span className="bg-pink-500 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-4">
                  Phổ biến nhất
                </span>
              )}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <div className="text-2xl font-bold text-gradient-pink mb-4">{service.price}</div>
              <p className="text-sm text-muted-foreground mb-8 flex-1">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-pink-500">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                  service.highlight ? 'bg-pink-600 hover:bg-pink-700 text-white' : 'glass hover:bg-white/10'
                }`}
              >
                Nhận tư vấn ngay
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center pb-12">
          <Link to="/scm" className="text-pink-400 hover:underline">
            ← Quay lại SCM Hub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SCMServices;