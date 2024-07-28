import { test, expect } from '@playwright/test'

test('has the correct content', async ({ page }) => {
    await page.goto('/en/courses/test-1')

    await expect(
        page.getByRole('heading', { name: 'Test Language' })
    ).toBeVisible()
})
