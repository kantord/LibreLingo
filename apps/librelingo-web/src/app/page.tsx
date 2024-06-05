import type { Metadata } from 'next'
import CourseCard from './CourseCard';
import courseData from "@/courses/config.json"

export const metadata: Metadata = {
  title: 'LibreLingo',
  description: 'LibreLingo is an open source language-learning platform',
}

export default function Home() {
  return (
    <>
      <ul className='flex space-y-6 flex-col p-6'>
        {courseData.map((course) => (
          <li key={course.url}><CourseCard course={course} /></li>
        ))}
      </ul>
    </>
  );
}
