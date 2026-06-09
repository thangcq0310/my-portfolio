import { Helmet } from "react-helmet-async"
import React from "react"
import { Link } from "react-router-dom"
import { Package, FileSpreadsheet, BarChart3, Truck, FileCheck, Users, Calendar, Clock, MessageCircle } from "lucide-react"

const templateCategories = [
  {
    category: "Inventory",
    templates: [
      { name: "File Excel Quản Lý Tồn Kho Thông Minh", description: "Tự động phân tích ABC, tính toán Reorder Point và báo cáo xuất nhập tồn.", icon: Package },
      { name: "ABC/XYZ Analysis Template", description: "Phân loại SKU theo giá trị và tần suất để tập trung quản lý đúng mặt hàng.", icon: BarChart3 },
      { name: "Safety Stock Calculator", description: "Tính toán tồn kho an toàn theo phương pháp Service Level.", icon: FileSpreadsheet }
    ]
  },
  {
    category: "Warehouse", 
    templates: [
      { name: "SOP Vận Hành Kho Chuẩn 5S", description: "Quy trình vận hành kho chi tiết từng bước, giúp giảm sai sót.", icon: FileCheck },
      { name: "Cycle Count Template", description: "Mẫu kiểm kê định kỳ theo chu kỳ và ABC classification.", icon: Calendar },
      { name: "Warehouse KPI Dashboard", description: "Theo dõi Pick Rate, Accuracy, Receipt/Dispatch cycle time.", icon: BarChart3 }
    ]
  },
  {
    category: "Logistics Cost",
    templates: [
      { name: "Transport Cost Tracker", description: "Theo dõi chi phí vận chuyển theo tuyến, nhà cung cấp, loại hàng.", icon: Truck },
      { name: "3PL SLA Dashboard", description: "Đánh giá nhà cung cấp dịch vụ logistics theo SLA và KPI.", icon: FileSpreadsheet },
      { name: "OTIF Tracker", description: "Theo dõi On-Time In-Full delivery rate hàng tháng.", icon: Clock }
    ]
  },
  {
    category: "KPI & SLA",
    templates: [
      { name: "Supplier Scorecard", description: "Đánh giá nhà cung cấp theo chất lượng, giao hàng, giá cả.", icon: Users },
      { name: "Monthly KPI Report", description: "Báo cáo KPI Supply Chain hàng tháng mẫu.", icon: BarChart3 },
      { name: "S&OP Meeting Template", description: "Template cuộc họp Sales & Operations Planning.", icon: Calendar }
    ]
  },
  {
    category: "Digital Tools",
    templates: [
      { name: "Master Data Checklist", description: "Checklist chuẩn bị trước khi triển khai ERP/WMS.", icon: FileCheck },
      { name: "ERP/WMS Readiness Assessment", description: "Đánh giá mức độ sẵn sàng cho số hóa.", icon: FileSpreadsheet },
      { name: "AI Prompts for SCM", description: "Các prompt sử dụng AI để hỗ trợ Supply Chain.", icon: MessageCircle }
    ]
  }
]

const SCMTemplates: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Template Catalog Supply Chain | SCM Thực Chiến</title>
        <meta name="description" content="Thư viện template Supply Chain: Inventory, Warehouse, Logistics Cost, KPI/SLA, Digital Tools. Tải về và áp dụng ngay." />
      </Helmet>
      
      <div className="min-h-[calc(100vh-4rem)] p-6">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <FileSpreadsheet className="w-4 h-4" />
              Templates
            </div>
            <h1 className="text-3xl font-bold mb-4 text-white">
              Template <span className="text-blue-400">Supply Chain Thực Chiến</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thư viện các công cụ mẫu giúp bạn chuẩn hóa và tự động hóa quy trình Supply Chain ngay lập tức.
            </p>
          </header>

          {/* Template Categories */}
          <div className="space-y-12 mb-12">
            {templateCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                  {cat.category === "Inventory" && <Package className="w-5 h-5" />}
                  {cat.category === "Warehouse" && <FileCheck className="w-5 h-5" />}
                  {cat.category === "Logistics Cost" && <Truck className="w-5 h-5" />}
                  {cat.category === "KPI & SLA" && <BarChart3 className="w-5 h-5" />}
                  {cat.category === "Digital Tools" && <FileSpreadsheet className="w-5 h-5" />}
                  {cat.category}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.templates.map((template) => (
                    <div key={template.name} className="glass-card p-6 group hover:border-blue-500/40 transition-colors border-blue-500/10">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <template.icon className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                            {template.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {template.description}
                          </p>
                          <button className="px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium transition-colors text-white hover:bg-blue-700">
                            Tải Template
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="glass-card p-12 text-center border-dashed border-2 border-white/10">
            <h2 className="text-2xl font-bold mb-4">Bạn cần một Template riêng biệt?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Em nhận thiết kế file Excel/Dashboard tùy chỉnh theo đúng đặc thù vận hành của doanh nghiệp anh.
            </p>
            <Link to="/scm/services" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-colors">
              Liên hệ yêu cầu
            </Link>
          </div>

          <div className="text-center mt-12 pb-12">
            <Link to="/scm" className="text-blue-400 hover:underline">
              ← Quay lại SCM Hub
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SCMTemplates