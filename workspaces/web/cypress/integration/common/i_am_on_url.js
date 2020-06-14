import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I am on {string}", (url) => {
    cy.url().should("include", url)
})
