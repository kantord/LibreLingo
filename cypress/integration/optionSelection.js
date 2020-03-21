describe("OptionSelection", () => {
    const OPTION_SELECTION_TEST_URL = "course/test/skill/_options_test"
    afterEach(() => {
        cy.percySnapshot()
    })
    describe("Open skill page", () => {
        beforeEach(() => {
            cy.visit(OPTION_SELECTION_TEST_URL)
        })

        it("Has correct question", () => {
            cy.contains(/Which of these is/).should("be.visible")
        })

        it("Has 3 options", () => {
            cy.get(".options")
                .find(".option:visible")
                .should("have.length", 3)
        })

        it("undefined not seen on the page", () => {
            cy.contains(/undefined/).should("not.exist")
        })

        it("All options inactive", () => {
            cy.get(".options")
                .find(".option[data-test=neutral]:visible")
                .should("have.length", 3)
        })

        it("Has no panel visible", () => {
            cy.get(".panel").should("not.exist")
        })

        it("Submit button is not visible", () => {
            cy.contains("Submit").should("not.exist")
        })
    })

    describe("Clicking option", () => {
        beforeEach(() => {
            cy.visit(OPTION_SELECTION_TEST_URL)
            cy.get(".option:visible")
                .first()
                .click()
        })

        it("Panel is visible", () => {
            cy.get(".panel").should("be.visible")
        })

        it("Submit button is visible", () => {
            cy.contains("Submit").should("exist")
        })

        it("2 options inactive", () => {
            cy.get(".options")
                .find(".option[data-test=inactive]:visible")
                .should("have.length", 2)
        })

        it("1 option inactive", () => {
            cy.get(".options")
                .find(".option[data-test=active]")
                .should("have.length", 1)
        })
    })

    describe("Submitting a correct answer", () => {
        beforeEach(() => {
            cy.visit(OPTION_SELECTION_TEST_URL)
            cy.get(".option[data-test-correct=true]").click()
            cy.contains("Submit").click()
        })

        it("Panel says correct answer", () => {
            cy.contains(/Correct solution/).should("be.visible")
        })

        it("Continue button is visible", () => {
            cy.contains("Continue").should("exist")
        })
    })

    describe("Submitting a incorrect answer", () => {
        beforeEach(() => {
            cy.visit(OPTION_SELECTION_TEST_URL)
            cy.get(".option[data-test-correct=false]")
                .first()
                .click()
            cy.contains("Submit").click()
        })

        it("Panel says incorrect answer", () => {
            cy.contains(/Incorrect solution/).should("be.visible")
        })

        it("Continue button is visible", () => {
            cy.contains("Continue").should("exist")
        })
    })
})
