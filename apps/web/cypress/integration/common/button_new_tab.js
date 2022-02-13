import { Then } from "cypress-cucumber-preprocessor/steps"

Then("the \"Feedback\" button opens the course repository page in a new tab", () => {
    const feedbackButton = cy.contains("Feedback")
    feedbackButton.should("have.attr", "target", "_blank")
    feedbackButton.should("have.attr", "href", "https://github.com/LibreLingo/LibreLingo/")
    feedbackButton.should("be.visible")
})
