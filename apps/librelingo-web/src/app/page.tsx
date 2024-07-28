import type { Metadata } from 'next'
import { Course, listAvailableCourses } from '@/data/course'
import CourseCard from './course-card'

export const metadata: Metadata = {
    title: 'LibreLingo',
    description: 'LibreLingo is an open source language-learning platform',
}

export default async function Home() {
    const courseData = await listAvailableCourses()

    return (
        <>
            <ul className="flex space-y-6 flex-col p-6">
                {courseData.map((course) => (
                    <li key={course.id}>
                        <CourseCard course={course} />
                    </li>
                ))}
            </ul>
        </>
    )
}
