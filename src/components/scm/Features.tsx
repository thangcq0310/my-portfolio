const Features = () => {
  const features = [
    {
      title: 'eBooks Supply Chain',
      description: 'Hướng dẫn thực chiến về quản lý tồn kho, 3PL, KPIs',
    },
    {
      title: 'Excel Templates',
      description: 'Mã sẵn sàng dùng: checklist tồn kho, báo cáo hàng hóa, phân tích ABC',
    },
    {
      title: 'Tư vấn Consulting',
      description: 'Phân tích hiện trạng, cải thiện quy trình, đào tạo nhân sự',
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Những gì bạn sẽ nhận được
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:border-pink-500/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 glass-badge flex items-center justify-center mr-3">
                  <div className="text-gradient">+</div>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;