const { After, Before, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, playwright } = require('playwright');

let page, browser;

setDefaultTimeout(60000);

Before(async () => {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://www.facebook.com/");
});

After(async () => {
    await browser.close();
});

module.exports = { page, browser};
