import { test, expect } from '@playwright/test';

test.describe('Maintenance Pages', () => {
  test('should display the deployment page', async ({ page }) => {
    await page.goto('http://localhost:5175/maintenance/deployment');
    await expect(page.locator('text=One-Click Deployment')).toBeVisible();
    await page.screenshot({ path: 'verification/deployment-page.png' });
  });

  test('should display the AI monitoring page', async ({ page }) => {
    await page.goto('http://localhost:5175/maintenance/monitoring');
    await expect(page.locator('text=AI-Powered Monitoring')).toBeVisible();
    await page.screenshot({ path: 'verification/monitoring-page.png' });
  });

  test('should display the new feature request form', async ({ page }) => {
    await page.goto('http://localhost:5175/maintenance/new-feature');
    await expect(page.locator('text=Request a New Feature')).toBeVisible();
    await page.screenshot({ path: 'verification/new-feature-page.png' });
  });
});
