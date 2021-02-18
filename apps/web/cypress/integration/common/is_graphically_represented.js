import { Then } from "cypress-cucumber-preprocessor/steps"

Then("{string} is graphically represented", text => {
    cy.get(`img[alt="${text}"]`).should("be.visible")
})
