import {test as base, expect, Page} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

type MyFixtures = {
    loginPage: LoginPage
    superadminUser: Page
    msrUser: Page
    providerUser: Page
}

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage);
    },
    superadminUser: async ({ page, loginPage }, use) => {
        const username = process.env.SUPER_ADMIN_USER
        const password = process.env.SUPER_ADMIN_PASS
        const expectedLandingURL = /admin\/landing/

        if (!username || !password) {
      throw new Error('Missing Super Admin credentials');
    }
        await loginPage.login(username, password, expectedLandingURL);
        await loginPage.selectGroup('Z8811');

    await use(page);
    },
    msrUser: async ({ page, loginPage }, use) => {
        const username = process.env.MSR_USER
        const password = process.env.MSR_PASS
        const expectedLandingURL = /msr\/msr-dashboard/
        
        if (!username || !password) {
      throw new Error('Missing MSR credentials');
    }
        await loginPage.login(username, password, expectedLandingURL);
        await use(page);
    },
    providerUser: async ({ page, loginPage }, use) => {
        const username = process.env.PROVIDER_USER
        const password = process.env.PROVIDER_PASS
        const expectedLandingURL = /provider\/dashboard/
        
        if (!username || !password) {
      throw new Error('Missing Provider credentials');
    }
        await loginPage.login(username, password, expectedLandingURL);
        await use(page);
    }
})

export { expect };