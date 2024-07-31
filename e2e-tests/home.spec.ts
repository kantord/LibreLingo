import { test, expect } from '@playwright/test'

test('has the correct content', async ({ page }) => {
    await page.goto('/')

    const firstCard = page.getByRole('listitem').first()

    await expect(page).toHaveTitle('LibreLingo')
    await expect(firstCard.getByRole('heading')).toBeVisible()
    await expect(firstCard.getByRole('link', { name: 'Learn' })).toBeVisible()
})

test('all card buttons lead to URLs matching the pattern', async ({ page }) => {
    const courseHomePagePattern = new RegExp(`[^/]*/courses/[^/]+`)
    await page.goto('/')

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
