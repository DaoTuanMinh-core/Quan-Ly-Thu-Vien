# database — Dữ liệu MySQL

Chứa tệp SQL hoặc mã quản lý cấu trúc và dữ liệu mẫu.

- migrations/: thay đổi cấu trúc theo thứ tự phiên bản.
- seeds/: dữ liệu giả phục vụ phát triển và kiểm thử.
- schema.sql (nếu dùng): bản mô tả cấu trúc hiện hành để tham khảo hoặc khởi tạo theo quy trình đã thống nhất.

Bảng gợi ý: users, readers, books, book_copies, categories, loans, loan_items. Chốt tên và quan hệ trong docs/design trước khi triển khai.

Nhóm cần quy định rõ khởi tạo bằng migrations hay schema.sql để tránh chạy lặp cấu trúc. Không đưa bản sao chứa dữ liệu thật hoặc mật khẩu lên Git. Sao lưu dữ liệu trước khi thay đổi cấu trúc đang sử dụng.
