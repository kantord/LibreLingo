import levenshtein from "js-levenshtein"

const id = x => x

const ignorePunctuation = form => form.replace(/[!¡?¿,.]/g, "")

const evaluateAnswerRaw = ({
    validAnswers,
    answer,
    suggester,
    alwaysSuggest,
    mapper
}) => {
    let correct = false,
        suggestion = ""

    validAnswers.forEach(form => {
        const mappedForm = mapper(form)
        if (
            levenshtein(
                answer
                    .toLowerCase()
                    .replace(/^\s+|\s+$/g, "")
                    .replace(/\s+/g, " "),
                mappedForm.toLowerCase()
            ) <= 1
        ) {
            correct = true
            suggestion = suggester(form)
            if ( !alwaysSuggest & (mappedForm
                .replace(/^\s+|\s+$/g, "")
                .replace(/\s+/g, " ")
                .toLowerCase() === answer.toLowerCase())
            ) {
                suggestion = ""
            }
        }
    })

    return { correct, suggestion }
}

export default function evaluateAnswer({ validAnswers, answer }) {
    let result = evaluateAnswerRaw({
        mapper: id,
        validAnswers,
        answer,
        suggester: form => `You made a small error. Correct spelling: ${form}`
    })

    if (!result.correct) {
        result = evaluateAnswerRaw({
            alwaysSuggest: true,
            validAnswers,
            mapper: ignorePunctuation,
            answer,
            suggester: form => `Watch out for punctuation! Correct spelling: ${form}`
        })
    }

    return result
}
