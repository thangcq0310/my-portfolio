import { Link, useLocation } from "react-router-dom";
import { Package, BookOpen, Wrench, Briefcase, ClipboardCheck, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/articles", label: "Bài viết", icon: BookOpen },
  { to: "/books", label: "Sách & Template", icon: BookOpen },
  { to: "/tools", label: "Công cụ", icon: Wrench },
  { to: "/services", label: "Dịch vụ", icon: Briefcase },
  { to: "/checklist", label: "Checklist", icon: ClipboardCheck },
  { to: "/about", label: "Về SCHub", icon: Package },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-3">
            <Package className="w-8 h-8 text-teal-700" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 leading-tight">SCHub.vn</span>
              <span className="text-xs text-slate-500 -mt-1">Supply Chain Knowledge</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname.startsWith(link.to.split('/')[1] || (link.to === '/about' && location.pathname === '/about'))
                    ? "text-sky-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            to="/checklist"
            className="hidden md:inline-flex px-4 py-2 bg-sky-700 text-white text-sm font-medium rounded-lg hover:bg-sky-800 transition-colors"
          >
            Tải checklist 50 điểm
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  location.pathname.startsWith(link.to)
                    ? "text-sky-700"
                    : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/checklist"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-sky-700"
            >
              Tải checklist 50 điểm
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}