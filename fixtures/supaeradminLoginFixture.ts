import {test as base, expect, Page} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

type MyFixtures = {
    loginPage: LoginPage;
    superadminUser: Page;
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage);
    },
    superadminUser: async ({ page, loginPage }, use) => {
        const username = process.env.SUPER_ADMIN_USER
        const password = process.env.SUPER_ADMIN_PASS

        if (!username || !password) {
      throw new Error('Missing SUPER_ADMIN_USER or SUPER_ADMIN_PASS environment variables');
    }
        await loginPage.login(username, password);
        await loginPage.selectGroup('Z8811');

    await use(page);
    }
})

export { expect };