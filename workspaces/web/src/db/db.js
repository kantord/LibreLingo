import settings from "../../settings.json"
import getUserDbName from "./getUserDbName"
import Cookies from "js-cookie"
let db
let remoteDB

if (process.browser === true) {
    const PouchDB = require("pouchdb").default

    // Connect to remote database
    remoteDB = new PouchDB(
        `${settings.database.remote}/${Cookies.get("loginDb")}`,
        { skip_setup: true }
    )

    // Connect to local database
    db = new PouchDB(settings.database.local)
    window._DB = db

    // Add login function
    window._Login = async (username, password) => {
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

        await fetch(`${settings.database.remote}/_session`)
        Cookies.set("loginDb", getUserDbName(username), {
            expires: settings.database.auth.expireDays,
        })
    }

    // Keep databases in sync
    db.sync(remoteDB)
        .on("complete", function () {
            // replicating data
        })
        .on("error", function (err) {
            // not replicating data
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
