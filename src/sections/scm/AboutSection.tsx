const authorInfo = {
  name: "SCM Thực Chiến",
  initials: "CQT",
  role: "Người làm Supply Chain thực chiến",
  description: "Tôi là người làm trực tiếp trong lĩnh vực logistics, warehouse và supply chain operations tại doanh nghiệp sản xuất/xuất khẩu. SCM Thực Chiến được xây dựng để hệ thống hóa kiến thức, biểu mẫu và công cụ thực tế giúp doanh nghiệp Việt Nam quản trị chuỗi cung ứng dễ hiểu và áp dụng được hơn.",
  expertise: [
    "Warehouse & Logistics",
    "Inventory Management", 
    "3PL & Outsourcing",
    "SAP / Master Data",
    "Planning & Coordination",
    "Digital Tools"
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

        <div className="glass-card p-8 md:p-10 rounded-2xl border-blue-500/20">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">{authorInfo.initials}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {authorInfo.name}
              </h3>
              <p className="text-blue-400 mb-4">
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
                      className="px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20"
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