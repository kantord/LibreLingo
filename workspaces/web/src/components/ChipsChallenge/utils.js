export const changeArrayElementPosition = (array, oldIndex, newIndex) => {
    if (newIndex >= array.length) {
        newIndex = array.length - 1
    }
    const arr = [...array]

    // remove item at old place
    arr.splice(oldIndex, oldIndex)

    // insert item at new place
    arr.splice(newIndex, 0, array[oldIndex])

    return arr
}
