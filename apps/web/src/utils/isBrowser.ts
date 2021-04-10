export default function isBrowser(): boolean {
    return new Boolean((process as any).browser).valueOf()
}
