import showdown from "showdown"

export default function parseMarkdown(rawMarkdown: string) {
  const converter = new showdown.Converter()
  const html = converter.makeHtml(rawMarkdown)
  return html
}
