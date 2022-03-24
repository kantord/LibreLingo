import fetch from "isomorphic-fetch"
import parseMarkdown from "../utils/parseMarkdown"
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

type RawGistFileType = {
  content: string
}

const fetchGistFiles = async (gistId) => {
  // get the data from a Github gist served through a CORS proxy
  try {
    const toAWait = fetch(`${baseURL}/${gistId}`)
    const rawResponse = await toAWait
    const response = await rawResponse.json()
    const gistFiles = Object.fromEntries(
      Object.entries(response.files).map(
        ([filename, value]: [string, RawGistFileType]) => [
          filename.replace("librelingo___", "").replace("___", "/"),
          filename.endsWith(".json")
            ? JSON.parse(value?.content)
            : value?.content,
        ]
      )
    )

    return gistFiles
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
    const files = await fetchGistFiles(gistId)
    return formatCourseData(files["courseData.json"], { courseName })
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const rawCourseData = require(`../courses/${courseName}/courseData.json`) // eslint-disable-line @typescript-eslint/no-var-requires

  return formatCourseData(rawCourseData, { courseName })
}

const formatSkilldata = async (
  skillData,
  { courseName, skillName, gistId }
) => {
  const { languageName, languageCode, specialCharacters, repositoryURL } =
    await get_course({ courseName, gistId })
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

export const get_skill_data = async ({
  courseName,
  skillName,
  gistId = null,
}: {
  courseName: string
  skillName: string
  gistId?: string
}) => {
  if (gistId !== null) {
    const files = await fetchGistFiles(gistId)
    return await formatSkilldata(files[`challenges/${skillName}.json`], {
      courseName,
      skillName,
      gistId,
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const skillData = require(`../courses/${courseName}/challenges/${skillName}.json`)

  return await formatSkilldata(skillData, { courseName, skillName, gistId })
}

const formatSkillIntroduction = async (
  skill,
  { skillName, courseName, rawMarkdown }
) => {
  return {
    skillName,
    courseName,
    title: skill.title,
    practiceHref: skill.practiceHref,
    readmeHTML: parseMarkdown(rawMarkdown),
  }
}

export const get_skill_introduction = async ({
  courseName,
  skillName,
  gistId,
}: {
  courseName: string
  skillName: string
  gistId?: string
}) => {
  const { modules } = await get_course({ courseName, gistId })

  for (const module of modules) {
    for (const skill of module.skills) {
      if (skill.practiceHref === skillName) {
        if (gistId) {
          const files = await fetchGistFiles(gistId)

          return formatSkillIntroduction(skill, {
            skillName,
            courseName,
            rawMarkdown: files[`introduction/${skill.introduction}`],
          })
        }

        const {
          default: rawMarkdown,
          // eslint-disable-next-line @typescript-eslint/no-var-requires
        } = require(`../courses/${courseName}/introduction/${skill.introduction}`)

        return formatSkillIntroduction(skill, {
          skillName,
          courseName,
          rawMarkdown,
        })
      }
    }
  }

  throw new Error(
    `Could not find skill with name "${skillName}" in course "${courseName}".`
  )
}
