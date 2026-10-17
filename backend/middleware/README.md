# middleware — Kiểm tra trước khi xử lý

Chứa lớp hoặc hàm chạy trước controller để kiểm tra điều kiện truy cập.

Tệp gợi ý:
- AuthMiddleware.php: kiểm tra đăng nhập.
- RoleMiddleware.php: kiểm tra vai trò độc giả, thủ thư, quản trị viên.
- CsrfMiddleware.php: kiểm tra CSRF cho yêu cầu thay đổi dữ liệu nếu dùng xác thực bằng cookie/session.

Chặn yêu cầu không hợp lệ trước khi gọi nghiệp vụ và trả thông báo phù hợp. Việc kiểm tra quyền trên một phiếu mượn cụ thể vẫn cần thực hiện ở nơi có đầy đủ ngữ cảnh dữ liệu. Không chỉ dựa vào nút ẩn trên giao diện.
