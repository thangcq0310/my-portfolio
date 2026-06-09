import { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { Check, FileText, Users, Sparkles, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { SEO } from "@/components/SEO"

// Products for order page
const products = [
  {
    id: "kiem-kho-thong-minh",
    slug: "kiem-kho-thong-minh",
    name: "Kiểm kê thông minh",
    description: "Quy trình và template kiểm kê tồn kho chuẩn SCM",
    price: 499000,
    features: ["Quy trình 6 bước", "Template Excel", "Dashboard tự động", "Hướng dẫn chi tiết"],
  },
  {
    id: "scm-thuc-chien",
    slug: "scm-thuc-chien",
    name: "SCM Thực Chiến",
    description: "eBook toàn diện 200+ trang về quản lý tồn kho",
    price: 199000,
    features: ["200+ trang nội dung", "Case study thực tế", "Biểu mẫu kèm theo", "Cập nhật miễn phí"],
  },
  {
    id: "excel-inventory",
    slug: "excel-inventory",
    name: "Excel Inventory",
    description: "Template Excel quản lý tồn kho với dashboard",
    price: 99000,
    features: ["Template Excel ready", "Dashboard trực quan", "Tự động tính toán", "Hỗ trợ VBA"],
  },
]

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price)
}

function OrderPage() {
  const [searchParams] = useSearchParams()
  const productParam = searchParams.get("product")
  
  // Auto-select product from URL
  const preselectedProduct = useMemo(() => {
    return productParam || null
  }, [productParam])

  const [selectedProduct, setSelectedProduct] = useState<string | null>(preselectedProduct)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  // Get selected product data by slug
  const selectedProductData = useMemo(() => {
    if (!selectedProduct) return null
    return products.find(p => p.id === selectedProduct || p.slug === selectedProduct) || null
  }, [selectedProduct])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  // Empty services array (for future use)
  const services: unknown[] = []

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if ((selectedProductData || selectedService) && formData.email) {
      setSubmitted(true)
      // In real app, send to backend
    }
  }

  const selectedServiceData = null
  const totalPrice = (selectedProductData?.price || 0) + ((selectedServiceData as { price: number })?.price || 0)

  return (
    <>
      <SEO
        title="Đặt Mua - SCM Thực Chiến"
        description="Đặt mua eBook, template Excel, và dịch vụ tư vấn Supply Chain. Cam kết chất lượng, hỗ trợ tận tâm."
        type="product"
      />
      
      <div className="min-h-[calc(100vh-4rem)] p-6">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              {selectedProductData ? `Đặt: ${selectedProductData.name}` : "Đặt Mua Sản Phẩm"}
            </h1>
            <p className="text-muted-foreground">
              {selectedProductData 
                ? `Điền thông tin để xác nhận đơn hàng`
                : "Chọn sản phẩm hoặc dịch vụ bên dưới, điền thông tin để nhận tư vấn"}
            </p>
            {!selectedProductData && (
              <Link 
                to="/scm/shop" 
                className="inline-flex items-center gap-2 mt-4 text-pink-400 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Quay lại shop
              </Link>
            )}
          </header>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Products */}
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-pink-400" />
                  Sản Phẩm Số
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {products.map((product) => (
                    <label
                      key={product.id}
                      className={`cursor-pointer glass-card p-4 transition-all ${
                        selectedProduct === product.id
                          ? "border-pink-500 ring-2 ring-pink-500/30"
                          : "hover:border-white/20"
                      }`}
                    >
                      <input
                        type="radio"
                        name="product"
                        value={product.id}
                        checked={selectedProduct === product.id}
                        onChange={(e) => {
                          setSelectedProduct(e.target.value)
                          setSelectedService(null)
                        }}
                        className="sr-only"
                      />
                      {product.isPopular && (
                        <span className="bg-pink-500 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white mb-2 inline-block">
                          Phổ biến
                        </span>
                      )}
                      <h3 className="font-bold mb-1">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold text-pink-400">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <div className="mt-3 flex items-center gap-1 text-xs text-green-400">
                        <Check className="w-3 h-3" />
                        {product.features.length} tính năng
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              {/* Services */}
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-pink-400" />
                  Dịch Vụ Tư Vấn
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className={`cursor-pointer glass-card p-4 transition-all ${
                        selectedService === service.id
                          ? "border-pink-500 ring-2 ring-pink-500/30"
                          : "hover:border-white/20"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={selectedService === service.id}
                        onChange={(e) => {
                          setSelectedService(e.target.value)
                          setSelectedProduct(null)
                        }}
                        className="sr-only"
                      />
                      {service.isPopular && (
                        <span className="bg-pink-500 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white mb-2 inline-block">
                          Phổ biến
                        </span>
                      )}
                      <h3 className="font-bold mb-1">{service.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="text-lg font-bold text-pink-400">
                        {formatPrice(service.price)}
                      </div>
                    </label>
                  ))}
                </div>
              </section>

              {/* Contact Form */}
              <section className="glass-card p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Send className="w-5 h-5 text-pink-400" />
                  Thông Tin Liên Hệ
                </h2>
                
                {(selectedProductData || selectedServiceData) && (
                  <div className="mb-6 p-4 bg-pink-500/10 rounded-lg border border-pink-500/30">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sản phẩm đ chọn:</span>
                      <span className="font-bold">
                        {selectedProductData?.name || selectedServiceData?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-muted-foreground">Tổng cộng:</span>
                      <span className="text-xl font-bold text-pink-400">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Họ tên *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none"
                      placeholder="email@cuaban.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Điện thoại *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none"
                      placeholder="0912 345 678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Công ty</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none"
                      placeholder="Công ty TNHH ..."
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm mb-1">Ghi chú thêm</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-pink-500/50 focus:outline-none resize-none"
                    placeholder="Nhu cầu cụ thể, câu hỏi ..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={!selectedProduct && !selectedService}
                  className="w-full mt-6 py-3 bg-pink-600 hover:bg-pink-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-xl font-bold transition-colors"
                >
                  Gửi Yêu Cầu
                </button>
              </section>
            </form>
          ) : (
            <div className="glass-card p-8 text-center border-green-500/30">
              <Sparkles className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Cảm ơn bạn!</h2>
              <p className="text-muted-foreground mb-4">
                Yêu cầu của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ trong vòng 24 giờ.
              </p>
              <div className="text-left p-4 bg-white/5 rounded-lg inline-block">
                <p><strong>Sản phẩm:</strong> {selectedProductData?.name || selectedServiceData?.name}</p>
                <p><strong>Tổng:</strong> {formatPrice(totalPrice)}</p>
                <p><strong>Email:</strong> {formData.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default OrderPage