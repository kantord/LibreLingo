import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I don't see any completed skills", () => {
    cy.get("[data-completed=true][data-stale=false]").should("have.length", 0)
})
