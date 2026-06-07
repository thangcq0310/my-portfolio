import { Hero, Problem, Solution, Features } from "@/components/scm";
import { Link } from "react-router-dom";

export function SCMPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Features />

      <div className="py-12 px-6 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8 text-gradient">
            Khám phá các phần của SCM Thực Chiến
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/scm/blog" className="group">
              <div className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 mb-4">
                  <span className="text-2xl" aria-hidden="true">📝</span>
                </div>
                <h3 className="font-semibold mb-2">Bài viết chuyên môn</h3>
                <p className="text-muted-foreground text-sm">
                  Đọc các bài viết thực chiến về tồn kho, logistics, và chuỗi cung ứng
                </p>
              </div>
            </Link>

            <Link to="/scm/ebook" className="group">
              <div className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 mb-4">
                  <span className="text-2xl" aria-hidden="true">📚</span>
                </div>
                <h3 className="font-semibold mb-2">eBook miễn phí</h3>
                <p className="text-muted-foreground text-sm">
                  Tải ngay "30 Công Cụ Quản Trị Supply Chain Thực Chiến"
                </p>
              </div>
            </Link>

            <Link to="/scm/templates" className="group">
              <div className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 mb-4">
                  <span className="text-2xl" aria-hidden="true">📊</span>
                </div>
                <h3 className="font-semibold mb-2">Template Excel</h3>
                <p className="text-muted-foreground text-sm">
                  Quản lý tồn kho, KPI kho vận, SLA 3PL
                </p>
              </div>
            </Link>

            <Link to="/scm/services" className="group">
              <div className="glass-card p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center h-12 mb-4">
                  <span className="text-2xl" aria-hidden="true">⚙️</span>
                </div>
                <h3 className="font-semibold mb-2">Dịch vụ tư vấn</h3>
                <p className="text-muted-foreground text-sm">
                  Rà soát file tồn kho, dashboard logistics, tư vấn quy trình
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto text-center text-gray-500">
          <p>© 2026 SCM Thực Chiến. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}