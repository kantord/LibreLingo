export default function isServer(): boolean {
    return new Boolean((process as any).browser).valueOf() === false
}
