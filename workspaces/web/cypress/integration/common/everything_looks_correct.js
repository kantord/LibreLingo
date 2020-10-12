import { Then } from "cypress-cucumber-preprocessor/steps"

Then("{} looks correct", (snapshotsName) => {
    cy.get(".fontawesome-i2svg-pending").should("not.exist")
    cy.document().its("fonts.status").should("equal", "loaded")
    cy.percySnapshot(snapshotsName)

		cy.get('[data-tkey]').each($el => {
			const tkey = $el.data('tkey')
			const { left, top, width, height } = $el[0].getBoundingClientRect()
			const highlight = document.createElement("div"); 
			highlight.setAttribute("style", `
				position: fixed;
				left: ${left - 5}px;
				top: ${top - 5}px;
				width: ${width + 15}px;
				height: ${height + 15}px;
				border: 3px dashed red;
				z-index: 1000000;
			`);
			cy.window().then((win) => {
				win.document.body.appendChild(highlight)
			})
			console.log(`📸 Creating screenshots for ${tkey}}`)
			cy.screenshot(`__tkey-${tkey}`)
			cy.window().then((win) => {
				win.document.body.removeChild(highlight)
			})
		})
})
