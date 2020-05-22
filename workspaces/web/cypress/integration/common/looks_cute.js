import { Then } from "cypress-cucumber-preprocessor/steps"

Then(/.* looks cute/, () => {
    cy.get("[data-test=\"mascot-jetpack\"]").should("be.visible")
})
