import { get_course, get_skill_data, get_skill_introduction } from "../index"

describe("get_course", () => {
  it("returns correct course data", async () => {
    expect(await get_course({ courseName: "test" })).toMatchSnapshot(
      "test course data"
    )
  })

  it("returns error when non-existent github gist is used", async () => {
    expect(
      get_course({
        courseName: "test",
        gistId:
          "db0545fc1ace67dd8c67d3bcae571b4442161060cd3cfc3890c55e351ec79245",
      })
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"Could not load gist with Id \\"db0545fc1ace67dd8c67d3bcae571b4442161060cd3cfc3890c55e351ec79245\\"."`
    )
  })

  it("returns correct data when existing gist id is supplied", async () => {
    const courseData = await get_course({
      courseName: "test",
      gistId: "2428349a05d81f96b2311c2749ea5c6d",
    })

    expect(courseData).toEqual(await get_course({ courseName: "test" }))
  })
})

describe("get_skill_data", () => {
  it("returns correct course data", async () => {
    expect(
      await get_skill_data({ courseName: "test", skillName: "animals" })
    ).toMatchSnapshot()
  })
})

describe("get_skill_introduction", () => {
  it("returns correct course data", async () => {
    expect(
      await get_skill_introduction({ courseName: "test", skillName: "animals" })
    ).toMatchSnapshot()
  })
})
