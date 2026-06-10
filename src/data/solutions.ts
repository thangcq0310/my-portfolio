export interface SolutionCategory {
  title: string
  slug: string
  description: string
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
    title: "Công cụ số",
    slug: "tools",
    description: "Các mini tool, calculator, dashboard và tiện ích hỗ trợ xử lý nhanh các bài toán vận hành.",
  },
  {
    title: "Sản phẩm số",
    slug: "digital-products",
    description: "Các web app, platform nội bộ, dashboard quản trị và hệ thống hỗ trợ số hóa quy trình.",
  },
  {
    title: "Dịch vụ triển khai",
    slug: "services",
    description: "Tư vấn, thiết kế, triển khai và tối ưu các giải pháp số theo nhu cầu thực tế của doanh nghiệp.",
  },
  {
    title: "Template & Framework",
    slug: "templates",
    description: "Biểu mẫu, checklist, framework, SOP mẫu và bộ tài liệu chuẩn hóa vận hành.",
  },
  {
    title: "AI Agents & Automation",
    slug: "ai-agents",
    description: "Các AI agent, workflow automation và chatbot hỗ trợ tự động hóa tác vụ lặp lại.",
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
    category: "Công cụ số",
    description: "Theo dõi chi phí kho vận theo tấn, nhà máy, vendor và tuyến vận chuyển.",
    tags: ["Logistics", "Cost", "Dashboard"],
    href: "/solutions/logistics-cost-dashboard",
  },
  {
    title: "SOP Builder",
    slug: "sop-builder",
    category: "Template & Framework",
    description: "Bộ khung xây dựng SOP vận hành theo chức năng, trách nhiệm và luồng kiểm soát.",
    tags: ["SOP", "Process", "Governance"],
    href: "/solutions/sop-builder",
  },
  {
    title: "Inventory Chatbot",
    slug: "inventory-chatbot",
    category: "AI Agents & Automation",
    description: "Chatbot hỗ trợ truy vấn tồn kho, batch, vị trí và cảnh báo tồn bất thường.",
    tags: ["AI", "Inventory", "Chatbot"],
    href: "/solutions/inventory-chatbot",
  },
  {
    title: "EWM Readiness Checklist",
    slug: "ewm-readiness-checklist",
    category: "Template & Framework",
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
