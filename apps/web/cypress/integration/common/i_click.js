import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I click {string}", (text) => {
    cy.contains(text).click()
})

Then("I click the {string} button", (text) => {
    cy.get("button, .button").contains(text).click()
})
