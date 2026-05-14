import { Page } from '@playwright/test';

export class LoginPage {
    private usernameInput;
    private passwordInput;
    private loginButton;

    constructor(private page: Page) {
        this.usernameInput = this.page.locator('#user-name');
        this.passwordInput = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}