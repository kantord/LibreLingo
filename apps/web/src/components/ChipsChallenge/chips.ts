const getActualParent = node => node.parentElement.id ? node.parentElement : node.parentElement.parentElement

export const getNodeType = node => getActualParent(node).id

export const getChipIndex = node => {
    if (!node.classList.contains("chip")) {
        return getChipIndex(node.parentElement)
    }

    if (!node.previousSibling) {
        return 0
    }

    return 1 + getChipIndex(node.previousSibling)
}
