import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see a card with an image", () => {
  cy.get(".card img").should("be.visible")
})
