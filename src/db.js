let db

if (process.browser === true) {
    const PouchDB = require("pouchdb").default
    db = new PouchDB("localData")
    window._DB = db
}

export default db
