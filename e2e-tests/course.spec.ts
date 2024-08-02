import { test, expect } from '@playwright/test'

test('has the correct content', async ({ page }) => {
    await page.goto('/en/courses/test-1')

    await expect(
        page.getByRole('heading', { name: 'Test Language' })
    ).toBeVisible()
})

test('has cards leading to module pages', async ({ page }) => {
    const courseHomePagePattern = new RegExp(
        `[^/]*/courses/[^/]+/modules/[^/]+`
    )
    await page.goto('/en/courses/test-1')

    const cards = await page.getByRole('listitem').all()

    expect(cards.length).toBeGreaterThanOrEqual(1)
    const urls = new Set()

    for (const card of cards) {
        const button = card.getByRole('link', { name: 'Learn' })
        const url = await button.getAttribute('href')

        expect(url).toMatch(courseHomePagePattern)
        urls.add(url)
    }

    // each course has to have a unique url
    expect(urls.size).toBeGreaterThanOrEqual(cards.length)
})
