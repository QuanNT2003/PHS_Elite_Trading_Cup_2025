import { test, expect } from "@playwright/test";

test("Test_WrongFormat_AccountNumber", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Đăng ký" }).click();
  await page.waitForTimeout(1000);
  await page.locator("#AccountNumber").click();
  await page.locator("#AccountNumber").fill("022C111234");
  await page.waitForTimeout(1000);
  await page.locator("#Email").click();
  await page.locator("#Email").fill("ngotrungquan@gmail.com");
  await page.waitForTimeout(1000);
  await page.locator("#Phone").click();
  await page.locator("#Phone").fill("03657657");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Kiểm tra" }).click();
  await page.waitForTimeout(1000);
  const errorMessage = page.getByText(
    "Số điện thoại không hợp lệ (phải có 10 số và bắt đầu bằng 0 hoặc +84), vui lòng thử lại"
  );
  await expect(errorMessage).toBeVisible();
});
