import { register, init, getLocaleFromNavigator } from "svelte-i18n"

register("en", () => import("./translation/en.json"))
register("eo", () => import("./translation/eo.json"))
register("it", () => import("./translation/it.json"))

init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
})
