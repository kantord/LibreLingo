import { Then, Given } from "cypress-cucumber-preprocessor/steps"

Then("I see 3 options", () => {
  cy.get(".options").find(".option:visible").should("have.length", 3)
})

Then("I see 2 inactive options", () => {
  cy.get(".options")
    .find(".option[data-test=inactive]:visible")
    .should("have.length", 2)
})

Then("I see 1 active option", () => {
  cy.get(".options").find(".option[data-test=active]").should("have.length", 1)
})

Then("every option is inactive", () => {
  cy.get(".options")
    .find(".option[data-test=neutral]:visible")
    .should("have.length", 3)
})

Given("I select an option", () => {
  cy.get(".option:visible").first().click()
})

Then("I select the correct option", () => {
  cy.get(".option[data-test-correct=true]").click()
})

Then("I select an incorrect option", () => {
  cy.get(".option[data-test-correct=false]").first().click()
})
