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
})
