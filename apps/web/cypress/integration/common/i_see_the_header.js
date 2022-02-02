import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see the site navigation bar", () => {
    cy.get("[data-test=site-navbar]").should("be.visible")
})
