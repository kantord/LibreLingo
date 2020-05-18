import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I click {string}", text => {
    cy.contains(text).click()
})
