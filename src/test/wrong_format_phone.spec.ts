import { test, expect } from "@playwright/test";

test("Test_WrongFormat_AccountNumber", async ({ page }) => {
  await page.goto("http://localhost:3001/");
  await page.waitForTimeout(1000);
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
    .fill("037684685");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Kiểm tra" }).click();
  await page.waitForTimeout(1000);
  const errorMessage = page.getByText(
    "Số điện thoại không hợp lệ (phải có 10 số và bắt đầu bằng 0 hoặc +84), vui lòng thử lại"
  );
  await expect(errorMessage).toBeVisible();
});
