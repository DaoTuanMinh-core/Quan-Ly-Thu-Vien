# Quản lý thư viện

Khung tổ chức dự án quản lý thư viện dùng PHP và MySQL. Gói này chỉ cung cấp tài liệu hướng dẫn; các tên tệp nêu dưới đây là gợi ý, chưa phải chức năng đã triển khai.

## Cấu trúc và nhiệm vụ
| Thư mục | Nhiệm vụ |
| --- | --- |
| [frontend](frontend/README.md) | Giao diện cho độc giả, thủ thư và quản trị viên. |
| [backend](backend/README.md) | Xử lý yêu cầu, nghiệp vụ, quyền truy cập và truy vấn dữ liệu. |
| [database](database/README.md) | Cấu trúc MySQL, thay đổi cấu trúc và dữ liệu mẫu. |
| [docs](docs/README.md) | Yêu cầu, thiết kế và hướng dẫn sử dụng. |
| [tests](tests/README.md) | Kiểm tra chức năng và các luồng nghiệp vụ. |

## Luồng xử lý gợi ý
Người dùng thao tác trên frontend → backend/routes nhận yêu cầu → middleware kiểm tra quyền → controller gọi service → service dùng model để đọc/ghi MySQL → trả kết quả về giao diện.

Ví dụ mượn sách: kiểm tra độc giả, số bản còn lại và hạn mức mượn; tạo phiếu mượn, cập nhật bản sách trong cùng giao dịch cơ sở dữ liệu.

## Quy ước
- Đọc README ở từng thư mục trước khi thêm tệp.
- Tách giao diện, xử lý nghiệp vụ và truy vấn cơ sở dữ liệu.
- Dùng UTF-8 cho tiếng Việt; thống nhất cách đặt tên trong nhóm.
- Không đưa mật khẩu, tệp .env thật hoặc dữ liệu độc giả thật lên GitHub.
- Cập nhật tài liệu khi chức năng hoặc cách chạy thay đổi.

## Bắt đầu triển khai
1. Chốt yêu cầu trong docs/requirements.
2. Thiết kế bảng MySQL và quan hệ trong docs/design.
3. Viết migrations, seeds rồi triển khai backend và frontend.
4. Bổ sung kiểm thử và hướng dẫn sử dụng.

Chưa có mã nguồn chạy được trong gói này. Khi triển khai, bổ sung phiên bản PHP/MySQL, thư viện cần cài, cách cấu hình, tạo dữ liệu và khởi động dự án vào README này.
