# IME Guard: Fix my Typing

[English](README.md) | [繁體中文](README.zh-TW.md) | [简体中文](README.zh-CN.md) | [日本語](README.ja.md) | [한국어](README.ko.md) | [Tiếng Việt](README.vi.md) | [हिन्दी](README.hi.md) | [தமிழ்](README.ta.md) | [ไทย](README.th.md)

IME Guard: Fix my Typing là một tiện ích mở rộng dành cho Safari được thiết kế để khắc phục lỗi phổ biến của WebKit (trình duyệt Safari) khi bạn nhấn phím `Enter` trong lúc đang sử dụng bộ gõ tiếng Việt (IME) có dấu (như Telex hoặc VNI). Trên các trang web như Facebook, Gemini, Slack và Discord, lỗi này sẽ khiến tin nhắn bị gửi đi khi bạn chỉ muốn hoàn thành việc gõ dấu.

Nếu bạn gõ tiếng Việt, tiếng Nhật, tiếng Hàn hay tiếng Trung, bạn có thể đã gặp phải sự cố khó chịu này khi quá trình ghép chữ chưa xong nhưng tin nhắn đã bị gửi đi. Tiện ích này sẽ khắc phục điều đó!

## 🌟 Tính năng nổi bật

- **Danh sách trắng tùy chỉnh (Whitelist)**: Thêm các tên miền mà bạn gặp lỗi này (ví dụ: `facebook.com` hoặc `gemini.google.com`).
- **Hỗ trợ ký tự đại diện (Wildcard)**: Sử dụng `*.facebook.com` để bao gồm tất cả các tên miền phụ.
- **Ngăn chặn thông minh**: Phím `Enter` chỉ bị chặn trong lúc bạn đang thực sự gõ và ghép dấu qua bộ gõ. Phím `Enter` thông thường vẫn hoạt động hoàn hảo.
- **Giao diện tối (Dark Mode)**: Giao diện cấu hình hiện đại, tinh tế.
- **Hỗ trợ đa ngôn ngữ**: Tự động phát hiện ngôn ngữ của hệ thống và trình duyệt (Hỗ trợ tiếng Anh, tiếng Nhật, tiếng Hàn, tiếng Trung Phồn thể, tiếng Trung Giản thể và tiếng Việt).

## 🚀 Hướng dẫn cài đặt

Hiện tại, tiện ích mở rộng này chưa có trên Mac App Store. Bạn có thể tự biên dịch và cài đặt qua Xcode:

1. Đảm bảo rằng bạn đã cài đặt [Xcode](https://developer.apple.com/xcode/) trên máy Mac.
2. Sao chép (Clone) kho lưu trữ này về máy tính của bạn.
3. Mở Terminal và di chuyển đến thư mục dự án.
4. Chạy lệnh sau để chuyển đổi dự án thành tiện ích mở rộng Safari:
   ```bash
   xcrun safari-web-extension-converter .
   ```
5. Xcode sẽ tự động mở dự án sau khi chuyển đổi. Nhấn nút **Run** ở góc trên cùng bên trái (hoặc nhấn `Cmd + R`) để biên dịch và chạy.
6. Mở Safari, đi tới **Cài đặt (Settings) > Tiện ích mở rộng (Extensions)**, và đánh dấu vào ô **IME Guard: Fix my Typing** để bật nó lên.
7. (Tùy chọn) Nếu tiện ích không hiển thị, bạn có thể cần phải bật menu **Phát triển (Develop)** trong cài đặt **Nâng cao (Advanced)** của Safari, sau đó đánh dấu vào **Cho phép tiện ích mở rộng chưa được ký (Allow Unsigned Extensions)** trong menu Phát triển.

## 💡 Cách sử dụng

1. Khi bạn truy cập một trang web gặp lỗi "gửi sớm khi nhấn Enter" (chẳng hạn như Facebook).
2. Nhấp vào biểu tượng **IME Guard: Fix my Typing** trên thanh công cụ của Safari.
3. Nhấp vào **Bảo vệ trang này (Protect Current Site)**. Biểu tượng sẽ hiển thị huy hiệu **ON** màu xanh lá.
4. Bây giờ bạn có thể gõ tiếng Việt bằng IME và nhấn `Enter` thoải mái. Tin nhắn sẽ không còn bị gửi đi ngoài ý muốn nữa!

Bạn cũng có thể nhấp vào nút "Cài đặt" ở góc phải của hộp thoại để quản lý danh sách các tên miền được bảo vệ theo cách thủ công.

## 🛠 Chi tiết kỹ thuật

- Xây dựng bằng **Manifest V3**.
- Sử dụng Event Listener ở giai đoạn `Capture Phase` trong quá trình `document_start` để chặn phím Enter của IME (`e.stopImmediatePropagation()`) trước khi các framework frontend như React có thể bắt được sự kiện `keydown`.

## 📄 Giấy phép

MIT License

## ☕️ Hỗ trợ & Liên hệ

Nếu công cụ này giúp ích cho bạn, bạn có thể [mời tôi một ly cà phê trên Ko-fi](https://ko-fi.com/mickhuang)!
Hoặc liên hệ với tôi tại [www.mickhuang.com](https://www.mickhuang.com).
