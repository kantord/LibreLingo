import dayjs from "dayjs"

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

        it("There should be 4 lessons that are not completed", () => {
            cy.get("[data-completed=false]").should("have.length", 4)
        })

        it("Skills without imageSet are supported", () => {
            cy.get(".column:first-child .card img").should("have.length", 0)
        })

        it("Skills with images are supported", () => {
            cy.get(".column:nth-child(2) .card img").should("have.length", 3)
        })

        describe("Stale lesson", () => {
            beforeEach(() => {
                cy.window().then(window => {
                    const db = window._DB
                    cy.wrap(null).then(() => {
                        return db
                            .put({
                                _id: "/course/test/skill/_short_input_test0",
                                practiced: [{ at: +dayjs().subtract(1, "day") }]
                            })
                            .then(() => {
                                cy.reload()
                            })
                    })
                })
            })

            it("Course page with stale lesson", function() {
                cy.get("[data-completed=true][data-stale=true]").should(
                    "have.length",
                    1
                )
                cy.percySnapshot(this.test.fullTitle())
            })
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
                cy.get("[data-completed=false]").should("have.length", 3)
                cy.get(".svg-inline--fa.fa-check-square").should("be.visible")
                cy.percySnapshot(this.test.fullTitle())
            })

            it("There should be 3 lessons that are not completed", () => {
                cy.get("[data-completed=false]").should("have.length", 3)
            })

            it("Practice button has correct text", () => {
                cy.contains("Practice Test").should("be.visible")
            })
        })
    })
})
