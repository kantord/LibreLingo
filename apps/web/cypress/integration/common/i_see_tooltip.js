import { Given } from "cypress-cucumber-preprocessor/steps"

Given("I see a tooltip that says {string}", text => {
    cy.get(`.has-tooltip-bottom[data-tooltip="${text}"]`).should("be.visible")
})

Given("I don't see a tooltip that says {string}", text => {
    cy.get(`.has-tooltip-bottom[data-tooltip="${text}"]`).should("not.exist")
})

Given("The word {string} has no tooltip definition", text => {
    cy.get(".has-tooltip-bottom")
        .contains(text)
        .should("not.exist")
})
