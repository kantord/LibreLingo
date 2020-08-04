import levenshtein from "js-levenshtein"

export default function evaluateAnswer({ validAnswers, answer }) {
    let correct = false,
        suggestion = ""

    validAnswers.forEach(form => {
        if (
            levenshtein(
                answer
                    .toLowerCase()
                    .replace(/^\s+|\s+$/g, "")
                    .replace(/\s+/g, " "),
                form.toLowerCase()
            ) <= 1
        ) {
            correct = true
            suggestion =
        form
            .replace(/^\s+|\s+$/g, "")
            .replace(/\s+/g, " ")
            .toLowerCase() === answer.toLowerCase()
            ? ""
            : `You made a small error. Correct spelling: ${form}`
        }
    })

    return { correct, suggestion }
}
