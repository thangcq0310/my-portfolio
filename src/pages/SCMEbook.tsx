import { Helmet } from "react-helmet-async"
import React from "react"
import { Link } from "react-router-dom"
import { BookOpen, CheckCircle2, ArrowRight, Download, Mail, Send } from "lucide-react"

const ebookPackages = [
  {
    name: "Basic",
    price: "Miễn phí",
    description: "Bản PDF cơ bản",
    features: [
      "30 công cụ Supply Chain",
      "Hướng dẫn áp dụng",
      "Checklist 50 điểm"
    ],
    cta: "Tải miễn phí",
    highlight: false
  },
  {
    name: "Practical",
    price: "199.000đ",
    description: "Bản đầy đủ + Template Excel",
    features: [
      "Tất cả nội dung Basic",
      "10 template Excel mẫu",
      "Video hướng dẫn",
      "Hỗ trợ qua email"
    ],
    cta: "Đặt trước",
    highlight: true
  },
  {
    name: "Pro",
    price: "499.000đ",
    description: "Full package + AI Assistant",
    features: [
      "Tất cả nội dung Practical",
      "AI Assistant prompts",
      "1 buổi tư vấn 1:1",
      "Cập nhật vĩnh viễn"
    ],
    cta: "Đặt trước",
    highlight: false
  }
]

const tableOfContents = [
  {
    part: "Phần 1: Foundation & Planning",
    tools: [
      "Supply Chain Overview",
      "Forecasting Tools",
      "S&OP Calendar",
      "Demand Review Template"
    ]
  },
  {
    part: "Phần 2: Procurement & Inventory",
    tools: [
      "Supplier Scorecard",
      "Lead Time Tracking",
      "ABC/XYZ Analysis",
      "Safety Stock Calculator"
    ]
  },
  {
    part: "Phần 3: Warehouse & Logistics",
    tools: [
      "SOP Vận hành Kho",
      "KPI Dashboard",
      "3PL SLA Template",
      "Transport Cost Tracker"
    ]
  },
  {
    part: "Phần 4: Digital & Performance",
    tools: [
      "Master Data Checklist",
      "ERP/WMS Readiness",
      "AI Prompts for SCM",
      "Monthly Report Template"
    ]
  }
]

const SCMEbook: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    package: ""
  })
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Kết nối backend
    setSubmitted(true)
  }

  return (
    <>
      <Helmet>
        <title>30 Công Cụ Quản Trị Supply Chain Thực Chiến | SCM Thực Chiến</title>
        <meta name="description" content="eBook 30 Công Cụ Quản Trị Supply Chain Thực Chiến. Từ Planning, Procurement, Inventory, Warehouse đến Logistics. Bao gồm template Excel và AI prompts." />
      </Helmet>
      
      <div className="min-h-[calc(100vh-4rem)] p-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              eBook
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              30 Công Cụ Quản Trị <span className="text-blue-400">Supply Chain Thực Chiến</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Cẩm nang gối đầu giường cho nh��ng người làm nghề Supply Chain tại Việt Nam.
            </p>
          </header>

          {/* Who is this for */}
          <div className="glass-card p-8 mb-12 border-blue-500/20">
            <h2 className="text-xl font-bold mb-4 text-center">Dành cho ai?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Nhà quản lý Supply Chain",
                "Trưởng kho / Inventory Manager",
                "Procurement / Purchasing"
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>{role}</span>
                </div>
              ))}
              {[
                "Planning / Kế hoạch",
                "Logistics / Vận tải",
                "Doanh nghiệp muốn chuẩn hóa"
              ].map((role, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>{role}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What you'll get */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="glass-card aspect-[3/4] flex items-center justify-center p-8 border-2 border-blue-500/20">
               <div className="text-center">
                  <BookOpen className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-blue-400">30 Công Cụ</h2>
                  <p className="text-muted-foreground">Supply Chain Thực Chiến</p>
               </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Bạn sẽ nhận được gì?</h2>
              <ul className="space-y-4">
                {[
                  "30 công cụ quản trị từ Planning, Inventory đến Warehouse.",
                  "Hướng dẫn áp dụng thực tế tại doanh nghiệp Việt Nam.",
                  "Các template Excel đi kèm để dùng ngay.",
                  "Kinh nghiệm thực chiến từ chuyên gia trong ngành.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="glass-card p-8 mb-16 border-blue-500/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Mục lục 30 tools</h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {tableOfContents.map((section, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-blue-400 mb-3">{section.part}</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    {section.tools.map((tool, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Chọn gói phù hợp</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {ebookPackages.map((pkg, idx) => (
                <div 
                  key={idx} 
                  className={`glass-card p-6 flex flex-col ${
                    pkg.highlight ? 'border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]' : 'border-blue-500/10'
                  }`}
                >
                  {pkg.highlight && (
                    <span className="bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-4">
                      Phổ biến nhất
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-2xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-6 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {!submitted ? (
                    <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                      pkg.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/10 hover:bg-white/20'
                    }`}>
                      {pkg.cta}
                    </button>
                  ) : (
                    <div className="text-center text-green-400 font-semibold">
                      ✓ Đã đặt trước!
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Pre-order Form */}
          {!submitted && (
            <div className="glass-card p-8 max-w-md mx-auto border-blue-500/20">
              <h2 className="text-xl font-bold mb-6 text-center">Đặt trước ngay</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Họ tên"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
                />
                <select
                  value={formData.package}
                  onChange={(e) => setFormData({...formData, package: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
                >
                  <option value="">Chọn gói</option>
                  <option value="basic">Basic - Miễn phí</option>
                  <option value="practical">Practical - 199.000đ</option>
                  <option value="pro">Pro - 499.000đ</option>
                </select>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-colors flex items-center gap-2 justify-center"
                >
                  <Send className="w-4 h-4" />
                  Đặt trước
                </button>
              </form>
            </div>
          )}

          {submitted && (
            <div className="glass-card p-8 text-center border-green-500/30 max-w-md mx-auto">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Cảm ơn anh/chị!</h2>
              <p className="text-muted-foreground">
                Chúng tôi sẽ gửi email xác nhận trong 24h.
              </p>
            </div>
          )}

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

export default SCMEbook