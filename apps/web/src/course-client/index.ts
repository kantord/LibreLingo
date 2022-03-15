import fetch from "cross-fetch"
import loadMarkdownModule from "../utils/loadMarkdownModule"
import { baseURL } from "../../../../config/gists.json"

export type SkillDataType = {
  id: string
  practiceHref: string
  title: string
  levels: number
  introduction: string
  summary: string[]
}

export type ModuleDataType = {
  title: string
  skills: SkillDataType[]
}

export type CourseDataType = {
  courseName: string
  modules: ModuleDataType[]
  languageName: string
  repositoryURL: string
  languageCode: string
  specialCharacters: string[]
}

const formatCourseData = (rawCourseData, { courseName }) => {
  const {
    modules,
    languageName,
    repositoryURL,
    languageCode,
    specialCharacters,
  } = rawCourseData

  return {
    courseName,
    modules,
    languageName,
    repositoryURL,
    languageCode,
    specialCharacters,
  }
}

const fetchGistFiles = async (gistId) => {
  // get the data from a Github gist served through a CORS proxy
  try {
    const rawResponse = await fetch(`${baseURL}/${gistId}`)
    const response = await rawResponse.json()

    return Object.fromEntries(
      Object.entries(response.files).map(([filename, value]) => [
        filename.replace("librelingo___", "").replace(".json", ""),
        filename.endsWith(".json") ? JSON.parse(value.content) : value.content,
      ])
    )
  } catch (error) {
    throw new Error(`Could not load gist with Id "${gistId}". ${error}`)
  }
}

export const get_course = async ({
  courseName,
  gistId = null,
}: {
  courseName: string
  gistId?: string
}): Promise<CourseDataType> => {
  if (gistId !== null) {
    const { courseData } = await fetchGistFiles(gistId)
    return formatCourseData(courseData, { courseName })
  }

  const rawCourseData = require(`../courses/${courseName}/courseData.json`) // eslint-disable-line @typescript-eslint/no-var-requires

  return formatCourseData(rawCourseData, { courseName })
}

export const get_skill_data = async ({
  courseName,
  skillName,
  gistId = null,
}: {
  courseName: string
  skillName: string
  gistId?: string
}) => {
  const { languageName, languageCode, specialCharacters, repositoryURL } =
    await get_course({ courseName })

  if (gistId !== null) {
    throw new Error(`Could not load gist with Id "${gistId}".`)
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const skillData = require(`../courses/${courseName}/challenges/${skillName}.json`)
  const rawChallenges = skillData.challenges
  const challengesPerLevel = skillData.challenges.length / skillData.levels

  const skillId = skillData.id

  return {
    rawChallenges: Array.from(rawChallenges),
    languageName,
    languageCode,
    specialCharacters,
    repositoryURL,
    skillName,
    skillId,
    challengesPerLevel,
    courseURL: `/course/${courseName}`,
  }
}

export const get_skill_introduction = async ({
  courseName,
  skillName,
}: {
  courseName: string
  skillName: string
}) => {
  const { modules } = await get_course({ courseName })

  for (const module of modules) {
    for (const skill of module.skills) {
      if (skill.practiceHref === skillName) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const markdownModule = require(`../courses/${courseName}/introduction/${skill.introduction}`)

        return {
          skillName,
          courseName,
          title: skill.title,
          practiceHref: skill.practiceHref,
          readmeHTML: loadMarkdownModule(markdownModule),
        }
      }
    }
  }
}
