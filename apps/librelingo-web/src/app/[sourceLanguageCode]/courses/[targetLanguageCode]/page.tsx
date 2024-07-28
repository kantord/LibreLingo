import { listAllCourses } from "@/data/course"

export async function generateStaticParams() {
  const courses = await listAllCourses()

  return courses.map((course) => ({
    sourceLanguageCode: course.uiLanguage,
    targetLanguageCode: course.languageCode,
  }))
}

export default function CourseHomePage() {
  return <h1>Hello world</h1>
}
