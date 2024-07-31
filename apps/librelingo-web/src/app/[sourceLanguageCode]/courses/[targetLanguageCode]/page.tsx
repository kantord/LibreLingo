import { getCourseDetail, getCourseId, listAvailableCourses } from "@/data/course"

export async function generateStaticParams() {
  const courses = await listAvailableCourses()

  return courses.map((course) => ({
    sourceLanguageCode: course.uiLanguage,
    targetLanguageCode: course.languageCode,
  }))
}

type Props = {
  params: {
    sourceLanguageCode: string
    targetLanguageCode: string
  }
}

export default async function CourseHomePage({params}: Props) {
  const courseId = await getCourseId(params)
  const detail = await getCourseDetail(courseId)

  return <><h1>{detail.targetLanguage.name}</h1>
            <ul className="flex space-y-6 flex-col p-6">
                {detail.modules.map((module) => (
                    <li key={module.slug}>
                    {module.title}
                    </li>
                ))}
            </ul>

  </>
}
