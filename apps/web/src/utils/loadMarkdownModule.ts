import showdown from "showdown"

export default function loadMarkdownModule(module) {
    const { default: text } = module 
    const converter = new showdown.Converter()
    const html = converter.makeHtml(text)
    return html
}
