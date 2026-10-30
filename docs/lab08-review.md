# Peer review Lab 8

PR gốc của thành viên: https://github.com/DaoTuanMinh-core/Quan-Ly-Thu-Vien/pull/1 (feature/auth-module → develop). Khi kiểm tra ngày 30/10/2026, PR còn mở và chưa merge. Dữ liệu API thời điểm kiểm tra nằm trong evidence/github-pr1.json.

## Các việc nhóm thực hiện trên GitHub

1. Mỗi thành viên đọc PR của thành viên khác và ghi ít nhất ba góp ý cụ thể theo yêu cầu Lab 8. Chỉ rõ file/dòng, ảnh hưởng và cách cải thiện; không sao chép nhận xét giả.
2. Tác giả trả lời và sửa bằng commit trên nhánh phù hợp. Không dùng bản local 20 test để nhận là đã sửa mã PR 19 test.
3. Chạy lại test/coverage tại commit mới, cập nhật mô tả PR và ảnh minh chứng; reviewer kiểm tra lại.
4. Chỉ merge khi nhóm đã review và kiểm thử. Bản bổ sung này không tự merge PR #1 hoặc nhánh develop/main.

## Gợi ý kiểm tra, chưa phải nhận xét của thành viên

- Mã PR có dữ liệu dùng chung trong tiến trình: kiểm tra tính độc lập của test và chiến lược khởi tạo dữ liệu.
- Đăng nhập chưa tạo session/token/RBAC; cần mô tả đúng giới hạn FR01.
- Lỗi đăng nhập, payload quá lớn và dữ liệu sai kiểu cần có kết quả kiểm thử; không chỉ kiểm tra luồng thành công.
- Tên trùng phải kiểm tra sau await hash; test đồng thời xác nhận chỉ một yêu cầu tạo thành công.

## Ảnh minh chứng cần chụp

Chụp API đăng ký/đăng nhập và lỗi; terminal test; coverage của từng bản; PR có tác giả/nhánh; các góp ý thật, commit sửa, kiểm tra lại và trạng thái merge thực tế. Ảnh chụp phải thấy nguồn/phiên bản; che token và dữ liệu cá nhân. Các log kèm repository là minh chứng máy chạy, không thay nhận xét peer review.
