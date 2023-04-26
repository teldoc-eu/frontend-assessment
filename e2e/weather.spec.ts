import { test, expect } from '@playwright/test';

test('present weather for typed location @quickAndDirty', async ({ page }) => {
  await page.goto('/');

  const inputLocator = page.getByRole('textbox', { name: 'Search city or Zip code' });
  await inputLocator.fill('Warsaw');
  // For some reason playwright doesn't trigger event on enter or click when used separately but when used together it works fine
  await inputLocator.press('Enter');
  await page.getByLabel('enter').click({ force: true });

  await page.waitForResponse(
    (resp) => resp.url().includes('/forecast.json') && resp.status() === 200
  );

  await expect(page.getByText('Warsaw')).toBeVisible();
  await expect(page.getByText('Hourly')).toBeVisible();
  await expect(page.getByText('Next 7 days')).toBeVisible();
});
