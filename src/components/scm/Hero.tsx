const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          SCM Thực Chiến
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Công cụ & Giải pháp Supply Chain thực chiến cho doanh nghiệp Việt
        </p>
        <button className="glass-btn px-8 py-4 text-lg">
          Tải Checklist Tồn Kho Miễn Phí
        </button>
      </div>
    </section>
  );
};

export default Hero;