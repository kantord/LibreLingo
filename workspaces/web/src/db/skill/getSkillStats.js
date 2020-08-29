import { isStale } from "./_logic"

export default async (db, { id }) => {
    if (!db) return null

    try {
        const { practiced } = await db.get(`skills/${id}`)
        const validPractices = practiced.filter(
            ({ correct }) => correct === undefined || correct > 0
        )

        if (validPractices.length === 0) {
            return { started: false, stale: null, progress: 0 }
        }

        return {
            started: validPractices.length >= 1,
            stale: isStale({ practices: practiced }),
            progress: validPractices.reduce(
                (acc, { correct, skipped }) =>
                    acc + correct / (correct + (skipped || 0)),
                0
            ),
        }
    } catch {
        return { started: false, stale: null, progress: 0 }
    }
}
