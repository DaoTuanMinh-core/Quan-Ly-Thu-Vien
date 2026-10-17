# controllers — Tiếp nhận và trả lời yêu cầu

Chứa các lớp PHP nhận tham số từ yêu cầu, kiểm tra định dạng, gọi service và tạo phản hồi JSON hoặc điều hướng.

Tệp gợi ý: AuthController.php, BookController.php, ReaderController.php, BorrowController.php, ReportController.php.

Ví dụ BorrowController nhận mã độc giả và mã bản sách, gọi BorrowService rồi trả kết quả thành công hoặc thông báo lỗi phù hợp. Giữ controller ngắn; quy tắc nghiệp vụ thuộc services, truy vấn dữ liệu thuộc models. Không trả mật khẩu hoặc chi tiết kết nối trong phản hồi.
