# Tech Stack

- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** TailwindCSS
- **UI components:** shadcn/ui làm nền, tùy biến theo [[design-system]] riêng (không giữ nguyên style mặc định)
- **Icons:** lucide-react
- **Fonts:** Google Fonts qua `next/font` (xem phần Typography trong [[design-system]])
- **Deploy target:** Vercel (hoặc bất kỳ static host nào nếu dùng `next export`)

Lý do chọn Next.js: đây là site giới thiệu dịch vụ của một tiệm nail thật — cần SEO tốt (khách tìm "nail salon gần tôi", "spa quận X"...), tốc độ tải nhanh, và dễ mở rộng thêm blog/booking sau này.

> Lưu ý: bản prototype tĩnh hiện tại (`index.html`, `css/style.css`, `js/main.js`) dùng HTML/CSS/JS thuần để lặp thiết kế nhanh. Khi chuyển sang bản chính thức, migrate sang Next.js theo stack ở trên.
