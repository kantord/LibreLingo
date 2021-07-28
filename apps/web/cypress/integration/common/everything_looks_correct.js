import { Then } from "cypress-cucumber-preprocessor/steps"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Then("{} looks correct", (snapshotsName) => {
    cy.get(".fontawesome-i2svg-pending").should("not.exist")
    cy.document().its("fonts.status").should("equal", "loaded")

    // Normalize problematic pages to avoid flaky tests
    // DeckChallenge
    cy.get("[data-test=\"card-img-1\"]").invoke("attr", "src", "images/pasta1.jpg")
    cy.get("[data-test=\"card-img-2\"]").invoke("attr", "src", "images/pasta2.jpg")
    cy.get("[data-test=\"card-img-3\"]").invoke("attr", "src", "images/pasta3.jpg")

    cy.percySnapshot(snapshotsName)

    cy.generateTranslationScreenshots()
})
