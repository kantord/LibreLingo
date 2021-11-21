import { register, init } from "svelte-i18n"

register("en", () => require("./translation/en.json"))

init({
    fallbackLocale: "en",
    initialLocale: "en",
})
