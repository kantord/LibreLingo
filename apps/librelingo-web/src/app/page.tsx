import type { Metadata } from 'next'
import CourseCard from './CourseCard';
import { Course, listAllCourses } from '@/data/course';



export const metadata: Metadata = {
  title: 'LibreLingo',
  description: 'LibreLingo is an open source language-learning platform',
}

export default async function Home() {
  const courseData = await listAllCourses()

  return (
    <>
      <ul className='flex space-y-6 flex-col p-6'>
        {courseData.map((course) => (
          <li key={course.id}><CourseCard course={course} /></li>
        ))}
      </ul>
    </>
  );
}
