# models — Truy cập dữ liệu

Chứa lớp PHP đọc, ghi và ánh xạ dữ liệu từ MySQL.

Tệp gợi ý:
- Book.php: đầu sách.
- BookCopy.php: từng bản sách có thể cho mượn.
- Reader.php: độc giả.
- Loan.php: phiếu mượn và thông tin trả.
- User.php: tài khoản và vai trò.

Tên lớp và bảng cần thống nhất với thiết kế database. Dùng prepared statements, không ghép trực tiếp dữ liệu người dùng vào SQL. Các quy tắc như hạn mức mượn đặt ở services; ràng buộc dữ liệu cần được bảo vệ bằng khóa và constraint trong MySQL.
