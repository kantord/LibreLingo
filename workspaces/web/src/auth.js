import { writable } from "svelte/store"

const authStore = writable({
    user: null,
    online: null,
})

export default authStore
