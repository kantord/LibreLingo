import { Then } from "cypress-cucumber-preprocessor/steps"

Then("I see the challenge panel with no skip button", () => {
    cy.get(".panel").should("be.visible")
    cy.get(".panel button").contains("Skip").should("not.exist")
})

Then("I see the challenge panel", () => {
    cy.get(".panel").should("be.visible")
})

Then("I see a panel with only a skip button", () => {
    cy.wait(500) // This is necessary due to the animation
    cy.get(".panel button").contains("Skip").should("be.visible")
    cy.get(".panel ").find("button").should("have.length", 1)
})

Then("I see a panel with only a skip button and a can't listen now button", () => {
    cy.wait(500) // This is necessary due to the animation
    cy.get(".panel button").contains("Skip").should("be.visible")
    cy.get(".panel button").contains("Can't listen now").should("be.visible")
    cy.get(".panel ").find("button").should("have.length", 2)
})

Then("I see a panel with only a skip and a finish early button", () => {
    cy.wait(500) // This is necessary due to the animation
    cy.get(".panel button").contains("Skip").should("be.visible")
    cy.get(".panel button").contains("Finish early").should("be.visible")
    cy.get(".panel ").find("button").should("have.length", 2)
})

Then("I see a panel with only a skip and a can't listen now and a finish early button", () => {
    cy.wait(500) // This is necessary due to the animation
    cy.get(".panel button").contains("Skip").should("be.visible")
    cy.get(".panel button").contains("Finish early").should("be.visible")
    cy.get(".panel button").contains("Can't listen now").should("be.visible")
    cy.get(".panel ").find("button").should("have.length", 3)
})
