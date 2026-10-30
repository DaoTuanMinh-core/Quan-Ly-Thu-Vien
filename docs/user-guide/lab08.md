# Chạy và tạo minh chứng Lab 8

Theo README root để cài hai module và chạy test. Chọn một server: local cổng 3000 hoặc original cổng 3001. Cả hai nhận JSON username/password tại POST /api/auth/register và POST /api/auth/login.

Ví dụ PowerShell cho bản local (tài khoản giả; đổi tên nếu đã đăng ký trong cùng tiến trình):

```powershell
$body = @{ username = 'student_demo'; password = 'DemoPass123' } | ConvertTo-Json
Invoke-RestMethod -Method Post -Uri http://127.0.0.1:3000/api/auth/register -ContentType 'application/json' -Body $body
Invoke-RestMethod -Method Post -Uri http://127.0.0.1:3000/api/auth/login -ContentType 'application/json' -Body $body
```

Đăng ký thành công 201, đăng nhập thành công 200; đăng ký lại 409; mật khẩu sai 401; thiếu dữ liệu 400. Chụp request/response và mã HTTP bằng Postman nếu cần ảnh cho báo cáo. Dùng cổng 3001 để thử bản thành viên; không dùng cùng kết quả cho cả hai.

Không có frontend hoàn chỉnh trong nhánh hiện tại. Một số file JS từng được thêm rồi xóa trong lịch sử; xem docs/member-work-preservation.md. Không phục hồi những file này thành giao diện đang hoạt động khi chưa có quyết định của tác giả/nhóm.
