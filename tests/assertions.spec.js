import { test, expect } from '@playwright/test';

test('assertions check', async({page}) =>{

await page.goto('https://kitchen.applitools.com/')
// await page.pause()
await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
// await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()
await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
// await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

await expect.soft (page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
await expect.soft (page.locator('text=The Kitchen')).not.toHaveText('ABCD')
await expect(page).toHaveURL(/kitchen.applitools.com/);
await expect(page).toHaveTitle(/.*Kitchen/);
await expect(page).toHaveScreenshot();



})