import React from "react";
import { Link } from "react-router-dom";

const SCMEbook: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gradient">
            eBook: 30 Công Cụ Quản Trị Supply Chain Thực Chiến
          </h1>
          <p className="text-xl text-muted-foreground">
            Cẩm nang gối đầu giường cho những người làm nghề Supply Chain tại Việt Nam.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="glass-card aspect-[3/4] flex items-center justify-center p-8 border-2 border-pink-500/20">
             <div className="text-center">
                <span className="text-8xl mb-4 block">📚</span>
                <h2 className="text-2xl font-bold text-gradient-pink">30 Công Cụ</h2>
                <p className="text-muted-foreground">Supply Chain Thực Chiến</p>
             </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Bạn sẽ nhận được gì?</h2>
            <ul className="space-y-4">
              {[
                "30 công cụ quản trị từ Planning, Inventory đến Warehouse.",
                "Hướng dẫn áp dụng thực tế tại doanh nghiệp Việt Nam.",
                "Các template mẫu đi kèm để dùng ngay.",
                "Kinh nghiệm thực chiến từ chuyên gia trong ngành.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-pink-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-4">
              <button className="w-full py-4 glass-btn text-lg font-bold rounded-xl">
                Tải ngay bản PDF (Miễn phí)
              </button>
              <p className="text-center text-sm text-muted-foreground italic">
                * Ưu đãi dành riêng cho 100 người đăng ký đầu tiên.
              </p>
            </div>
          </div>
        </div>

        <section className="glass-card p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Mục lục tóm tắt</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-pink-400 mb-3">Phần 1: Planning & Sourcing</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Công cụ dự báo nhu cầu (Forecasting)</li>
                <li>• Quản lý nhà cung cấp (Supplier Management)</li>
                <li>• Tối ưu hóa chi phí mua hàng</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-purple-400 mb-3">Phần 2: Inventory & Warehouse</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Phân tích ABC/XYZ</li>
                <li>• Quản lý Safety Stock & Reorder Point</li>
                <li>• SOP vận hành kho 5S</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="text-center pb-12">
          <Link to="/scm" className="text-pink-400 hover:underline">
            ← Quay lại SCM Hub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SCMEbook;