// Seed data for when Firestore is empty
export const seedArticles = [
  {
    id: "1",
    title: "Vì sao doanh nghiệp vừa tồn kho cao vừa thiếu hàng?",
    slug: "vi-sao-ton-kho-cao-van-thieu-hang",
    excerpt: "Bài toán phổ biến trong doanh nghiệp Việt Nam: sales cần hàng, kho báo tồn cao, nhưng sản xuất và mua hàng vẫn bị động. Nguyên nhân thường nằm ở forecast, master data và chính sách tồn kho.",
    body: `# Vì sao doanh nghiệp vừa tồn kho cao vừa thiếu hàng?

## Hiện tượng
Sales cần giao hàng cho khách, hệ thống ghi nhận tồn kho cao, nhưng lượng hàng khả dụng để xuất bán lại không đáp ứng nhu cầu thực tế. Hoặc hàng tồn ở kho khác, hàng đang chờ check-in, hàng bị hold...

## Nguyên nhân gốc

### 1. Forecast không chính xác
Không có quy trình demand forecasting rõ ràng. Sales đoán bằng cảm tính, không có số liệu lịch sử phân tích.

### 2. Master data không chuẩn
- Sai UoM (đơn vị tính)
- Sai quy cách đóng gói
- Không có cross-reference giữa các kho

### 3. Chính sách tồn kho không rõ
Không có định mức tồn kho an toàn, không có điểm đặt hàng lại (reorder point).

## Giải pháp

### Bước 1: Rà soát master data
Kiểm tra và chuẩn hóa UoM, quy cách, weight, dimension cho tất cả SKU.

### Bước 2: Thiết lập safety stock
Áp dụng công thức:
\`\`\`
SS = (Max daily usage × Max lead time) - (Avg daily usage × Avg lead time)
\`\`\`

### Bước 3: Thiết lập reorder point
\`\`\`
ROP = (Avg daily usage × Lead time) + Safety Stock
\`\`\`

## Kết luận
Bài toán tồn kho cao nhưng thiếu hàng thường không phải do thiếu hàng trong kho mà do không biết hàng ở đâu, hàng đó có dùng được không.`,
    type: "article" as const,
    tags: ["Inventory", "Planning", "Master Data"],
    authorName: "SCHub.vn",
    readTimeMinutes: 8,
    featured: true,
    publishedAt: { seconds: 1704067200, nanoseconds: 0 },
  },
  {
    id: "2",
    title: "ABC/XYZ Analysis: cách phân loại SKU để ưu tiên quản trị tồn kho",
    slug: "abc-xyz-analysis-phan-loai-sku",
    excerpt: "Không phải SKU nào cũng cần quản trị như nhau. ABC/XYZ giúp doanh nghiệp xác định SKU quan trọng, SKU biến động cao và nhóm hàng cần kiểm soát chặt.",
    body: `# ABC/XYZ Analysis: Phân loại SKU để ưu tiên

## Tại sao cần ABC/XYZ?

Không phải SKU nào cũng quan trọng như nhau. 20% SKU có thể chiếm 80% giá trị tồn kho. Việc quản trị tất cả SKU như nhau là lãng phí nguồn lực.

## Phân loại ABC

Dựa trên giá trị tiêu thụ hàng năm:

| Loại | % SKU | % Giá trị | Đặc điểm |
|------|-------|-----------|----------|
| A | 20% | 80% | Quan trọng nhất, cần quản lý chặt |
| B | 30% | 15% | Trung gian |
| C | 50% | 5% | ít quan trọng |

### Cách tính:
1. Tính giá trị tiêu thụ annual = Usage × Unit Cost
2. Sắp xếp giảm dần
3. Tính % tích lũy
4. Phân loại theo ngưỡng

## Phân loại XYZ

Dựa trên biến động tiêu thụ:

| Loại | Biến động | Đặc điểm |
|------|-----------|----------|
| X | Thấp (<15%) | Ổn định, dễ dự báo |
| Y | Trung bình (15-30%) | Biến động vừa |
| Z | Cao (>30%) | Khó dự báo |

## Kết hợp ABC + XYZ

| | X | Y | Z |
|---|---|---|---|
| A | AX: Ổn định, quan trọng | AY: Cần theo dõi | AZ: Cần chú ý đặc biệt |
| B | BX: Kiểm soát thường xuyên | BY: Theo dõi định kỳ | BZ: Cân nhắc inventory kỹ |
| C | CX: Kiểm soát cơ bản | CY: Đơn giản hóa | CZ: Không cần đầu tư nhiều |

## Template
Sử dụng template ABC/XYZ để phân loại nhanh.`,
    type: "article" as const,
    tags: ["Inventory", "ABC/XYZ", "KPI"],
    authorName: "SCHub.vn",
    readTimeMinutes: 10,
    featured: true,
    publishedAt: { seconds: 1703980800, nanoseconds: 0 },
  },
  {
    id: "3",
    title: "S&OP cho doanh nghiệp Việt Nam: bắt đầu từ đâu?",
    slug: "sop-cho-doanh-nghiep-viet-nam",
    excerpt: "S&OP không nhất thiết phải phức tạp. Doanh nghiệp có thể bắt đầu bằng một lịch họp cố định, bộ số liệu thống nhất và nguyên tắc ra quyết định rõ ràng.",
    body: `# S&OP cho doanh nghiệp Việt Nam

## Định nghĩa
Sales & Operations Planning (S&OP) là quy trình giúp cân bằng cung - cầu, liên kết bộ phận sales, planning, procurement, production.

## Bắt đầu từ đâu?

### 1. Xác định tần suất
- Hàng tháng là phổ biến nhất
- Tuần nếu biến động cao

### 2. Chuẩn bị data
Trước họp, cần có:
- Forecast từ Sales
- Supply plan từ Planning/Production
- Inventory status từ Warehouse
- Supplier lead time từ Procurement

### 3. Cuộc họp
Nên có 4 cuộc họp:

| Cuộc họp | Ai tham gia | Nội dung |
|---------|------------|----------|
| 1. Data preparation | SCM lead | Tổng hợp số liệu |
| 2. Pre-S&OP | SCM team | Review chi tiết |
| 3. S&OP chính | Sales + SCM + Finance | Quyết định |
| 4. Post-S&OP | SCM lead | Theo dõi |

### 4. Output
- Demand forecast đã cân bằng
- Supply plan khả thi
- Action items rõ ràng

## Lưu ý
Không cần phần mềm đắt tiền. Bắt đầu bằng Excel, sau đó nâng cấp nếu cần.`,
    type: "article" as const,
    tags: ["S&OP", "Demand Planning", "Governance"],
    authorName: "SCHub.vn",
    readTimeMinutes: 12,
    featured: true,
    publishedAt: { seconds: 1703894400, nanoseconds: 0 },
  },
  {
    id: "4",
    title: "Checklist đánh giá 3PL: đừng chỉ nhìn giá thuê kho",
    slug: "checklist-danh-gia-3pl",
    excerpt: "Giá thuê kho chỉ là một phần. Khi chọn 3PL, doanh nghiệp cần đánh giá SLA, tồn kho, khả năng xử lý sự cố, báo cáo và trách nhiệm khi phát sinh lỗi.",
    body: `# Checklist đánh giá 3PL

## Đừng chỉ nhìn giá

Nhiều doanh nghiệp chọn 3PL chỉ vì giá rẻ. Nhưng chi phí ẩn có thể cao hơn nhiều.

## Tiêu chí đánh giá 3PL

### 1. Vận hành (40%)
- Hệ thống WMS
- Quy trình nhập xuất
- FEFO/FIFO compliance
- Accuracy rate (>=98%)
- On-time delivery (>=95%)

### 2. Báo cáo (20%)
- Daily inventory report
- Monthly summary
- Exception alert

### 3. Phí ẩn (15%)
- Phí Handling
- Phí Storage
- Phí Outbound
- Phí COD

### 4. SLA & Liability (15%)
- Xử lý discrepancy
- Bồi thường khi mất hàng
- Response time khi có issue

### 5. Khả năng mở rộng (10%)
- Peak season handling
- Multi-location
- Value-added services

## Template checklist
Sử dụng file đính kèm để đánh giá 3PL.`,
    type: "article" as const,
    tags: ["3PL", "Warehouse", "Logistics Cost"],
    authorName: "SCHub.vn",
    readTimeMinutes: 8,
    featured: true,
    publishedAt: { seconds: 1703808000, nanoseconds: 0 },
  },
  {
    id: "5",
    title: "Master Data trong SAP/WMS: lỗi nhỏ, hậu quả lớn",
    slug: "master-data-sap-wms-loi-nho-hau-qua-lon",
    excerpt: "Sai UoM, gross weight, batch rule hoặc shelf-life có thể làm sai tồn kho, sai kế hoạch, sai chi phí logistics và gây lỗi vận hành hàng ngày.",
    body: `# Master Data: Lỗi nhỏ, hậu quả lớn

## Tại sao Master Data quan trọng?

Master data sai = Tất cả báo cáo sai.

## Các lỗi phổ biến

### 1. UoM (Đơn vị tính)
- Mua = GB (gallon)
- Stock = L (liter)
- Không quy đổi -> Sai tồn kho

### 2. Weight & Volume
- Gross weight sai -> Tính sai cước vận chuyển
- Volume sai -> Sắp xếp container sai

### 3. Shelf-life
- Không nhập -> Hàng hết hạn mới biết
- Nhập sai -> Bị reject khi xuất

### 4. Batch rules
- Không có -> Không tracking được hàng cũ

## Cách phòng ngừa

### Validation checklist
- [ ] Cross-check giữa Purchase và Inventory UoM
- [ ] Verify weight với supplier
- [ ] Set shelf-life cho mọi SKU
- [ ] Review master data hàng quý

### Quy trình
1. Supplier gửi spec
2. SCM verify
3. Import vào system
4. Spot-check random

## Hậu quả nếu không làm
- Inventory không khớp
- Chi phí logistics sai
- Kế hoạch sản xuất sai
- Compliance issues`,
    type: "article" as const,
    tags: ["Master Data", "ERP/WMS", "Digital SCM"],
    authorName: "SCHub.vn",
    readTimeMinutes: 7,
    featured: false,
    publishedAt: { seconds: 1703721600, nanoseconds: 0 },
  },
  {
    id: "6",
    title: "KPI Supply Chain: nên đo gì để không báo cáo cho có?",
    slug: "kpi-supply-chain-nen-do-gi",
    excerpt: "Một bộ KPI tốt phải giúp ra quyết định, không chỉ làm đẹp báo cáo. Cần liên kết KPI từ planning, procurement, inventory, warehouse đến logistics cost.",
    body: `# KPI Supply Chain: Đo gì?

## Nguyên tắc

KPI tốt phải:
1. Có action khi deviate
2. Ai chịu trách nhiệm rõ
3. Có target cụ thể

## KPI theo chức năng

### Planning
- Forecast accuracy (>=85%)
- Plan vs Actual

### Procurement
- On-time delivery (>=95%)
- Supplier defect rate (<2%)

### Inventory
- Inventory accuracy (>=98%)
- Days of inventory (30-60 days)
- Dead stock ratio (<5%)

### Warehouse
- Order accuracy (>=99%)
- Cycle time (<24h)
- Space utilization (>=70%)

### Logistics
- On-time delivery (>=95%)
- Lead time
- Transportation cost (% sales)

## Dashboard mẫu

| KPI | Target | Current | Status |
|-----|-------|---------|--------|
| Forecast acc | 85% | 78% | Warning |
| Inventory acc | 98% | 96.5% | OK |
| OTD | 95% | 97% | Good |

## Lưu ý
Không cần quá nhiều KPI. 10-15 KPI là đủ.`,
    type: "article" as const,
    tags: ["KPI", "Dashboard", "Governance"],
    authorName: "SCHub.vn",
    readTimeMinutes: 6,
    featured: false,
    publishedAt: { seconds: 1703635200, nanoseconds: 0 },
  },
]

