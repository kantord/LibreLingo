// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import "@percy/cypress"

const createRectangle = ({ left, top, width, height }) => {
    const rectangle = document.createElement("div")
    rectangle.setAttribute(
        "style",
        `
				position: fixed;
				left: ${left - 5}px;
				top: ${top - 5}px;
				width: ${width + 15}px;
				height: ${height + 15}px;
				border: 3px dashed red;
				z-index: 1000000;
			`
    )

    return rectangle
}

const createElementHighlighter = (element) => {
    return createRectangle(element.getBoundingClientRect())
}

Cypress.Commands.add("generateTranslationScreenshots", () => {
    cy.get("body").then(($body) => {
        if ($body.find("[data-tkey]").length) {
            cy.get("body")
                .find("[data-tkey]")
                .each(($el) => {
                    const tkey = $el.data("tkey")
                    const highlighter = createElementHighlighter($el[0])

                    cy.window().then((win) => {
                        win.document.body.appendChild(highlighter)
                    })

                    console.log(`📸 Creating a screenshot for ${tkey}}`)
                    cy.screenshot(`__tkey-${tkey}`)

                    cy.window().then((win) => {
                        win.document.body.removeChild(highlighter)
                    })
                })
        }
    })
})
