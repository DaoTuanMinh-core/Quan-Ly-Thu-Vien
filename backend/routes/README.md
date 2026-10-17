# routes — Định tuyến yêu cầu

Chứa khai báo đường dẫn, phương thức HTTP, controller và middleware tương ứng. Tệp gợi ý: api.php, web.php; cách nạp route tùy kiến trúc hoặc framework được chọn.

Ví dụ đề xuất:
- GET /api/books: tra cứu sách.
- POST /api/loans: tạo phiếu mượn.
- POST /api/loans/{id}/return: ghi nhận trả sách.

Gắn middleware đăng nhập và quyền cho thao tác cần bảo vệ. Không dùng GET để thay đổi dữ liệu. Route chỉ phân phối yêu cầu, không chứa truy vấn SQL hoặc toàn bộ nghiệp vụ.
