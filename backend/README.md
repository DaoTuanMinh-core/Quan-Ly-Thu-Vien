# backend — Xử lý phía máy chủ

Chứa mã PHP xử lý yêu cầu và nghiệp vụ quản lý thư viện.

| Thư mục | Nhiệm vụ |
| --- | --- |
| config | Cấu hình ứng dụng và kết nối MySQL. |
| routes | Ánh xạ URL và phương thức HTTP tới controller. |
| middleware | Kiểm tra đăng nhập, quyền và điều kiện truy cập. |
| controllers | Nhận yêu cầu, gọi nghiệp vụ và trả phản hồi. |
| services | Quy tắc mượn/trả, hạn mức, tiền phạt và giao dịch. |
| models | Truy cập bảng và ánh xạ dữ liệu. |

Ví dụ: BorrowController gọi BorrowService, service kiểm tra quy tắc rồi dùng các model lưu phiếu mượn và cập nhật bản sách.

Kiểm tra đầu vào, dùng truy vấn tham số hóa và không trả thông tin lỗi nhạy cảm cho trình duyệt. Không công khai toàn bộ backend/config qua web; cấu hình máy chủ phải giới hạn tài nguyên có thể truy cập.
