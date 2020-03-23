describe("Fanfare screen", () => {
    const CARDS_TEST_URL = (number) =>
        `/course/test/skill/_short_input_test${number}`

    describe("Display fanfare screen", () => {
        beforeEach(() => {
            cy.visit(CARDS_TEST_URL(1))
            cy.get("input[type=text]").type("la leche")
            cy.contains("Submit").click()
            cy.contains("Continue").click()
        })

        it("Options", function () {
            cy.percySnapshot(this.test.fullTitle())
        })

        it("Fanfare screen visible", () => {
            cy.contains(/Lesson completed!/).should("be.visible")
        })

        it("Continue button visible", () => {
            cy.contains(/Continue to course page/).should("be.visible")
        })

        it("Clicking continue should lead to course page", () => {
            cy.contains(/Continue to course page/).click()
            cy.url().should("match", /course\/test\/?$/)
        })

        it("Go to course page with keyboard", () => {
            cy.get("body").trigger("keydown", { keyCode: 13, which: 13 })
            cy.url().should("match", /course\/test\/?$/)
        })
    })
})
