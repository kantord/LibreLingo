/* eslint-disable @typescript-eslint/no-var-requires */
import settings from "../settings"
import getUserDbName from "./getUserDbName"
import Cookies from "js-cookie"
import isBrowser from "../utils/isBrowser"

let db
let remoteDB
let syncHandler

const createLocalPouchDb = (dbName) => {
    const PouchDB =
    process.env.JEST_WORKER_ID !== undefined
        ? require("pouchdb")
        : require("pouchdb").default
    const newDb = new PouchDB(dbName).setMaxListeners(
        settings.database.maxNumberOfListeners
    )

    newDb
        .changes({
            since: "now",
            live: true,
            include_docs: true,
        })
        .on("change", () => {
            if (process.env.JEST_WORKER_ID !== undefined) {
                return
            }
            const authStore = require("../auth").default
            authStore.update((value) => ({
                ...value,
                dbUpdatedAt: Date.now(),
            }))
        })

    return newDb
}

if (isBrowser() === true) {
    const authStore = require("../auth").default
    const PouchDB = require("pouchdb").default

    // Connect to remote database
    remoteDB = new PouchDB(
        `${settings.database.remote}/${Cookies.get("loginDb")}`,
        { skip_setup: true, live: true }
    )

    // Connect to local database
    db = createLocalPouchDb(settings.database.local)
    window._DB = db

    // Detect fake user session
    if (Cookies.get("loginDb") === getUserDbName("---fakeUser")) {
        authStore.update((value) => ({
            ...value,
            user: { name: "---fakeUser" },
            online: true,
        }))
    }

    // Detect existing user session
    if (Cookies.get("loginDb") && settings.features.authEnabled) {
        fetch(`${settings.database.remote}/_session`, { credentials: "include" })
            .then((data) => data.json())
            .then((user) => {
                if (user.userCtx.name === null) {
                    return
                }
                authStore.update((value) => ({
                    ...value,
                    user: { name: user.userCtx.name },
                }))
                startSync()
            })
    } else {
    // Without a sessios, there is no sync
        authStore.update((value) => ({
            ...value,
            online: false,
        }))
    }

    // Fake login for testing purposes
    window._fakeLogin = () => {
        Cookies.set("loginDb", getUserDbName("---fakeUser"), {
            expires: settings.database.auth.expireDays,
        })
        window.location.href = "/course/spanish-from-english/"
    }

    // Add login function
    window._Login = async (username, password) => {
        if (window._test_credentials_correct === false) {
            throw new Error("Incorrect username or password")
        }

        if (window._test_credentials_correct === true) {
            return window._fakeLogin()
        }

        const response = await (
            await fetch(`${settings.database.remote}/_session`, {
                method: "post",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
        ).json()

        if (response.error) {
            if (response.error === "unauthorized") {
                throw new Error("Username or password is incorrect")
            }
            throw new Error("Couldn't log in. Please try again later")
        }

        authStore.update((value) => ({
            ...value,
            online: null,
        }))
        Cookies.set("loginDb", getUserDbName(username), {
            expires: settings.database.auth.expireDays,
        })
        window.location.reload(false)
        window.location.href = "/course/spanish-from-english/"
    }

    // Logout
    window._Logout = async () => {
        try {
            if (syncHandler) {
                await syncHandler.cancel()
                await fetch(`${settings.database.remote}/_session`, {
                    method: "delete",
                })
            }
        } finally {
            Cookies.remove("loginDb")
            authStore.update((value) => ({
                ...value,
                user: null,
                online: null,
            }))
            await db.destroy()
            window.location.reload(false)
        }
    }

    // Keep databases in sync
    const startSync = () => {
        syncHandler = db
            .sync(remoteDB)
            .on("complete", function () {
                authStore.update((value) => ({ ...value, online: true }))
            })
            .on("error", function () {
                authStore.update((value) => ({ ...value, online: false }))
            })
    }
}

if (process.env.JEST_WORKER_ID !== undefined) {
    // This is a test database for Jest tests that can reset itself
    db = createLocalPouchDb(settings.database.local)
    db.__reset = async () => {
        const allDocs = await db.allDocs()
        await Promise.all(
            allDocs.rows.map(function (row) {
                return db.remove(row.id, row.value.rev)
            })
        )
    }
}

export default db
