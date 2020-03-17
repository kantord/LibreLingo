export const removeAlternatives = (challenges) =>
    Object.values(Object.fromEntries(challenges.map(challenge => [challenge.id, challenge])))


export const sortChallengeGroups = challenges => {
    // This is a very inefficient sorting algorithm to make sure that random order is preserved
    // as much as possible while also priorities are respected within groups
    // this is useful because some challenges should precede others
    const challengesWithPosition = removeAlternatives(challenges).map((item, index) => ({
        item,
        index
    }))

    const isSmallestInGroup = itemToCheck =>
        challengesWithPosition.filter(
            ({ item }) =>
                item.group === itemToCheck.group &&
                item.priority < itemToCheck.priority
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

