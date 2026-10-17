# frontend — Giao diện người dùng

Chứa các tệp hiển thị và tương tác cho độc giả, thủ thư, quản trị viên.

| Thư mục | Nội dung |
| --- | --- |
| assets | CSS, JavaScript, hình ảnh dùng trên giao diện. |
| pages | Các trang đăng nhập, tra cứu sách, độc giả, mượn/trả và báo cáo. |
| components | Header, menu, footer và các thành phần dùng lại. |

Ví dụ: pages/books.php hiển thị danh sách sách; assets/js/books.js gửi yêu cầu tìm kiếm tới backend.

Không đặt mật khẩu MySQL hoặc truy vấn SQL trong giao diện. Kiểm tra dữ liệu bằng JavaScript chỉ hỗ trợ người dùng; backend vẫn phải kiểm tra lại. Khi hiển thị dữ liệu trong HTML, cần mã hóa đầu ra phù hợp để tránh chèn mã.
