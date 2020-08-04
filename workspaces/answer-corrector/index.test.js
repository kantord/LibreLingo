import evaluateAnswer from "."

describe("evaluateAnswer", () => {
    it("returns correct value when answer is correct", () => {
        expect(
            evaluateAnswer({ answer: "foo", validAnswers: ["baz", "foo", "bar"] })
        ).toEqual({ correct: true, suggestion: "" })
    })

    it("returns correct value when answer is incorrect", () => {
        expect(
            evaluateAnswer({ answer: "foo", validAnswers: ["baz", "bar"] })
        ).toEqual({ correct: false, suggestion: "" })
    })

    it("returns correct suggestion", () => {
        expect(
            evaluateAnswer({ answer: "ba", validAnswers: ["foo", "bar"] })
        ).toEqual({
            correct: true,
            suggestion: "You made a small error. Correct spelling: bar"
        })
    })

    it("returns correct suggestion - punctuation", () => {
        expect(
            evaluateAnswer({
                answer: "foo bar lorem ipsum dolor sit amet baz",
                validAnswers: ["foo", "¡foo bar lorem ipsum dolor sit amet baz!"]
            })
        ).toEqual({
            correct: true,
            suggestion:
        "Watch out for punctuation! Correct spelling: ¡foo bar lorem ipsum dolor sit amet baz!"
        })
    })
})
