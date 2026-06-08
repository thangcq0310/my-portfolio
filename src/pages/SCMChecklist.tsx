import { useState } from "react"
import { CheckCircle2, XCircle, AlertTriangle, Download, Mail } from "lucide-react"
import { SEO } from "@/components/SEO"
import { inventoryChecklist, checklistCategories, type ChecklistItem } from "@/data/lead-magnet"

function SCMChecklist() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

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
    if (email) {
      setSubmitted(true)
      // In real app, send to backend/email service
    }
  }

  const groupedChecklist = checklistCategories.map((category) => ({
    category,
    items: inventoryChecklist.filter((item) => item.category === category),
  }))

  return (
    <>
      <SEO
        title="30 Điểm Kiểm Tra Tồn Kho | SCM Thực Chiến"
        description="Download miễn phí checklist 30 điểm kiểm tra hệ thống tồn kho. Giúp bạn đánh giá nhanh tình trạng kho và phát hiện vấn đề tiềm ẩn."
        type="article"
      />
      
      <div className="min-h-[calc(100vh-4rem)] p-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-400 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Download className="w-4 h-4" />
              Miễn phí - Tải về ngay
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              30 Điểm Kiểm Tra Tồn Kho
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Checklist toàn diện giúp đánh giá nhanh hệ thống kho của bạn. 
              Xác định điểm mạnh, phát hiện rủi ro trước khi gây thiệt hại.
            </p>
          </header>

          {/* Email capture */}
          {!submitted ? (
            <div className="glass-card p-8 mb-12 text-center">
              <h2 className="text-xl font-bold mb-4">Nhận checklist miễn phí</h2>
              <p className="text-muted-foreground mb-6">
                Nhập email để nhận file PDF ngay trong hộp thư
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="email@cuaban.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-xl font-bold transition-colors flex items-center gap-2 justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Gửi cho tôi
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
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

          {/* Preview */}
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-center mb-6">Xem trước nội dung</h2>
            
            {groupedChecklist.map(({ category, items }) => (
              <div key={category} className="glass-card p-6">
                <h3 className="text-lg font-bold mb-4 text-pink-400">{category}</h3>
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
              <a href="/scm/services" className="text-pink-400 hover:underline">
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