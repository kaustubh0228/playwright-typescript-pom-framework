import { test as base, Page } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../../pages/Login.page';

dotenv.config();

export const test = base.extend<{ authenticatedPage: Page }>({
    authenticatedPage: async ({ page }, use) => {
        await page.goto('/');
        await new LoginPage(page).login(process.env.saucedemo_username!, process.env.saucedemo_password!);
        await use(page);
    },
});

export const expect = test.expect;