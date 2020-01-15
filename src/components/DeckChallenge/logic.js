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
        .filter(({ type }) => type === "cards")
        .map(challenge => ({
            ...challenge,
            correct: false
        }))

    const incorrectOptionsSample = shuffle(incorrectOptions).slice(0, 3)
    const incorrectOptionsWithFake =
        incorrectOptions.length >= 2
            ? [
                ...incorrectOptionsSample.slice(0, 2),
                { ...incorrectOptionsSample[2], fake: true }
            ]
            : []

    return shuffle([correctOption, ...incorrectOptionsWithFake])
}