export const seedBooks = [
  {
    id: "1",
    title: "ABC/XYZ Inventory Analysis Template",
    slug: "abc-xyz-inventory-analysis-template",
    category: "Template Excel",
    status: "Đang phát triển",
    description:
      "Template giúp phân loại SKU theo giá trị và độ biến động nhu cầu, từ đó xác định nhóm hàng cần kiểm soát tồn kho chặt hơn.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1704067200, nanoseconds: 0 },
  },
  {
    id: "2",
    title: "3PL SLA & Cost Evaluation Pack",
    slug: "3pl-sla-cost-evaluation-pack",
    category: "SOP Pack",
    status: "Đang phát triển",
    description:
      "Bộ biểu mẫu giúp đánh giá nhà cung cấp kho thuê/3PL theo SLA, chi phí, độ chính xác tồn kho, xử lý sự cố và năng lực báo cáo.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703980800, nanoseconds: 0 },
  },
  {
    id: "3",
    title: "Supply Chain KPI Dashboard Starter Pack",
    slug: "supply-chain-kpi-dashboard-starter-pack",
    category: "Dashboard Pack",
    status: "Đang phát triển",
    description:
      "Bộ khung KPI và dashboard starter cho Planning, Procurement, Inventory, Warehouse và Logistics Cost.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703894400, nanoseconds: 0 },
  },
  {
    id: "4",
    title: "Master Data Audit Checklist",
    slug: "master-data-audit-checklist",
    category: "Checklist Pack",
    status: "Sắp ra mắt",
    description:
      "Checklist rà soát master data trước khi triển khai SAP/WMS, tập trung vào UoM, gross weight, batch rule, shelf-life và location master.",
    price: "Miễn phí",
    ctaLabel: "Nhận checklist",
    featured: false,
    addedAt: { seconds: 1703808000, nanoseconds: 0 },
  },
  {
    id: "5",
    title: "S&OP Calendar & Meeting Pack",
    slug: "sop-calendar-meeting-pack",
    category: "Playbook / eBook",
    status: "Sắp ra mắt",
    description:
      "Bộ khung lịch họp, agenda và nguyên tắc ra quyết định giúp doanh nghiệp bắt đầu S&OP một cách đơn giản.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703721600, nanoseconds: 0 },
  },
  {
    id: "6",
    title: "30 Công Cụ Quản Trị Supply Chain Thực Chiến",
    slug: "30-cong-cu-quan-tri-supply-chain-thuc-chien",
    category: "Playbook / eBook",
    status: "Đang phát triển",
    description:
      "Mini eBook hệ thống hóa 30 công cụ thực chiến cho Planning, Inventory, Warehouse, Logistics Cost và KPI, giúp đội ngũ Supply Chain áp dụng nhanh vào vận hành doanh nghiệp Việt Nam.",
    price: "199.000 – 399.000 VND",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703635200, nanoseconds: 0 },
  },
  {
    id: "7",
    title: "Forecasting Starter Template",
    slug: "forecasting-starter-template",
    category: "Template Excel",
    status: "Đang phát triển",
    description:
      "Template starter cho moving average, weighted moving average, exponential smoothing và forecast error.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703548800, nanoseconds: 0 },
  },
  {
    id: "8",
    title: "Demand Plan Template",
    slug: "demand-plan-template",
    category: "Template Excel",
    status: "Đang phát triển",
    description:
      "Template giúp ghi nhận demand history, forecast, commercial adjustment, assumption log và consensus demand plan.",
    price: "Sắp công bố",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703462400, nanoseconds: 0 },
  },
]

