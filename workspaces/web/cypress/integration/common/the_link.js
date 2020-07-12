import { Then } from "cypress-cucumber-preprocessor/steps"

Then("the link {string} points to {string}", (linkText, linkValue) => {
    cy.contains(linkText)
        .get("a")
        .should("have.attr", "href")
        .and("include", linkValue)
})
