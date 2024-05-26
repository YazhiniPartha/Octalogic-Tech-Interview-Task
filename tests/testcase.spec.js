const { test, expect } = require("@playwright/test");
const { Login } = require("../page/loginpage");

test.describe("Octalogic Tech Test", () => {
  test("TC01", async ({ page }) => {
    const log = new Login(page);
    await log.login();
    await page.locator("//span[text()='user']").click();
    await page.locator("//span[text()='account']").click();
    await page.locator("//button[text()='Billing']").click();
    await page.locator("//button[text()='Jayvion Simon']").click();
    await page.locator("(//div/h6[text()='Deja Brady'])[2]").click();
    await page.locator("//button[contains(text(),'****')]").click();
    await page.locator("(//div/h6[contains(text(),'1234')])[2]").click();
  });
});
