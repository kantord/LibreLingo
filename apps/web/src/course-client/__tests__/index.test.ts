import { get_course, get_skill_data } from "../index"

describe("get_course", () => {
    it("returns correct course data", async () => {
        expect(await get_course({ courseName: "test" })).toMatchSnapshot()
    })
})

describe("get_skill_data", () => {
    it("returns correct course data", async () => {
        expect(await get_skill_data({ courseName: "test", skillName: "animals" })).toMatchSnapshot()
    })
})
