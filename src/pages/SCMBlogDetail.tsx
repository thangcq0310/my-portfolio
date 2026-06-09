import { scmBlogPosts } from "@/data/scm-blog";
import type { SCMArticle } from "@/types/scm";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar, Clock, ArrowLeft, BookOpen, FileText, Star, ChevronRight } from "lucide-react";

const articleContent = {
  "supply-chain-la-gi": {
    title: "Supply Chain là gì? Toàn tập về Chuỗi cung ứng cho người mới",
    description: "Tìm hiểu khái niệm cơ bản về Supply Chain, vai trò và các thành phần chính trong doanh nghiệp.",
    date: "15 Tháng 6, 2026",
    readTime: "8 phút đọc",
    content: `
      <div className="space-y-6">
        <div className="bg-pink-500/10 border-l-4 border-pink-500 p-4 rounded-r-lg">
          <h3 className="font-semibold text-pink-400 flex items-center gap-2">
            <Star className="w-4 h-4" /> Mục tiêu bài viết
          </h3>
          <p className="text-sm text-muted-foreground">
            Sau khi đọc bài này, bạn sẽ hiểu rõ khái niệm Supply Chain, biết cách phân biệt các thành phần chính, và áp dụng được kiến thức cơ bản vào công việc hàng ngày.
          </p>
        </div>
        
        <h2 id="concept" className="text-2xl font-bold mb-4 text-gradient">1. Khái niệm Supply Chain</h2>
        <p className="mb-4 leading-relaxed">
          Supply Chain (chuỗi cung ứng) là <strong>mạng lưới phức tạp</strong> liên kết từ nhà cung cấp nguyên vật liệu, qua các nhà sản xuất, kho lưu trữ, đơn vị vận tải, đến các nhà phân phối và cuối cùng là khách hàng tiêu dùng. Nó không chỉ là việc vận chuyển hàng hóa, mà bao gồm tất cả các hoạt động liên quan để chuyển một sản phẩm từ khái niệm đến tay người dùng cuối.
        </p>
        
        <h2 id="role" className="text-2xl font-bold mb-4 text-gradient">2. Vai trò then chốt của Supply Chain trong doanh nghiệp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-pink-400 mb-1">📊 Tối ưu chi phí</h3>
            <p className="text-sm text-muted-foreground">Giảm chi phí tồn kho, vận chuyển và chi phí do thiếu hàng/hàng dư.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-purple-400 mb-1">🚀 Nâng cao cạnh tranh</h3>
            <p className="text-sm text-muted-foreground">Nguồn cung ổn định, giao hàng nhanh tạo lợi thế vượt trội trên thị trường.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-pink-400 mb-1">😊 Hài lòng khách hàng</h3>
            <p className="text-sm text-muted-foreground">Đúng thời gian, đúng nơi, đúng số lượng là chìa khóa của sự tin tưởng.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-purple-400 mb-1">🔧 Khả năng phản ứng</h3>
            <p className="text-sm text-muted-foreground">Thích ứng nhanh với thay đổi nhu cầu thị trường hoặc sự cố cung ứng.</p>
          </div>
        </div>
        
        <h2 id="components" className="text-2xl font-bold mb-4 text-gradient">3. Các thành phần chính (SCOR Model)</h2>
        <p className="mb-4 leading-relaxed">
          Theo tiêu chuẩn SCOR (Supply Chain Operations Reference), một chuỗi cung ứng tiêu chuẩn bao gồm 6 luồng hoạt động chính:
        </p>
        <div className="space-y-3 mb-6">
          {[
            { name: "Plan (Lập kế hoạch)", desc: "Dự báo nhu cầu, lập kế hoạch sản xuất và phân phối." },
            { name: "Source (Thu mua)", desc: "Lựa chọn nhà cung cấp, đàm phán hợp đồng, quản lý đầu vào." },
            { name: "Make (Sản xuất)", desc: "Chuyển hóa nguyên vật liệu thành sản phẩm hoàn thiện." },
            { name: "Deliver (Vận chuyển)", desc: "Quản lý đơn hàng, kho bãi và phân phối sản phẩm." },
            { name: "Return (Xử lý trả hàng)", desc: "Quản lý trả hàng, xử lý lỗi và tái chế sản phẩm." },
            { name: "Enable (Hỗ trợ)", desc: "Quản lý nhân sự, rủi ro, công nghệ và hiệu suất." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center text-xs font-bold">{i+1}</span>
              <div>
                <strong className="text-gray-200">{item.name}:</strong>
                <span className="text-muted-foreground ml-1">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-2xl p-6 mt-8">
          <h3 className="font-semibold text-pink-400 mb-3 flex items-center gap-2">
            <Star className="w-4 h-4" /> Áp dụng thực tế: Bắt đầu từ đâu?
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-pink-400 font-bold">01.</span>
              <span><strong>Vẽ luồng vật liệu:</strong> Vẽ sơ đồ cho thấy nguyên liệu vào, xử lý và thành phẩm ra sao.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-pink-400 font-bold">02.</span>
              <span><strong>Đo lường KPI cơ bản:</strong> Bắt đầu với Inventory Turnover và Order Cycle Time.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-pink-400 font-bold">03.</span>
              <span><strong>Tìm điểm đau (Pain points):</strong> Xác định nơi xảy ra thiếu hàng hoặc chi phí bất thường.</span>
            </li>
          </ul>
        </div>
        
        <h2 id="conclusion" className="text-2xl font-bold mb-4 text-gradient">4. Kết luận</h2>
        <p className="mb-4 leading-relaxed">
          Supply Chain không chỉ là một bộ phận, mà là <strong>trái tim</strong> của doanh nghiệp. Việc tối ưu chuỗi cung ứng giúp tiết kiệm chi phí và tạo lợi thế cạnh tranh bền vững. Hãy bắt đầu từ những việc nhỏ, đo lường kết quả, và cải thiện liên tục.
        </p>
      </div>
    `
  }
};

const SCMBlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<SCMArticle | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundPost = articleContent[slug];
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate("/scm/blog");
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 md:p-6">
      {/* Breadcrumbs & Back button */}
      <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
        <Link to="/scm/blog" className="text-sm text-muted-foreground hover:text-pink-400 transition-colors flex items-center justify-between group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Quay lại Blog
        </Link>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span>SCM Hub</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-300">Blog</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-8">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-100">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Calendar className="w-3.5 h-3.5" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
            </div>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {post.description}
            </p>
          </header>

          <div 
            className="prose prose-invert max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* Bottom CTA */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/30 text-center">
            <h3 className="text-xl font-bold mb-4">Áp dụng kiến thức vào thực tế ngay hôm nay</h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Chúng tôi cung cấp các công cụ và lộ trình chuẩn hóa Supply Chain thực chiến cho doanh nghiệp Việt.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/scm/ebook" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                Tải eBook miễn phí
              </Link>
              <Link to="/scm/templates" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-white/10">
                Xem mẫu Excel
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Table of Contents */}
          <div className="glass-card p-6 sticky top-24">
            <h4 className="font-bold mb-4 flex items-center gap-2 text-pink-400">
              <BookOpen className="w-4 h-4" /> Mục lục
            </h4>
            <nav className="space-y-2">
              <a href="#concept" className="block text-sm text-muted-foreground hover:text-pink-400 transition-colors">
                1. Khái niệm Supply Chain
              </a>
              <a href="#role" className="block text-sm text-muted-foreground hover:text-pink-400 transition-colors">
                2. Vai trò then chốt
              </a>
              <a href="#components" className="block text-sm text-muted-foreground hover:text-pink-400 transition-colors">
                3. Các thành phần chính (SCOR)
              </a>
              <a href="#conclusion" className="block text-sm text-muted-foreground hover:text-pink-400 transition-colors">
                4. Kết luận
              </a>
            </nav>

            <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-purple-400">
                  <FileText className="w-4 h-4" /> Tài nguyên hữu ích
                </h4>
                <div className="space-y-3">
                  <Link to="/scm/ebook" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                    <span className="text-xs text-muted-foreground group-hover:text-white">eBook Supply Chain</span>
                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-pink-400" />
                  </Link>
                  <Link to="/scm/templates" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                    <span className="text-xs text-muted-foreground group-hover:text-white">Mẫu Excel thực chiến</span>
                    <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-pink-400" />
                  </Link>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-4 flex items-center gap-2 text-gray-300">
                  <Star className="w-4 h-4" /> Bài viết liên quan
                </h4>
                <div className="space-y-4">
                  {scmBlogPosts.slice(1, 4).map(post => (
                    <Link 
                      key={post.id} 
                      to={post.link} 
                      className="block group"
                    >
                      <h5 className="text-xs font-medium text-muted-foreground group-hover:text-pink-400 transition-colors line-clamp-2">
                        {post.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SCMBlogDetail;