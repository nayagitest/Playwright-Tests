import { chromium, Page } from 'playwright';

async function acceptCookies(page: Page) {
  try {
    await page.click('button:has-text("Accept")', { timeout: 5000 });
  } catch {
    console.log('No cookie popup found');
  }
}

(async () => {
  const browser = await chromium.launch({
    headless: false, // set true for CI
    slowMo: 100,
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
  });

  const page = await context.newPage();

  // 1️⃣ Open OLX India
  await page.goto('https://www.olx.in', {
    waitUntil: 'domcontentloaded',
  });

  await acceptCookies(page);

  // 2️⃣ Search for product
  await page.waitForSelector('input[type="search"]');
  await page.fill('input[type="search"]', 'iPhone 13');
  await page.keyboard.press('Enter');

  // 3️⃣ Wait for search results
  await page.waitForSelector('[data-aut-id="itemBox"]', {
    timeout: 15000,
  });

  // 4️⃣ Click first product listing
  const firstItem = page.locator('[data-aut-id="itemBox"]').first();
  await firstItem.click();

  // Switch to listing tab (OLX opens new tab sometimes)
  const pages = context.pages();
  const listingPage = pages[pages.length - 1];

  await listingPage.waitForLoadState('domcontentloaded');
  console.log('Opened product listing');

  // 5️⃣ Click "Chat with seller"
  try {
    await listingPage.waitForSelector(
      'button:has-text("Chat")',
      { timeout: 8000 }
    );
    await listingPage.click('button:has-text("Chat")');
    console.log('Chat with seller clicked');
  } catch {
    console.log('Chat button not available (login may be required)');
  }

  // Keep browser open for demo
  await listingPage.waitForTimeout(10000);

  await browser.close();
})();
