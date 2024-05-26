import { Button } from '@/components/ui/button';
import type { Metadata } from 'next'
import CourseCard from './CourseCard';
import courseData from "@/courses/courses.json"
 
export const metadata: Metadata = {
  title: 'LibreLingo',
  description: 'LibreLingo is an open source language-learning platform',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-23">

      <Button>Hello</Button>
    
      <ul>
        {courseData.map((course) => (
          <li key={course.url} ><CourseCard course={course} /></li>
        ))}
      </ul>

    </main>
  );
}
