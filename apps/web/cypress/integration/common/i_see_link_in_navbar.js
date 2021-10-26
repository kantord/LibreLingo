import { Given } from "cypress-cucumber-preprocessor/steps"

Given(/I see an? "(.*)" link in the navbar/, (text) => {
    cy.get("nav[role=navigation] a").contains(text).should("be.visible")
})

