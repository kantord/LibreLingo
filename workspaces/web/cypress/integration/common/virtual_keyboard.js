import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see a virtual keyboard with {int} keys", n => {
    cy.get(".keyboard")
        .find(".key")
        .should("have.length", n)
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
