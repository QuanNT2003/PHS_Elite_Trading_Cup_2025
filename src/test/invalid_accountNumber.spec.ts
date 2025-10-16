import { test, expect } from "@playwright/test";

test("Test_Invalid_AccountNumber", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Đăng ký" }).click();
  await page.waitForTimeout(1000);
  await page.locator("#AccountNumber").click();
  await page.locator("#AccountNumber").fill("0465");
  await page.waitForTimeout(1000);
  await page.locator("#Email").click();
  await page.locator("#Email").fill("ngotrungquan@gmail.com");
  await page.waitForTimeout(1000);
  await page.locator("#Phone").click();
  await page.locator("#Phone").fill("0365754657");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Kiểm tra" }).click();
  await page.waitForTimeout(1000);
  // ✅ Kiểm tra thông báo lỗi xuất hiện
  const errorMessage = page.getByText(
    "Số tài khoản phải có ít nhất 5 ký tự, vui lòng thử lại"
  );
  await expect(errorMessage).toBeVisible();

  // // (Tuỳ chọn) kiểm tra chính xác nội dung
  // await expect(errorMessage).toHaveText(
  //   "Số tài khoản phải có ít nhất 5 ký tự, vui lòng thử lại"
  // );
});
