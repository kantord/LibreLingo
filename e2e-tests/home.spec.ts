import { test, expect } from '@playwright/test';

const baseURL = 'http://localhost:3000/'

test('has the correct content', async ({ page }) => {
  await page.goto(baseURL);

  const firstCard = page.getByRole('listitem').first(); 

  await expect(page).toHaveTitle("LibreLingo");
  await expect(firstCard.getByRole('heading')).toBeVisible();
  await expect(firstCard.getByRole('link', { name: 'Go to course' })).toBeVisible();
});

test('all card buttons lead to URLs matching the pattern', async ({ page }) => {
  const courseHomePagePattern = new RegExp(`[^/]+/course/[^/]+`);
  await page.goto(baseURL);

  const cards = await page.getByRole('listitem').all();
  
  expect(cards.length).toBeGreaterThanOrEqual(2);
  const urls = new Set();

  for (const card of cards) {
    const button = card.getByRole('link', { name: 'Go to course' });
    const url = await button.getAttribute('href');
    
    expect(url).toMatch(courseHomePagePattern);
    urls.add(url);
  }

  // each course has to have a unique url
  expect(urls.size).toBeGreaterThanOrEqual(cards.length);
});
