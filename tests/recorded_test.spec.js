import { test, expect } from '@playwright/test';

test('sauce lab test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.google.com/search?q=suacedemo&oq=suacedemo&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDQyMjlqMGoyqAIAsAIB&sourceid=chrome&ie=UTF-8');
  await page.getByRole('link', { name: 'Swag Labs Swag Labs https://' }).click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});