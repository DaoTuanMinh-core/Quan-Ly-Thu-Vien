# tests — Kiểm thử

Chứa mã kiểm thử và kịch bản kiểm tra các yêu cầu của dự án.

- unit/: kiểm tra một hàm hoặc thành phần nhỏ.
- integration/: kiểm tra nhiều thành phần phối hợp, có thể dùng MySQL thử nghiệm.
- test-plan.md (gợi ý): phạm vi, dữ liệu, bước thực hiện và kết quả mong đợi cho kiểm thử thủ công.

Tình huống cần có: đăng nhập sai, thiếu quyền, sách hết bản, vượt hạn mức, mượn thành công, trả trễ và hai yêu cầu mượn cùng bản sách.

Dùng dữ liệu giả và cơ sở dữ liệu riêng. Khi đã chọn công cụ như PHPUnit, bổ sung phiên bản, cách cài và lệnh chạy thực tế. Hiện gói này chưa kèm mã kiểm thử.
