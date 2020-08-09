import { changeArrayElementPosition } from "./utils"

describe("changeArrayElementPosition", () => {
    it("returns correct value with 2 elements", () => {
        expect(changeArrayElementPosition(["foo", "bar"], 1, 0)).toEqual([
            "bar",
            "foo",
        ])
    })

    it("returns correct value with 3 elements", () => {
        expect(changeArrayElementPosition(["foo", "bar", "baz"], 1, 0)).toEqual([
            "bar",
            "foo",
            "baz",
        ])
    })

    it("returns correct value with 2 elements - order of index-pair does not matter", () => {
        expect(changeArrayElementPosition(["foo", "bar"], 0, 1)).toEqual([
            "bar",
            "foo",
        ])
    })
})
