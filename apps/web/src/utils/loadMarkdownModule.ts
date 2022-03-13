import showdown from "showdown"

export default async function loadMarkdownModule(modulePath: string) {
    const { default: text } = await require(modulePath)
    const converter = new showdown.Converter()
    const html      = converter.makeHtml(text)
    return html
}
