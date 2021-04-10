import db from "./db"

export default (listener) => {
    listener(db)
    if (process.browser === true && process.env.JEST_WORKER_ID === undefined) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
        const authStore = require("../auth").default
        authStore.subscribe(() => listener(db))
    }
}
