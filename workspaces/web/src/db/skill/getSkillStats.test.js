import dayjs from "dayjs"
import getSkillStats from "./getSkillStats"

const createFakeDb = (resolvedValue) => ({
    get: () => new Promise((resolve) => resolve(resolvedValue)),
})

describe("getSkillStats", function () {
    it("return correct value - never practiced", async () => {
        const fakeDb = createFakeDb({ practiced: [] })
        expect(await getSkillStats(fakeDb, { id: "foo" })).toEqual({
            started: false,
            stale: null,
        })
    })

    it("return correct value - practiced recently", async () => {
        const fakeDb = createFakeDb({
            practiced: [
                {
                    at: new Date().valueOf(),
                    correct: 1,
                    incorrect: 0,
                },
            ],
        })
        expect(await getSkillStats(fakeDb, { id: "foo" })).toEqual({
            started: true,
            stale: false,
        })
    })

    it("return correct value - practiced recently, all skipped", async () => {
        const fakeDb = createFakeDb({
            practiced: [
                {
                    at: new Date().valueOf(),
                    correct: 0,
                    incorrect: 0,
                    skipped: 1,
                },
            ],
        })
        expect(await getSkillStats(fakeDb, { id: "foo" })).toEqual({
            started: false,
            stale: null,
        })
    })

    it("return correct value - practiced a long time ago", async () => {
        const fakeDb = createFakeDb({
            practiced: [
                {
                    at: dayjs(new Date().valueOf()).subtract(5, "day"),
                    correct: 1,
                    incorrect: 0,
                },
            ],
        })
        expect(await getSkillStats(fakeDb, { id: "foo" })).toEqual({
            started: true,
            stale: true,
        })
    })
})
