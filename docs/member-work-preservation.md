# Giữ nguyên đóng góp của nhóm

Nhánh bổ sung bắt đầu từ a0354412f65fbe20c53bcc91b3ed5a7b4ba15290 (feature/auth-module), bao gồm lịch sử develop trước đó. Không reset, force-push hay sửa commit của người khác.

- Sáu file gốc của module labs/lab08-auth giữ nguyên nội dung Git; chỉ thêm README/server wrapper. Git trên Windows có thể chuyển LF thành CRLF khi checkout; phép kiểm tra bỏ qua riêng khác biệt kết thúc dòng này.
- Toàn bộ README trong backend, frontend, database, tests, docs được giữ nguyên. README root được bổ sung ở đầu, giữ nguyên toàn bộ văn bản gốc phía sau.
- Bản local 20 test nằm ở labs/lab08-auth-local, có nguồn và hash riêng.
- Các file frontend/assets/js/main.js, pages/accounts.js, pages/auth.js, pages/employees.js bị xóa ở các commit 7f6f5d5, 87c37f3, 11edb97, 449f2cc sau phần giao diện của huy-203-stu-tdtu. Giữ nguyên trạng thái xóa; mã vẫn có trong lịch sử Git, không bị mất bởi bản bổ sung này.

Chạy npm.cmd run verify:preservation để kiểm tra tất cả file đã được theo dõi tại commit nguồn; chỉ cho phép thêm phần đầu README root. Sau này nhóm chủ động sửa module gốc thì cần cập nhật tiêu chí kiểm tra, không bỏ kiểm tra chỉ để che thay đổi.
