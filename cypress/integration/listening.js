describe("Listening exercises", () => {
    const LISTENING_TEST_URL = (number) =>
        `/course/test/skill/_listening_test${number}`
    describe("Open skill page", () => {
        beforeEach(() => {
            cy.visit(LISTENING_TEST_URL(0))
        })

        it("ListeningChallenge", function () {
            cy.percySnapshot(this.test.fullTitle())
        })

        it("Has virtual keyboard", () => {
            cy.get(".keyboard").find(".key").should("have.length", 16)
        })

        it("Has correct instruction", () => {
            cy.contains(/Type what you hear/).should("be.visible")
        })

        it("Has no panel visible", () => {
            cy.get(".panel").should("not.exist")
        })

        it("Shouldn't be able to submit empty form", () => {
            cy.get("form").submit()
            cy.get(".panel").should("not.exist")
        })

        it("Submit button is not visible", () => {
            cy.contains("Submit").should("not.exist")
        })

        it("Has input field", () => {
            cy.get("input[type=text]").should("be.visible")
        })

        it("Input field should be focused", () => {
            cy.get("[data-test=answer]").should("be.focused")
        })

        it("Input field has placeholder", () => {
            cy.get("input[type=text]")
                .first()
                .should("have.attr", "placeholder", "Type your answer…")
        })
    })

    describe("Type into field", () => {
        beforeEach(() => {
            cy.visit(LISTENING_TEST_URL(0))
            cy.get("input[type=text]").type("asdfg")
        })

        it("Panel is visible", () => {
            cy.get(".panel").should("be.visible")
        })
    })

    describe("Submit incorrect answer", () => {
        beforeEach(() => {
            cy.visit(LISTENING_TEST_URL(0))
            cy.get("input[type=text]").type("asdfg")
            cy.contains("Submit").click()
        })

        it("Panel says incorrect answer", () => {
            cy.contains(/Incorrect solution/).should("be.visible")
        })

        it("Panel says what correct answer would be", () => {
            cy.contains(/Correct answer: perro/).should("be.visible")
        })

        it("Continue button is visible", () => {
            cy.contains("Continue").should("exist")
        })
    })

    describe("Submit correct answer", () => {
        beforeEach(() => {
            cy.visit(LISTENING_TEST_URL(0))
            cy.get("input[type=text]").type("perro")
            cy.contains("Submit").click()
        })

        it("Panel says correct answer", () => {
            cy.contains(/Correct solution/).should("be.visible")
        })

        it("Meaning should be visible", () => {
            cy.contains(/Meaning: "foo bar baz"/).should("be.visible")
        })

        it("Continue button is visible", () => {
            cy.contains("Continue").should("exist")
        })
    })

    describe("Small typos", () => {
        beforeEach(() => {
            cy.visit(LISTENING_TEST_URL(0))
            cy.get("input[type=text]").type("           pierro      ")
            cy.contains("Submit").click()
        })

        it("Panel says correct answer", () => {
            cy.contains(/Correct solution/).should("be.visible")
        })

        it("Panel says what correct spelling would be", () => {
            cy.contains(
                /You made a small error. Correct spelling: perro/
            ).should("be.visible")
        })
    })

    describe("Case error", () => {
        beforeEach(() => {
            cy.visit(LISTENING_TEST_URL(0))
            cy.get("input[type=text]").type("PerRo")
            cy.contains("Submit").click()
        })

        it("Panel says correct answer", () => {
            cy.contains(/Correct solution/).should("be.visible")
        })

        it("Panel doesn't say what correct spelling would be", () => {
            cy.contains(
                /You made a small error. Correct spelling: perro/
            ).should("not.exist")
        })
    })

    describe("Goes to next challenge", () => {
        beforeEach(() => {
            cy.visit(LISTENING_TEST_URL(2))
            cy.get("input[type=text]").type("agua")
            cy.contains("Submit").click()
        })

        it("Panel is not visible", () => {
            cy.contains("Continue").click()
            cy.get(".panel").should("not.exist")
        })
    })

    describe("Goes to next challenge with keyboard", () => {
        beforeEach(() => {
            cy.visit(LISTENING_TEST_URL(2))
            cy.get("input[type=text]").type("agua")
            cy.contains("Submit").click()
        })

        it("Input should not be focused", () => {
            cy.get("input[type=text]").should("not.be.focused")
        })

        it("Panel is not visible", () => {
            cy.get("body").trigger("keydown", { keyCode: 13, which: 13 })
            cy.get(".panel").should("not.exist")
        })
    })

    describe("Case doesn't matter", () => {
        beforeEach(() => {
            cy.visit(LISTENING_TEST_URL(0))
            cy.get("input[type=text]").type("PerRo")
            cy.contains("Submit").click()
        })

        it("Panel says correct answer", () => {
            cy.contains(/Correct solution/).should("be.visible")
        })
    })
})
