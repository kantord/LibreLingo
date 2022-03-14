import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I should be on {string}", (url) => {
  const pattern = new RegExp(`${url}/?$`)
  cy.url().should("match", pattern)
})
