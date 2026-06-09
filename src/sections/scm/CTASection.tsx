import { Link } from "react-router-dom";
import { Download, MessageCircle, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-2xl bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 border border-pink-500/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sẵn sàng chuẩn hóa SCM?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Hãy bắt đầu bằng việc tải checklist miễn phí để kiểm tra file tồn kho của bạn 
              hoặc liên hệ để được tư vấn.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/scm#free-tools" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Tải checklist miễn phí
            </Link>
            <Link 
              to="#contact" 
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all border border-white/10 flex items-center gap-2"
              onClick={(e) => {
                // Scroll to form if exists
                const form = document.getElementById('contact-form');
                if (form) {
                  e.preventDefault();
                  form.scrollIntoView({ behavior: 'smooth' });
                }
              }}
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