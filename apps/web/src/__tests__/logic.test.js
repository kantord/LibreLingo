import { prepareChallenge, sortChallengeGroups, removeAlternatives  } from "../logic"

jest.mock("lodash.shuffle")

import shuffle from "lodash.shuffle"

describe("prepareChallenge", () => {
    it("returns correct value", () => {
        shuffle.mockReturnValue([])
        const currentChallenge = { foo: "bar" }
        const alternativeChallenges = []
        expect(
            prepareChallenge({ currentChallenge, alternativeChallenges })
        ).toEqual([])
    })

    it("uses only card challenges", () => {
        shuffle.mockImplementation(jest.requireActual("lodash.shuffle"))
        const currentChallenge = {
            id: 4,
            type: "cards",
            pictures: ["lion1.jpg", "lion2.jpg", "lion3.jpg"],
            meaningInSourceLanguage: "lion",
            formInTargetLanguage: "león",
        }
        const alternativeChallenges = [
            {
                id: 202,
                type: "cards",
                pictures: ["bear1.jpg", "bear2.jpg", "bear3.jpg"],
                meaningInSourceLanguage: "bear",
                formInTargetLanguage: "oso",
            },
            {
                id: 6663,
                type: "shortInput",
                meaningInSourceLanguage: "dog",
                formInTargetLanguage: ["perro", "el perro", "can"],
            },
        ]
        expect(
            prepareChallenge({
                currentChallenge,
                alternativeChallenges,
            }).filter(({ type }) => type !== "cards")
        ).toEqual([])
    })
})

describe("removeAlternatives", () => {
    it("doesn't change empty array", () => {
        expect(removeAlternatives([])).toEqual([])
    })

    it("removes duplicates", () => {
        expect(removeAlternatives([{ id: 2 }, { id: 2 }])).toEqual([{ id: 2 }])
    })

    it("returns correct number of items", () => {
        expect(removeAlternatives([{ id: 2 }, { id: 3 }])).toHaveLength(2)
    })
})

describe("sortChallengeGroups", () => {
    it("returns correct value", () => {
        expect(
            sortChallengeGroups(
                [
                    {
                        group: "a",
                        priority: 0,
                    },
                ],
                10
            )
        ).toEqual([
            {
                group: "a",
                priority: 0,
            },
        ])
    })

    it("returns correct value 2", () => {
        expect(
            sortChallengeGroups(
                [
                    {
                        id: "a1",
                        group: "a",
                        priority: 1,
                    },
                    {
                        id: "b1",
                        group: "b",
                        priority: 1,
                    },
                    {
                        id: "c0",
                        group: "c",
                        priority: 0,
                    },
                    {
                        id: "a0",
                        group: "a",
                        priority: 0,
                    },
                ],
                10
            )
        ).toEqual([
            {
                id: "b1",
                group: "b",
                priority: 1,
            },
            {
                id: "c0",
                group: "c",
                priority: 0,
            },
            {
                id: "a0",
                group: "a",
                priority: 0,
            },
            {
                id: "a1",
                group: "a",
                priority: 1,
            },
        ])
    })

    it("returns correct value 3", () => {
        expect(
            sortChallengeGroups(
                [
                    {
                        id: "b1",
                        group: "b",
                        priority: 1,
                    },
                    {
                        id: "a0",
                        group: "a",
                        priority: 0,
                    },
                ],
                10
            )
        ).toEqual([
            {
                id: "b1",
                group: "b",
                priority: 1,
            },
            {
                id: "a0",
                group: "a",
                priority: 0,
            },
        ])
    }
