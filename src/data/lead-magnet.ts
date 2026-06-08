export interface ChecklistItem {
  id: number
  category: string
  question: string
  status: "good" | "warning" | "bad"
  note?: string
}

export const inventoryChecklist: ChecklistItem[] = [
  // Kiểm soát hàng tồn
  { id: 1, category: "Kiểm soát hàng tồn", question: "Có hệ thống mã SKU thống nhất?", status: "good", note: "Mã SKU giúp tracking chính xác từng SKU" },
  { id: 2, category: "Kiểm soát hàng tồn", question: "Có định kỳ kiểm kê thực tế (cycle count)?", status: "good", note: "Thường 5-10% SKU mỗi tuần" },
  { id: 3, category: "Kiểm soát hàng tồn", question: "Có quy trình xử lý hàng thiếu/hỏng rõ ràng?", status: "good", note: "Document, photo, báo cáo ngay" },
  { id: 4, category: "Kiểm soát hàng tồn", question: "Hàng tồn kho có được phân loại A/B/C?", status: "good", note: "Dựa trên ABC Analysis" },
  
  // An toàn & Chất lượng
  { id: 5, category: "An toàn & Chất lượng", question: "Kho đảm bảo PCCC và an toàn lao động?", status: "good", note: "Check phòng cháy, lối thoát" },
  { id: 6, category: "An toàn & Chất lượng", question: "Có tiêu chuẩn FEFO/FIFO rõ ràng?", status: "good", note: "First Expired First Out" },
  { id: 7, category: "An toàn & Chất lượng", question: "Hàng hóa được bảo quản đúng điều kiện?", status: "good", note: "Nhiệt độ, độ ẩm, sáng" },
  { id: 8, category: "An toàn & Chất lượng", question: "Có quy trình kiểm tra chất lượng khi nhập?", status: "good", note: "QC checklist nhập hàng" },

  // Kho vận & Vị trí
  { id: 9, category: "Kho vận & Vị trí", question: "Có sơ đồ layout kho và vị trí rõ ràng?", status: "good", note: "Floor plan với zone A/B/C" },
  { id: 10, category: "Kho vận & Vị trí", question: "Vị trí đặt hàng có logic theo SKU?", status: "good", note: "Fast mover gần cửa" },
  { id: 11, category: "Kho vận & Vị trí", question: "Có đủ không gian để thao tác?", status: "good", note: "Aisle rộng, pallet dễ xoay" },
  { id: 12, category: "Kho vận & Vị trí", question: "Có hệ thống lưu trữ tối ưu chiều cao?", status: "good", note: "Mezzanine, rack" },

  // Quy trình & System
  { id: 13, category: "Quy trình & System", question: "Có SOP nhập-xuất-tồn rõ ràng?", status: "good", note: "Document và train" },
  { id: 14, category: "Quy trình & System", question: "System (ERP/WMS) cập nhật real-time?", status: "good", note: "Không excel thủ công" },
  { id: 15, category: "Quy trình & System", question: "Có quy trình kiểm soát document?", status: "good", note: "Invoice, PL, DO" },
  { id: 16, category: "Quy trình & System", question: "Backup dữ liệu được thực hiện định kỳ?", status: "good", note: "Cloud backup" },

  // Đối tác & Giao dịch
  { id: 17, category: "Đối tác & Giao dịch", question: "Hợp đồng với nhà cung cấp rõ ràng?", status: "good", note: "Lead time, MOQ, terms" },
  { id: 18, category: "Đối tác & Giao dịch", question: "Có đánh giá nhà cung cấp định kỳ?", status: "good", note: "Scorecard supplier" },
  { id: 19, category: "Đối tác & Giao dịch", question: "3PL được đánh giá theo SLA?", status: "good", note: "OTIF, accuracy" },
  { id: 20, category: "Đối tác & Giao dịch", question: "Có KPI rõ ràng cho logistics?", status: "good", note: "On-time delivery rate" },

  // Tài chính & Chi phí
  { id: 21, category: "Tài chính & Chi phí", question: "Chi phí lưu kho được tính đúng?", status: "good", note: "Landed cost" },
  { id: 22, category: "Tài chính & Chi phí", question: "Hàng tồn đọng được xử lý định kỳ?", status: "good", note: "Slow moving, dead stock" },
  { id: 23, category: "Tài chính & Chi phí", question: "Có báo cáo inventory rotate rate?", status: "good", note: "Monthly/quarterly" },
  { id: 24, category: "Tài chính & Chi phí", question: "Định mức tồn kho được thiết lập?", status: "good", note: "Min/Max, ROP" },

  // Yêu cầu & Kế hoạch
  { id: 25, category: "Yêu cầu & Kế hoạch", question: "Có forecast demand hàng tháng?", status: "good", note: "Sales forecast" },
  { id: 26, category: "Yêu cầu & Kế hoạch", question: "Safety stock được tính toán?", status: "good", note: "Công thức" },
  { id: 27, category: "Yêu cầu & Kế hoạch", question: "Có quy trình mua hàng rõ ràng?", status: "good", note: "Reorder point" },
  { id: 28, category: "Yêu cầu & Kế hoạch", question: "PO được theo dõi chặt chẽ?", status: "good", note: "Lead time tracking" },

  // Nhân sự & Đào tạo
  { id: 29, category: "Nhân sự & Đào tạo", question: "Có job description rõ ràng?", status: "good", note: "Mô tả công việc" },
  { id: 30, category: "Nhân sự & Đào tạo", question: "Nhân viên được đào tạo định kỳ?", status: "good", note: "Training SOP" },
]

export const checklistCategories = [
  "Kiểm soát hàng tồn",
  "An toàn & Chất lượng", 
  "Kho vận & Vị trí",
  "Quy trình & System",
  "Đối tác & Giao dịch",
  "Tài chính & Chi phí",
  "Yêu cầu & Kế hoạch",
  "Nhân sự & Đào tạo",
]