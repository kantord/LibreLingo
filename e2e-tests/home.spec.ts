import { test, expect } from '@playwright/test';

test('has the correct content', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  const firstCard = await page.getByRole('listitem').first(); 

  await expect(page).toHaveTitle("LibreLingo");
  await expect(firstCard.getByRole('heading')).toBeVisible();
  await expect(firstCard.getByRole('button', { name: 'Go to course' })).toBeVisible();
});
