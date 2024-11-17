import { test } from '@playwright/test';

// Skip this test
test.skip('skip this test', async ({ page }) => {
    // await page.goto('https://example.com');
    // await expect(page).toHaveTitle('Example Domain');
});

// Mark this test as expected to fail
test('not yet ready', async ({ page }) => {
    test.fail(); // Mark this test as expected to fail
     // Intentional failure
});

// Mark this test as needing a fix
test.fixme('test to be fixed', async ({ page }) => {
   
});

// Mark this test as slow
test('slow test', async ({ page }) => {
    test.slow(); // Mark this test as slow

});

// Focused test (if enabled, only this test will run)
// test.only('focus this test', async ({ page }) => {
    
// });

// Corrected tagged test
test('Test full report @smoke', async ({ page }) => {

});
