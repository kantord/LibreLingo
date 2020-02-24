import shuffle from "lodash.shuffle"

export const prepareChallenge = ({
    currentChallenge,
    alternativeChallenges,
    typeToSelect,
    hasFakeOption
}) => {
    const numberOfCards = hasFakeOption ? 4 : 3
    const correctOption = {
        ...currentChallenge,
        correct: true
    }

    const incorrectOptions = alternativeChallenges
        .filter(({ type }) => type === typeToSelect)
        .map(challenge => ({
            ...challenge,
            correct: false
        }))

    const incorrectOptionsSample = shuffle(incorrectOptions).slice(
        0,
        numberOfCards
    )
    const incorrectOptionsWithFake =
        incorrectOptions.length >= 2
            ? [
                ...incorrectOptionsSample.slice(0, numberOfCards - 2),
                {
                    ...incorrectOptionsSample[numberOfCards - 2],
                    fake: true
                }
            ]
            : []

    return shuffle([correctOption, ...incorrectOptionsWithFake])
}
