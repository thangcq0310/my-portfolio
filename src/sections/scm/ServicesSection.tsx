import { Link } from "react-router-dom";
import { Search, BarChart3, Settings, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Rà soát file tồn kho",
    description: "Kiểm tra và chuẩn hóa file Excel hiện tại của bạn. Đánh giá mức độ sẵn sàng cho việc số hóa.",
    priceRange: "Từ 1-3 triệu",
    priceColor: "text-pink-400"
  },
  {
    icon: BarChart3,
    title: "Thiết kế dashboard kho vận",
    description: "Thiết kế dashboard theo dõi tồn kho, nhập xuất, chi phí. Kết nối với file Excel hoặc data nguồn.",
    priceRange: "Từ 5-20 triệu",
    priceColor: "text-blue-400"
  },
  {
    icon: Settings,
    title: "Chuẩn hóa quy trình kho vận",
    description: "Rà soát, thiết kế và triển khai quy trình kho. Từ nhận hàng đến xuất hàng, kiểm soát chất lượng.",
    priceRange: "Từ 10-50 triệu",
    priceColor: "text-violet-400"
  }
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white/[0.02]" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Dịch vụ thực chiến cho doanh nghiệp
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Các gói dịch vụ được thiết kế theo nhu cầu và ngân sách của doanh nghiệp vừa và nhỏ.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-2xl hover:bg-white/[0.07] transition-colors group flex flex-col"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
                <service.icon className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {service.description}
              </p>
              <div className="pt-4 border-t border-white/10">
                <span className={`text-sm font-semibold ${service.priceColor}`}>
                  {service.priceRange}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link 
            to="#contact" 
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Liên hệ tư vấn
          </Link>
        </div>
      </div>
    </section>
  );
}