import { Given } from "cypress-cucumber-preprocessor/steps"

Given("that I have an iPhone 6", () => {
    cy.viewport("iphone-6")
})
