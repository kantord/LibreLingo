import { Then } from "cypress-cucumber-preprocessor/steps"

Then("{} looks correct", (snapshotsName) => {
    cy.get(".fontawesome-i2svg-pending").should("not.exist")
    cy.document().its("fonts.status").should("equal", "loaded")
    cy.percySnapshot(snapshotsName)

		const createRectangle = ({ left, top, width, height }) => {
			const rectangle = document.createElement("div"); 
			rectangle.setAttribute("style", `
				position: fixed;
				left: ${left - 5}px;
				top: ${top - 5}px;
				width: ${width + 15}px;
				height: ${height + 15}px;
				border: 3px dashed red;
				z-index: 1000000;
			`);
			
			return rectangle;
		}

		const createElementHighlighter = (element) => {
			return createRectangle(element.getBoundingClientRect())
		}

		cy.get("body").then(($body) => {
			if ($body.find('[data-tkey]').length) {
				cy.get("body").find('[data-tkey]').each($el => {
				const tkey = $el.data('tkey')
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
