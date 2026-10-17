# unit — Kiểm thử đơn vị

Chứa kiểm thử cho một hàm hoặc lớp với đầu vào và kết quả rõ ràng.

Tệp gợi ý nếu dùng PHPUnit: FineServiceTest.php, BorrowPolicyTest.php, InputValidatorTest.php.

Kiểm tra trường hợp bình thường, dữ liệu thiếu/sai và giá trị biên. Ví dụ tính phạt: trả đúng hạn, trễ một ngày, trễ nhiều ngày theo quy định đã chốt. Dùng mock hoặc fake khi cần thay thế phụ thuộc; không kết nối cơ sở dữ liệu thật. Quy định mức phạt thay đổi thì cập nhật dữ liệu kiểm thử tương ứng.
