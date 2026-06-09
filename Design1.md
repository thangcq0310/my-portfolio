# Hướng dẫn thiết kế (Design Documentation)

## 1. Thông tin chung
- **Mục tiêu:** Portfolio cá nhân cho nhà phát triển Full-stack.
- **Phong cách:** Tối giản, hiện đại, tập trung vào nội dung.
- **Đối tượng người dùng:** Nhà tuyển dụng tiềm năng, đồng nghiệp trong ngành.

## 2. Bảng màu (Color Palette)
Dựa trên phân tích giao diện:
- **Màu nền chính:** `#0a0a0a` (Đen tuyền)
- **Màu chữ chính:** `#ffffff` (Trắng)
- **Màu chữ phụ:** `#a1a1aa` (Xám trung tính)
- **Màu nhấn (Accent):** `#3b82f6` (Xanh dương) - được dùng cho các liên kết và hiệu ứng hover.

## 3. Hệ thống Typography
- **Font chữ chính:** `Inter`, sans-serif (Một font sans-serif hiện đại, phổ biến).
- **Font chữ phụ:** `Fira Code`, monospace (Được dùng cho các "tag" kỹ thuật như #JavaScript, #React).
- **Kích thước chữ:**
    - Tiêu đề lớn (Hero): `clamp(3rem, 8vw, 6rem)`
    - Tiêu đề phụ (H2): `2rem`
    - Văn bản thân bài (Body): `1rem`

## 4. Bố cục (Layout) và Thành phần (Components)

### 4.1. Layout tổng thể
- **Responsive:** Sử dụng CSS Grid và Flexbox.
- **Container:** Nội dung chính được giới hạn trong một container có `max-width: 1200px`, căn giữa màn hình với `margin: 0 auto`.
- **Padding:** Khoảng cách đều nhau ở các cạnh (`padding: 2rem`), thu nhỏ lại trên màn hình điện thoại (`padding: 1rem`).

### 4.2. Các thành phần chính (Key Components)

- **Thanh điều hướng (Navbar):**
    - *Vị trí:* Cố định ở đầu trang (sticky).
    - *Nội dung:* Logo "Ahmed Arat" ở bên trái, các liên kết (About, Experience, Contact) ở bên phải.
    - *Hiệu ứng:* Nền mờ (background blur) khi cuộn trang.

- **Phần giới thiệu (Hero Section):**
    - *Nội dung:* Dòng giới thiệu "Ahmed Arat", chức danh "FULL-STACK DEVELOPER".
    - *Bố cục:* Văn bản căn giữa, chiếm toàn bộ chiều cao màn hình đầu tiên (viewport height).

- **Phần kỹ năng (Tech Stack):**
    - *Hiển thị:* Các biểu tượng (icons) của công nghệ (Supabase, JavaScript, TypeScript...).
    - *Hiệu ứng:* Hover nhẹ, có thể có tooltip hiển thị tên công nghệ.

- **Phần "What to Expect":**
    - *Bố cục:* Dạng lưới (grid) 2 cột trên desktop, chuyển thành 1 cột trên mobile.
    - *Nội dung:* Các điểm nhấn (Accessibility Focused, Performance First, Clear Communication).

- **Chân trang (Footer):**
    - *Vị trí:* Cuối trang.
    - *Nội dung:* Thông tin liên hệ và bản quyền.

## 5. Hiệu ứng (Effects & Animation)
- **Hiệu ứng chuyển tiếp (Transition):** Áp dụng cho các liên kết và nút bấm với thuộc tính `transition: all 0.2s ease`.
- **Hiệu ứng khi hover:** Đổi màu chữ, thêm gạch chân cho liên kết.
- **Cuộn trang mượt (Smooth Scroll):** Được kích hoạt cho toàn bộ trang.

## 6. Công nghệ sử dụng (Tech Stack - Phỏng đoán)
- **Framework:** React (với Vite)
- **Ngôn ngữ:** TypeScript
- **Styling:** Tailwind CSS
- **Triển khai (Deployment):** Fiebase