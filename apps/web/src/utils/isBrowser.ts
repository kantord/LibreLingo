export default function isBrowser(): boolean {
  // @ts-ignore
  return new Boolean(process.browser).valueOf()
}
