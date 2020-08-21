import db from "../db"
import { isStale } from "./_logic"

export default async ({ id }) => {
    if (!db) return null

    try {
        const { practiced } = await db.get(`skills/${id}`)
        return {
            completed: practiced.length >= 1,
            stale: isStale({ practices: practiced })
        }
    } catch {
        return { completed: false, stale: null }
    }
}
