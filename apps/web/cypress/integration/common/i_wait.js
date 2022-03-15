import { When } from "cypress-cucumber-preprocessor/steps"

When("I wait a moment", () => {
  cy.wait(1000)
})
