import { Link } from "react-router-dom";
import { ArrowRight, Download, BarChart3, ClipboardCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-cyan-900/5 to-slate-900/10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
      
      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>SCM Thực Chiến</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">SCM </span>
              <span className="text-blue-400">Thực Chiến</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-xl">
              Kiến thức, template và công cụ giúp doanh nghiệp Việt Nam quản trị Supply Chain thực chiến — từ planning, procurement, inventory, warehouse đến logistics cost.
            </p>
            
            <p className="text-sm text-muted-foreground/80 mb-8 leading-relaxed max-w-xl">
              Dành cho nhà quản lý, trưởng kho vận, supply chain analyst, kế toán kho, mua hàng, kế hoạch và doanh nghiệp đang muốn chuẩn hóa dữ liệu, quy trình, báo cáo và công cụ vận hành.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link 
                to="/scm/checklist" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Tải checklist đánh giá Supply Chain miễn phí
              </Link>
              <Link 
                to="/scm/shop" 
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-white/10 flex items-center gap-2"
              >
                Xem sách & template
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right - Supply Chain Control Panel Mockup */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {/* Main Dashboard */}
            <div className="glass-card p-5 rounded-2xl col-span-2 border-blue-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-white">Supply Chain Control Panel</div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-400">Inventory Accuracy</span>
                  <span className="text-xl font-bold text-blue-400">98.2%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-400">Aging Stock (&gt;90 days)</span>
                  <span className="text-xl font-bold text-yellow-400">12%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-400">Storage Cost</span>
                  <span className="text-xl font-bold text-white">₫45M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-400">Transport Cost</span>
                  <span className="text-xl font-bold text-white">₫28M</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm text-gray-400">3PL SLA</span>
                  <span className="text-xl font-bold text-green-400">94.5%</span>
                </div>
              </div>
            </div>

            {/* Dashboard Icon */}
            <div className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center">
              <BarChart3 className="w-8 h-8 text-blue-400 mb-3" />
              <div className="text-lg font-semibold mb-1">Dashboard</div>
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-xs text-gray-500">Templates</div>
            </div>

            {/* Checklist Icon */}
            <div className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center">
              <ClipboardCheck className="w-8 h-8 text-cyan-400 mb-3" />
              <div className="text-lg font-semibold mb-1">Checklist</div>
              <div className="text-2xl font-bold text-white">50</div>
              <div className="text-xs text-gray-500">Điểm đánh giá</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}