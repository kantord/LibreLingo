import { prepareChallenge } from "../logic"

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
