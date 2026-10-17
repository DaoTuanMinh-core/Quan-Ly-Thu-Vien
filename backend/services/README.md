# services — Quy tắc nghiệp vụ

Chứa logic xử lý các quy trình chính, độc lập với giao diện.

Tệp gợi ý:
- BorrowService.php: kiểm tra điều kiện và tạo phiếu mượn.
- ReturnService.php: ghi nhận trả và cập nhật trạng thái bản sách.
- FineService.php: tính tiền phạt theo quy định đã thống nhất.
- ReportService.php: tổng hợp số liệu.

Ví dụ mượn sách: kiểm tra độc giả hợp lệ, hạn mức và bản sách sẵn có. Lưu phiếu mượn và cập nhật trạng thái trong cùng transaction; dùng khóa hoặc cập nhật có điều kiện để tránh hai người mượn cùng một bản sách. Service dùng model truy cập dữ liệu và báo kết quả cho controller.
