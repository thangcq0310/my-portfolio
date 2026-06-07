const Problem = () => {
  const problems = [
    {
      title: 'Sai Số Tồn Kho',
      description: 'Hàng tồn không chính xác gây lỗi đơn hàng, khách hàng bỏ đi',
    },
    {
      title: 'Chi Phí Ẩn',
      description: 'Kho dư thừa, hết hạn, mất mát - tiền chảy máu không rõ lý do',
    },
    {
      title: 'Rủi Ro 3PL',
      description: 'Thuê ngoài kho vận mà không kiểm soát được chất lượng',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Bạn Đang Gặp Phải?
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Những vấn đề này đang làm chậm doanh nghiệp của bạn
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:border-pink-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <div className="w-10 h-10 glass-badge flex items-center justify-center">
                  <svg className="w-6 h-6 text-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;