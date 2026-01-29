import {firefox} from 'playwright';
import {test, expect} from '@playwright/test';

// Get environment from env variable or default to development
const env = process.env.ENVIRONMENT || 'development';

test('login test', {annotations :
   [ { type: 'issue', description: 'JIRA-1234' },
    { type: 'author', description: 'QA Team' }]
  },async ({ page }, ) => {
  
console.log(`Running test in ${env} environment`);
await page.goto('https://amazon.com');
    await expect(page).toHaveURL('https://www.amazon.com/');
    await expect(page).toHaveTitle(/Amazon/);
    
});

test('login test2', {annotations :
   [ { type: 'issue', description: 'JIRA-1678o4' },
    { type: 'author', description: 'QA tjkj Team' }]
  },async ({ page }, testInfo) => {
  
console.log(`Running test in ${env} environment`);
await page.goto('https://amazon.com');
    await expect(page).toHaveURL('https://www.amazon.com/');
    await expect(page).toHaveTitle(/Amazon/);
    
});

