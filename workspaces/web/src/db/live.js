export default (listener) => {
    listener()
    if (process.browser === true && process.env.JEST_WORKER_ID === undefined) {
        const authStore = require("../auth").default
        authStore.subscribe(listener)
    }
}
