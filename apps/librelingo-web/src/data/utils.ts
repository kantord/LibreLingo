import path from 'node:path'

export function getAbsoluteCoursePath(jsonPath: string) {
    return path.join(process.cwd(), 'src', 'courses', jsonPath)
}
