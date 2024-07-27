import path from 'path';
import courseConfig from "@/courses/config.json"
import fs from 'fs'

export type Language = {
  code: string
  name: string
}

export type Course = {
  jsonPath: string
  source: Language
  target: Language
  repositoryURL: string
  url: string
  inProduction: boolean
}

async function getCourseMetadataByJsonPath(jsonPath: string) 
{
    const jsonFilePath = path.join(process.cwd(), 'src', 'courses', jsonPath, 'courseData.json');
    const fileContent = await fs.promises.readFile(jsonFilePath, 'utf-8');
    return JSON.parse(fileContent);
}


export async function listAllCourses(): Promise<Course[]> {
  return Promise.all(courseConfig.filter(item => item.deploy).map(async (item) => {
    const jsonPath = item.paths.jsonFolder
const courseMetadata = await getCourseMetadataByJsonPath(jsonPath)

    return {
      jsonPath,
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
}

//export async function getCourseDetailsByJsonPath(jsonPath: string): Promise<CourseDetails> {
//
//}
