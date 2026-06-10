export interface SolutionCategory {
  title: string
  slug: string
  description: string
  href: string
}

export interface SolutionItem {
  title: string
  slug: string
  category: string
  description: string
  tags: string[]
  href: string
}

export const categories: SolutionCategory[] = [
  {
    title: "Tài nguyên",
    slug: "resources",
    description: "Checklist, assessment và sample template để bắt đầu nhanh.",
    href: "/solutions/resources",
  },
  {
    title: "Sản phẩm số",
    slug: "products",
    description: "Template, eBook, playbook, SOP pack và dashboard starter.",
    href: "/solutions/products",
  },
  {
    title: "Công cụ",
    slug: "tools",
    description: "Calculator, analyzer và mini tool hỗ trợ phân tích nhanh.",
    href: "/solutions/tools",
  },
  {
    title: "Dịch vụ",
    slug: "services",
    description: "Tư vấn, dashboard, chuẩn hóa KPI/SOP và triển khai công cụ nội bộ.",
    href: "/solutions/services",
  },
]

export const solutions: SolutionItem[] = [
  {
    title: "Quản lý vị trí kho khi chưa có WMS đầy đủ",
    slug: "kho-vi-tri-kho",
    category: "Sản phẩm số",
    description: "Khung giải pháp giúp quản lý pallet, batch, SKU và vị trí kho trong giai đoạn doanh nghiệp chưa có WMS hoàn chỉnh.",
    tags: ["Warehouse", "Location", "Pallet", "Batch"],
    href: "/solutions/products",
  },
  {
    title: "Dashboard chi phí logistics",
    slug: "dashboard-chi-phi-logistics",
    category: "Công cụ",
    description: "Theo dõi chi phí kho vận theo tấn, nhà máy, vendor và tuyến vận chuyển.",
    tags: ["Logistics", "Cost", "Dashboard"],
    href: "/solutions/tools",
  },
  {
    title: "Bộ khung xây dựng SOP vận hành",
    slug: "sop-van-hanh",
    category: "Tài nguyên",
    description: "Khung template giúp xây dựng SOP vận hành theo chức năng, trách nhiệm và luồng kiểm soát.",
    tags: ["SOP", "Process", "Governance"],
    href: "/solutions/resources",
  },
  {
    title: "Trợ lý truy vấn tồn kho nội bộ",
    slug: "tro-ly-truy-van-ton-kho",
    category: "Dịch vụ",
    description: "Chatbot hỗ trợ truy vấn tồn kho, batch, vị trí và cảnh báo tồn bất thường cho đội ngũ nội bộ.",
    tags: ["AI", "Inventory", "Chatbot"],
    href: "/solutions/services",
  },
  {
    title: "Checklist readiness trước khi triển khai SAP EWM",
    slug: "ewm-readiness-checklist",
    category: "Tài nguyên",
    description: "Checklist đánh giá mức độ sẵn sàng trước khi triển khai SAP EWM.",
    tags: ["SAP", "EWM", "Warehouse"],
    href: "/solutions/resources",
  },
]

export const useCases = [
  "Quản lý kho và vị trí hàng hóa",
  "Theo dõi chi phí logistics",
  "Chuẩn hóa SOP và checklist vận hành",
  "Xây dựng dashboard ra quyết định",
  "Chuẩn bị triển khai hệ thống mới",
  "Đánh giá năng lực Supply Chain",
]