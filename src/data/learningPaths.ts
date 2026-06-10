export interface LearningPath {
  slug: string
  title: string
  vietnameseTitle: string
  status: string
  description: string
  lessons: string[]
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
      "Supply Chain là gì?",
      "4 dòng chảy trong Supply Chain",
      "Supplier – Producer – Customer",
      "Vertical vs Horizontal Integration",
      "5 mức độ trưởng thành Supply Chain",
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
      "Demand Analysis là gì?",
      "SWOT trong Supply Chain",
      "Market Research cho Supply Chain",
      "Product Portfolio Assessment",
      "Trend, Seasonality, Cycle, Random Variation",
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
      "Demand Management không chỉ là Forecast",
      "4 thành phần Demand Management",
      "Demand Plan nên gồm gì?",
      "Communicating Demand",
      "Demand Manager role",
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
      "Forecast luôn sai — vậy dùng để làm gì?",
      "Forecast nên dựa trên demand, không chỉ order",
      "Moving Average",
      "Weighted Moving Average",
      "Exponential Smoothing",
      "Forecast Error",
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
      "S&OP là gì?",
      "Demand Review",
      "Supply Review",
      "Finance Review",
      "Executive S&OP",
      "One-number plan",
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
      "Operations Planning & Control là gì?",
      "Master Planning",
      "Master Scheduling",
      "MRP",
      "DRP",
      "Capacity Planning",
    ],
    relatedTags: ["Planning", "MRP", "Capacity"],
    relatedProducts: ["sop-calendar-meeting-pack"],
    relatedTools: ["warehouse-capacity-calculator"],
  },
]
