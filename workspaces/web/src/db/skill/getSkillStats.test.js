import dayjs from "dayjs"
import getSkillStats from "./getSkillStats"

const createFakeDb = (resolvedValue) => ({
    get: () => new Promise((resolve) => resolve(resolvedValue)),
})

const createFailingFakeDb = () => ({
    get: () => new Promise((_, reject) => reject()),
})

describe("getSkillStats", function () {
    it("return correct value - skill cannot be found", async () => {
        const fakeDb = createFailingFakeDb()
        expect(await getSkillStats(fakeDb, { id: "foo" })).toEqual({
            started: false,
            progress: 0,
            stale: null,
        })
    })

    it("return correct value - never practiced", async () => {
        const fakeDb = createFakeDb({ practiced: [] })
        expect(await getSkillStats(fakeDb, { id: "foo" })).toEqual({
            started: false,
            progress: 0,
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
            progress: 1,
        })
    })

    it("return correct value - practiced recently, partially skipped", async () => {
        const fakeDb = createFakeDb({
            practiced: [
                {
                    at: new Date().valueOf(),
                    correct: 2,
                    incorrect: 0,
                },
                {
                    at: new Date().valueOf(),
                    correct: 1,
                    skipped: 1,
                    incorrect: 0,
                },
            ],
        })
        expect(await getSkillStats(fakeDb, { id: "foo" })).toEqual({
            started: true,
            stale: false,
            progress: 1.5,
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
            progress: 0,
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
            progress: 1,
        })
    })
})
