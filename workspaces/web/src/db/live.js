import authStore from "../auth"

export default (listener) => {
    listener()
    authStore.subscribe(listener)
}
