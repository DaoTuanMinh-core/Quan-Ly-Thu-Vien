# Module Lab 8 của thành viên

Giữ nguyên app.js, services/authService.js, test/auth.test.js, package.json, package-lock.json và .gitignore tại commit a0354412f65fbe20c53bcc91b3ed5a7b4ba15290 của huy-203-stu-tdtu. Chỉ bổ sung README và server.js để chạy thủ công; không thay logic hoặc test của tác giả.

Từ root repository: npm.cmd run setup:original; npm.cmd run test:original; npm.cmd run start:original. API ở http://127.0.0.1:3001. Có POST /api/auth/register và POST /api/auth/login, JSON gồm username/password. Đăng ký trả 201; đăng nhập trả 200; trùng tên trả 409; sai thông tin trả 401.

Đây là bản 19 test, dùng mảng, AuthError và trạng thái dùng chung trong tiến trình; không gán mô tả Map/AppError/factory của bản local cho module này. Kết quả độc lập lưu ở docs/evidence/original. Coverage chỉ đo app.js và services/**/*.js.
