import { Then } from "cypress-cucumber-preprocessor/steps"

Then("words with definitions have tooltips", () => {
    cy.get(".has-tooltip-bottom[data-tooltip=tu]").should("be.visible")
})

Then("words without a definition have no tooltip", () => {
    cy.get(".has-tooltip-bottom").contains("How").should("not.exist")
})

Then("I see the correct chips", () => {
    cy.get(".chip").contains("Como").should("be.visible")
    cy.get(".chip").contains("estás").should("be.visible")
    cy.get(".chip").contains("hoy").should("be.visible")
})

Then("I have unused chips", () => {
    cy.get("#chips .chip").should("be.visible")
})
