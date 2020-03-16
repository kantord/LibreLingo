import { sortChallengeGroups, removeAlternatives } from "../_logic"

describe("removeAlternatives", () => {
    it("doesn't change empty array", () => {
        expect(removeAlternatives([])).toEqual([])
    })

    it("removes duplicates", () => {
        expect(removeAlternatives([
            {"id": 2},
            {"id": 2}
        ])).toEqual([
            {"id": 2}
        ])
    })

    it("returns correct number of items", () => {
        expect(removeAlternatives([
            {"id": 2},
            {"id": 3}
        ])).toHaveLength(2)
    })
})

describe("sortChallengeGroups", () => {
    it("returns correct value", () => {
        expect(
            sortChallengeGroups([
                {
                    group: "a",
                    priority: 0
                }
            ])
        ).toEqual([
            {
                group: "a",
                priority: 0
            }
        ])
    })

    it("returns correct value 2", () => {
        expect(
            sortChallengeGroups([
                {
                    id: "a1",
                    group: "a",
                    priority: 1
                },
                {
                    id: "b1",
                    group: "b",
                    priority: 1
                },
                {
                    id: "c0",
                    group: "c",
                    priority: 0
                },
                {
                    id: "a0",
                    group: "a",
                    priority: 0
                }
            ])
        ).toEqual([
            {
                id: "b1",
                group: "b",
                priority: 1
            },
            {
                id: "c0",
                group: "c",
                priority: 0
            },
            {
                id: "a0",
                group: "a",
                priority: 0
            },
            {
                id: "a1",
                group: "a",
                priority: 1
            }
        ])
    })

    it("returns correct value 3", () => {
        expect(
            sortChallengeGroups([
                {
                    id: "b1",
                    group: "b",
                    priority: 1
                },
                {
                    id: "a0",
                    group: "a",
                    priority: 0
                }
            ])
        ).toEqual([
            {
                id: "b1",
                group: "b",
                priority: 1
            },
            {
                id: "a0",
                group: "a",
                priority: 0
            }
        ])
    })
})
