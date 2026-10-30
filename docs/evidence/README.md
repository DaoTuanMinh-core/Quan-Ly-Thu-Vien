# Minh chứng chạy độc lập

original/ đo mã thành viên tại a035441 (19 test); local/ đo mã local trong báo cáo (20 test). Mỗi thư mục có test-run.txt, test-results.json, coverage-summary.json và provenance.json ghi ngày chạy, Node và hash từng file.

Chạy npm.cmd test từ root để tái tạo cả hai. HTML coverage nằm trong labs/<tên module>/coverage/index.html, không commit thư viện hoặc HTML sinh tự động. Phạm vi đo là app.js và services/**/*.js; không đo wrapper server.js và không đo hệ thống PHP/MySQL.

github-pr1.json là dữ liệu review API lúc kiểm tra, không phải bằng chứng PR đã merge. Snapshot không tự cập nhật theo GitHub.
