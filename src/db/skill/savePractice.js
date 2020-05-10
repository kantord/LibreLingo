import db from "../db"

export default async ({ id, correct, incorrect }) => {
    const _id = `skills/${id}`
    try {
        const doc = await db.get(_id)
        await db.put({
            ...doc,
            practiced: [
                ...(doc.practiced || []),
                {
                    at: new Date().valueOf(),
                    correct,
                    incorrect
                }
            ]
        })
    } catch {
        await db.put({
            _id,
            practiced: [
                {
                    at: new Date().valueOf(),
                    correct,
                    incorrect
                }
            ]
        })
    }
}
