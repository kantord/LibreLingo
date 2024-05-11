type Params = {
  courseName: string
}

type Args = {
  params: Params
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }: Args) {
    const { get_course } = await import("$lib/course-client")
    const { courseName } = params

    return await get_course({ courseName })
}
