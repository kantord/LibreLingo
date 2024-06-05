import type { Metadata } from 'next'
import CourseCard from './CourseCard';
import courseConfig from "@/courses/config.json"
import path from 'path';
import fs from 'fs';


export type Language = {
  code: string
  name: string
}

export type Course = {
  source: Language
  target: Language
  repositoryURL: string
  url: string
  inProduction: boolean
}

export const metadata: Metadata = {
  title: 'LibreLingo',
  description: 'LibreLingo is an open source language-learning platform',
}

export default async function Home() {

  const courseData: Course[] = await Promise.all(courseConfig.filter(item => item.deploy).map(async (item) => {
    const jsonFilePath = path.join(process.cwd(), 'src', 'courses', item.paths.jsonFolder, 'courseData.json');
    const fileContent = await fs.promises.readFile(jsonFilePath, 'utf-8');
    const courseMetadata = JSON.parse(fileContent);

    return {
      repositoryURL: item.repositoryURL,
      url: item.url,
      inProduction: item.inProduction,
      source: {
        code: courseMetadata.uiLanguage,
        name: item.source,
      },
      target: {
        code: courseMetadata.languageCode,
        name: courseMetadata.languageName,
      },
    };
  }));


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
