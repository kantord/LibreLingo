describe("Course page", () => {
    const COURSE_PAGE_URL = "/"
    describe("Open skill page", () => {
        beforeEach(() => {
            cy.visit(COURSE_PAGE_URL)
            cy.window().then(window => {
                const db = window._DB
                db.allDocs()
                    .then(function(result) {
                        return Promise.all(
                            result.rows.map(function(row) {
                                return db.remove(row.id, row.value.rev)
                            })
                        )
                    })
                    .then(function() {
                        console.log("database erased")
                    })
                    .catch(function(err) {
                        console.log("database couldn't be erased", err)
                    })
            })
        })

        it("Animals skill should not be visible", () => {
            cy.contains(/Animals/).should("be.visible")
        })

        it("Food skill should not be visible", () => {
            cy.contains(/Food/).should("not.be.visible")
        })

        it("Food skill should be visible when its available based on database", () => {
            cy.window().then(window => {
                const db = window._DB
                db.put({ _id: "foo_bar" }).then(function() {
                    console.log("data put into db")
                })
                cy.reload()
            })
            cy.contains(/Food/).should("be.visible")
        })
    })
})
