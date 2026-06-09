import { Link } from "react-router-dom";
import { FileText, Download, BookOpen, FileSpreadsheet, Users, Mail, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "Nội dung",
    links: [
      { label: "Bài viết", href: "/scm/blog", icon: FileText },
      { label: "Công cụ miễn phí", href: "/scm/checklist", icon: Download },
      { label: "Sách & Template", href: "/scm/shop", icon: BookOpen },
    ]
  },
  {
    title: "Dịch vụ",
    links: [
      { label: "Dịch vụ", href: "/scm/services", icon: FileSpreadsheet },
      { label: "Liên hệ", href: "/scm/services", icon: Users },
    ]
  }
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "chuong@scmthucchien.vn", href: "mailto:chuong@scmthucchien.vn" },
  { icon: MessageCircle, label: "Zalo", value: "Liên hệ Zalo", href: "https://zalo.me/0123456789" },
];

export function SCMFooter() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/scm" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">
                <span className="text-white">SCM </span>
                <span className="text-blue-400">Thực Chiến</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Kiến thức, template và công cụ Supply Chain cho doanh nghiệp Việt Nam. Từ planning đến logistics.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-400 transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-4 text-white">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <link.icon className="w-3 h-3" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SCM Thực Chiến. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="#" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
              Chính sách
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-blue-400 transition-colors">
              Điều khoản
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}