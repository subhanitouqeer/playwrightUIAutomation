// import { LoginPage} from '../pages/loginPage';
import { test, expect  } from '../fixtures/supaeradminLoginFixture';

test('Logging into myCare with fixture', async({ loginPage, superadminUser }) => {
  await expect(superadminUser).toHaveURL(/admin\/landing/); 
});
// test.skip('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test.skip('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

// test('Logging into myCare', async({page}) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.login('touqeer.superadmin', 'Login#123');

//   await expect(page).toHaveURL(/landing/); 

//   await loginPage.selectGroup('Z8811');

//   await expect(page).toHaveURL(/admin\/landing/); 
// });
