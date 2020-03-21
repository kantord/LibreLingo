describe("Course page", () => {
    const COURSE_PAGE_URL = "/course/spanish-from-english"
    afterEach(() => {
        cy.percySnapshot()
    })
    describe("Open skill page", () => {
        beforeEach(() => {
            cy.window().then(window => {
                cy.wrap(window.indexedDB.deleteDatabase("_pouch_localData"))
            })
            cy.visit(COURSE_PAGE_URL)
        })

        it("Animals skill should not be visible", () => {
            cy.contains(/Animals/).should("be.visible")
        })

        xit("Food skill should not be visible", () => {
            cy.contains(/Food/).should("not.be.visible")
        })

        xit("Food skill should be visible when its available based on database", () => {
            cy.window().then(window => {
                const db = window._DB
                cy.wrap(db.put({ _id: "foo_bar" }))
            })
            cy.reload()
            cy.contains(/Food/).should("be.visible")
        })
    })
})
