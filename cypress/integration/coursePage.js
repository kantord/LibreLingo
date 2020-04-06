describe("Course page", () => {
    const COURSE_PAGE_URL = "/course/test"
    const SKILL_PAGE_URL = `${COURSE_PAGE_URL}/skill/_short_input_test0`

    describe("Open skill page", () => {
        beforeEach(() => {
            cy.window().then(window => {
                cy.wrap(window.indexedDB.deleteDatabase("_pouch_localData"))
            })
            cy.visit(COURSE_PAGE_URL)
        })

        it("Clean course page", function() {
            cy.percySnapshot(this.test.fullTitle())
        })

        it("Course page", function() {
            cy.percySnapshot(this.test.fullTitle())
        })

        it("Animals skill should not be visible", () => {
            cy.contains(/Animals/).should("be.visible")
        })

        it("There should be 4 lessons that are not completed", () => {
            cy.get("[data-completed=false]").should("have.length", 4)
        })

        describe("Complete a lesson", () => {
            beforeEach(() => {
                cy.visit(SKILL_PAGE_URL)
                cy.get("input[type=text]").type("el perro")
                cy.contains("Submit").click()
                cy.contains("Continue").click()
                cy.contains("Continue to course page").click()
            })

            it("Course page with finished lesson", function() {
                cy.contains(/Animals/).should("be.visible")
                cy.percySnapshot(this.test.fullTitle())
            })

            it("There should be 3 lessons that are not completed", () => {
                cy.get("[data-completed=false]").should("have.length", 3)
            })
        })
    })
})
