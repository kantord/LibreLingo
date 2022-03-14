import type { Writable } from "svelte/store"
import Sortable from "sortablejs"

export const createSortable = (
  element: HTMLElement,
  store: Writable<string[]>
): Sortable => {
  return Sortable.create(element, {
    group: "chips",
    store: {
      get: () => [],
      set: function (sortable) {
        store.set(sortable.toArray())
      },
    },
  })
}
