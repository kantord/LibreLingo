import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I hit the enter key", () => {
    cy.get("body").trigger("keydown", { keyCode: 13, which: 13 })
})
