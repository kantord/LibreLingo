import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I am not really calling the registration API", () => {
  cy.window().then((window) => {
    window._test_fake_signup = true
  })
})
