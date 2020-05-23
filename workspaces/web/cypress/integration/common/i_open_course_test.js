import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I open {string}", url => {
    cy.visit(url)
})
