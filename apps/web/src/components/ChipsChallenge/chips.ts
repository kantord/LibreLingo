const getActualParent = (node: HTMLElement): HTMLElement => {
  if (node?.parentElement?.id) {
    return node.parentElement
  }

  if (node?.parentElement?.parentElement) {
    return node.parentElement.parentElement
  }

  throw new Error("Invalid <Chip />")
}

export const getNodeType = (node: HTMLElement): string =>
  getActualParent(node).id

export const getChipIndex = (node: HTMLElement): number => {
  if (!node.classList.contains("chip") && node.parentElement) {
    return getChipIndex(node.parentElement)
  }

  if (node.previousSibling !== null) {
    return 1 + getChipIndex(node.previousSibling as HTMLElement)
  }

  return 0
}
