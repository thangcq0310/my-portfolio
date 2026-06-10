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
    description: "Checklist, assessment, sample template và tài liệu miễn phí để bắt đầu nhanh.",
    href: "/solutions/resources",
  },
  {
    title: "Sản phẩm số",
    slug: "products",
    description: "Template, eBook, playbook, SOP pack và dashboard starter phục vụ triển khai thực tế.",
    href: "/solutions/products",
  },
  {
    title: "Công cụ",
    slug: "tools",
    description: "Calculator, analyzer và mini tool hỗ trợ phân tích nhanh các bài toán Supply Chain.",
    href: "/solutions/tools",
  },
  {
    title: "Dịch vụ",
    slug: "services",
    description: "Tư vấn, dashboard, chuẩn hóa quy trình/KPI và triển khai công cụ nội bộ.",
    href: "/solutions/services",
  },
]

export const solutions: SolutionItem[] = [
  {
    title: "Mini WMS Location Management",
    slug: "mini-wms",
    category: "Sản phẩm số",
    description: "Quản lý pallet, batch, SKU và vị trí kho khi chưa có WMS đầy đủ.",
    tags: ["Warehouse", "Location", "Pallet", "Batch"],
    href: "/solutions/mini-wms",
  },
  {
    title: "Logistics Cost Dashboard",
    slug: "logistics-cost-dashboard",
    category: "Công cụ",
    description: "Theo dõi chi phí kho vận theo tấn, nhà máy, vendor và tuyến vận chuyển.",
    tags: ["Logistics", "Cost", "Dashboard"],
    href: "/solutions/logistics-cost-dashboard",
  },
  {
    title: "SOP Builder",
    slug: "sop-builder",
    category: "Tài nguyên",
    description: "Bộ khung xây dựng SOP vận hành theo chức năng, trách nhiệm và luồng kiểm soát.",
    tags: ["SOP", "Process", "Governance"],
    href: "/solutions/sop-builder",
  },
  {
    title: "Inventory Chatbot",
    slug: "inventory-chatbot",
    category: "Dịch vụ",
    description: "Chatbot hỗ trợ truy vấn tồn kho, batch, vị trí và cảnh báo tồn bất thường.",
    tags: ["AI", "Inventory", "Chatbot"],
    href: "/solutions/inventory-chatbot",
  },
  {
    title: "EWM Readiness Checklist",
    slug: "ewm-readiness-checklist",
    category: "Tài nguyên",
    description: "Checklist đánh giá mức độ sẵn sàng trước khi triển khai SAP EWM.",
    tags: ["SAP", "EWM", "Warehouse"],
    href: "/solutions/ewm-readiness-checklist",
  },
]

export const useCases = [
  "Quản lý kho và vị trí hàng hóa",
  "Theo dõi chi phí logistics",
  "Chuẩn hóa SOP và checklist vận hành",
  "Tự động hóa báo cáo định kỳ",
  "Xây dựng chatbot nội bộ",
  "Đánh giá readiness trước khi triển khai hệ thống lớn",
]
