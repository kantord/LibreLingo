import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I don't see the challenge panel", () => {
    cy.get(".panel").should("not.exist")
})

Then("I see the challenge panel", () => {
    cy.get(".panel").should("be.visible")
})
