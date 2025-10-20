import { test, expect } from "@playwright/test";

test("Test_Success_Otp", async ({ page }) => {
  await page.route(
    "http://localhost:3000/participants/send-otp",
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: "123456",
      });
    }
  );
  await page.goto("http://localhost:3001/");
  await page.getByRole("button", { name: "Đăng ký" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Nhập số tài khoản" }).click();
  await page
    .getByRole("textbox", { name: "Nhập số tài khoản" })
    .fill("022C543523532");
  await page.waitForTimeout(1000);
  await page
    .getByRole("textbox", { name: "Nhập email đăng ký tài khoản" })
    .click();
  await page
    .getByRole("textbox", { name: "Nhập email đăng ký tài khoản" })
    .fill("ngotrungquan@gmail.com");
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Nhập số điện thoại" }).click();
  await page
    .getByRole("textbox", { name: "Nhập số điện thoại" })
    .fill("0376846855");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Kiểm tra" }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Nhập OTP" }).click();
  await page.getByRole("textbox", { name: "Nhập OTP" }).fill("123456");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Tiếp theo" }).click();
  await page.waitForTimeout(1000);
  const errorMessage = page.getByText("THÔNG TIN THI ĐẤU");
  await expect(errorMessage).toBeVisible();
});
