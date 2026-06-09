import { useState, useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { CheckCircle2, XCircle, AlertTriangle, Download, Mail } from "lucide-react"
import { inventoryChecklist, checklistCategories, type ChecklistItem } from "@/data/lead-magnet"

function SCMChecklist() {
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [needs, setNeeds] = useState("")
  const [emailError, setEmailError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  // Check localStorage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem("scm-checklist-email")
    if (savedEmail) {
      setEmail(savedEmail)
      setSubmitted(true)
    }
  }, [])

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const getStatusIcon = (status: ChecklistItem["status"]) => {
    switch (status) {
      case "good":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />
      case "bad":
        return <XCircle className="w-5 h-5 text-red-500" />
    }
  }

  const getStatusColor = (status: ChecklistItem["status"]) => {
    switch (status) {
      case "good":
        return "bg-green-500/10 border-green-500/30"
      case "warning":
        return "bg-yellow-500/10 border-yellow-500/30"
      case "bad":
        return "bg-red-500/10 border-red-500/30"
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setEmailError("Vui lòng nhập email hợp lệ")
      return
    }
    setEmailError("")
    setSubmitted(true)
    localStorage.setItem("scm-checklist-email", email)
    // TODO: Kết nối backend - gửi email + thông tin user đến API
    // Trong thực tế, gọi API để lưu lead và gửi checklist qua email
  }

  const groupedChecklist = checklistCategories.map((category) => ({
    category,
    items: inventoryChecklist.filter((item) => item.category === category),
  }))

  return (
    <>
      <Helmet>
        <title>Checklist 50 điểm tự đánh giá năng lực Supply Chain | SCM Thực Chiến</title>
        <meta name="description" content="Checklist 50 điểm tự đánh giá năng lực Supply Chain miễn phí. Đánh giá 6 nhóm: Planning, Procurement, Inventory, Warehouse, Logistics, Data & Digital." />
      </Helmet>
      
      <div className="min-h-[calc(100vh-4rem)] p-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Download className="w-4 h-4" />
              Miễn phí - Tải về ngay
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Checklist 50 điểm tự đánh giá năng lực <span className="text-blue-400">Supply Chain</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Checklist toàn diện giúp đánh giá nhanh hệ thống Supply Chain của bạn. 
              Xác định điểm mạnh, phát hiện rủi ro trước khi gây thiệt hại.
            </p>
          </header>

          {/* Email capture form */}
          {!submitted ? (
            <div className="glass-card p-8 mb-12 border-blue-500/20">
              <h2 className="text-xl font-bold mb-6 text-center">Nhận checklist miễn phí</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Họ tên"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (emailError) setEmailError("")
                      }}
                      required
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${emailError ? "border-red-500" : "border-white/10"} focus:border-blue-500/50 focus:outline-none transition-colors`}
                    />
                    {emailError && (
                      <p className="text-red-400 text-xs mt-1">{emailError}</p>
                    )}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Doanh nghiệp / Vai trò"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nhu cầu (VD: cải thiện inventory...)"
                      value={needs}
                      onChange={(e) => setNeeds(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-colors flex items-center gap-2 justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Nhận checklist
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                ✓ Không spam. ✓ Unsubscribe bất cứ lúc nào.
              </p>
            </div>
          ) : (
            <div className="glass-card p-8 mb-12 text-center border-green-500/30">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Đã gửi!</h2>
              <p className="text-muted-foreground">
                Checklist đã được gửi đến <strong>{email}</strong>
              </p>
            </div>
          )}

          {/* Preview - Updated to show 50 points structure */}
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-center mb-6">Xem trước nội dung - 6 nhóm đánh giá</h2>
            
            {groupedChecklist.map(({ category, items }) => (
              <div key={category} className="glass-card p-6 border-blue-500/10">
                <h3 className="text-lg font-bold mb-4 text-blue-400">{category}</h3>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-start gap-3 p-3 rounded-lg border ${getStatusColor(item.status)}`}
                    >
                      {getStatusIcon(item.status)}
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.question}</p>
                        {item.note && (
                          <p className="text-xs text-muted-foreground mt-1">{item.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Cần hỗ trợ đánh giá?{" "}
              <a href="/scm/services" className="text-blue-400 hover:underline">
                Xem dịch vụ tư vấn
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SCMChecklist