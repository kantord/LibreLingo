import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I enable the feature {string}", (featureName) => {
    cy.setCookie(`${featureName}Enabled`, "true")
})
