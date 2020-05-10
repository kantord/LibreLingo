import db from "../../db"
import savePractice from "../savePractice"

describe("db/skill/savePractice", () => {
    beforeEach(async () => {
        await db.__reset()
    })

    it("correctly creates new data", async () => {
        await savePractice({ id: "fooBar" })
        expect(await db.get("skills/fooBar")).toEqual({
            _id: "skills/fooBar",
            _rev: expect.anything(),
            practiced: [{ at: expect.anything() }]
        })
    })

    it("correctly updates data", async () => {
        await savePractice({ id: "fooBar" })
        await savePractice({ id: "fooBar" })
        expect(await db.get("skills/fooBar")).toEqual({
            _id: "skills/fooBar",
            _rev: expect.anything(),
            practiced: [{ at: expect.anything() }, { at: expect.anything() }]
        })
    })
})
