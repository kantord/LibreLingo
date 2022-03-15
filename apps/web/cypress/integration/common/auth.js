import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I am logged out", () => {
  cy.window().then((window) => {
    cy.wrap(window._Logout())
  })
})

Then("user already exists", () => {
  cy.window().then((window) => {
    window._test_user_already_exists = true
  })
})
