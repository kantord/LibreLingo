import settings from "../settings.json"
import Cookies from "js-cookie"

export default () => {
    const isDevelopment =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    const isBrowser = process.browser === true
    const isCypress = isBrowser && window.isCypress

    const database = !isDevelopment
        ? settings.database.production
        : settings.database.development

    const authEnabled = Cookies.get("authEnabled") !== "false" || !process.browser

    const tokens = {
        ...settings.tokens,
        ...(isCypress ? settings.cypressTokens : {}),
    }

    return {
        ...settings,
        database,
        features: {
            authEnabled,
        },
        tokens,
    }
}
