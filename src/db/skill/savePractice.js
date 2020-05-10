import db from "../db"

export default async ({ id }) => {
    const _id = `skills/${id}`
    try {
        const doc = await db.get(_id)
        await db.put({
            ...doc,
            practiced: [
                ...(doc.practiced || []),
                {
                    at: new Date().valueOf()
                }
            ]
        })
    } catch {
        await db.put({
            _id,
            practiced: [
                {
                    at: new Date().valueOf()
                }
            ]
        })
    }
}
