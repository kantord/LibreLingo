import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I open /course/test", () => {
    cy.visit("/course/test")
})
