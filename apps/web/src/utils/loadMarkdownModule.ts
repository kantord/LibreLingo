export default function loadMarkdownModule() {
    const remark = await import("remark")
    const markdown = await import("remark-parse")
    const html = await import("rehype-stringify")
    const remark2rehype = await import("remark-rehype")
    const format = import("rehype-format")

    return (
        await remark.default()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
            .use(markdown.default, { gfm: true, commonmark: true })
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
            .use(remark2rehype.default)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
            .use(format.default)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
            .use(html.default)
            .process(markdownModule.default)
    ).contents
}
