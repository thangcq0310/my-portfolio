import { Link } from "react-router-dom";
import { Download, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-600/10 via-cyan-600/10 to-slate-600/20 border border-blue-500/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bắt đầu bằng việc kiểm tra hệ thống Supply Chain hiện tại
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Tải checklist 50 điểm tự đánh giá năng lực Supply Chain hoặc liên hệ để được tư vấn.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/scm/checklist" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Tải checklist miễn phí
            </Link>
            <Link 
              to="/scm/services" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/10 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}