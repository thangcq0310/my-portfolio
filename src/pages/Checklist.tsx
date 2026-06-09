import { useState } from "react"
import { ClipboardCheck, Send, CheckCircle } from "lucide-react"
import { checklist50 } from "../data/seedData"

const categories = ["Planning", "Procurement", "Inventory", "Warehouse & Logistics", "Data, KPI & Digital", "People, Process & Governance"]

export function Checklist() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "" })
  const [submitted, setSubmitted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("Tất cả")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In real app: save to Firestore
    console.log("Subscriber:", form)
    setSubmitted(true)
  }

  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <ClipboardCheck className="w-16 h-16 text-sky-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Checklist 50 điểm tự đánh giá năng lực Supply Chain
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Tự đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse & Logistics, Data/KPI/Digital, People/Process/Governance.
        </p>
      </div>

      {/* Lead Form */}
      {!submitted ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 max-w-xl mx-auto mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Nhận checklist miễn phí</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Họ tên *</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Công ty</label>
              <input
                type="text"
                value={form.company}
                onChange={e => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Vai trò / Nhu cầu</label>
              <input
                type="text"
                value={form.role}
                onChange={e => setForm({ ...form, role: e.target.value })}
                placeholder=" VD: SCM Manager, cần tư vấn warehouse"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-sky-500 text-white font-medium rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Nhận checklist
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200 p-8 max-w-xl mx-auto mb-12 text-center">
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-slate-900 mb-2">Đã nhận!</h2>
          <p className="text-slate-600 mb-4">Checklist đã được gửi về email của bạn.</p>
          <p className="text-sm text-slate-500">Kiểm tra hòm thư email: {form.email}</p>
        </div>
      )}

      {/* Checklist Preview */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Xem trước nội dung</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory("Tất cả")}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              selectedCategory === "Tất cả" ? "bg-sky-500 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-sky-500"
            }`}
          >
            Tất cả ({checklist50.length})
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedCategory === cat ? "bg-sky-500 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-sky-500"
              }`}
            >
              {cat} ({checklist50.filter(c => c.category === cat).length})
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {categories.map(cat => {
            const items = checklist50.filter(c => c.category === cat)
            if (selectedCategory !== "Tất cả" && selectedCategory !== cat) return null
            return (
              <div key={cat} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900 mb-4">{cat}</h3>
                <ul className="space-y-2">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-5 h-5 border border-slate-300 rounded flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item.question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}