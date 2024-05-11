import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see an input field", () => {
  cy.get("input[type=text]").should("be.visible")
})

Then("the input field is focused", () => {
  cy.get("[data-test=answer]").should("be.focused")
})

Then("the input field has a {string} placeholder", (text) => {
  cy.get("input[type=text]").first().should("have.attr", "placeholder", text)
})

Then("the {string} field has the label {string}", (fieldName, labelText) => {
  cy.get(`label[for=${fieldName}]`).should("contain", labelText)
  cy.get(`#${fieldName}`).should("be.visible")
})

Then("I see a {string} field", (fieldName) => {
  cy.get(`[name=${fieldName}]`).should("be.visible")
})
