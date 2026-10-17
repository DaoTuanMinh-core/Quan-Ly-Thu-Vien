# pages — Các trang chức năng

Chứa các trang HTML hoặc PHP dùng để trình bày dữ liệu.

Tệp gợi ý:
- login.php: đăng nhập.
- books.php: tra cứu và quản lý sách.
- readers.php: quản lý độc giả.
- borrow.php, returns.php: giao diện mượn và trả sách.
- reports.php: thống kê.

Tái sử dụng thành phần trong components. Các trang gọi backend để lấy dữ liệu hoặc thực hiện thao tác; không viết trực tiếp truy vấn SQL tại đây. Đường dẫn truy cập thực tế phụ thuộc cấu hình triển khai.
