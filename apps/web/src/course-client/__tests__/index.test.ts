import { get_course, get_skill_data, get_skill_introduction } from "../index"

describe("get_course", () => {
  it("returns correct course data", async () => {
    expect(await get_course({ courseName: "test-1" })).toMatchSnapshot(
      "test course data"
    )
  })

  it("returns error when non-existent github gist is used", async () => {
    expect(
      get_course({
        courseName: "test-1",
        gistId:
          "db0545fc1ace67dd8c67d3bcae571b4442161060cd3cfc3890c55e351ec79245",
      })
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"Could not load gist with Id "db0545fc1ace67dd8c67d3bcae571b4442161060cd3cfc3890c55e351ec79245". TypeError: Cannot convert undefined or null to object"`
    )
  })

  it("returns correct data when existing gist id is supplied", async () => {
    const courseData = await get_course({
      courseName: "test-1",
      gistId: "2428349a05d81f96b2311c2749ea5c6d",
    })

    expect(courseData).toEqual(await get_course({ courseName: "test-1" }))
  })
})

describe("get_skill_data", () => {
  it("returns correct course data", async () => {
    expect(
      await get_skill_data({ courseName: "test-1", skillName: "animals" })
    ).toMatchSnapshot()
  })

  it("returns error when non-existent github gist is used", async () => {
    expect(
      get_skill_data({
        courseName: "test-1",
        skillName: "animals",
        gistId:
          "db0545fc1ace67dd8c67d3bcae571b4442161060cd3cfc3890c55e351ec79245",
      })
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      `"Could not load gist with Id "db0545fc1ace67dd8c67d3bcae571b4442161060cd3cfc3890c55e351ec79245". TypeError: Cannot convert undefined or null to object"`
    )
  })

  it("returns correct course data when gist id is supplied", async () => {
    expect(
      await get_skill_data({
        courseName: "testGist",
        skillName: "animals",
        gistId: "2428349a05d81f96b2311c2749ea5c6d",
      })
    ).toEqual({
      ...(await get_skill_data({
        courseName: "test-1",
        skillName: "animals",
      })),
      courseURL: "/course/testGist",
    })
  })
})

describe("get_skill_introduction", () => {
  it("returns correct course data", async () => {
    expect(
      await get_skill_introduction({
        courseName: "test-1",
        skillName: "animals",
      })
    ).toMatchInlineSnapshot(`
      {
        "courseName": "test-1",
        "practiceHref": "animals",
        "readmeHTML": undefined,
        "skillName": "animals",
        "title": "Animals",
      }
    `)
  })

  it("returns correct course data", async () => {
    expect(
      await get_skill_introduction({
        courseName: "testGist",
        skillName: "animals",
        gistId: "2428349a05d81f96b2311c2749ea5c6d",
      })
    ).toEqual({
      ...(await get_skill_introduction({
        courseName: "test-1",
        skillName: "animals",
      })),
      readmeHTML: "<p>hello world</p>",
      courseName: "testGist",
    })
  })
})
