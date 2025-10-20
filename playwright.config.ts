import { defineConfig } from "@playwright/test";

export default defineConfig({
  workers: 3, // 👈 Giới hạn chỉ 3 worker
  timeout: 60000, // (tuỳ chọn) tăng thời gian timeout toàn cục lên 60s
  //   use: {
  //     headless: false, // (tuỳ chọn) bật trình duyệt hiển thị
  //     actionTimeout: 15000, // giới hạn mỗi action 15s
  //   },
});
