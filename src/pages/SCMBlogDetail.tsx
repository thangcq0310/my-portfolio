import { Helmet } from "react-helmet-async"
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
        <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h3 className="font-semibold text-blue-400 flex items-center gap-2">
            <Star className="w-4 h-4" /> Mục tiêu bài viết
          </h3>
          <p className="text-sm text-muted-foreground">
            Sau khi đọc bài này, bạn sẽ hiểu rõ khái niệm Supply Chain, biết cách phân biệt các thành phần chính, và áp dụng được kiến thức cơ bản vào công việc hàng ngày.
          </p>
        </div>
        
        <h2 id="concept" className="text-2xl font-bold mb-4 text-white">1. Khái niệm Supply Chain</h2>
        <p className="mb-4 leading-relaxed">
          Supply Chain (chuỗi cung ứng) là <strong>mạng lưới phức tạp</strong> liên kết từ nhà cung cấp nguyên vật liệu, qua các nhà sản xuất, kho lưu trữ, đơn vị vận tải, đến các nhà phân phối và cuối cùng là khách hàng tiêu dùng. Nó không chỉ là việc vận chuyển hàng hóa, mà bao gồm tất cả các hoạt động liên quan để chuyển một sản phẩm từ khái niệm đến tay người dùng cuối.
        </p>
        
        <h2 id="role" className="text-2xl font-bold mb-4 text-white">2. Vai trò then chốt của Supply Chain trong doanh nghiệp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-blue-400 mb-1">📊 Tối ưu chi phí</h3>
            <p className="text-sm text-muted-foreground">Giảm chi phí tồn kho, vận chuyển và chi phí do thiếu hàng/hàng dư.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-cyan-400 mb-1">🚀 Nâng cao cạnh tranh</h3>
            <p className="text-sm text-muted-foreground">Nguồn cung ổn định, giao hàng nhanh tạo lợi thế vượt trội trên thị trường.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-blue-400 mb-1">😊 Hài lòng khách hàng</h3>
            <p className="text-sm text-muted-foreground">Đúng thời gian, đúng nơi, đúng số lượng là chìa khóa của sự tin tưởng.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-cyan-400 mb-1">🔧 Khả năng phản ứng</h3>
            <p className="text-sm text-muted-foreground">Thích ứng nhanh với thay đổi nhu cầu thị trường hoặc sự cố cung ứng.</p>
          </div>
        </div>
        
        <h2 id="components" className="text-2xl font-bold mb-4 text-white">3. Các thành phần chính (SCOR Model)</h2>
        <p className="mb-4 leading-relaxed">
          Theo tiêu chuẩn SCOR (Supply Chain Operations Reference), một chuỗi cung ứng tiêu chuẩn bao gồm 6 luồng hoạt động chính:
        </p>
        <div className="space-y-3 mb-6">
          <div className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">1</span>
            <div>
              <strong className="text-gray-200">Plan (Lập kế hoạch):</strong>
              <span className="text-muted-foreground ml-1">Dự báo nhu cầu, lập kế hoạch sản xuất và phân phối.</span>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">2</span>
            <div>
              <strong className="text-gray-200">Source (Thu mua):</strong>
              <span className="text-muted-foreground ml-1">Lựa chọn nhà cung cấp, đàm phán hợp đồng, quản lý đầu vào.</span>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">3</span>
            <div>
              <strong className="text-gray-200">Make (Sản xuất):</strong>
              <span className="text-muted-foreground ml-1">Chuyển hóa nguyên vật liệu thành sản phẩm hoàn thiện.</span>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">4</span>
            <div>
              <strong className="text-gray-200">Deliver (Vận chuyển):</strong>
              <span className="text-muted-foreground ml-1">Quản lý đơn hàng, kho bãi và phân phối sản phẩm.</span>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">5</span>
            <div>
              <strong className="text-gray-200">Return (Xử lý trả hàng):</strong>
              <span className="text-muted-foreground ml-1">Quản lý trả hàng, xử lý lỗi và tái chế sản phẩm.</span>
            </div>
          </div>
          <div className="flex gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">6</span>
            <div>
              <strong className="text-gray-200">Enable (Hỗ trợ):</strong>
              <span className="text-muted-foreground ml-1">Quản lý nhân sự, rủi ro, công nghệ và hiệu suất.</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-6 mt-8">
          <h3 className="font-semibold text-blue-400 mb-3 flex items-center gap-2">
            <Star className="w-4 h-4" /> Áp dụng thực tế: Bắt đầu từ đâu?
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">01.</span>
              <span><strong>Vẽ luồng vật liệu:</strong> Vẽ sơ đồ cho thấy nguyên liệu vào, xử lý và thành phẩm ra sao.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">02.</span>
              <span><strong>Đo lường KPI cơ bản:</strong> Bắt đầu với Inventory Turnover và Order Cycle Time.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-400 font-bold">03.</span>
              <span><strong>Tìm điểm đau (Pain points):</strong> Xác định nơi xảy ra thiếu hàng hoặc chi phí bất thường.</span>
            </li>
          </ul>
        </div>
        
        <h2 id="conclusion" className="text-2xl font-bold mb-4 text-white">4. Kết luận</h2>
        <p className="mb-4 leading-relaxed">
          Supply Chain không chỉ là một bộ phận, mà là <strong>trái tim</strong> của doanh nghiệp. Việc tối ưu chuỗi cung ứng giúp tiết kiệm chi phí và tạo lợi thế cạnh tranh bền vững. Hãy bắt đầu từ những việc nhỏ, đo lường kết quả, và cải thiện liên tục.
        </p>
      </div>
    `
  },
  "ton-kho-cao-van-thieu-hang": {
    title: "Vì sao doanh nghiệp vừa tồn kho cao vừa thiếu hàng?",
    description: "Phân tích nguyên nhân và cách giải quyết tình trạng Inventory paradox phổ biến trong doanh nghiệp Việt Nam.",
    date: "14 Tháng 6, 2026",
    readTime: "6 phút đọc",
    content: `
      <div className="space-y-6">
        <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h3 className="font-semibold text-blue-400 flex items-center gap-2">
            <Star className="w-4 h-4" /> Triệu chứng
          </h3>
          <p className="text-sm text-muted-foreground">
            Tồn kho tổng cao (hàng tỷ, hàng chục tỷ) nhưng vẫn thiếu hàng để giao cho khách. SKU cần giao thì hết, SKU slow-moving thì chất đống.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">1. Nguyên nhân gốc rễ</h2>
        <div className="space-y-4 mb-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-blue-400 mb-1">📊 Forecast sai</h3>
            <p className="text-sm text-muted-foreground">Dự báo nhu cầu không chính xác, mua theo cảm tính hoặc theo đơn hàng đã có mà không tính toán tồn kho hiện có.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-blue-400 mb-1">🔄 Lead time không rõ</h3>
            <p className="text-sm text-muted-foreground">Không biết chính xác supplier mất bao lâu, nên đặt dư "cho chắc" → tồn kho cao.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <h3 className="font-semibold text-blue-400 mb-1">📦 SKU quá nhiều</h3>
            <p className="text-sm text-muted-foreground">Mở rộng danh mục không kiểm soát, SKU mới liên tục nhưng SKU cũ không thanh lý.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">2. Giải pháp</h2>
        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">1</span>
            <span><strong>ABC Analysis:</strong> Phân loại SKU theo giá trị, tập trung quản lý top 20% SKU tạo 80% doanh thu.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">2</span>
            <span><strong>Safety Stock:</strong> Tính toán tồn kho an toàn dựa trên lead time và service level mong muốn.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">3</span>
            <span><strong>Reorder Point (ROP):</strong> Thiết lập điểm đặt hàng lại tự động khi tồn kho xuống mức.</span>
          </li>
        </ul>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-6 mt-8">
          <h3 className="font-semibold text-blue-400 mb-3">Công cụ hỗ trợ</h3>
          <p className="text-sm text-muted-foreground">
            Tải Checklist 50 điểm để tự đánh giá năng lực Supply Chain hoặc template ABC/XYZ Analysis.
          </p>
        </div>
      </div>
    `
  },
  "forecast-sai-anh-huong-gi": {
    title: "Forecast sai ảnh hưởng thế nào đến mua hàng, sản xuất và kho?",
    description: "Phân tích tác động dây chuyền của forecast không chính xác đến toàn bộ chuỗi cung ứng.",
    date: "13 Tháng 6, 2026",
    readTime: "7 phút đọc",
    content: `
      <div className="space-y-6">
        <p className="mb-4 leading-relaxed text-lg">
          Forecast (dự báo nhu cầu) là điểm khởi đầu của mọi hoạt động Supply Chain. Khi forecast sai, <strong>toàn bộ chuỗi cung ứng bị ảnh hưởng</strong>.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-white">1. Tác động đến Mua hàng</h2>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <span className="text-red-400 font-bold">❌ Mua thiếu:</span>
            <span className="text-muted-foreground">Thiếu hàng giao khách → mất doanh thu, phạt hợp đồng, uy tín giảm.</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <span className="text-yellow-400">⚠️ Mua dư:</span>
            <span className="text-muted-foreground">Tồn kho cao → chi phí lưu kho, hàng hết date, vốn bị ứ đọng.</span>
          </li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-white">2. Tác động đến Sản xuất</h2>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <span className="text-red-400">❌</span>
            <span className="text-muted-foreground">Phải chạy overtime gấp → chi phí nhân công cao, chất lượng giảm.</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <span className="text-yellow-400">⚠️</span>
            <span className="text-muted-foreground">Dừng máy chờ nguyên liệu → công suất không tận dụng, chi phí cố định cao.</span>
          </li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-white">3. Tác động đến Kho</h2>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <span className="text-red-400">❌</span>
            <span className="text-muted-foreground">Thiếu slot chứa → phải thuê kho ngoài gấp → chi phí tăng.</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <span className="text-yellow-400">⚠️</span>
            <span className="text-muted-foreground">Kho quá tải → xử lý chậm → delivery chậm → khách hàng不满意.</span>
          </li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-white">4. Giải pháp</h2>
        <div className="space-y-3">
          <li className="flex gap-3">
            <span className="text-blue-400 flex-shrink-0">✓</span>
            <span><strong>S&OP:</strong> Cuộc họp monthly giữa Sales, Planning, Finance để cân đối forecast.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 flex-shrink-0">✓</span>
            <span><strong>Rolling forecast:</strong> Cập nhật forecast hàng tháng, nhìn xa 3-12 tháng.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 flex-shrink-0">✓</span>
            <span><strong>Tracking error:</strong> Đo lường forecast error để cải thiện phương pháp.</span>
          </li>
        </div>
      </div>
    `
  },
  "supplier-lead-time": {
    title: "Supplier Lead Time là gì và vì sao cần quản trị?",
    description: "Hướng dẫn quản lý lead time nhà cung cấp để đảm bảo nguồn cung ổn định và tối ưu điểm đặt hàng.",
    date: "12 Tháng 6, 2026",
    readTime: "5 phút đọc",
    content: `
      <div className="space-y-6">
        <p className="mb-4 leading-relaxed">
          Lead time là thời gian từ lúc đặt hàng đến khi hàng về đến kho. Quản lý lead time <strong>là yếu tố cốt lõi</strong> để đảm bảo nguồn cung ổn định.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-white">1. Tại sao cần quản lý Lead Time?</h2>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <span className="text-blue-400">✓</span>
            <span><strong>Điểm đặt hàng (ROP):</strong> Biết khi nào cần đặt để hàng về đúng lúc, không thiếu không dư.</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <span className="text-blue-400">✓</span>
            <span><strong>Tồn kho an toàn:</strong> Tính toán safety stock chính xác dựa trên lead time thực tế.</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
            <span className="text-blue-400">✓</span>
            <span><strong>Supplier performance:</strong> Đánh giá supplier qua việc giao đúng lead time.</span>
          </li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-white">2. Cách theo dõi Lead Time</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-blue-400 mb-3">Tracking template cần:</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Mã SKU / Tên nguyên liệu</li>
            <li>• Nhà cung cấp</li>
            <li>• Ngày đặt / Ngày hàng về thực tế</li>
            <li>• Lead time thực tế (ngày)</li>
            <li>• Lead time cam kết (ngày)</li>
            <li>• Đánh giá (Đúng / Trễ / Rất trễ)</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-6">
          <h3 className="font-semibold text-blue-400 mb-3">Best practice</h3>
          <p className="text-sm text-muted-foreground">
            Yêu cầu supplier cam kết lead time bằng văn bản. Theo dõi hàng tháng. Đưa vào Supplier Scorecard để đánh giá định kỳ.
          </p>
        </div>
      </div>
    `
  },
  "abc-xyz-analysis": {
    title: "ABC/XYZ Analysis trong quản trị tồn kho",
    description: "Phương pháp phân loại SKU theo giá trị và tần suất để tối ưu quản lý tồn kho.",
    date: "11 Tháng 6, 2026",
    readTime: "6 phút đọc",
    content: `
      <div className="space-y-6">
        <p className="mb-4 leading-relaxed">
          ABC/XYZ là phương pháp phân loại SKU giúp <strong>tập trung nguồn lực vào mặt hàng quan trọng nhất</strong>.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-white">1. Phân tích ABC</h2>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <span className="flex-shrink-0 w-8 h-8 rounded bg-red-500 text-white flex items-center justify-center font-bold">A</span>
            <div>
              <strong className="text-red-400">Top 20% SKU = 80% giá trị</strong>
              <p className="text-xs text-muted-foreground">Quản lý chặt chẽ, kiểm kê thường xuyên.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <span className="flex-shrink-0 w-8 h-8 rounded bg-yellow-500 text-black flex items-center justify-center font-bold">B</span>
            <div>
              <strong className="text-yellow-400">30% SKU = 15% giá trị</strong>
              <p className="text-xs text-muted-foreground">Quản lý trung bình, kiểm kê định kỳ.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <span className="flex-shrink-0 w-8 h-8 rounded bg-blue-500 text-white flex items-center justify-center font-bold">C</span>
            <div>
              <strong className="text-blue-400">50% SKU = 5% giá trị</strong>
              <p className="text-xs text-muted-foreground">Quản lý đơn giản, kiểm kê ít.</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">2. Phân tích XYZ</h2>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
            <span className="flex-shrink-0 w-8 h-8 rounded bg-green-500 text-white flex items-center justify-center font-bold">X</span>
            <div>
              <strong className="text-green-400">Tần suất cao, tiêu thụ đều đặn</strong>
              <p className="text-xs text-muted-foreground">Dễ dự báo, có thể automatic reorder.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <span className="flex-shrink-0 w-8 h-8 rounded bg-yellow-500 text-black flex items-center justify-center font-bold">Y</span>
            <div>
              <strong className="text-yellow-400">Tần suất trung bình</strong>
              <p className="text-xs text-muted-foreground">Có biến động theo mùa, cần theo dõi.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
            <span className="flex-shrink-0 w-8 h-8 rounded bg-red-500 text-white flex items-center justify-center font-bold">Z</span>
            <div>
              <strong className="text-red-400">Tần suất thấp, phân bố ngẫu nhiên</strong>
              <p className="text-xs text-muted-foreground">Khó dự báo, mua khi có đơn.</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">3. Kết hợp ABC + XYZ</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-2">Loại</th>
                <th className="text-left p-2">Đặc điểm</th>
                <th className="text-left p-2">Chính sách</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr><td className="p-2">AX</td><td className="p-2">Quan trọng + Tiêu thụ đều</td><td className="p-2">Quản lý chặt, auto reorder</td></tr>
              <tr><td className="p-2">AY</td><td className="p-2">Quan trọng + Biến động</td><td className="p-2">Theo dõi sát, review thường xuyên</td></tr>
              <tr><td className="p-2">AZ</td><td className="p-2">Quan trọng + Tiêu thụ thấp</td><td className="p-2">Mua theo đơn, tracking riêng</td></tr>
              <tr><td className="p-2">CX</td><td className="p-2"> ít quan trọng + Tiêu thụ đều</td><td className="p-2">Kanban, reorder định kỳ</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  "kpi-supply-chain": {
    title: "KPI Supply Chain cần theo dõi hàng tháng",
    description: "Các chỉ tiêu quan trọng để đo lường hiệu suất chuỗi cung ứng.",
    date: "10 Tháng 6, 2026",
    readTime: "7 phút đọc",
    content: `
      <div className="space-y-6">
        <p className="mb-4 leading-relaxed">
          Đo lường bằng KPI là cách duy nhất để biết Supply Chain đang hoạt động tốt hay cần cải thiện.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-white">1. KPI Planning</h2>
        <ul className="space-y-2 mb-6 text-muted-foreground">
          <li>• <strong>Forecast Accuracy:</strong> % sai số dự báo so với thực tế (mục tiêu >85%)</li>
          <li>• <strong>Forecast Bias:</strong> Dự báo cao/thấp hơn thực tế bao nhiêu</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-white">2. KPI Procurement</h2>
        <ul className="space-y-2 mb-6 text-muted-foreground">
          <li>• <strong>Lead Time Compliance:</strong> % đơn hàng giao đúng hạn</li>
          <li>• <strong>Supplier On-time:</strong> % supplier giao đúng lead time cam kết</li>
          <li>• <strong>PO Fill Rate:</strong> % đơn hàng được đáp ứng đầy đủ</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-white">3. KPI Inventory</h2>
        <ul className="space-y-2 mb-6 text-muted-foreground">
          <li>• <strong>Inventory Accuracy:</strong> % số liệu trên hệ thống khớp thực tế (mục tiêu >98%)</li>
          <li>• <strong>Inventory Turnover:</strong> Số lần hàng tồn kho quay vòng trong năm</li>
          <li>• <strong>Days of Supply:</strong> Số ngày tồn kho đủ bán</li>
          <li>• <strong>Dead Stock:</strong> % hàng không di chuyển >90 ngày</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-white">4. KPI Warehouse</h2>
        <ul className="space-y-2 mb-6 text-muted-foreground">
          <li>• <strong>Pick Accuracy:</strong> % lần picking không có lỗi</li>
          <li>• <strong>Receipt Cycle Time:</strong> Thời gian nhận hàng vào kho</li>
          <li>• <strong>Dispatch Cycle Time:</strong> Thời gian chuẩn bị xuất hàng</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-white">5. KPI Logistics</h2>
        <ul className="space-y-2 mb-6 text-muted-foreground">
          <li>• <strong>OTIF (On-Time In-Full):</strong> % đơn giao đúng hạn và đầy đủ (mục tiêu >95%)</li>
          <li>• <strong>Perfect Order Rate:</strong> % đơn hàng hoàn hảo</li>
          <li>• <strong>Transportation Cost:</strong> Chi phí vận chuyển / đơn hàng</li>
        </ul>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20 rounded-2xl p-6">
          <h3 className="font-semibold text-blue-400 mb-3">Bắt đầu từ đâu?</h3>
          <p className="text-sm text-muted-foreground">
            Chọn 5-7 KPI phù hợp với doanh nghiệp. Theo dõi hàng tháng. So sánh với target và cải thiện dần.
          </p>
        </div>
      </div>
    `
  },
  "sop-la-gi": {
    title: "S&OP là gì và SME có cần không?",
    description: "Sales & Operations Planning cho doanh nghiệp vừa và nhỏ - có cần thiết không?",
    date: "9 Tháng 6, 2026",
    readTime: "5 phút đọc",
    content: `
      <div className="space-y-6">
        <p className="mb-4 leading-relaxed">
          S&OP (Sales & Operations Planning) là cuộc họp monthly để cân đối giữa <strong>dự báo nhu cầu và nguồn lực cung ứng</strong>.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-white">1. S&OP giải quyết gì?</h2>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3">
            <span className="text-blue-400">✓</span>
            <span>Forecast hàng tháng có khớp với capacity sản xuất?</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400">✓</span>
            <span>Có đủ nguyên liệu để sản xuất theo đơn hàng?</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400">✓</span>
            <span>Kho có đủ sức chứa cho hàng sắp về?</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400">✓</span>
            <span>Team sales và operations có aligned không?</span>
          </li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-white">2. SME có cần S&OP không?</h2>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-blue-400 mb-2">Cần! Vì:</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>✓ Giúp tránh thiếu hàng/ dư hàng ngay từ đầu</li>
            <li>✓ Cân đối giữa bán và mua - tránh ứ vốn</li>
            <li>✓ Tạo thói quen planning có kiểm soát</li>
            <li>✓ Chuẩn bị cho giai đoạn scale up</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">3. Cách triển khai đơn giản</h2>
        <ul className="space-y-3">
          <li className="flex gap-3 p-3 bg-white/5 rounded-lg">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">1</span>
            <span>Họp 1h mỗi tháng (hoặc tuần nếu biến động cao)</span>
          </li>
          <li className="flex gap-3 p-3 bg-white/5 rounded-lg">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">2</span>
            <span>Chuẩn bị forecast + capacity trước 1-2 ngày</span>
          </li>
          <li className="flex gap-3 p-3 bg-white/5 rounded-lg">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">3</span>
            <span>Review,讨论, quyết định action items</span>
          </li>
        </ul>
      </div>
    `
  },
  "cong-cu-digital-scm": {
    title: "Khi nào doanh nghiệp nên dùng Excel, Power BI, WMS hoặc ERP?",
    description: "Hướng dẫn lựa chọn công cụ phù hợp với mức độ trưởng thành của doanh nghiệp.",
    date: "8 Tháng 6, 2026",
    readTime: "6 phút đọc",
    content: `
      <div className="space-y-6">
        <p className="mb-4 leading-relaxed">
          Không phải doanh nghiệp nào cũng cần ERP. Việc chọn đúng công cụ <strong>phụ thuộc vào mức độ trưởng thành</strong> của Supply Chain.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-white">1. Excel / Google Sheets</h2>
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-green-400 mb-2">Dùng khi:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Dưới 100 SKU</li>
            <li>• Dưới 50 đơn/tháng</li>
            <li>• Mới bắt đầu</li>
            <li>• Cần giải pháp nhanh, chi phí thấp</li>
          </ul>
          <p className="text-sm text-green-400 mt-3">✓ Free, linh hoạt, dễ bắt đầu</p>
          <p className="text-sm text-red-400">✗ Không mở rộng được, dễ sai sót</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">2. Power BI / Tableau</h2>
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-yellow-400 mb-2">Dùng khi:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Đã có data trong Excel/数据库</li>
            <li>• Cần dashboard trực quan</li>
            <li>• Muốn visualize KPIs</li>
            <li>• Report cho management</li>
          </ul>
          <p className="text-sm text-yellow-400 mt-3">✓ Visualization mạnh, kết nối nhiều nguồn</p>
          <p className="text-sm text-red-400">✗ Không phải hệ thống vận hành</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">3. WMS (Warehouse Management System)</h2>
        <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-orange-400 mb-2">Dùng khi:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• 500+ SKUs</li>
            <li>• 100+ đơn/ngày</li>
            <li>• Cần quản lý kho real-time</li>
            <li>• Nhiều warehouse/ location</li>
          </ul>
          <p className="text-sm text-orange-400 mt-3">✓ Quản lý kho chuyên sâu</p>
          <p className="text-sm text-red-400">✗ Chi phí triển khai cao hơn</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">4. ERP (SAP, Oracle, Dynamics)</h2>
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-red-400 mb-2">Dùng khi:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Doanh nghiệp lớn, nhiều phòng ban</li>
            <li>• Cần tích hợp toàn bộ</li>
            <li>• Có nguồn lực IT</li>
            <li>• Multiple entities/ countries</li>
          </ul>
          <p className="text-sm text-red-400 mt-3">✓ Toàn diện, integration</p>
          <p className="text-sm text-red-400">✗ Đắt, phức tạp, lâu triển khai</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4 text-white">5. Lộ trình khuyến nghị</h2>
        <div className="space-y-3">
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">B1:</span>
            <span>Bắt đầu với Excel + checklist chuẩn hóa</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">B2:</span>
            <span>Scale → Power BI cho reporting</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">B3:</span>
            <span>Phức tạp → WMS cho warehouse</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-bold">B4:</span>
            <span>Đủ lớn → ERP toàn diện</span>
          </li>
        </div>
      </div>
    `
  }
};

const SCMBlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<SCMArticle | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundPost = articleContent[slug as keyof typeof articleContent];
    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate("/scm/blog");
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | SCM Thực Chiến</title>
        <meta name="description" content={post.description} />
      </Helmet>
      
      <div className="min-h-[calc(100vh-4rem)] p-4 md:p-6">
        {/* Breadcrumbs & Back button */}
        <div className="max-w-6xl mx-auto mb-8 flex items-center justify-between">
          <Link to="/scm/blog" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors flex items-center justify-between group">
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
            <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 text-center">
              <h3 className="text-xl font-bold mb-4">Áp dụng kiến thức vào thực tế ngay hôm nay</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Chúng tôi cung cấp các công cụ và lộ trình chuẩn hóa Supply Chain thực chiến cho doanh nghiệp Việt.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/scm/checklist" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
                  Tải checklist miễn phí
                </Link>
                <Link to="/scm/templates" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-white/10">
                  Xem mẫu template
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Table of Contents */}
            <div className="glass-card p-6 sticky top-24 border-blue-500/10">
              <h4 className="font-bold mb-4 flex items-center gap-2 text-blue-400">
                <BookOpen className="w-4 h-4" /> Mục lục
              </h4>
              <nav className="space-y-2">
                <a href="#concept" className="block text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  1. Khái niệm Supply Chain
                </a>
                <a href="#role" className="block text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  2. Vai trò then chốt
                </a>
                <a href="#components" className="block text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  3. Các thành phần chính (SCOR)
                </a>
                <a href="#conclusion" className="block text-sm text-muted-foreground hover:text-blue-400 transition-colors">
                  4. Kết luận
                </a>
              </nav>

              <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
                <div>
                  <h4 className="font-bold mb-4 flex items-center gap-2 text-cyan-400">
                    <FileText className="w-4 h-4" /> Tài nguyên hữu ích
                  </h4>
                  <div className="space-y-3">
                    <Link to="/scm/checklist" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                      <span className="text-xs text-muted-foreground group-hover:text-white">Checklist 50 điểm</span>
                      <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-blue-400" />
                    </Link>
                    <Link to="/scm/templates" className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group">
                      <span className="text-xs text-muted-foreground group-hover:text-white">Template thực chiến</span>
                      <ChevronRight className="w-3 h-3 text-muted-foreground group-hover:text-blue-400" />
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
                        <h5 className="text-xs font-medium text-muted-foreground group-hover:text-blue-400 transition-colors line-clamp-2">
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
    </>
  );
};

export default SCMBlogDetail;