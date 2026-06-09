import { User } from "lucide-react";

const authorInfo = {
  name: "SCM Thực Chiến",
  initials: "CQT",
  role: "Chuyên gia Supply Chain",
  description: "Người xây dựng SCM Thực Chiến là chuyên gia logistics & warehouse với nhiều năm kinh nghiệm xử lý các bài toán thực tế: quản lý kho lạnh, tồn kho, thuê kho ngoài, triển khai SAP, chuẩn hóa master data. Mục tiêu là giúp doanh nghiệp Việt Nam tiếp cận kiến thức supply chain một cách thực chiến và áp dụng được.",
  expertise: [
    "Kho lạnh & Cold Chain",
    "Tồn kho & Inventory Control", 
    "Thuê kho ngoài & 3PL",
    "SAP Master Data",
    "Quy trình kho vận",
    "Cost Optimization"
  ]
};

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Về người xây dựng SCM Thực Chiến
          </h2>
        </div>

        <div className="glass-card p-8 md:p-10 rounded-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{authorInfo.initials}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {authorInfo.name}
              </h3>
              <p className="text-pink-400 mb-4">
                {authorInfo.role}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {authorInfo.description}
              </p>

              {/* Expertise tags */}
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-3">Lĩnh vực chuyên môn:</h4>
                <div className="flex flex-wrap gap-2">
                  {authorInfo.expertise.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}