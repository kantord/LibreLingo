import Sortable from "sortablejs"

export const createSortable = (element, store) => {
    return Sortable.create(element, {
        group: "chips",
        store: {
            get: store.get,
            set: function(sortable) {
                store.set(sortable.toArray())
            }
        }
    })
}
