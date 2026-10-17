# integration — Kiểm thử tích hợp

Chứa kiểm thử cho các thành phần phối hợp, ví dụ route → middleware → controller → service → model → MySQL.

Tệp gợi ý nếu dùng PHPUnit: BorrowFlowTest.php, ReturnFlowTest.php, BookApiTest.php, PermissionTest.php.

Kiểm tra cả phản hồi và trạng thái dữ liệu sau thao tác. Ví dụ: mượn thành công phải tạo phiếu và đánh dấu bản sách đang được mượn; lỗi giữa chừng phải hoàn tác toàn bộ giao dịch. Kiểm tra quyền và tình huống hai yêu cầu mượn cùng một bản.

Chỉ chạy với cơ sở dữ liệu thử nghiệm. Chuẩn bị dữ liệu độc lập cho từng ca và dọn dẹp sau khi chạy; xác minh đúng môi trường trước thao tác xóa hoặc đặt lại dữ liệu.
