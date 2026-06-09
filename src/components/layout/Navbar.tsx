import { Link, useLocation } from "react-router-dom";
import { Package, BookOpen, Wrench, Briefcase, ClipboardCheck } from "lucide-react";

const navLinks = [
  { to: "/articles", label: "Bài viết", icon: BookOpen },
  { to: "/books", label: "Sách & Template", icon: BookOpen },
  { to: "/tools", label: "Công cụ", icon: Wrench },
  { to: "/services", label: "Dịch vụ", icon: Briefcase },
  { to: "/checklist", label: "Checklist", icon: ClipboardCheck },
];

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Package className="w-8 h-8 text-sky-500" />
            <span className="text-xl font-bold text-slate-900">SCHub.vn</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname.startsWith(link.to)
                    ? "text-sky-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/checklist"
            className="px-4 py-2 bg-sky-500 text-white text-sm font-medium rounded-lg hover:bg-sky-600 transition-colors"
          >
            Tải checklist
          </Link>
        </div>
      </div>
    </nav>
  );
}