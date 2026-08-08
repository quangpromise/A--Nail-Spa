# Quy tắc bắt buộc

- **Screenshot đối chiếu design:** Sau mỗi thay đổi UI lớn (thêm/sửa section, đổi layout, đổi màu/typography chính), phải chụp screenshot trang đang chạy và so sánh trực quan với `www.authkit.com_.png` để kiểm tra độ nhất quán về tinh thần thiết kế (khoảng trắng, độ tương phản, gradient, bố cục) trước khi coi là hoàn thành
- **Mobile-friendly bắt buộc:** Mọi section phải test và đảm bảo hiển thị tốt trên mobile (viewport nhỏ nhất ~375px) — không chỉ desktop. Kiểm tra breakpoint sm/md/lg trước khi báo hoàn thành một section
- **Animation khi scroll bắt buộc:** Mọi section (Hero, Services, Pricing, Gallery, Testimonials, Contact, Footer) phải có hiệu ứng xuất hiện khi cuộn tới (fade-in/slide-up nhẹ, dùng ví dụ `framer-motion` hoặc `IntersectionObserver` + CSS transition), tuân theo tinh thần "tinh tế, 150–300ms ease, không giật/nảy mạnh" đã nêu ở [[design-system]]

Đây là 3 điều kiện bắt buộc để coi một section/thay đổi UI là "hoàn thành" — không được bỏ qua bất kỳ điều nào.
