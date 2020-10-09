import levenshtein from "js-levenshtein"

const id = x => x

const ignorePunctuation = form => form.replace(/[!¡?¿,.]/g, "")
const ignoreCasing = form => form.toLowerCase()
const ignoreWhitespace = form =>
    form.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ")

const normalize = form => ignoreWhitespace(ignoreCasing(form))

const areSentencesSimilar = (sentence1, sentence2) =>
    levenshtein(normalize(sentence1), normalize(sentence2)) <= 1

const areSentencesIdentical = (sentence1, sentence2) =>
    normalize(sentence1) === normalize(sentence2)

const getSuggestion = ({
    alwaysSuggest,
    answer,
    mappedForm,
    suggester,
    form
}) =>
    !alwaysSuggest && areSentencesIdentical(answer, mappedForm)
        ? ""
        : suggester(form)

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
        if (areSentencesSimilar(answer, mappedForm)) {
            if (correct && !suggestion) {
                return
            }
            correct = true
            suggestion = getSuggestion({
                alwaysSuggest,
                answer,
                mappedForm,
                suggester,
                form
            })
        }
    })

    return { correct, suggestion }
}

export default function evaluateAnswer({ validAnswers, answer }) {
    let result = evaluateAnswerRaw({
        mapper: id,
        validAnswers,
        answer,
        suggester: form => `Correct spelling: ${form}`
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
