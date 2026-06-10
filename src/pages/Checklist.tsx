import { useState } from "react"
import { ClipboardCheck, Send, CheckCircle } from "lucide-react"
import Container from "../components/layout/Container"
// import { checklist50 } from "../data/seedData"

const categories = ["Planning", "Procurement", "Inventory", "Warehouse & Logistics", "Data, KPI & Digital", "People, Process & Governance"]

export function Checklist() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "" })
  const [submitted, setSubmitted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscriber:", form)
    setSubmitted(true)
  }

  return (
    <Container>
      <div className="py-12">
      <div className="text-center mb-12">
        <ClipboardCheck className="w-16 h-16 text-[#072C2C] mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-[#0F172A] mb-4">
          Checklist 50 điểm tự đánh giá năng lực Supply Chain
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Tự đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital, People/Process/Governance.
        </p>
      </div>

      {/* Lead Form */}
      {!submitted ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 max-w-xl mx-auto mb-12">
          <h2 className="text-xl font-bold text-[#0F172A] mb-4">Nhận checklist miễn phí</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Họ tên *</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#072C2C] focus:border-[#072C2C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#072C2C] focus:border-[#072C2C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Công ty</label>
              <input
                type="text"
                value={form.company}
                onChange={e => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#072C2C] focus:border-[#072C2C]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Vai trò</label>
              <input
                type="text"
                value={form.role}
                onChange={e => setForm({ ...form, role: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#072C2C] focus:border-[#072C2C]"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#FF5F03] text-white font-medium rounded-lg hover:bg-[#ff7a33] transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Nhận checklist
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center py-8 max-w-xl mx-auto mb-12">
          <div className="w-16 h-16 bg-[#16A34A] text-white rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-[#0F172A] mb-2">Checklist đã gửi!</h2>
          <p className="text-slate-600">Vui lòng kiểm tra email để xem checklist.</p>
        </div>
      )}

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedCategory === cat
                ? "bg-[#072C2C] text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:border-[#072C2C] hover:text-[#072C2C]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      </div>
    </Container>
  )
}