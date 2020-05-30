import settings from "../settings"
import getUserDbName from "./getUserDbName"
import Cookies from "js-cookie"
import authStore from "../auth"

let db
let remoteDB

if (process.browser === true) {
    const PouchDB = require("pouchdb").default

    // Connect to remote database
    remoteDB = new PouchDB(
        `${settings.database.remote}/${Cookies.get("loginDb")}`,
        { skip_setup: true, live: true }
    )

    // Connect to local database
    db = new PouchDB(settings.database.local)
    window._DB = db

    // Detect existing user session
    fetch(`${settings.database.remote}/_session`)
        .then((data) => data.json())
        .then((user) => {
            if (user.userCtx.name === null) {
                return
            }
            authStore.update((value) => ({
                ...value,
                user: { name: user.userCtx.name },
            }))
        })

    // Add login function
    window._Login = async (username, password) => {
        const user = await (
            await fetch(`${settings.database.remote}/_session`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            })
        ).json()

        authStore.update((value) => ({
            ...value,
            user: { name: user.name },
        }))
        Cookies.set("loginDb", getUserDbName(username), {
            expires: settings.database.auth.expireDays,
        })
    }

    // Keep databases in sync
    db.sync(remoteDB)
        .on("complete", function () {
            authStore.update((value) => ({ ...value, online: true }))
        })
        .on("error", function () {
            authStore.update((value) => ({ ...value, online: false }))
        })
}

if (process.env.JEST_WORKER_ID !== undefined) {
    // This is a test database for Jest tests that can reset itself
    const PouchDB = require("pouchdb")
    db = new PouchDB(settings.database.local)
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