export const seedTools = [
  {
    id: "1",
    name: "ABC/XYZ Calculator",
    slug: "abc-xyz-calculator",
    category: "Inventory",
    status: "Đang phát triển",
    description: "Khung tính nhanh giúp phân loại SKU theo giá trị và biến động nhu cầu để ưu tiên kiểm soát tồn kho.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1704067200, nanoseconds: 0 },
  },
  {
    id: "2",
    name: "Safety Stock Calculator",
    slug: "safety-stock-calculator",
    category: "Planning",
    status: "Sắp ra mắt",
    description: "Công cụ starter để ước lượng safety stock theo lead time, độ biến động nhu cầu và service level mục tiêu.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703980800, nanoseconds: 0 },
  },
  {
    id: "3",
    name: "3PL Cost Estimator",
    slug: "3pl-cost-estimator",
    category: "3PL",
    status: "Đang phát triển",
    description: "Bộ khung so sánh chi phí 3PL theo handling, storage, outbound, SLA và các chi phí ẩn thường bị bỏ sót.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: true,
    addedAt: { seconds: 1703894400, nanoseconds: 0 },
  },
  {
    id: "4",
    name: "Logistics Cost per Ton Calculator",
    slug: "logistics-cost-per-ton-calculator",
    category: "Logistics Cost",
    status: "Sắp ra mắt",
    description: "Starter calculator giúp chuẩn hóa cách nhìn chi phí logistics trên mỗi tấn, mỗi chuyến và mỗi SKU chính.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703808000, nanoseconds: 0 },
  },
  {
    id: "5",
    name: "Warehouse Capacity Calculator",
    slug: "warehouse-capacity-calculator",
    category: "Warehouse",
    status: "Đang phát triển",
    description: "Khung tính dung lượng kho theo pallet position, zone usage, slotting logic và tốc độ quay vòng tồn kho.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703721600, nanoseconds: 0 },
  },
  {
    id: "6",
    name: "Pallet / Container Calculator",
    slug: "pallet-container-calculator",
    category: "Warehouse",
    status: "Sắp ra mắt",
    description: "Công cụ hỗ trợ ước lượng số pallet, container fill rate và phương án xếp hàng phù hợp với quy cách sản phẩm.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703635200, nanoseconds: 0 },
  },
  {
    id: "7",
    name: "Forecast Error Calculator",
    slug: "forecast-error-calculator",
    category: "Forecasting",
    status: "Đang phát triển",
    description: "Công cụ skeleton để tính MAD, MAPE, tracking signal và forecast bias.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703548800, nanoseconds: 0 },
  },
  {
    id: "8",
    name: "Demand Pattern Analyzer",
    slug: "demand-pattern-analyzer",
    category: "Demand Planning",
    status: "Đang phát triển",
    description: "Công cụ skeleton giúp phân biệt trend, seasonality, cycle và random variation.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703462400, nanoseconds: 0 },
  },
  {
    id: "9",
    name: "S&OP Readiness Check",
    slug: "sop-readiness-check",
    category: "S&OP",
    status: "Sắp ra mắt",
    description: "Checklist nhanh để đánh giá mức độ sẵn sàng triển khai S&OP.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703376000, nanoseconds: 0 },
  },
  {
    id: "10",
    name: "Supply Chain Maturity Assessment",
    slug: "supply-chain-maturity-assessment",
    category: "Governance",
    status: "Sắp ra mắt",
    description: "Assessment skeleton dựa trên các cấp độ trưởng thành Supply Chain, dùng để xác định current state và gap.",
    ctaLabel: "Nhận thông báo khi ra mắt",
    featured: false,
    addedAt: { seconds: 1703289600, nanoseconds: 0 },
  },
]

