import { Then, Given } from "cypress-cucumber-preprocessor/steps"

Given("I submit solution", () => {
    cy.get("input[type=text]").type("asdfg")
    cy.contains("Submit").click()
})

Then("I'm not able to submit", () => {
    cy.get("form").submit()
    cy.get(".panel").should("not.exist")
})
