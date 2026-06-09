import { useState } from "react";
import { FileText, Package, Wrench, Send } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const services = [
  {
    title: "Supply Chain Assessment",
    icon: FileText,
    description: "Đánh giá toàn diện hiện trạng supply chain",
    deliverables: [
      "Báo cáo hiện trạng 6 trụ cột SCM",
      "Danh sách vấn đề ưu tiên",
      "Roadmap cải thiện 30–90 ngày"
    ]
  },
  {
    title: "Dashboard & Reporting",
    icon: Package,
    description: "Xây dựng hệ thống báo cáo tự động",
    deliverables: [
      "Dashboard forecast, tồn kho, mua hàng, logistics cost",
      "Bộ KPI đề xuất theo chức năng",
      "Hướng dẫn cập nhật và duy trì dữ liệu"
    ]
  },
  {
    title: "Process & KPI Standardization",
    icon: Wrench,
    description: "Chuẩn hóa quy trình và KPI",
    deliverables: [
      "SOP/flow vận hành",
      "KPI theo chức năng",
      "RACI trách nhiệm giữa các phòng ban"
    ]
  },
  {
    title: "Digital SCM Tools",
    icon: Wrench,
    description: "Phát triển công cụ số hóa",
    deliverables: [
      "Excel template / Power BI / Power Apps",
      "Hướng dẫn sử dụng",
      "Cấu trúc dữ liệu đầu vào"
    ]
  }
];

const serviceTypes = services.map(s => s.title);

export default function Services() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", serviceType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app: save to Firestore
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Dịch vụ tư vấn</h1>
        <p className="text-slate-600 mb-12">Các gói dịch vụ giúp doanh nghiệp rà soát hiện trạng, chuẩn hóa dữ liệu – quy trình – KPI và xây dựng công cụ quản trị Supply Chain phù hợp với mức độ trưởng thành hiện tại.</p>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6">
              <service.icon className="w-10 h-10 text-sky-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <div className="border-t pt-4">
                <h4 className="font-medium text-slate-900 mb-2">Deliverables:</h4>
                <ul className="space-y-1">
                  {service.deliverables.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Form */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 max-w-2xl">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Yêu cầu tư vấn</h2>
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Đã gửi yêu cầu!</h3>
              <p className="text-slate-600">Chúng tôi sẽ liên hệ lại trong 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Họ tên *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Điện thoại</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Công ty</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Dịch vụ quan tâm</label>
                <select
                  value={form.serviceType}
                  onChange={e => setForm({ ...form, serviceType: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="">Chọn dịch vụ</option>
                  {serviceTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nội dung</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Gửi yêu cầu
              </button>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}