export const checklist50 = [
  { id: 1, category: "Planning", question: "Doanh nghiệp có kế hoạch chiến lược SCM dài hạn (3-5 năm) không?", weight: 2 },
  { id: 2, category: "Planning", question: "Có quy trình lập kế hoạch năm/tháng/tuần không?", weight: 2 },
  { id: 3, category: "Planning", question: "Có dự báo cầu (demand forecasting) không?", weight: 3 },
  { id: 4, category: "Planning", question: "Có quy trình S&OP (Sales & Operations Planning) không?", weight: 2 },
  { id: 5, category: "Planning", question: "Có hệ thống MRP (Material Requirements Planning) không?", weight: 2 },
  { id: 6, category: "Planning", question: "Có quản lý capacity planning không?", weight: 2 },
  { id: 7, category: "Planning", question: "Có benchmark với đối thủ cạnh tranh không?", weight: 1 },
  { id: 8, category: "Planning", question: "Có KPI cho bộ phận Planning không?", weight: 2 },
  { id: 9, category: "Procurement", question: "Có danh sách nhà cung cấp (supplier list) không?", weight: 2 },
  { id: 10, category: "Procurement", question: "Có quy trình đánh giá nhà cung cấp (supplier evaluation) không?", weight: 2 },
  { id: 11, category: "Procurement", question: "Có supplier scorecard không?", weight: 2 },
  { id: 12, category: "Procurement", question: "Có theo dõi lead time của các NCC chính không?", weight: 2 },
  { id: 13, category: "Procurement", question: "Có quản lý rủi ro nhà cung cấp (supplier risk) không?", weight: 3 },
  { id: 14, category: "Procurement", question: "Có chính sách mua hàng (procurement policy) không?", weight: 2 },
  { id: 15, category: "Procurement", question: "Có quản lý hợp đồng (contract management) không?", weight: 2 },
  { id: 16, category: "Procurement", question: "Có đa dạng hóa NCC (supplier diversification) không?", weight: 1 },
  { id: 17, category: "Inventory", question: "Có hệ thống theo dõi tồn kho (inventory tracking) không?", weight: 3 },
  { id: 18, category: "Inventory", question: "Có định mức tồn kho (stock norm) không?", weight: 2 },
  { id: 19, category: "Inventory", question: "Có quy trình kiểm kê định kỳ (physical inventory) không?", weight: 2 },
  { id: 20, category: "Inventory", question: "Có áp dụng FIFO/FEFO không?", weight: 2 },
  { id: 21, category: "Inventory", question: "Có quản lý hàng tồn đọng (slow moving) không?", weight: 2 },
  { id: 22, category: "Inventory", question: "Có chính sách đặt hàng (reorder policy) không?", weight: 2 },
  { id: 23, category: "Inventory", question: "Có phân tích ABC/XYZ cho hàng tồn kho không?", weight: 2 },
  { id: 24, category: "Inventory", question: "Có tối ưu batch size/MOQ không?", weight: 2 },
  { id: 25, category: "Warehouse & Logistics", question: "Có hệ thống WMS không?", weight: 3 },
  { id: 26, category: "Warehouse & Logistics", question: "Có quy trình nhập xuất kho (SOP) không?", weight: 2 },
  { id: 27, category: "Warehouse & Logistics", question: "Có sắp xếp kho theo vùng (zone) không?", weight: 2 },
  { id: 28, category: "Warehouse & Logistics", question: "Có quản lý vị trí kho (slotting) không?", weight: 2 },
  { id: 29, category: "Warehouse & Logistics", question: "Có theo dõi Pick/Pack/Ship không?", weight: 2 },
  { id: 30, category: "Warehouse & Logistics", question: "Có đóng gói chuẩn (standard packaging) không?", weight: 1 },
  { id: 31, category: "Warehouse & Logistics", question: "Có quản lý return/hàng lỗi không?", weight: 2 },
  { id: 32, category: "Warehouse & Logistics", question: "Có đối tác 3PL không?", weight: 2 },
  { id: 33, category: "Warehouse & Logistics", question: "Có theo dõi on-time delivery không?", weight: 2 },
  { id: 34, category: "Warehouse & Logistics", question: "Có tối ưu lộ trình giao hàng không?", weight: 2 },
  { id: 35, category: "Data, KPI & Digital", question: "Có dashboard SCM không?", weight: 3 },
  { id: 36, category: "Data, KPI & Digital", question: "Có bộ KPI cho SCM không?", weight: 2 },
  { id: 37, category: "Data, KPI & Digital", question: "Có báo cáo tồn kho hàng ngày không?", weight: 2 },
  { id: 38, category: "Data, KPI & Digital", question: "Có báo cáo logistics cost hàng tháng không?", weight: 2 },
  { id: 39, category: "Data, KPI & Digital", question: "Có hệ thống ERP/WMS không?", weight: 3 },
  { id: 40, category: "Data, KPI & Digital", question: "Có tích hợp dữ liệu giữa các phần mềm không?", weight: 2 },
  { id: 41, category: "Data, KPI & Digital", question: "Có sử dụng AI/Automation cho SCM không?", weight: 1 },
  { id: 42, category: "Data, KPI & Digital", question: "Có quy trình backup dữ liệu không?", weight: 2 },
  { id: 43, category: "Data, KPI & Digital", question: "Có quy trình bảo mật dữ liệu không?", weight: 2 },
  { id: 44, category: "Data, KPI & Digital", question: "Có quy trình báo cáo tự động không?", weight: 1 },
  { id: 45, category: "People, Process & Governance", question: "Có job description cho các vị trí SCM không?", weight: 2 },
  { id: 46, category: "People, Process & Governance", question: "Có đào tạo SCM định kỳ cho nhân viên không?", weight: 2 },
  { id: 47, category: "People, Process & Governance", question: "Có KPIs cho nhân viên SCM không?", weight: 2 },
  { id: 48, category: "People, Process & Governance", question: "Có SOP cho các quy trình SCM chính không?", weight: 2 },
  { id: 49, category: "People, Process & Governance", question: "Có RACI matrix cho các phòng ban liên quan không?", weight: 2 },
  { id: 50, category: "People, Process & Governance", question: "Có quy trình audit SCM định kỳ không?", weight: 2 },
  { id: 51, category: "People, Process & Governance", question: "Có quản lý chuỗi cung ứng bền vững (sustainability) không?", weight: 1 },
  { id: 52, category: "People, Process & Governance", question: "Có compliance An toàn Lao động cho kho không?", weight: 2 },
]
