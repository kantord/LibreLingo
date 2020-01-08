import { sortChallengeGroups } from "../_logic"

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
                    group: "a",
                    priority: 1
                },
                {
                    group: "b",
                    priority: 1
                },
                {
                    group: "c",
                    priority: 0
                },
                {
                    group: "a",
                    priority: 0
                }
            ])
        ).toEqual([
            {
                group: "b",
                priority: 1
            },
            {
                group: "c",
                priority: 0
            },
            {
                group: "a",
                priority: 0
            },
            {
                group: "a",
                priority: 1
            }
        ])
    })

    it("returns correct value 3", () => {
        expect(
            sortChallengeGroups([
                {
                    group: "b",
                    priority: 1
                },
                {
                    group: "a",
                    priority: 0
                }
            ])
        ).toEqual([
            {
                group: "b",
                priority: 1
            },
            {
                group: "a",
                priority: 0
            }
        ])
    })
})
