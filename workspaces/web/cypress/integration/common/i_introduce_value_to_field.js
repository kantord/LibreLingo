import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I introduce {string} as {string}", (value, fieldName) => {
    cy.get(`[name=${fieldName}]`).type(value)
})

Then("I check the {string} checkbox", (fieldName) => {
    cy.get(`[name=${fieldName}]`).check()
})
