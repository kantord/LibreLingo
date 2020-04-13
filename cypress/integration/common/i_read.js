import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I read {string}", text => {
    cy.contains(text).should("be.visible")
})
