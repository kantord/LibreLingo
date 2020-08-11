import getUserDbName from "./getUserDbName"

describe("getUserDbName", () => {
    it("returns correct result 1", () => {
        expect(getUserDbName("jan")).toEqual("userdb-6a616e")
    })

    it("returns correct result 2", () => {
        expect(getUserDbName("januska")).toEqual("userdb-6a616e75736b61")
    })
})
