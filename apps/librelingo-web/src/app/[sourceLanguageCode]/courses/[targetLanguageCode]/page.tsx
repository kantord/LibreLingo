import { listAvailableCourses } from "@/data/course"

export async function generateStaticParams() {
  const courses = await listAvailableCourses()

  return courses.map((course) => ({
    sourceLanguageCode: course.uiLanguage,
    targetLanguageCode: course.languageCode,
  }))
}

export default function CourseHomePage() {
  return <h1>Hello world</h1>
}
