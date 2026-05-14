import { expect } from '@playwright/test';
import { test } from './fixtures/loginFixture';
import dotenv from 'dotenv';

dotenv.config();

test('Sauce Demo Standard User Login', async ({authenticatedPage}) => {
 
  // Verify that the user is logged in by checking for the presence of the inventory container
  await expect(authenticatedPage.locator('.inventory_container')).toBeVisible();

});

test('Dashboard Title Verification', async ({ authenticatedPage }) => {
  
  await expect(authenticatedPage).toHaveURL('https://www.saucedemo.com/inventory.html');
});