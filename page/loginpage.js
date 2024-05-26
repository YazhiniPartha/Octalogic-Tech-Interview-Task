const { expect } = require("@playwright/test");

exports.Login = class Login {
  constructor(page) {
    this.page = page;
  }

  async login() {
    await this.page.goto("https://minimals.cc/");
    await this.page.locator("//a[text()='Login']").click();
    await this.page.locator("//input[@name='email']").fill("demo@minimals.cc");
    await this.page.locator("//input[@name='password']").fill("demo1234");
    await this.page.locator("//button[text()='Login']").click();
  }
};
