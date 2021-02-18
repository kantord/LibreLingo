import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I read {string}", (text) => {
    cy.contains(text).should("be.visible")
})

Given("I don't read {string}", (text) => {
    cy.contains(text).should("not.be.visible")
})
