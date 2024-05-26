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
    await expect(
      page.locator(
        "//div[text()='Billing name']//..//button[text()='Deja Brady']"
      )
    ).toHaveText("Deja Brady");
    await expect(
      page.locator("//button[contains(text(),'****')]")
    ).toContainText("1234");
  });

  test("TC02", async ({ page }) => {
    const log = new Login(page);
    await log.login();
    await page.locator("//span[text()='order']").click();
    await page.locator("//span[text()='list']").click();
    await page
      .locator("//input[contains(@placeholder,'Search customer')]")
      .fill("cor");
    await expect(page.locator("//span[text()='Cortez Herring']")).toHaveText(
      "Cortez Herring"
    );
    await expect(page.locator("//p[text()='1–1 of 1']")).toContainText(
      "1–1 of 1"
    );
  });

  test("TC03", async ({ page }) => {
    const log = new Login(page);
    await log.login();
    await page.locator("//span[text()='job']").click();
    await page.locator("//span[text()='list']").click();
    await page.locator("//button[text()='Filters']").click();
    await page
      .locator("(//h6[text()='Employment Types']//..//span)[7]")
      .check();
    await page
      .locator("(//button[@aria-label='Reset']//..//button)[2]")
      .click();
    await page.waitForSelector("//div[@class='MuiBox-root css-1csqgpf']");
    const searchResult = await page.$$(
      "//div[@class='MuiBox-root css-1csqgpf']"
    );
    for (const element of searchResult) {
      const elementText = await element.textContent();
      expect(elementText).toContain("On Demand");
      console.log(elementText);
    }
  });

  test("TC04", async ({ page }) => {
    const log = new Login(page);
    await log.login();
    await page.locator("//span[text()='chat']").click();
    await page.locator("//div//h6[text()='Deja Brady']").click();
    await page.locator("//input[@placeholder='Type a message']").click();
    await page.keyboard.type("Hello, how are you?");
    await page.focus("//input[@placeholder='Type a message']");
    await page.keyboard.press("Enter");
    await expect(
      page.locator("//div[text()='Hello, how are you?']")
    ).toBeVisible();
  });

  test("TC05", async ({ page }) => {
    const log = new Login(page);
    await log.login();
    await page.locator("//span[text()='File Manager']").click();
    await page
      .locator("(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[1]")
      .check();
    await page.locator("//button[@aria-label='Delete']").click();
    await page.locator("//button[text()='Delete']").click();
    await expect(page.locator("//span[text()='No Data']")).toBeVisible();
  });
});
