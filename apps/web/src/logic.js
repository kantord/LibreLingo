import shuffle from "lodash.shuffle"
import uniqBy from "lodash.uniqby"

export const prepareChallenge = ({
  currentChallenge,
  alternativeChallenges,
  typeToSelect,
  hasFakeOption = null,
}) => {
  const numberOfCards = hasFakeOption ? 4 : 3
  const correctOption = {
    ...currentChallenge,
    correct: true,
  }

  const incorrectOptions = alternativeChallenges
    .filter(({ type }) => type === typeToSelect)
    .filter(
      ({ formInTargetLanguage }) =>
        formInTargetLanguage !== correctOption.formInTargetLanguage
    )
    .map((challenge) => ({
      ...challenge,
      correct: false,
    }))

  const incorrectOptionsSample = shuffle(
    uniqBy(incorrectOptions, "formInTargetLanguage")
  ).slice(0, numberOfCards - 1)

  const incorrectOptionsWithFake =
    incorrectOptions.length >= 2
      ? [
          {
            ...incorrectOptionsSample[0],
            fake: true,
          },
          ...incorrectOptionsSample.slice(1),
        ]
      : []

  return shuffle([correctOption, ...incorrectOptionsWithFake])
}
