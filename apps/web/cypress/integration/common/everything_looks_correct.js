import { Then } from "cypress-cucumber-preprocessor/steps"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
Then("{} looks correct", (snapshotsName) => {
  cy.get(".fontawesome-i2svg-pending").should("not.exist")
  cy.document().its("fonts.status").should("equal", "loaded")

  // Normalize problematic pages to avoid flaky tests
  switch (snapshotsName) {
    case "cards challenge":
      cy.get('[data-test="card-img-1"]').invoke(
        "attr",
        "src",
        "images/pasta1.jpg"
      )
      cy.get('[data-test="card-img-2"]').invoke(
        "attr",
        "src",
        "images/dog1.jpg"
      )
      cy.get('[data-test="card-img-3"]').invoke(
        "attr",
        "src",
        "images/cat3.jpg"
      )
      cy.get(".fake img").invoke("attr", "src", "images/cat3.jpg")
      cy.window().then((win) => {
        const fakeCard = win.document.querySelector(".fake")
        const parent = fakeCard.parentElement
        fakeCard.remove()
        parent.append(fakeCard)
      })
      Cypress.$('[data-test="card-text-1"]').text("pasta")
      Cypress.$('[data-test="card-text-2"]').text("dog")
      Cypress.$('[data-test="card-text-3"]').text("cat")
      Cypress.$(".fake .card-text").text("cat")
      Cypress.$('[data-test="meaning-in-source-language"]').text("pasta")
      break

    case "chips challenge":
      cy.get("#chips .chip .tag").each(($el, index) => {
        $el.text("tú hoy estás como usted eres".split(" ")[index])
      })
      Cypress.$('[data-test="meaning-in-source-language"]').text("pasta")
      break

    case "option selection challenge":
    case "option selection challenge with first option selected":
      cy.get(".option-content div").each(($el, index) => {
        $el.text("cerdo perro león".split(" ")[index])
      })
      Cypress.$('[data-test="meaning-in-source-language"]').text("perro")
      break

    case "short text input challenge":
      cy.get('[data-test="short text input illustrations"]').invoke(
        "attr",
        "src",
        "images/dog1.jpg"
      )
      break

    case "the terms of service page":
    case "the license page":
    case "sign up success page":
    case "sign up form with errors":
    case "sign up form":
    case "login error":
    case "login form":
    case "landing page":
    case "fanfare screen":
    case "the dev-typography page":
    case "course page with a started skill":
    case "course page with a completed skill":
    case "course page with a stale skill":
    case "course page":
    case "listening challenge":
      // These tests are deterministic and thus don't need normalization.
      break

    default:
      throw new Error(`unhandled visual test "${snapshotsName}"`)
  }

  cy.percySnapshot(snapshotsName)

  cy.generateTranslationScreenshots()
})
