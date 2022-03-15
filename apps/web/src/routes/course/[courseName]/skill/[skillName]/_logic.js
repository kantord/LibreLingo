import shuffle from "lodash.shuffle"
import uniq from "lodash.uniq"

export const removeAlternatives = (challenges) =>
  Object.values(
    Object.fromEntries(challenges.map((challenge) => [challenge.id, challenge]))
  )

export const sortChallengeGroups = (challenges, expectedNumberOfChallenges) => {
  // This is a very inefficient sorting algorithm to make sure that random order is preserved
  // as much as possible while also priorities are respected within groups
  // this is useful because some challenges should precede others

  const allGroups = uniq(challenges.map(({ group }) => group))
  const challengesPerGroup = Math.round(challenges.length / allGroups.length)
  const expectedNumberOfGroups = Math.max(
    1,
    Math.round(expectedNumberOfChallenges / challengesPerGroup)
  )
  const acceptedGroups = shuffle(allGroups).slice(0, expectedNumberOfGroups)

  const allowedChallenges = challenges.filter(({ group }) =>
    acceptedGroups.includes(group)
  )
  const challengesWithPosition = removeAlternatives(allowedChallenges).map(
    (item, index) => ({
      item,
      index,
    })
  )

  const isSmallestInGroup = (itemToCheck) =>
    challengesWithPosition.filter(
      ({ item }) =>
        item.group === itemToCheck.group && item.priority < itemToCheck.priority
    ).length === 0

  const sortedResults = []
  let bestItem
  let bestItemIndex
  while (challengesWithPosition.length > 0) {
    bestItem = challengesWithPosition[0]
    bestItemIndex = 0

    // Make sure that we prioritize and element that is the first in its group
    challengesWithPosition.forEach(({ index, item }, position) => {
      if (isSmallestInGroup(item)) {
        bestItem = { index, item }
        bestItemIndex = position
      }
    })

    // Make sure that we prioritize based on the random sort
    challengesWithPosition.forEach(({ index, item }, position) => {
      if (bestItem.index > index) {
        if (!isSmallestInGroup(item)) return
        bestItem = { index, item }
        bestItemIndex = position
      }
    })

    sortedResults.push(bestItem.item)
    challengesWithPosition.splice(bestItemIndex, 1)
  }

  return sortedResults
}
