import { Given } from "cypress-cucumber-preprocessor/steps"

Given(/I see an? "?(.*)"? button/, text => {
    cy.get(".button")
        .contains(text)
        .should("be.visible")
})
