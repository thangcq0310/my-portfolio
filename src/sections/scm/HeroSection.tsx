import { Link } from "react-router-dom";
import { ArrowRight, Package, TrendingUp, FileSpreadsheet, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-transparent to-blue-900/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-pink-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
              <span>SCM Thực Chiến</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">SCM </span>
              <span className="text-gradient">Thực Chiến</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-xl">
              Kiến thức, template và công cụ giúp doanh nghiệp Việt Nam quản trị tồn kho, kho vận và chi phí logistics hiệu quả hơn.
            </p>
            
            <p className="text-sm text-muted-foreground/80 mb-8 leading-relaxed max-w-xl">
              Dành cho trưởng kho, logistics, supply chain, kế toán kho và doanh nghiệp đang quản lý vận hành bằng Excel nhưng muốn chuẩn hóa dữ liệu, báo cáo và quy trình.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link 
                to="/scm#free-tools" 
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Tải checklist miễn phí
              </Link>
              <Link 
                to="/scm#products" 
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-white/10 flex items-center gap-2"
              >
                Xem sách & template
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right - Demo cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Inventory Dashboard */}
            <div className="glass-card p-5 rounded-2xl col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Tổng tồn kho</span>
                  <span className="text-xl font-bold text-pink-400">12,450</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-lg font-bold text-white">SKU</div>
                    <div className="text-xs text-gray-500">245</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-lg font-bold text-white">Turn</div>
                    <div className="text-xs text-gray-500">4.2x</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2">
                    <div className="text-lg font-bold text-white">Days</div>
                    <div className="text-xs text-gray-500">87</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warehouse KPI */}
            <div className="glass-card p-5 rounded-2xl">
              <Package className="w-8 h-8 text-blue-400 mb-3" />
              <div className="text-lg font-semibold mb-1">Pick Rate</div>
              <div className="text-2xl font-bold text-white">98.5%</div>
              <div className="text-xs text-green-400">+2.3%</div>
            </div>

            {/* Excel Template */}
            <div className="glass-card p-5 rounded-2xl">
              <FileSpreadsheet className="w-8 h-8 text-green-400 mb-3" />
              <div className="text-lg font-semibold mb-1">Template</div>
              <div className="text-2xl font-bold text-white">NXH</div>
              <div className="text-xs text-gray-500">Sẵn sàng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}