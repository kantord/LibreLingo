export default function isBrowser(): boolean {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return new Boolean(process.browser).valueOf()
}
