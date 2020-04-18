import { Given } from "cypress-cucumber-preprocessor/steps"

const CARDS_TEST_URL = number => `/course/test/skill/_short_input_test${number}`

Given("I get to the fanfare screen", () => {
    cy.visit(CARDS_TEST_URL(1))
    cy.get("input[type=text]").type("la leche")
    cy.contains("Submit").click()
    cy.contains("Continue").click()
})
