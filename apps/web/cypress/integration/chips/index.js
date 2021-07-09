import { Then } from "cypress-cucumber-preprocessor/steps"

Then("words with definitions have tooltips", () => {
    cy.get(".has-tooltip-bottom[data-tooltip=how]").should("be.visible")
})

Then("I see the correct chips", () => {
    cy.get(".chip").contains("Como").should("be.visible")
    cy.get(".chip").contains("estás").should("be.visible")
    cy.get(".chip").contains("hoy").should("be.visible")
})

Then("I have unused chips", () => {
    cy.get("#chips .chip").should("be.visible")
})
