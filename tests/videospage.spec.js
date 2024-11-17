import { test, expect } from '@playwright/test'
const { chromium } = require('@playwright/test'); // Import chromium


test('slowmotion video', async () => {


    // Launch browser
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });
    // Create a new incognito browser context
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 600 }
        }
    });   // Create a new page inside context.
    const page = await context.newPage();
    await page.goto('https://demo.applitools.com/');
    await page.getByPlaceholder('Enter your username').click();
    await page.getByPlaceholder('Enter your username').fill('shashi');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('12435');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('.top-icon > i').click();
    await page.locator('.top-icon > i').click();
    await context.close();

})