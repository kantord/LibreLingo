import { Then } from "cypress-cucumber-preprocessor/steps"

Then("{} looks correct", (snapshotsName) => {
    cy.get(".fontawesome-i2svg-pending").should("not.exist")
    cy.document().its("fonts.status").should("equal", "loaded")
    cy.percySnapshot(snapshotsName)

		cy.generateTranslationScreenshots()
})
