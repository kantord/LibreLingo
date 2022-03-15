import { Given, Then } from "cypress-cucumber-preprocessor/steps"

Then("I see {int} cards", (n) => {
  cy.get(".options").find(".card:visible").should("have.length", n)
})

Then("I see {int} inactive cards", (n) => {
  cy.get(".options")
    .find(".card[data-test=neutral]:visible, .card[data-test=inactive]:visible")
    .should("have.length", n)
})

Then("I see an active card", () => {
  cy.get(".options")
    .find(".card[data-test=active]:visible")
    .should("have.length", 1)
})

Given("I click a card", () => {
  cy.get(".card:visible").first().click()
})

Given("I click the correct card", () => {
  cy.get(".card[data-test-correct=true]").click()
})

Given("I click an incorrect card", () => {
  cy.get(".real .card[data-test-correct=false]").first().click()
})
