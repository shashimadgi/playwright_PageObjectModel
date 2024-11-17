import { test, expect } from '@playwright/test';

test('login applicationTools', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    await page.getByPlaceholder('Enter your username').click();
    await page.getByPlaceholder('Enter your username').fill('shashi');
    await page.getByPlaceholder('Enter your password').click();
    await page.getByPlaceholder('Enter your password').fill('12435');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('.top-icon > i').click();
    await page.locator('.top-icon > i').click();

    // ---------------------
    // await context.close();
    await page.close();
});

test('login test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // await page.pause()
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').press('CapsLock');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByText('TestOne Lat').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    // ---------------------
    // //   await context.close();
    await page.close();


})
test('login test 3', async ({ page }) => {

    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').press('ControlOrMeta+a');
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').press('ControlOrMeta+a');
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.locator('#nopSideBarPusher i').click();
    await page.locator('text=Logout').click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    await page.close();
})