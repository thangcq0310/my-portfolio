export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  features: string[]
  isPopular?: boolean
}

export interface ServicePackage {
  id: string
  name: string
  description: string
  price: number
  features: string[]
  isPopular?: boolean
}

export const products: Product[] = [
  {
    id: "ebook-30-cong-cu",
    name: "eBook 30 Công Cụ Quản Trị Supply Chain",
    description: "Tổng hợp 30 công cụ thực chiến được sử dụng trong các dự án tư vấn. Bao gồm: Excel templates, checklists, formulas, và hướng dẫn chi tiết.",
    price: 299000,
    image: "/images/ebook.png",
    features: [
      "30 công cụ Excel có thể dùng ngay",
      "Hướng dẫn sử dụng từng công cụ",
      "Case study thực tế từ doanh nghiệp VN",
      "Cập nhật miễn phí 12 tháng",
    ],
  },
  {
    id: "template-quan-ly-ton-kho",
    name: "Bộ Excel Quản Lý Tồn Kho",
    description: "Template theo dõi tồn kho tự động. Tính toán ROP, Safety Stock, Inventory Turnover. Cảnh báo tồn kho thấp.",
    price: 399000,
    originalPrice: 499000,
    image: "/images/inventory.png",
    features: [
      "Dashboard tổng quan kho",
      "Tính tự động ROP & Safety Stock",
      "Theo dõi hàng sắp hết hàng",
      "Báo cáo inventory rotate rate",
    ],
    isPopular: true,
  },
  {
    id: "template-kpi-logistics",
    name: "Bộ KPI Kho Vận",
    description: "Template dashboard theo dõi KPIs logistics: OTIF, Storage utilization, Picking accuracy, Warehouse cost per unit.",
    price: 499000,
    originalPrice: 699000,
    image: "/images/kpi.png",
    features: [
      "10+ KPIs chuẩn SCM",
      "Biểu đồ trực quan",
      "So sánh tháng/quat/nam",
      "Alert khi KPI không đạt",
    ],
  },
  {
    id: "template-sla-3pl",
    name: "Bộ SLA Thuê Kho Ngoài",
    description: "Template hợp đồng và SLA với 3PL. Bao gồm: KPIs, penalties, reporting requirements, escalation process.",
    price: 699000,
    originalPrice: 999000,
    image: "/images/sla.png",
    features: [
      "Mẫu hợp đồng 3PL chuẩn",
      "15 SLA metrics quan trọng",
      "Bảng tính penalties",
      "Monthly report template",
    ],
  },
  {
    id: "combo-sach-template",
    name: "Combo eBook + 3 Template",
    description: "Mua combo tiết kiệm 30%. Bao gồm eBook + Template Tồn Kho + KPI + SLA.",
    price: 999000,
    originalPrice: 1499000,
    image: "/images/combo.png",
    features: [
      "Tất cả 4 sản phẩm trên",
      "Giảm 30% so với mua lẻ",
      "Hỗ trợ ưu tiên qua Zalo",
      "Tặng 1 buổi tư vấn 30p",
    ],
    isPopular: true,
  },
]

export const services: ServicePackage[] = [
  {
    id: "kho-scan",
    name: "Gói Rà Soát Tồn Kho",
    description: "Đánh giá nhanh tình trạng hệ thống kho hiện tại",
    price: 5000000,
    features: [
      "Khảo sát 1 ngày tại kho",
      "Báo cáo 10 vấn đề ưu tiên",
      "Đề xuất giải pháp ngắn hạn",
      "Checklist theo dõi cải tiến",
    ],
  },
  {
    id: "kho-standard",
    name: "Gói Chuẩn Hóa Kho",
    description: "Thiết kế và triển khai hệ thống kho chuẩn",
    price: 15000000,
    features: [
      "Thiết kế Layout kho",
      "Xây dựng SOP vận hành",
      " Setup template Excel",
      "Đào tạo nhân viên 2 ngày",
    ],
    isPopular: true,
  },
  {
    id: "kho-premium",
    name: "Gói Chuyển Đổi Số",
    description: "Triển khai hệ thống SCM số hoàn chỉnh",
    price: 35000000,
    features: [
      "Tư vấn chọn ERP/WMS",
      "Tích hợp dữ liệu",
      "Dashboard real-time",
      "Training team 5 ngày",
      "Hỗ trợ 6 tháng",
    ],
  },
]

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price)
}