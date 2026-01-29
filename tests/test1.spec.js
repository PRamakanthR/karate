import {firefox} from 'playwright';
import {test, expect} from '@playwright/test';

// test("test1",async () => {

//     const browser = await firefox.launch();
//     const context1= await browser.newContext();
//     const page1 = await context1.newPage();
//     await page1.goto('https://amazon.com');
//     await expect(page1).toHaveURL('https://www.amazon.com/');
//     await page1.click("#nav-search-submit-button");
//     await page1.fill("input[name='field-keywords']","nike");
//     await page1.click("#nav-search-submit-buttonf");
//     await expect(page1).toHaveURL(/.*nike.*/);
//     await browser.close();
// });
test('login test', {annotations :
   [ { type: 'issue', description: 'JIRA-1234' },
    { type: 'author', description: 'QA Team' }]
  },async ({ page }, ) => {
  

await page.goto('https://amazon.com');
    await expect(page).toHaveURL('https://www.amazon.com/');
    await page.click("#nav-search-submit-button");
    await page.fill("input[name='field-keywords']","nike");
    await page.click("#nav-search-submit-button");
    await expect(page).toHaveURL(/.*nike.*/);
});

test('login test2', {annotations :
   [ { type: 'issue', description: 'JIRA-1678o4' },
    { type: 'author', description: 'QA tjkj Team' }]
  },async ({ page }, testInfo) => {
  

await page.goto('https://amazon.com');
    await expect(page).toHaveURL('https://www.amazon.com/');
    await page.click("#nav-search-submit-button");
    await page.fill("input[name='field-keywords']","nike");
    await page.click("#nav-search-submit-button");
    await expect(page).toHaveURL(/.*nike.*/);
});
