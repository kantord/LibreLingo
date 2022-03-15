import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I should have progressed", () => {
  cy.get("progress").should("not.have.value", 0)
})

Then("I should not have progressed", () => {
  cy.get("progress").should("have.value", 0)
})
