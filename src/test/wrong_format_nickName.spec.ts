import { test, expect } from "@playwright/test";

test("test_WrongFormat_nickName", async ({ page }) => {
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
  await page.getByRole("textbox", { name: "Nhập nickname của bạn" }).click();
  await page
    .getByRole("textbox", { name: "Nhập nickname của bạn" })
    .fill("@MasterKaito");
  await page.waitForTimeout(1000);
  await page
    .getByRole("textbox", { name: "Chọn trường học hoặc tìm kiếm" })
    .click();
  await page.getByText("Đại học Kinh tế - Luật (UEL)", { exact: true }).click();
  await page.waitForTimeout(1000);
  await page.getByRole("textbox", { name: "Nhập mã số sinh viên" }).click();
  await page
    .getByRole("textbox", { name: "Nhập mã số sinh viên" })
    .fill("21521326");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Đăng ký" }).click();
  await page.waitForTimeout(1000);
  const errorMessage = page.getByText(
    "Nickname không được chứa ký tự đặc biệt hoặc khoảng trắng, vui lòng thử lại"
  );
  await expect(errorMessage).toBeVisible();
});
