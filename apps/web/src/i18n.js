import { register, init } from "svelte-i18n"

/* register("en", async () => await import("./translation/en.json")) */

init({
    fallbackLocale: "en",
    initialLocale: "en",
})
