# Bổ sung Lab 8 và liên kết báo cáo

Phạm vi đã thống nhất: hoàn thiện tài liệu và module xác thực Lab 8; chưa lập trình toàn bộ hệ thống thư viện PHP/MySQL. Phần README gốc của nhóm được giữ nguyên bên dưới làm tài liệu nền.

| Thành phần | Trạng thái và vị trí |
| --- | --- |
| Module của thành viên | [labs/lab08-auth](labs/lab08-auth/README.md), giữ nguyên mã tại commit a035441; 19 test |
| Module local trong báo cáo | [labs/lab08-auth-local](labs/lab08-auth-local/README.md), bản Map/AppError/factory, 20 test |
| Báo cáo Word chính | Bản Word lưu riêng trong thư mục CNPMTH (không đưa lên Git), 56 trang |
| Yêu cầu và truy vết | [BR, FR, 45 UC, quyền và giả định thiết kế](docs/requirements/library-requirements.md) |
| UML và dữ liệu | [Thiết kế nguồn và mô hình đích](docs/design/library-design.md), chưa triển khai database |
| Kiểm thử nghiệp vụ | [20 ca dự kiến](tests/test-plan.md), chưa chạy |
| Kết quả thực chạy | [Minh chứng và cách đọc](docs/evidence/README.md) |
| Đối chiếu báo cáo | [Phạm vi và vị trí từng chương](docs/report-alignment.md) |
| Peer review | [Checklist và bằng chứng cần có](docs/lab08-review.md) |

## Chạy Lab 8 trên Windows

Cài Node.js/npm. Các kết quả kèm theo ghi phiên bản thực chạy trong provenance.json. Tại thư mục gốc repository:

```powershell
npm.cmd run setup:original
npm.cmd run setup:local
npm.cmd test
npm.cmd run verify:preservation
npm.cmd run start:local
```

Bản local chạy cổng 3000. Dừng bằng Ctrl+C. Để thử mã của thành viên, dùng npm.cmd run start:original, cổng 3001. Hai bản có kho dữ liệu RAM độc lập, không có token/session/RBAC; đăng nhập chỉ xác minh tài khoản. Dữ liệu mất khi tắt tiến trình. Không ghép hai API thành một hệ thống.

## Nội dung gốc của nhóm

Các câu mô tả “chưa có mã chức năng” dưới đây thuộc khung PHP/MySQL ban đầu; không áp dụng cho hai module Node.js Lab 8 bên trên.

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