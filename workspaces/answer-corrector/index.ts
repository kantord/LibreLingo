import levenshtein from "js-levenshtein"

const id = (x: string): string => x

const ignorePunctuation = (form: string): string => form.replace(/[!¡?¿,.]/g, "")
const ignoreCasing = (form: string): string => form.toLowerCase()
const ignoreWhitespace = (form: string): string =>
    form.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ")

const normalize = (form: string): string => ignoreWhitespace(ignoreCasing(form))

const areSentencesSimilar = (sentence1: string, sentence2: string): boolean =>
    levenshtein(normalize(sentence1), normalize(sentence2)) <= 1

const areSentencesIdentical = (sentence1: string, sentence2: string): boolean =>
    normalize(sentence1) === normalize(sentence2)

const getSuggestion = ({
    alwaysSuggest,
    answer,
    mappedForm,
    suggester,
    form
}: {
    alwaysSuggest: boolean,
    answer: string,
    mappedForm: string,
    suggester: (form: string) => string,
    form: string,
}): string =>
    !alwaysSuggest && areSentencesIdentical(answer, mappedForm)
        ? ""
        : suggester(form)

const evaluateAnswerRaw = ({
    validAnswers,
    answer,
    suggester,
    alwaysSuggest,
    mapper
}: {
    validAnswers: string[],
    answer: string,
    suggester: (form: string) => string,
    alwaysSuggest?: boolean,
    mapper: (form: string) => string,
}): { correct: boolean; suggestion: string; } => {
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

export default function evaluateAnswer({ validAnswers, answer }: { validAnswers: string[], answer: string }): { correct: boolean; suggestion: string; } {
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
