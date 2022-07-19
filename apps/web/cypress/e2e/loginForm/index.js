import { Then } from "cypress-cucumber-preprocessor/steps"

Then("my credentials are incorrect", () => {
  cy.window().then((window) => {
    window._test_credentials_correct = false
  })
})

Then("my credentials are correct", () => {
  cy.window().then((window) => {
    window._test_credentials_correct = true
  })
})
