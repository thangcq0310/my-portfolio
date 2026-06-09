import { Helmet } from "react-helmet-async"
import React from "react"
import { Link } from "react-router-dom"
import { MessageCircle, Search, BarChart3, Settings, Bot, ArrowRight, Mail, Send, CheckCircle2 } from "lucide-react"

const scmServices = [
  {
    title: "Supply Chain Assessment",
    price: "Từ 3-10 triệu",
    description: "Rà soát toàn diện 6 nhóm: Planning, Procurement, Inventory, Warehouse, Logistics, Data & KPI. Xác định điểm mạnh, điểm yếu và lộ trình cải thiện.",
    features: [
      "Rà soát Planning & Forecasting",
      "Rà soát Procurement & Supplier",
      "Rà soát Inventory & Warehouse",
      "Rà soát Logistics & Cost",
      "Rà soát Data & KPI",
      "Báo cáo và khuyến nghị cải thiện"
    ],
    highlight: false,
    icon: Search
  },
  {
    title: "Dashboard & Reporting",
    price: "Từ 5-20 triệu",
    description: "Thiết kế dashboard theo dõi forecast, tồn kho, mua hàng, kho vận, logistics cost. Kết nối Excel hoặc data nguồn.",
    features: [
      "Dashboard Forecast & Demand",
      "Dashboard Inventory & NXT",
      "Dashboard Procurement",
      "Dashboard Warehouse KPIs",
      "Dashboard Logistics Cost",
      "Hướng dẫn sử dụng và duy trì"
    ],
    highlight: true,
    icon: BarChart3
  },
  {
    title: "Process & KPI Standardization",
    price: "Từ 10-50 triệu",
    description: "Chuẩn hóa quy trình, KPI, biểu mẫu và SOP. Xây dựng nền tảng vững chắc trước khi số hóa.",
    features: [
      "Thiết kế SOP vận hành",
      "Thiết lập KPI framework",
      "Biểu mẫu chuẩn",
      "Quy trình phê duyệt",
      "Đào tạo nhân sự",
      "Hỗ trợ triển khai"
    ],
    highlight: false,
    icon: Settings
  },
  {
    title: "Digital SCM Tools",
    price: "Theo yêu cầu",
    description: "Excel template, Power BI, Power Apps và AI assistant. Công cụ số hóa phù hợp với mức độ trưởng thành của doanh nghiệp.",
    features: [
      "Excel template tùy chỉnh",
      "Power BI dashboard",
      "Power Apps workflow",
      "AI assistant setup",
      "ERP/WMS readiness",
      "Hỗ trợ kỹ thuật"
    ],
    highlight: false,
    icon: Bot
  }
]

const processSteps = [
  { step: 1, title: "Liên hệ", description: "Để lại thông tin hoặc gọi điện trực tiếp" },
  { step: 2, title: "Tư vấn", description: "Trao đổi về nhu cầu và mục tiêu của doanh nghiệp" },
  { step: 3, title: "Báo giá", description: "Nhận báo giá chi tiết theo yêu cầu" },
  { step: 4, title: "Triển khai", description: "Thực hiện dịch vụ và bàn giao" }
]

const SCMServices: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
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
        <title>Dịch vụ tư vấn Supply Chain | SCM Thực Chiến</title>
        <meta name="description" content="Dịch vụ tư vấn Supply Chain: Assessment, Dashboard & Reporting, Process & KPI Standardization, Digital SCM Tools cho doanh nghiệp Việt Nam." />
      </Helmet>
      
      <div className="min-h-[calc(100vh-4rem)] p-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Dịch vụ <span className="text-blue-400">Supply Chain Thực Chiến</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Em mang đến những giải pháp thực tế, có thể áp dụng ngay để giải quyết triệt để các nỗi đau trong quản trị Chuỗi cung ứng.
            </p>
          </header>

          {/* 4 Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {scmServices.map((service, index) => (
              <div 
                key={index} 
                className={`glass-card p-6 flex flex-col ${
                  service.highlight ? 'border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]' : 'border-blue-500/10'
                }`}
              >
                {service.highlight && (
                  <span className="bg-blue-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-4">
                    Phổ biến nhất
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <div className="text-xl font-bold text-blue-400 mb-4">{service.price}</div>
                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="#contact-form" 
                  className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                    service.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  Nhận tư vấn
                </Link>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {processSteps.map((step) => (
              <div key={step.step} className="glass-card p-4 text-center border-blue-500/10">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="glass-card p-8 max-w-xl mx-auto border-blue-500/20">
            {!submitted ? (
              <>
                <h2 className="text-xl font-bold mb-6 text-center">Liên hệ tư vấn</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
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
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Doanh nghiệp"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="assessment">Supply Chain Assessment</option>
                      <option value="dashboard">Dashboard & Reporting</option>
                      <option value="process">Process & KPI Standardization</option>
                      <option value="digital">Digital SCM Tools</option>
                    </select>
                  </div>
                  <textarea
                    placeholder="Mô tả nhu cầu của bạn..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-colors flex items-center gap-2 justify-center"
                  >
                    <Send className="w-4 h-4" />
                    Gửi thông tin
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Đã gửi!</h2>
                <p className="text-muted-foreground mb-4">
                  Cảm ơn anh/chị đã liên hệ. Chúng tôi sẽ phản hồi trong 24h.
                </p>
                <Link to="/scm" className="text-blue-400 hover:underline">
                  ← Quay lại SCM Hub
                </Link>
              </div>
            )}
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

export default SCMServices