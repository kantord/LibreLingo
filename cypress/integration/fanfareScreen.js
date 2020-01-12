describe("Fanfare screen", () => {
    const CARDS_TEST_URL = number =>
        `/course/test/skill/_short_input_test${number}`
    describe("Display fanfare screen", () => {
        beforeEach(() => {
            cy.visit(CARDS_TEST_URL(1))
            cy.get("input[type=text]").type("la leche")
            cy.contains("Submit").click()
            cy.contains("Continue").click()
        })

        it("Fanfare screen visible", () => {
            cy.contains(/Lesson completed!/).should("be.visible")
        })
    })
})
