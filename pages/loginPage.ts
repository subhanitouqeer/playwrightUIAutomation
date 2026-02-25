import { Page, expect } from "@playwright/test";

export class LoginPage {
    readonly page: Page
    constructor(page: Page) {
        this.page = page;
    }

    async login(username: string, password: string) {
        await this.page.goto('https://mycarehc.com/');
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.locator('.hco-login-form-container').getByRole('button', {name: 'Login'}).click();
    }

    async selectGroup(groupName: string) {
        await this.page.getByPlaceholder('Search group').click();
        await expect(this.page.locator('#cdk-overlay-0').getByRole('listbox')).toBeVisible();
        await this.page.getByPlaceholder('Search group').fill(groupName);
        await this.page.locator('#cdk-overlay-0').getByRole('listbox').getByRole('option').getByText(groupName).click();
        await this.page.locator('.sub-container .submit-button').getByText('Continue').click();
    }
}