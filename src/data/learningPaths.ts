export interface LearningLesson {
  title: string
  slug: string
  status: "Đang phát triển" | "Sắp ra mắt" | "Có bài"
  description: string
  articleSlug?: string
  productSlug?: string
  toolSlug?: string
}

export interface LearningPath {
  slug: string
  title: string
  vietnameseTitle: string
  status: string
  description: string
  lessons: LearningLesson[]
  relatedTags: string[]
  relatedProducts: string[]
  relatedTools: string[]
}

export const learningPaths: LearningPath[] = [
  {
    slug: "supply-chain-foundation",
    title: "Supply Chain Foundation",
    vietnameseTitle: "Nền tảng Supply Chain",
    status: "Đang phát triển",
    description: "Hiểu supply chain qua mô hình, entities, flows, integration và maturity.",
    lessons: [
      {
        title: "Supply Chain là gì?",
        slug: "supply-chain-la-gi",
        status: "Có bài",
        description: "Làm rõ supply chain là hệ thống phối hợp đầu-cuối chứ không chỉ là giao nhận hay lưu kho.",
        articleSlug: "supply-chain-la-gi-khac-logistics-nhu-the-nao",
        toolSlug: "supply-chain-maturity-assessment",
      },
      {
        title: "4 dòng chảy trong Supply Chain",
        slug: "4-dong-chay-trong-supply-chain",
        status: "Đang phát triển",
        description: "Phân biệt dòng vật chất, thông tin, tiền và quyết định để nhìn đúng vấn đề vận hành.",
      },
      {
        title: "Supplier – Producer – Customer",
        slug: "supplier-producer-customer",
        status: "Đang phát triển",
        description: "Xác định vai trò từng mắt xích và cách mỗi bên ảnh hưởng đến lead time, cost và service level.",
      },
      {
        title: "Vertical vs Horizontal Integration",
        slug: "vertical-vs-horizontal-integration",
        status: "Sắp ra mắt",
        description: "So sánh các hướng tích hợp chuỗi cung ứng để doanh nghiệp chọn mô hình phù hợp với năng lực hiện tại.",
      },
      {
        title: "5 mức độ trưởng thành Supply Chain",
        slug: "5-muc-do-truong-thanh-supply-chain",
        status: "Đang phát triển",
        description: "Dùng maturity model để xác định current state, khoảng cách năng lực và thứ tự ưu tiên cải thiện.",
        productSlug: "master-data-audit-checklist",
        toolSlug: "supply-chain-maturity-assessment",
      },
    ],
    relatedTags: ["SCM", "Governance", "Master Data"],
    relatedProducts: ["master-data-audit-checklist"],
    relatedTools: ["supply-chain-maturity-assessment"],
  },
  {
    slug: "demand-analysis",
    title: "Demand Analysis",
    vietnameseTitle: "Phân tích nhu cầu",
    status: "Đang phát triển",
    description: "Phân tích thị trường, SWOT, product assessment và demand patterns trước khi forecast.",
    lessons: [
      {
        title: "Demand Analysis là gì?",
        slug: "demand-analysis-la-gi",
        status: "Đang phát triển",
        description: "Xác định demand analysis là bước hiểu bản chất nhu cầu trước khi tính forecast hoặc lên purchase plan.",
      },
      {
        title: "SWOT trong Supply Chain",
        slug: "swot-trong-supply-chain",
        status: "Sắp ra mắt",
        description: "Dùng SWOT để nhìn cả áp lực thị trường và năng lực nội bộ trước khi ra quyết định tồn kho hoặc cung ứng.",
      },
      {
        title: "Market Research cho Supply Chain",
        slug: "market-research-cho-supply-chain",
        status: "Đang phát triển",
        description: "Biết cách đọc tín hiệu thị trường để tránh forecast chỉ dựa trên cảm giác hoặc đơn hàng gần nhất.",
        productSlug: "demand-plan-template",
      },
      {
        title: "Product Portfolio Assessment",
        slug: "product-portfolio-assessment",
        status: "Đang phát triển",
        description: "Ưu tiên danh mục sản phẩm theo vai trò doanh thu, biên lợi nhuận và độ khó phục vụ.",
      },
      {
        title: "Trend, Seasonality, Cycle, Random Variation",
        slug: "trend-seasonality-cycle-random-variation",
        status: "Có bài",
        description: "Phân biệt các dạng biến động nhu cầu để chọn cách đọc dữ liệu và phản ứng planning phù hợp.",
        articleSlug: "trend-seasonality-cycle-random-variation",
        toolSlug: "demand-pattern-analyzer",
      },
    ],
    relatedTags: ["Demand Planning", "Forecasting"],
    relatedProducts: ["demand-plan-template"],
    relatedTools: ["demand-pattern-analyzer"],
  },
  {
    slug: "demand-management",
    title: "Demand Management",
    vietnameseTitle: "Quản trị nhu cầu",
    status: "Đang phát triển",
    description: "Lập kế hoạch, truyền thông, tác động và ưu tiên nhu cầu để đồng bộ supply với demand.",
    lessons: [
      {
        title: "Demand Management không chỉ là Forecast",
        slug: "demand-management-khong-chi-la-forecast",
        status: "Có bài",
        description: "Nhìn demand management như cơ chế phối hợp giữa sales, planning và vận hành thay vì một file forecast đơn lẻ.",
        articleSlug: "demand-management-khong-phai-chi-la-forecast",
        productSlug: "demand-plan-template",
      },
      {
        title: "4 thành phần Demand Management",
        slug: "4-thanh-phan-demand-management",
        status: "Đang phát triển",
        description: "Tách rõ sensing, planning, communication và adjustment để tránh bỏ sót trách nhiệm giữa các nhóm.",
      },
      {
        title: "Demand Plan nên gồm gì?",
        slug: "demand-plan-nen-gom-gi",
        status: "Đang phát triển",
        description: "Xây demand plan có lịch sử, giả định, điều chỉnh thương mại và consensus thay vì chỉ có một con số.",
        productSlug: "demand-plan-template",
      },
      {
        title: "Communicating Demand",
        slug: "communicating-demand",
        status: "Sắp ra mắt",
        description: "Thiết kế cách truyền thông nhu cầu để sales, supply và finance cùng hiểu một bức tranh.",
      },
      {
        title: "Demand Manager role",
        slug: "demand-manager-role",
        status: "Sắp ra mắt",
        description: "Làm rõ vai trò điều phối demand manager trong tổ chức chưa có cấu trúc planning trưởng thành.",
        toolSlug: "sop-readiness-check",
      },
    ],
    relatedTags: ["Demand Planning", "S&OP"],
    relatedProducts: ["demand-plan-template"],
    relatedTools: ["sop-readiness-check"],
  },
  {
    slug: "forecasting",
    title: "Forecasting",
    vietnameseTitle: "Dự báo nhu cầu",
    status: "Đang phát triển",
    description: "Hiểu forecasting principles, moving average, exponential smoothing, seasonality và forecast error.",
    lessons: [
      {
        title: "Forecast luôn sai — vậy dùng để làm gì?",
        slug: "forecast-luon-sai-vay-dung-de-lam-gi",
        status: "Có bài",
        description: "Giải thích vai trò của forecast trong planning dù forecast không bao giờ đúng tuyệt đối.",
        articleSlug: "forecast-luon-sai-vay-tai-sao-van-phai-forecast",
        productSlug: "forecasting-starter-template",
        toolSlug: "forecast-error-calculator",
      },
      {
        title: "Forecast nên dựa trên demand, không chỉ order",
        slug: "forecast-nen-dua-tren-demand-khong-chi-order",
        status: "Sắp ra mắt",
        description: "Phân biệt nhu cầu thực tế với đơn hàng ghi nhận để tránh sai lệch kế hoạch.",
        productSlug: "demand-plan-template",
      },
      {
        title: "Moving Average",
        slug: "moving-average",
        status: "Đang phát triển",
        description: "Hiểu khi nào moving average đủ tốt và khi nào nó làm chậm phản ứng với biến động thị trường.",
        productSlug: "forecasting-starter-template",
      },
      {
        title: "Weighted Moving Average",
        slug: "weighted-moving-average",
        status: "Đang phát triển",
        description: "Áp trọng số cho dữ liệu gần hơn để forecast phản ánh tín hiệu mới mà không quá nhiễu.",
        productSlug: "forecasting-starter-template",
      },
      {
        title: "Exponential Smoothing",
        slug: "exponential-smoothing",
        status: "Đang phát triển",
        description: "Dùng hệ số làm mượt để cân bằng giữa ổn định dữ liệu và khả năng phản ứng với thay đổi.",
        productSlug: "forecasting-starter-template",
      },
      {
        title: "Forecast Error",
        slug: "forecast-error",
        status: "Đang phát triển",
        description: "Đọc MAD, MAPE, bias và tracking signal để biết forecast đang sai theo kiểu nào.",
        toolSlug: "forecast-error-calculator",
      },
    ],
    relatedTags: ["Forecasting", "Planning"],
    relatedProducts: ["forecasting-starter-template"],
    relatedTools: ["forecast-error-calculator"],
  },
  {
    slug: "sop",
    title: "S&OP",
    vietnameseTitle: "Sales & Operations Planning",
    status: "Đang phát triển",
    description: "Đồng bộ demand, supply và finance để tạo một kế hoạch thống nhất.",
    lessons: [
      {
        title: "S&OP là gì?",
        slug: "sop-la-gi",
        status: "Có bài",
        description: "Hiểu S&OP là cơ chế ra quyết định liên phòng ban, không phải chỉ là cuộc họp tổng hợp số liệu.",
        articleSlug: "sop-khong-phai-la-cuoc-hop-bao-cao",
        productSlug: "sop-calendar-meeting-pack",
      },
      {
        title: "Demand Review",
        slug: "demand-review",
        status: "Đang phát triển",
        description: "Thiết kế demand review để sales và planning cùng chốt giả định, rủi ro và thay đổi lớn.",
        toolSlug: "sop-readiness-check",
      },
      {
        title: "Supply Review",
        slug: "supply-review",
        status: "Đang phát triển",
        description: "Đưa constraint về capacity, nguyên vật liệu và logistics vào cùng một bàn thảo luận.",
      },
      {
        title: "Finance Review",
        slug: "finance-review",
        status: "Sắp ra mắt",
        description: "Liên kết volume plan với margin, cash flow và working capital để tránh kế hoạch một chiều.",
      },
      {
        title: "Executive S&OP",
        slug: "executive-sop",
        status: "Sắp ra mắt",
        description: "Xác định nơi ban điều hành phê duyệt trade-off và chốt one-number plan cho toàn doanh nghiệp.",
      },
      {
        title: "One-number plan",
        slug: "one-number-plan",
        status: "Đang phát triển",
        description: "Biến forecast, supply và tài chính thành một kế hoạch thống nhất để toàn tổ chức cùng bám theo.",
        productSlug: "sop-calendar-meeting-pack",
      },
    ],
    relatedTags: ["S&OP", "Governance"],
    relatedProducts: ["sop-calendar-meeting-pack"],
    relatedTools: ["sop-readiness-check"],
  },
  {
    slug: "operations-planning-control",
    title: "Operations Planning & Control",
    vietnameseTitle: "Hoạch định và kiểm soát vận hành",
    status: "Sắp ra mắt",
    description: "Liên kết forecast, master planning, MRP, DRP và capacity planning.",
    lessons: [
      {
        title: "Operations Planning & Control là gì?",
        slug: "operations-planning-control-la-gi",
        status: "Đang phát triển",
        description: "Tạo bức tranh tổng thể từ nhu cầu thị trường đến lệnh sản xuất, cung ứng và phân phối.",
      },
      {
        title: "Master Planning",
        slug: "master-planning",
        status: "Đang phát triển",
        description: "Hiểu master planning là lớp trung gian biến forecast thành định hướng vận hành có thể kiểm soát.",
      },
      {
        title: "Master Scheduling",
        slug: "master-scheduling",
        status: "Sắp ra mắt",
        description: "Làm rõ vai trò lịch sản xuất chính trong việc cân bằng sản lượng, tồn kho và service level.",
      },
      {
        title: "MRP",
        slug: "mrp",
        status: "Đang phát triển",
        description: "Hiểu MRP như công cụ chuyển kế hoạch thành nhu cầu vật tư theo thời gian và cấu trúc BOM.",
        articleSlug: "tu-forecast-den-mrp-luong-ke-hoach-san-xuat",
      },
      {
        title: "DRP",
        slug: "drp",
        status: "Sắp ra mắt",
        description: "Biết DRP hỗ trợ phân bổ tồn kho và bổ sung hàng giữa các điểm phân phối như thế nào.",
      },
      {
        title: "Capacity Planning",
        slug: "capacity-planning",
        status: "Có bài",
        description: "Nối forecast, MRP và năng lực thực thi để tránh kế hoạch đẹp trên giấy nhưng vỡ ở nhà máy hoặc kho.",
        articleSlug: "tu-forecast-den-mrp-luong-ke-hoach-san-xuat",
        toolSlug: "warehouse-capacity-calculator",
      },
    ],
    relatedTags: ["Planning", "MRP", "Capacity"],
    relatedProducts: ["sop-calendar-meeting-pack"],
    relatedTools: ["warehouse-capacity-calculator"],
  },
]
