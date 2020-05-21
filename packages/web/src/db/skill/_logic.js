import dayjs from "dayjs"

const fib = n => (n > 1 ? fib(n - 1) + fib(n - 2) : 1)

export const daysUntilNextPractice = ({ practicesSoFar }) => fib(practicesSoFar)

export const getLastPractice = practices =>
    [...practices].sort((a, b) => (dayjs(a.at).isAfter(dayjs(b.at)) ? -1 : 1))[0]
        .at

export const wouldBeStale = ({ lastPractice, practicesSoFar }) => {
    const shouldBeStaleAt = dayjs(lastPractice).add(
        daysUntilNextPractice({ practicesSoFar }),
        "day"
    )

    return dayjs().isAfter(dayjs(dayjs(shouldBeStaleAt).subtract(1, "second")))
}

export const isStale = ({ practices }) =>
    wouldBeStale({
        practicesSoFar: practices.length,
        lastPractice: getLastPractice(practices)
    })
