import { Link } from "react-router-dom";
import { FileText, Download, BookOpen, FileSpreadsheet, Users, Mail, Phone, MessageCircle } from "lucide-react";

const footerLinks = [
  {
    title: "Nội dung",
    links: [
      { label: "Bài viết", href: "#articles", icon: FileText },
      { label: "Công cụ miễn phí", href: "#free-tools", icon: Download },
      { label: "Sách & Template", href: "#products", icon: BookOpen },
    ]
  },
  {
    title: "Dịch vụ",
    links: [
      { label: "Rà soát file tồn kho", href: "#services", icon: FileSpreadsheet },
      { label: "Thiết kế dashboard", href: "#services", icon: FileSpreadsheet },
      { label: "Chuẩn hóa quy trình", href: "#services", icon: Users },
    ]
  }
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "chuong@scmthucchien.vn", href: "mailto:chuong@scmthucchien.vn" },
  { icon: Phone, label: "Zalo", value: "0123 456 789", href: "https://zalo.me/0123456789" },
  { icon: MessageCircle, label: "Facebook", value: "@SCMThucChien", href: "https://facebook.com/SCMThucChien" },
];

export function SCMFooter() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Contact Form Section */}
        <div id="contact-form" className="mb-12 pt-8 border-t border-white/10">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">
                Kết nối với SCM Thực Chiến
              </h3>
              <p className="text-muted-foreground text-sm">
                Để lại thông tin, chúng tôi sẽ liên hệ trong 24h.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Họ tên"
                  className="w-full glass-input px-4 py-3"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email hoặc Zalo"
                  className="w-full glass-input px-4 py-3"
                />
              </div>
              <div>
                <textarea
                  placeholder="Nhu cầu của bạn (VD: tải checklist, tư vấn dashboard...)"
                  rows={4}
                  className="w-full glass-input px-4 py-3 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Gửi thông tin
              </button>
            </form>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/scm" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">
                <span className="text-white">SCM </span>
                <span className="text-pink-400">Thực Chiến</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm">
              Kiến thức, template và công cụ giúp doanh nghiệp Việt Nam quản trị tồn kho, kho vận và chi phí logistics hiệu quả hơn.
            </p>
            
            {/* Contact info */}
            <div className="space-y-2">
              {contactInfo.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-pink-400 transition-colors"
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
                      className="text-sm text-muted-foreground hover:text-pink-400 transition-colors flex items-center gap-2"
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
            <Link to="#" className="text-sm text-muted-foreground hover:text-pink-400 transition-colors">
              Chính sách
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-pink-400 transition-colors">
              Điều khoản
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}