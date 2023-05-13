import { chromium } from "k6/experimental/browser";
import { check } from "k6";

export const options = {
  vus: 3,
  duration: "5s",
  thresholds: {
    checks: ["rate > 0.99"],
  },
};

export default async function () {
  const browser = chromium.launch({ headless: false });
  const page = browser.newContext().newPage();

  try {
    await page.goto("https://test-api.k6.io", { waitUntil: "networkidle" });

    await Promise.all([
      page.waitForNavigation(),
      page.locator('a[href="/my_messages.php"]').click(),
    ]);

    page.locator('input[name="login"]').fill("admin");
    page.locator('input[name="password"]').fill("123");

    await Promise.all([
      page.waitForNavigation(),
      page.locator('input[type="submit"]').click(),
    ]);

    check(page, {
      header: page.locator("h2").textContent() === "Welcome, admin!",
    });
  } finally {
    page.close();
    browser.close();
  }
}
