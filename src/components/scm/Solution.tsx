const Solution = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
          Giải pháp thực chiến
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg max-w-3xl mx-auto">
          SCM Thực Chiến cung cấp các công cụ và kiến thức thực tiễn để giải quyết các vấn đề supply chain cụ thể cho doanh nghiệp Việt Nam.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 glass-badge flex items-center justify-center">
                <svg className="w-5 h-5 text-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Công cụ thực tế</h3>
                <p className="text-muted-foreground">Checklist, mẫu bảng tính, quy trình SOP đã được kiểm chứng trong thực tế</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 glass-badge flex items-center justify-center">
                <svg className="w-5 h-5 text-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 2a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Kiến thức chuyên sâu</h3>
                <p className="text-muted-foreground">eBooks, hướng dẫn chi tiết về quản lý tồn kho, warehouse optimization, 3PL management</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-10 h-10 glass-badge flex items-center justify-center">
                <svg className="w-5 h-5 text-gradient" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Tư vấn 1-1</h3>
                <p className="text-muted-foreground">Phân tích hiện trạng,提出改善計劃, begleiten bei der Umsetzung</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-[320px] h-[240px] glass-card flex items-center justify-center">
              <div className="w-16 h-16 text-gradient flex items-center justify-center">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h10a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2v-9a2 2 0 012-2zm0 0v9m0 0L9 3m6 12l3-3m-3 3V3m0 0l-3 3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;