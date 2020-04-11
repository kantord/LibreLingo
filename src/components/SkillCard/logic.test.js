import dayjs from "dayjs"
import {
    daysUntilNextPractice,
    wouldBeStale,
    getLastPractice,
    isStale
} from "./logic"

const today = dayjs()
const yesterday = dayjs().subtract(1, "day")
const dayBeforeYesterday = dayjs().subtract(2, "day")

describe("daysUntilNextPractice", () => {
    const tests = [
        { practicesSoFar: 1, expectedOutput: 1 },
        { practicesSoFar: 2, expectedOutput: 2 },
        { practicesSoFar: 3, expectedOutput: 3 },
        { practicesSoFar: 4, expectedOutput: 5 }
    ]

    tests.forEach(({ practicesSoFar, expectedOutput }) => {
        it(`returns ${expectedOutput} for ${practicesSoFar}`, () => {
            expect(daysUntilNextPractice({ practicesSoFar })).toEqual(expectedOutput)
        })
    })
})

describe("wouldBeStale", () => {
    const tests = [
        {
            description: "expired after first practice",
            lastPractice: yesterday,
            practicesSoFar: 1,
            expectedOutput: true
        },
        {
            description: "not expired after second practice",
            lastPractice: yesterday,
            practicesSoFar: 2,
            expectedOutput: false
        },
        {
            description: "expired after second practice",
            lastPractice: dayBeforeYesterday,
            practicesSoFar: 2,
            expectedOutput: true
        }
    ]

    tests.forEach(
        ({ lastPractice, practicesSoFar, expectedOutput, description }) => {
            it(`returns correct value when ${description}`, () => {
                expect(wouldBeStale({ practicesSoFar, lastPractice })).toEqual(
                    expectedOutput
                )
            })
        }
    )
})

describe("getLastPractice", () => {
    const tests = [
        {
            practices: [{ at: dayBeforeYesterday }],
            expectedOutput: dayBeforeYesterday
        },
        {
            practices: [{ at: dayBeforeYesterday }, { at: yesterday }],
            expectedOutput: yesterday
        },
        {
            practices: [{ at: yesterday }, { at: today }, { at: dayBeforeYesterday }],
            expectedOutput: today
        }
    ]

    tests.forEach(({ practices, expectedOutput }) => {
        it(`returns correct value for ${practices.length} items`, () => {
            expect(getLastPractice(practices)).toEqual(expectedOutput)
        })
    })
})

describe("isStale", () => {
    const tests = [
        {
            description: "expired after first practice",
            practices: [{ at: +dayBeforeYesterday }],
            expectedOutput: true
        },
        {
            description: "not expired after second practice",
            practices: [{ at: +dayBeforeYesterday }, { at: +yesterday }],
            expectedOutput: false
        },
        {
            description: "not expired after second practice",
            practices: [{ at: +dayBeforeYesterday }, { at: +dayBeforeYesterday }],
            expectedOutput: true
        }
    ]

    tests.forEach(({ practices, expectedOutput, description }) => {
        it(`returns correct value when ${description}`, () => {
            expect(isStale({ practices })).toEqual(expectedOutput)
        })
    })
})
