import { writable } from "svelte/store"

const authStore = writable({
    user: null,
    online: null,
    dbUpdatedAt: null,
})

export default authStore
