import { test, expect } from '@playwright/test';

test('Billing Page should display subscription and invoice sections', async ({ page }) => {
  await page.goto('http://localhost:5176/billing');

  // Check for the subscription management section
  await expect(page.locator('text=Subscription Management')).toBeVisible();
  await expect(page.locator('text=Current Plan:')).toBeVisible();
  await expect(page.locator('button:has-text("Change Plan")')).toBeVisible();
  await expect(page.locator('button:has-text("Cancel Subscription")')).toBeVisible();

  // Check for the invoice history section
  await expect(page.locator('text=Invoice History')).toBeVisible();
  await expect(page.locator('text=Invoice #001')).toBeVisible();
  await expect(page.locator('text=Invoice #002')).toBeVisible();
});
