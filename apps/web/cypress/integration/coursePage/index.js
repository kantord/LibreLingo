import dayjs from "dayjs"
import settings from "../../../src/settings"
import { Before, Then, Given, And } from "cypress-cucumber-preprocessor/steps"

const COURSE_PAGE_URL = "/course/test"
const SKILL_PAGE_URL = `${COURSE_PAGE_URL}/skill/_short_input_test0`

Before(() => {
    // Reset database
    cy.window().then((window) => {
        cy.wrap(
            window.indexedDB.deleteDatabase(`_pouch_${settings.database.local}`)
        )
    })
    cy.visit(COURSE_PAGE_URL)
})

Then("I see {int} skills that are not started", (number) => {
    cy.get("[data-started=false]").should("have.length", number)
})

Then("I see a skill that has no image set", () => {
    cy.get(".column:first-child .card img").should("have.length", 0)
})

Then("I see 3 skills that have an image set", () => {
    cy.get(".column:nth-child(2) .card img").should("have.length", 3)
})

Then("I see 3 skills that have an image set", () => {
    cy.get(".column:nth-child(2) .card img").should("have.length", 3)
})

Given("I have a stale skill", () => {
    cy.window().then((window) => {
        const db = window._DB
        cy.wrap(null).then(() => {
            return db
                .put({
                    _id: "skills/434d43b3",
                    practiced: [
                        { at: +dayjs().subtract(1, "year") },
                        { at: +dayjs().subtract(1, "month") },
                    ],
                })
                .then(() => {
                    cy.reload()
                })
        })
    })
})

Then("I see a stale skill", () => {
    cy.get("[data-completed=true][data-stale=true]").should("have.length", 1)
    cy.get(".svg-inline--fa").should("be.visible")
})

Then("I don't see any stale skills", () => {
    cy.get("[data-completed=true][data-stale=true]").should("have.length", 0)
})

Given("I complete a lesson", () => {
    cy.visit(SKILL_PAGE_URL)
    cy.get("input[type=text]").type("el perro")
    cy.contains("Submit").click()
    cy.contains("Continue").click()
    cy.contains("Continue to course page").click()
})

Then("I'm redirected to the course page", () => {
    cy.url().should("match", new RegExp(`.*${COURSE_PAGE_URL}/?$`))
})

Then("I see a completed skill", () => {
    cy.get("[data-completed=true][data-stale=false]").should("have.length", 1)
    cy.get(".svg-inline--fa").should("be.visible")
})

Then("I see a started skill", () => {
    cy.get("[data-started=true][data-stale=false]").should("have.length", 1)
    cy.get(".svg-inline--fa").should("be.visible")
})

And("I see a skill with 50% progress", () => {
    cy.get("[data-test='skill card'] progress").should("have.value", 1)
    cy.get("[data-test='skill card'] progress").should("have.attr", "max", "2")
})

Given("practice statistics are saved correctly", () => {
    cy.window().then((window) => {
        const db = window._DB
        cy.wrap(null).then(() => {
            return db.get("skills/434d43b3").then((doc) => {
                cy.wrap(doc.practiced[0].incorrect).should("equal", 0)
                cy.wrap(doc.practiced[0].correct).should("equal", 1)
            })
        })
    })
})
