# Kế hoạch kiểm thử nghiệp vụ thư viện

## 6.3. Kiểm thử nghiệp vụ theo ma trận truy vết

Các TC-LIB dưới đây là đặc tả kiểm thử chấp nhận được thiết kế để kiểm chứng FR01–FR20; chưa thực thi. Kết quả 20/20 local chỉ thuộc mục 6.1–6.2, không thay cho bảng này. Khi triển khai, mỗi ca cần dữ liệu đầu vào, commit, kết quả thực tế và bằng chứng.

| Mã / FR | Tình huống và kết quả mong đợi | Trạng thái |
| --- | --- | --- |
| TC-LIB01 / FR01 | Đăng nhập đúng trả 200; tài khoản bị khóa/thiếu phiên bị từ chối khi hoàn thiện FR01. | Chưa chạy |
| TC-LIB02 / FR02 | Chỉ QL cấp/khóa tài khoản; thao tác trái quyền bị từ chối. | Chưa chạy |
| TC-LIB03 / FR03 | NV sửa hồ sơ đúng quyền; người khác không sửa bằng đổi ID. | Chưa chạy |
| TC-LIB04 / FR04 | QL thêm sách; NV không dùng UC32 để vượt quyền UC04. | Chưa chạy |
| TC-LIB05 / FR05 | Vị trí/tác giả không tồn tại bị từ chối; FK hợp lệ được lưu. | Chưa chạy |
| TC-LIB06 / FR06 | Bản đang mượn không xóa; hai giao dịch không giao trùng một bản. | Chưa chạy |
| TC-LIB07 / FR07 | Tìm theo tên/mã/tác giả; hiển thị khả dụng từ bản sách. | Chưa chạy |
| TC-LIB08 / FR08 | 3 cuốn được xét; 4 cuốn hoặc tổng vượt 7 bị từ chối, chưa tạo phiếu. | Chưa chạy |
| TC-LIB09 / FR09 | Chưa duyệt không giao; giao hợp lệ tạo đúng một phiếu, gửi lặp không tạo thêm. | Chưa chạy |
| TC-LIB10 / FR10 | Trả một cuốn chỉ đóng dòng đó; sách hỏng không về khả dụng. | Chưa chạy |

## 6.3. Kiểm thử nghiệp vụ theo ma trận truy vết (tiếp)

Các TC-LIB dưới đây là đặc tả kiểm thử chấp nhận được thiết kế để kiểm chứng FR01–FR20; chưa thực thi. Kết quả 20/20 local chỉ thuộc mục 6.1–6.2, không thay cho bảng này. Khi triển khai, mỗi ca cần dữ liệu đầu vào, commit, kết quả thực tế và bằng chứng.

| Mã / FR | Tình huống và kết quả mong đợi | Trạng thái |
| --- | --- | --- |
| TC-LIB11 / FR11 | Lần 3, thêm >7 ngày hoặc trễ >1 ngày bị từ chối; yêu cầu chưa duyệt không đổi hạn. | Chưa chạy |
| TC-LIB12 / FR12 | Hạn/lịch sử đúng người; dòng chưa trả vẫn mở. | Chưa chạy |
| TC-LIB13 / FR13 | Hai cuốn trễ 1 và 3 ngày có phạt cơ sở 8.000 đồng; không cộng trùng khoảng đã chốt TK01. | Chưa chạy |
| TC-LIB14 / FR14 | Thu thiếu bị từ chối; thu đủ ghi một lần, gửi lại không thu lần hai. | Chưa chạy |
| TC-LIB15 / FR15 | NV quản lý tệp; người đọc không lấy storage_key để vượt quyền. | Chưa chạy |
| TC-LIB16 / FR16 | 3 ebook/yêu cầu; quyền hết hạn đúng mốc TK02 bị từ chối. | Chưa chạy |
| TC-LIB17 / FR17 | Chưa đăng nhập đọc công khai không ghi tiến độ; có phiên chỉ lưu dữ liệu của mình. | Chưa chạy |
| TC-LIB18 / FR18 | Thêm yêu thích lặp không trùng; thay ID tài khoản bị từ chối. | Chưa chạy |
| TC-LIB19 / FR19 | Duyệt/gia hạn tạo thông báo đúng người một lần; kiểm tra đến hạn theo lịch. | Chưa chạy |
| TC-LIB20 / FR20 | QL xem báo cáo; tổng số khớp dữ liệu mẫu, người khác không truy cập. | Chưa chạy |

Các ca trên chưa chạy. Không dùng coverage của API xác thực để chứng minh kết quả của các ca này.
