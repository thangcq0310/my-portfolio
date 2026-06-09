import { Package, Mail } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Về SCHub.vn</h1>
        
        <div className="bg-white rounded-xl border border-slate-200 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Package className="w-12 h-12 text-sky-500" />
            <div>
              <h2 className="text-xl font-bold text-slate-900">SCHub.vn</h2>
              <p className="text-slate-600">Nền tảng kiến thức Supply Chain cho người Việt</p>
            </div>
          </div>
          
          <p className="text-slate-600 mb-6">
            SCHub.vn được xây dựng nhằm giúp những người làm trong lĩnh vực logistics, warehouse và supply chain operations tại các doanh nghiệp sản xuất/xuất khẩu Việt Nam tiếp cận kiến thức, công cụ và kinh nghiệm thực chiến một cách dễ hiểu và áp dụng được.
          </p>
          
          <p className="text-slate-600">
            Chúng tôi cung cấp: bài viết chuyên sâu, sách & template thực hành, công cụ digital, và dịch vụ tư vấn chuyên nghiệp.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Liên hệ</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-sky-500" />
              <span>contact@schub.vn</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}