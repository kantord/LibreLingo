let db

if (process.browser === true) {
    const PouchDB = require("pouchdb").default
    db = new PouchDB("localData")
    window._DB = db
}

if (process.env.JEST_WORKER_ID !== undefined) {
    // This is a test database for Jest tests that can reset itself
    const PouchDB = require("pouchdb")
    db = new PouchDB("localData")
    db.__reset = async () => {
        const allDocs = await db.allDocs()
        await Promise.all(
            allDocs.rows.map(function(row) {
                return db.remove(row.id, row.value.rev)
            })
        )
    }
}

export default db
