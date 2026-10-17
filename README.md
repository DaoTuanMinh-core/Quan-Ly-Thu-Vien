# Quản lý thư viện

Dự án phần mềm quản lý thư viện dùng PHP và MySQL, hướng tới số hóa quy trình quản lý tài liệu, theo dõi mượn/trả, hỗ trợ thủ thư và giúp độc giả tra cứu thuận tiện.

Hiện tại, repository chứa cấu trúc thư mục và tài liệu hướng dẫn, chưa có mã nguồn chức năng hoàn chỉnh. Các tên tệp trong tài liệu là gợi ý triển khai.

## Cấu trúc và nhiệm vụ

| Thư mục | Nhiệm vụ |
| --- | --- |
| [frontend](frontend/README.md) | Giao diện cho độc giả, thủ thư và quản trị viên. |
| [backend](backend/README.md) | Xử lý yêu cầu, nghiệp vụ, quyền truy cập và truy vấn dữ liệu. |
| [database](database/README.md) | Cấu trúc MySQL, thay đổi cấu trúc và dữ liệu mẫu. |
| [docs](docs/README.md) | Yêu cầu, thiết kế và hướng dẫn sử dụng. |
| [tests](tests/README.md) | Kiểm tra chức năng và các luồng nghiệp vụ. |

## Luồng xử lý gợi ý

Người dùng thao tác trên frontend → routes nhận yêu cầu → middleware kiểm tra quyền → controller gọi service → service dùng model để đọc/ghi MySQL → trả kết quả về giao diện.

Ví dụ mượn sách: kiểm tra độc giả, số bản sách còn lại và hạn mức mượn; tạo phiếu mượn và cập nhật bản sách trong cùng giao dịch cơ sở dữ liệu.

## Quy ước

- Đọc README ở từng thư mục trước khi thêm tệp.
- Tách giao diện, xử lý nghiệp vụ và truy vấn cơ sở dữ liệu.
- Dùng UTF-8 cho tiếng Việt; thống nhất cách đặt tên trong nhóm.
- Không đưa mật khẩu, tệp `.env` thật hoặc dữ liệu độc giả thật lên GitHub.
- Cập nhật tài liệu khi chức năng hoặc cách chạy thay đổi.

## Bắt đầu triển khai

1. Chốt yêu cầu trong `docs/requirements`.
2. Thiết kế bảng MySQL và quan hệ trong `docs/design`.
3. Viết migrations, seeds rồi triển khai backend và frontend.
4. Bổ sung kiểm thử và hướng dẫn sử dụng.

Khi có mã nguồn chạy được, bổ sung phiên bản PHP/MySQL, thư viện cần cài, cách cấu hình, khởi tạo dữ liệu và khởi động dự án vào README này.