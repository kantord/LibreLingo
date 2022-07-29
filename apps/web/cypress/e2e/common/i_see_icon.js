import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see a {} icon", (icon) => {
  const iconClass = `fa-${icon.replace(" ", "-")}`
  cy.get(`.${iconClass}`).should("be.visible")
})
