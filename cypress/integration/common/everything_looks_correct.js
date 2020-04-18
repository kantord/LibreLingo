import { Then } from "cypress-cucumber-preprocessor/steps"

Then("{} looks correct", snapshotsName => {
    cy.percySnapshot(snapshotsName)
    cy.contains("​100").should("not.be.visible")
})
