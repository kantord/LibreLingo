import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I am logged out", () => {
    cy.window().then((window) => {
        cy.wrap(window._Logout())
    })
})

Then("I see a {string} field", (fieldName) => {
    cy.get(`[name=${fieldName}]`).should("be.visible")
})

Then("my credentials are incorrect", () => {
    cy.window().then((window) => {
        window._test_credentials_correct = false
    })
})

Then("my credentials are correct", () => {
    cy.window().then((window) => {
        window._test_credentials_correct = true
    })
})
