import { get_course } from "../index"

describe("get_course", () => {
  it("returns correct course data", async () => {
    expect(await get_course({ courseName: "test" })).toMatchSnapshot()
  })
})
