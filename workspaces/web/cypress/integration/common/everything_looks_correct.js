import { Then } from "cypress-cucumber-preprocessor/steps"

Then("{} looks correct", (snapshotsName) => {
    cy.get(".fontawesome-i2svg-pending").should("not.exist")
    cy.wait(200) // Wait for fonts to be loaded
    cy.percySnapshot(snapshotsName)
})
