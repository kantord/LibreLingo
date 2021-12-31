import { register, init } from "svelte-i18n"

register("en", () => await import("./translation/en.json"))

init({
    fallbackLocale: "en",
    initialLocale: "en",
})
