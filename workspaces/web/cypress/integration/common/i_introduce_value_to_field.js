import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I introduce {string} as {string}", (value, fieldName) => {
    cy.get(`[name=${fieldName}]`).type(value)
})
