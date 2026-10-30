# Đối chiếu repository với báo cáo

Đối chiếu báo cáo Bao_cao_QLTV_Lab08_Theo_mau_truong.docx, 56 trang, ngày 30/10/2026.

| Chương | Nội dung có trong repository | Phạm vi |
| --- | --- | --- |
| 1–2 | docs/project-overview.md; README | Tổng quan dự án, mô hình phát triển, tổ chức nhóm và cộng tác GitHub theo mẫu |
| Phụ lục A | labs/lab08-auth-local; docs/user-guide/lab08.md | Nội dung thực hành Lab 8: API, coding standards, ngoại lệ và bảo mật |
| 3 | docs/requirements/library-requirements.md | 25 BR, 20 FR, 45 UC, 3 đặc tả tiêu biểu, ma trận truy vết/quyền |
| 4–5 | docs/design/library-design.md và images | Thiết kế; schema nguồn 13 bảng và phần mở rộng chưa triển khai |
| 6.1–6.2 | docs/evidence/local | Test/coverage xác thực local, không áp dụng cho mọi FR |
| 6.3 | tests/test-plan.md | TC-LIB01–20 chưa chạy |
| 7 | docs/lab08-review.md, PR #1 | Review thật và merge cần thành viên thực hiện |
| Phụ lục local/PR | labs/lab08-auth và docs/evidence/original | Mã thành viên 19 test, giữ commit nguồn a035441 |

Trong báo cáo, các đường dẫn app.js, services/authService.js, tests/auth.test.js của “local CNPMTH” tương ứng labs/lab08-auth-local trong repository này. Đây là thay đổi vị trí đóng gói, không thay logic. Bản PR gốc vẫn ở labs/lab08-auth. Hướng dẫn cũ ở Desktop/CNPMTH vẫn áp dụng cho bản local tại thư mục đó.

TK01–TK04 là giả định thiết kế, không phải quy tắc đã được xác nhận. Không tạo dữ liệu giả để ghi nhận review/merge, không thay “chưa chạy” thành “đạt” cho nghiệp vụ thư viện. Việc bổ sung nhánh này không chứng minh peer review đã hoàn tất.
