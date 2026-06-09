import { Link } from "react-router-dom";
import { Package, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Package className="w-6 h-6 text-sky-500" />
              <span className="text-lg font-bold text-white">SCHub.vn</span>
            </Link>
            <p className="text-sm">Nền tảng kiến thức Supply Chain cho người Việt</p>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Nội dung</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/articles" className="hover:text-white">Bài viết</Link></li>
              <li><Link to="/books" className="hover:text-white">Sách & Template</Link></li>
              <li><Link to="/tools" className="hover:text-white">Công cụ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Tư vấn SCM</Link></li>
              <li><Link to="/checklist" className="hover:text-white">Checklist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Liên hệ</h3>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4" />
              <span>contact@schub.vn</span>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          © 2024 SCHub.vn. All rights reserved.
        </div>
      </div>
    </footer>
  );
}