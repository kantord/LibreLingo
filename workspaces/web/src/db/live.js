export default (listener) => {
    listener()
    if (process.browser === true) {
        const authStore = require("../auth").default
        authStore.subscribe(listener)
    }
}
