export interface ChecklistItem {
  id: number
  category: string
  question: string
  status: "good" | "warning" | "bad"
  note?: string
}

export const supplyChainAssessmentChecklist: ChecklistItem[] = [
  // Planning
  { id: 1, category: "Planning", question: "Doanh nghiệp có quy trình demand forecasting hàng tháng/quý?", status: "good" },
  { id: 2, category: "Planning", question: "Forecast được cập nhật dựa trên dữ liệu bán hàng thực tế?", status: "good" },
  { id: 3, category: "Planning", question: "Có quy trình demand review phối hợp giữa sales, marketing và supply chain?", status: "good" },
  { id: 4, category: "Planning", question: "Supply planning được xây dựng dựa trên forecast và tồn kho hiện tại?", status: "good" },
  { id: 5, category: "Planning", question: "Có lịch S&OP (Sales & Operations Planning) định kỳ?", status: "good" },
  { id: 6, category: "Planning", question: "Kế hoạch năng lực sản xuất/kho bãi được cập nhật định kỳ?", status: "good" },
  { id: 7, category: "Planning", question: "MPS/MRP được sử dụng để lập kế hoạch sản xuất và mua hàng?", status: "good" },
  { id: 8, category: "Planning", question: "Có quy trình điều chỉnh kế hoạch khi có biến động nhu cầu?", status: "good" },

  // Procurement
  { id: 9, category: "Procurement", question: "Kế hoạch mua hàng được xây dựng dựa trên forecast và tồn kho?", status: "good" },
  { id: 10, category: "Procurement", question: "Nhà cung cấp được đánh giá định kỳ bằng scorecard?", status: "good" },
  { id: 11, category: "Procurement", question: "MOQ (Minimum Order Quantity) được kiểm soát và tối ưu?", status: "good" },
  { id: 12, category: "Procurement", question: "Lead time nhà cung cấp được theo dõi và cập nhật thường xuyên?", status: "good" },
  { id: 13, category: "Procurement", question: "Có danh sách supplier risk và kế hoạch dự phòng?", status: "good" },
  { id: 14, category: "Procurement", question: "PO (Purchase Order) được phê duyệt và theo dõi đúng quy trình?", status: "good" },
  { id: 15, category: "Procurement", question: "Hợp đồng mua hàng có điều khoản SLA, phạt vi phạm rõ ràng?", status: "good" },

  // Inventory
  { id: 16, category: "Inventory", question: "Hàng tồn kho được phân loại ABC/XYZ?", status: "good" },
  { id: 17, category: "Inventory", question: "Safety stock được tính toán dựa trên công thức?", status: "good" },
  { id: 18, category: "Inventory", question: "Reorder point được thiết lập cho từng SKU?", status: "good" },
  { id: 19, category: "Inventory", question: "Hàng tồn đọng, chậm luân chuyển được xử lý định kỳ?", status: "good" },
  { id: 20, category: "Inventory", question: "Inventory aging report được tạo hàng tháng?", status: "good" },
  { id: 21, category: "Inventory", question: "Tồn kho an toàn và tồn kho tối đa được thiết lập?", status: "good" },
  { id: 22, category: "Inventory", question: "Cycle count được thực hiện định kỳ?", status: "good" },
  { id: 23, category: "Inventory", question: "Inventory accuracy (tồn kho thực tế vs hệ thống) đạt trên 95%?", status: "good" },

  // Warehouse & Logistics
  { id: 24, category: "Warehouse & Logistics", question: "Kho có layout và vị trí lưu trữ rõ ràng?", status: "good" },
  { id: 25, category: "Warehouse & Logistics", question: "Quy tắc FIFO/FEFO được áp dụng?", status: "good" },
  { id: 26, category: "Warehouse & Logistics", question: "Quy trình nhập/xuất kho có SOP và được tuân thủ?", status: "good" },
  { id: 27, category: "Warehouse & Logistics", question: "Chi phí vận tải được theo dõi theo tháng?", status: "good" },
  { id: 28, category: "Warehouse & Logistics", question: "3PL được đánh giá theo SLA hàng tháng?", status: "good" },
  { id: 29, category: "Warehouse & Logistics", question: "OTIF (On Time In Full) được theo dõi?", status: "good" },
  { id: 30, category: "Warehouse & Logistics", question: "Kế hoạch phân phối được lập dựa trên dữ liệu và nhu cầu?", status: "good" },
  { id: 31, category: "Warehouse & Logistics", question: "Kho thuê ngoài được kiểm soát bằng hợp đồng SLA và KPI?", status: "good" },

  // Data, KPI & Digital
  { id: 32, category: "Data, KPI & Digital", question: "Dữ liệu master (SKU, supplier, customer) được chuẩn hóa?", status: "good" },
  { id: 33, category: "Data, KPI & Digital", question: "Bộ KPI Supply Chain được thiết lập và theo dõi hàng tháng?", status: "good" },
  { id: 34, category: "Data, KPI & Digital", question: "Dashboard KPI được cập nhật real-time hoặc định kỳ?", status: "good" },
  { id: 35, category: "Data, KPI & Digital", question: "Excel được sử dụng có cấu trúc, công thức và báo cáo chuẩn?", status: "good" },
  { id: 36, category: "Data, KPI & Digital", question: "Doanh nghiệp đã sẵn sàng cho ERP/WMS?", status: "good" },
  { id: 37, category: "Data, KPI & Digital", question: "AI/automation đã được ứng dụng trong vận hành SCM?", status: "good" },
  { id: 38, category: "Data, KPI & Digital", question: "Báo cáo performance review được thực hiện định kỳ?", status: "good" },

  // People, Process & Governance
  { id: 39, category: "People, Process & Governance", question: "Có SOP cho từng quy trình SCM chính?", status: "good" },
  { id: 40, category: "People, Process & Governance", question: "Trách nhiệm (RACI) giữa các phòng ban được xác định rõ?", status: "good" },
  { id: 41, category: "People, Process & Governance", question: "Nhân sự SCM được đào tạo định kỳ về quy trình và công cụ?", status: "good" },
  { id: 42, category: "People, Process & Governance", question: "Có quy trình phối hợp giữa sales, planning, procurement, sản xuất, kho và logistics?", status: "good" },
  { id: 43, category: "People, Process & Governance", question: "Quy trình xử lý exception (hàng thiếu, hàng hỏng, giao trễ) được thiết lập?", status: "good" },
  { id: 44, category: "People, Process & Governance", question: "Có KPIs cá nhân/nhóm gắn với KPI SCM tổng thể?", status: "good" },
  { id: 45, category: "People, Process & Governance", question: "Cơ chế báo cáo và họp review SCM được duy trì đều đặn?", status: "good" },
  { id: 46, category: "People, Process & Governance", question: "KPI được sử dụng để cải thiện, không chỉ để báo cáo?", status: "good" },
  { id: 47, category: "People, Process & Governance", question: "Doanh nghiệp có lộ trình số hóa SCM rõ ràng?", status: "good" },
  { id: 48, category: "People, Process & Governance", question: "Quản lý cấp cao hiểu và cam kết với cải thiện SCM?", status: "good" },
  { id: 49, category: "People, Process & Governance", question: "Hiệu suất nhà cung cấp và 3PL được đánh giá định kỳ?", status: "good" },
  { id: 50, category: "People, Process & Governance", question: "Doanh nghiệp có kế hoạch phát triển năng lực SCM 6-12 tháng?", status: "good" },
]

export const checklistCategories = [
  "Planning",
  "Procurement",
  "Inventory",
  "Warehouse & Logistics",
  "Data, KPI & Digital",
  "People, Process & Governance",
]