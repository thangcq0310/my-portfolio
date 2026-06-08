import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileSpreadsheet, Users, Zap, CheckCircle2, TrendingUp, Shield, Clock } from "lucide-react";

export function SCMPage() {
  const stats = [
    { label: "Bài viết thực chiến", value: "10+", icon: BookOpen },
    { label: "Công cụ Excel thực tế", value: "15+", icon: FileSpreadsheet },
    { label: "Doanh nghiệp đã tư vấn", value: "20+", icon: Users },
    { label: "Năm kinh nghiệm", value: "5+", icon: Zap },
  ];

  const categories = [
    {
      title: "Learn",
      description: "Kiến thức nền tảng và chuyên sâu",
      items: [
        { title: "Bài viết Blog", desc: "Phân tích case study, xu hướng SCM", link: "/scm/blog", count: 10 },
        { title: "eBook miễn phí", desc: "30 Công Cụ Quản Trị Supply Chain", link: "/scm/ebook", count: "PDF" },
      ],
      icon: BookOpen,
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Tools",
      description: "Mẫu file Excel sẵn sàng dùng",
      items: [
        { title: "Quản lý tồn kho", desc: "Tự động tính toán, cảnh báo tồn kho", link: "/scm/templates", count: "Excel" },
        { title: "Dashboard KPIs", desc: "Theo dõi SLA, OTIF, Inventory Turnover", link: "/scm/templates", count: "Dashboard" },
      ],
      icon: FileSpreadsheet,
      gradient: "from-violet-500 to-purple-600",
    },
    {
      title: "Solve",
      description: "Giải pháp tư vấn cho doanh nghiệp",
      items: [
        { title: "Tư vấn chuẩn hóa kho", desc: "Layout, quy trình, hệ thống", link: "/scm/services", count: "Custom" },
        { title: "Training in-house", desc: "Đào tạo đội ngũ Supply Chain", link: "/scm/services", count: "Team" },
      ],
      icon: Users,
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const problems = [
    { icon: TrendingUp, title: "Tồn kho cao nhưng vẫn thiếu hàng", desc: "Thất thoát do thiếu kiểm soát chặt chẽ" },
    { icon: Clock, title: "Mất 5h/ngày dò Excel", desc: "Dữ liệu phân mảnh, không tự động" },
    { icon: Shield, title: "Không biết KPIs quan trọng", desc: "Thiếu metrics để đo lường hiệu suất" },
    { icon: CheckCircle2, title: "Giao hàng trễ, khách hàng complain", desc: "Chuỗi cung ứng không minh bạch" },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-pink-400 mb-8">
            <Zap className="w-4 h-4" />
            <span>Công cụ & Giải pháp Supply Chain thực chiến cho doanh nghiệp Việt</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">SCM Thực Chiến</span>
            <br />
            <span className="text-gray-300">Playbook</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Chuyển đổi Supply Chain từ "chi phí" thành "lợi thế cạnh tranh". 
            Giải pháp, công cụ và kiến thức thực tế được đúc kết từ hàng trăm dự án thực địa.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/scm/ebook" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2">
              Tải eBook miễn phí
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/scm/services" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/10">
              Nhận tư vấn
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-pink-400" />
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem -> Solution Framework */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Bạn đang gặp những vấn đề này?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Đây là những nỗi đau phổ biến nhất mà doanh nghiệp Việt Nam gặp phải trong quản lý chuỗi cung ứng. Chúng tôi đã có giải pháp cho từng vấn đề.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/30 transition-colors group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-200">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/scm/services" className="text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-2">
              Xem giải pháp của chúng tôi <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Khám phá Trung tâm Tài nguyên</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ba lĩnh vực chính: Học (Knowledge), Công cụ (Tools), và Giải pháp (Services). Tất cả đều hướng đến mục tiêu duy nhất: Tối ưu hóa chuỗi cung ứng của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-20 rounded-3xl blur-xl group-hover:opacity-30 transition-opacity`} />
                <div className="relative glass-card p-8 rounded-3xl h-full flex flex-col">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-6`}>
                    <cat.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-muted-foreground mb-8">{cat.description}</p>
                  
                  <div className="space-y-3 mt-auto">
                    {cat.items.map((item, i) => (
                      <Link 
                        key={i} 
                        to={item.link}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group/item"
                      >
                        <span className="text-sm font-medium">{item.title}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground bg-white/10 px-2 py-0.5 rounded">{item.count}</span>
                          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/item:text-pink-400 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold">Nội dung nổi bật</h2>
            <Link to="/scm/blog" className="text-sm text-pink-400 hover:underline">Xem tất cả</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/scm/blog/supply-chain-la-gi" className="group glass-card p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="text-xs text-pink-400 mb-2">Bài viết mới</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                Supply Chain là gì? Toàn tập cho người mới
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Tìm hiểu khái niệm cơ bản về Supply Chain, vai trò và các thành phần chính trong doanh nghiệp.
              </p>
            </Link>

            <Link to="/scm/ebook" className="group glass-card p-6 rounded-2xl hover:bg-white/10 transition-colors border-l-4 border-l-pink-500">
              <div className="text-xs text-purple-400 mb-2">eBook miễn phí</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                30 Công Cụ Quản Trị Supply Chain Thực Chiến
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                Bộ sưu tập các file Excel, Dashboard, Checklist giúp bạn quản lý tồn kho, nhà cung cấp và vận tải hiệu quả hơn.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-12 rounded-3xl bg-gradient-to-br from-pink-500/20 via-purple-600/20 to-blue-500/20 border border-pink-500/30">
            <h2 className="text-3xl font-bold mb-4">Sẵn sàng chuyển đổi Supply Chain?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Hãy bắt đầu bằng việc tải eBook miễn phí để hiểu rõ hơn về các công cụ và phương pháp thực chiến của chúng tôi.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/scm/ebook" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105">
                Tải eBook ngay
              </Link>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/10">
                Liên hệ tư vấn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}