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

    return shuffle([correctOption, ...shuffle(incorrectOptions).slice(0, 2)])
}
