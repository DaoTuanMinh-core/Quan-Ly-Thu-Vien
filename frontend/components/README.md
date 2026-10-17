# components — Thành phần giao diện dùng chung

Chứa các phần được nhiều trang sử dụng, ví dụ header.php, sidebar.php, footer.php, pagination.php và alert.php.

Mục đích là giữ giao diện thống nhất và sửa một nơi áp dụng cho nhiều trang. Truyền dữ liệu cần thiết cho thành phần một cách rõ ràng, tránh truy vấn cơ sở dữ liệu trực tiếp tại đây. Ẩn nút theo vai trò chỉ hỗ trợ giao diện; backend vẫn phải kiểm tra quyền.
