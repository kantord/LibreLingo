const getCurrentData = async (db, _id) => {
    try {
        return await db.get(_id)
    } catch {
        return {
            _id,
            practiced: [],
        }
    }
}

export default async (db, { id, correct, incorrect, skipped }) => {
    const doc = await getCurrentData(db, `skills/${id}`)

    await db.put({
        ...doc,
        practiced: [
            ...doc.practiced,
            {
                at: new Date().valueOf(),
                correct,
                incorrect,
                skipped: skipped || 0,
            },
        ],
    })
}
