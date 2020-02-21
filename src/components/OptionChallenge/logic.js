import shuffle from "lodash.shuffle"

export const prepareChallenge = ({
    currentChallenge,
    alternativeChallenges
}) => {
    const correctOption = {
        ...currentChallenge,
        correct: true
    }

    const incorrectOptions = alternativeChallenges
        .filter(({ type }) => type === "options")
        .map(challenge => ({
            ...challenge,
            correct: false
        }))

    const incorrectOptionsSample = shuffle(incorrectOptions).slice(0, 2)
    const incorrectOptionsWithFake =
        incorrectOptions.length >= 2
            ? [
                ...incorrectOptionsSample.slice(0, 1),
                { ...incorrectOptionsSample[1], fake: true }
            ]
            : []

    return shuffle([correctOption, ...incorrectOptionsWithFake])
}
