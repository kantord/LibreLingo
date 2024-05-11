import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I type {string}", (text) => {
  cy.get("input[type=text]").type(text)
})
