# config — Cấu hình ứng dụng

Chứa thiết lập dùng chung và mã khởi tạo kết nối.

Tệp gợi ý:
- database.php: tạo kết nối PDO tới MySQL.
- app.php: múi giờ, chế độ chạy và cấu hình chung.
- session.php: thiết lập phiên đăng nhập nếu dự án dùng session.

Đọc tài khoản/mật khẩu từ biến môi trường hoặc cấu hình riêng ngoài Git. Chỉ chia sẻ tệp cấu hình mẫu với giá trị giả. Không cho trình duyệt tải trực tiếp tệp chứa cấu hình nhạy cảm.
