import { prepareChallenge, sortChallengeGroups } from "../logic"

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
            formInTargetLanguage: "león"
        }
        const alternativeChallenges = [
            {
                id: 202,
                type: "cards",
                pictures: ["bear1.jpg", "bear2.jpg", "bear3.jpg"],
                meaningInSourceLanguage: "bear",
                formInTargetLanguage: "oso"
            },
            {
                id: 6663,
                type: "shortInput",
                meaningInSourceLanguage: "dog",
                formInTargetLanguage: ["perro", "el perro", "can"]
            }
        ]
        expect(
            prepareChallenge({
                currentChallenge,
                alternativeChallenges
            }).filter(({ type }) => type !== "cards")
        ).toEqual([])
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
