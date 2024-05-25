import path from 'path';
import courseConfig from "@/courses/config.json"
import fs from 'fs'

export type Course = {
  id: string
  languageCode: string
  languageName: string
  uiLanguage: string
  repositoryURL: string
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
const data = await getCourseMetadataByJsonPath(jsonPath)
    const {uiLanguage, languageName, languageCode, repositoryURL} = data

    return {
      id: jsonPath,
      languageCode,
      languageName,
      uiLanguage,
      repositoryURL,
      inProduction: item.inProduction,
    };
  }));
}


