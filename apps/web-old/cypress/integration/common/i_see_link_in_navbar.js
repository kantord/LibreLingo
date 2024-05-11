import { Given } from "cypress-cucumber-preprocessor/steps"

Given(/I see an? "(.*)" link in the navbar/, (text) => {
  cy.get("[data-test-id=site-navbar] a").contains(text).should("be.visible")
})
