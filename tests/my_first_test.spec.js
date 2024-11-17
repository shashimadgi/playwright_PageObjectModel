const {test,expect}  = require('@playwright/test')
test('My first test ',async ({page}) => {

    await page.goto('https://getstan.app/')
    await expect(page).toHaveTitle('STAN')
})