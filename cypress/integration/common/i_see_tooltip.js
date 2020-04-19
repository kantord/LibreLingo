import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I see a tooltip that says {string}", text => {
    cy.get(`.has-tooltip-bottom[data-tooltip="${text}"]`).should("be.visible")
})

Given("The word {string} has no tooltip definition", text => {
    cy.get(".has-tooltip-bottom")
        .contains(text)
        .should("not.be.visible")
})
