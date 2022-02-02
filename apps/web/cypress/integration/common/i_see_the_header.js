import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see the site navigation bar", () => {
  cy.get("[data-test-id=site-navbar]").should("be.visible")
})
