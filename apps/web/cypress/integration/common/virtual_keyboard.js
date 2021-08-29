import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see a virtual keyboard with {int} keys", n => {
    cy.get(".virtual-keyboard")
        .find(">*")
        .should("have.length", n)
})

Then("the keys on the virtual keyboard have proper labels", () => {
    cy.get(".virtual-keyboard")
        .find(">*")
        .contains("á")
        .should("be.visible")
})

Then("clicking on a key types into the input field", () => {
    cy.get(".virtual-keyboard")
        .find(">*")
        .contains("á")
        .click()
    cy.get("input").should("have.value", "á")
})

Then("the virtual keyboard is inactive", () => {
    cy.get(".virtual-keyboard")
        .find(">*")
        .contains("á")
        .should("be.disabled")
})
