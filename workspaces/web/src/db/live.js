import db from "./db"

export default (listener) => {
    listener()
    db &&
    db
        .changes({
            since: "now",
            live: true,
            include_docs: true,
        })
        .on("change", listener)
}
