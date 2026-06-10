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
    title: "Resources",
    slug: "resources",
    description: "Checklist, assessment, sample template và tài liệu miễn phí để bắt đầu nhanh.",
    href: "/solutions/resources",
  },
  {
    title: "Digital Products",
    slug: "products",
    description: "Template, eBook, playbook, SOP pack và dashboard starter phục vụ triển khai thực tế.",
    href: "/solutions/products",
  },
  {
    title: "Tools",
    slug: "tools",
    description: "Calculator, analyzer và mini tool hỗ trợ phân tích nhanh các bài toán Supply Chain.",
    href: "/solutions/tools",
  },
  {
    title: "Services",
    slug: "services",
    description: "Tư vấn, dashboard, chuẩn hóa process/KPI và triển khai internal tool.",
    href: "/solutions/services",
  },
]

export const solutions: SolutionItem[] = [
  {
    title: "Warehouse Location Management khi chưa có WMS đầy đủ",
    slug: "kho-vi-tri-kho",
    category: "Digital Products",
    description: "Khung solution giúp quản lý pallet, batch, SKU và location trong giai đoạn doanh nghiệp chưa có WMS hoàn chỉnh.",
    tags: ["Warehouse", "Location", "Pallet", "Batch"],
    href: "/solutions/products",
  },
  {
    title: "Logistics Cost Dashboard",
    slug: "dashboard-chi-phi-logistics",
    category: "Tools",
    description: "Theo dõi Logistics Cost theo tấn, plant, vendor, route và shipment type.",
    tags: ["Logistics Cost", "Dashboard", "Vendor"],
    href: "/solutions/tools",
  },
  {
    title: "SOP Builder Framework",
    slug: "sop-van-hanh",
    category: "Resources",
    description: "Bộ khung xây SOP vận hành theo process, owner, control point và escalation flow.",
    tags: ["SOP", "Process", "Governance", "RACI"],
    href: "/solutions/resources",
  },
  {
    title: "Internal Inventory Assistant",
    slug: "tro-ly-truy-van-ton-kho",
    category: "Services",
    description: "Trợ lý nội bộ hỗ trợ truy vấn inventory, batch, location và cảnh báo tồn bất thường.",
    tags: ["Inventory", "Internal Tool", "Dashboard"],
    href: "/solutions/services",
  },
  {
    title: "SAP EWM Readiness Checklist",
    slug: "ewm-readiness-checklist",
    category: "Resources",
    description: "Checklist đánh giá readiness về process, master data, warehouse layout và user roles trước khi triển khai SAP EWM.",
    tags: ["SAP", "EWM", "Warehouse", "Master Data"],
    href: "/solutions/resources",
  },
]

export const useCases = [
  "Kiểm soát inventory và location khi chưa có WMS đầy đủ",
  "Theo dõi Logistics Cost theo plant, route, vendor và shipment type",
  "Chuẩn hóa SOP, RACI và checklist vận hành",
  "Xây dashboard phục vụ management review",
  "Đánh giá readiness trước khi triển khai ERP/WMS/SAP",
  "Thiết kế internal tool phù hợp với quy trình thực tế",
]