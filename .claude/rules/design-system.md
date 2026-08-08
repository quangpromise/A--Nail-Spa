---
paths:
  - "**/*.html"
  - "**/*.css"
  - "**/*.tsx"
  - "**/*.jsx"
---

# Design System (theo phong cách AuthKit)

Tinh thần chung: **tối giản – sang trọng – nhiều khoảng trắng (dark space) – có điểm nhấn gradient tinh tế**. Tránh màu mè, tránh nhồi nhét nội dung.

## Màu sắc
- Nền tối chủ đạo (near-black, ví dụ `#0A0A0B` – `#0D0D10`), không dùng đen tuyệt đối
- Chữ chính: trắng/xám sáng (`#F5F5F5`), chữ phụ: xám trung tính (`#9A9AA2`)
- Điểm nhấn: 1 accent gradient duy nhất (ví dụ tím→hồng hoặc tím→xanh) dùng cho logo/tiêu đề chính, nút CTA chính, và các chi tiết nhỏ — KHÔNG lạm dụng gradient khắp trang
- Border/divider: rất mảnh, độ tương phản thấp (`rgba(255,255,255,0.08)` – `0.12`)
- Card/panel: nền tối hơn/sáng hơn nền chính một chút, bo góc lớn (16–24px), có glow/shadow mờ nhẹ khi nổi bật

## Typography
- Font sans-serif hiện đại (ví dụ Inter, Geist, hoặc Manrope)
- Tiêu đề lớn: đậm, letter-spacing hơi âm, có thể áp gradient chữ cho heading chính (như logo "AuthKit" trong ảnh mẫu)
- Phân cấp rõ ràng: hero heading rất lớn, body text nhỏ gọn, dễ đọc, tương phản vừa phải (không chói)

## Bố cục & thành phần
- Hero section: heading lớn ở giữa, mô tả ngắn, 1–2 nút CTA (nút chính dạng gradient/nổi bật, nút phụ dạng outline/ghost)
- Badge/pill nhỏ phía trên heading (ví dụ "New" hoặc tên chương trình khuyến mãi) — viền mảnh, bo tròn đầy đủ, chữ nhỏ
- Card dịch vụ: bo góc lớn, padding rộng rãi, icon đơn sắc/outline, hiệu ứng hover nhẹ (glow, nâng nhẹ)
- Có thể dùng mockup/hình ảnh dạng "device frame" hoặc ảnh sản phẩm/dịch vụ nổi trên nền tối như trong ảnh mẫu
- Nhiều khoảng trắng (thực ra là khoảng "đen") giữa các section — không dồn nội dung sát nhau
- Nút bấm: bo góc lớn hoặc pill, có gradient nhẹ hoặc solid với border sáng mảnh

## Nguyên tắc chung khi code UI
- Ưu tiên component tái sử dụng (Button, Card, Badge, Section) thay vì lặp class Tailwind dài dòng nhiều nơi
- Responsive-first: kiểm tra mobile trước, hero và card phải đẹp trên màn hình nhỏ
- Animation/transition tinh tế (150–300ms ease), không dùng hiệu ứng giật/nảy mạnh — giữ cảm giác "premium, calm"

Xem thêm: [[mandatory-rules]] cho yêu cầu bắt buộc về animation khi scroll và mobile-friendly.
