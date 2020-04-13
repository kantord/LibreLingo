import { Then } from "cypress-cucumber-preprocessor/steps"

Then("{} looks correct", snapshotsName => {
    cy.percySnapshot(snapshotsName)
})
