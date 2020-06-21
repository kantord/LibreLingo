import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I am logged out", () => {
    cy.window().then((window) => {
        cy.wrap(window._Logout())
    })
})
