import { writable } from "svelte/store"

const authStore = writable({
    user: null,
    syncs: null,
})

export default authStore
