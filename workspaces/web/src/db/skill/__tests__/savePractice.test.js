import db from "../../db"
import savePractice from "../savePractice"

describe("db/skill/savePractice", () => {
    beforeEach(async () => {
        await db.__reset()
    })

    it("correctly creates new data", async () => {
        await savePractice({ id: "fooBar", correct: 5, incorrect: 3 })
        expect(await db.get("skills/fooBar")).toEqual({
            _id: "skills/fooBar",
            _rev: expect.anything(),
            practiced: [{ at: expect.anything(), correct: 5, incorrect: 3 }]
        })
    })

    it("correctly updates data", async () => {
        await savePractice({ id: "fooBar", correct: 5, incorrect: 10 })
        await savePractice({ id: "fooBar", correct: 6, incorrect: 3 })
        expect(await db.get("skills/fooBar")).toEqual({
            _id: "skills/fooBar",
            _rev: expect.anything(),
            practiced: [
                { at: expect.anything(), correct: 5, incorrect: 10 },
                { at: expect.anything(), correct: 6, incorrect: 3 }
            ]
        })
    })
})
