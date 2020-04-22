import { Then, Given } from "cypress-cucumber-preprocessor/steps"

Given("I submit solution", () => {
    cy.get("input[type=text]").type("asdfg")
    cy.contains("Submit").click()
})

Then("I see a virtual keyboard with 4 keys", () => {
    cy.get(".keyboard")
        .find(".key")
        .should("have.length", 16)
})

Then("the keys on the virtual keyboard have proper labels", () => {
    cy.get(".keyboard")
        .find(".key")
        .contains("á")
        .should("be.visible")
})

Then("clicking on a key types into the input field", () => {
    cy.get(".keyboard")
        .find(".key")
        .contains("á")
        .click()
    cy.get("input").should("have.value", "á")
})

Then("the virtual keyboard is inactive", () => {
    cy.get(".keyboard")
        .find(".key")
        .contains("á")
        .should("be.disabled")
})

Then("I'm not able to submit", () => {
    cy.get("form").submit()
    cy.get(".panel").should("not.exist")
})
