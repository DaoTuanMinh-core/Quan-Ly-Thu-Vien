# migrations — Lịch sử thay đổi cấu trúc

Chứa từng bước tạo hoặc thay đổi bảng, chỉ mục và ràng buộc.

Tệp SQL gợi ý: 001_create_users.sql, 002_create_books.sql, 003_create_loans.sql. Nếu chọn công cụ migration PHP, dùng định dạng và lệnh của công cụ đó.

Chạy theo thứ tự để bảng được tham chiếu tồn tại trước. Ghi rõ điều kiện chạy, tác động dữ liệu và cách khôi phục nếu có. Sau khi một migration đã được nhóm áp dụng, tạo migration mới để sửa thay vì âm thầm thay đổi bản cũ. Theo dõi những phiên bản đã chạy để tránh chạy lặp. Không đặt dữ liệu mẫu tại đây.
