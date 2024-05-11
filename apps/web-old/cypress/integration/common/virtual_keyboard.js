import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see a virtual keyboard with {int} keys", (n) => {
  cy.get(".virtual-keyboard .keys").find(">*").should("have.length", n)
})

Then("the keys on the virtual keyboard have proper labels", () => {
  cy.get(".virtual-keyboard .keys")
    .find(">*")
    .contains("á")
    .should("be.visible")
})

Then("clicking on a key types into the input field", () => {
  cy.get(".virtual-keyboard .keys").find(">*").contains("á").click()
  cy.get("input").should("have.value", "á")
})

Then("I don't see a virtual keyboard anymore", () => {
  cy.get(".virtual-keyboard").should("not.exist")
})
