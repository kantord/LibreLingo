import db from "../db"

const getCurrentData = async _id => {
    try {
        return await db.get(_id)
    } catch {
        return {
            _id,
            practiced: []
        }
    }
}

export default async ({ id, correct, incorrect }) => {
    const doc = await getCurrentData(`skills/${id}`)

    await db.put({
        ...doc,
        practiced: [
            ...doc.practiced,
            {
                at: new Date().valueOf(),
                correct,
                incorrect
            }
        ]
    })
}
