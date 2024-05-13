import parseMarkdown from "../utils/parseMarkdown"

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
    uiLanguage,
  } = rawCourseData

  return {
    courseName,
    modules,
    languageName,
    repositoryURL,
    languageCode,
    specialCharacters,
    uiLanguage,
  }
}

export const get_course = async ({
  courseName,
}: {
  courseName: string
  gistId?: string
}): Promise<CourseDataType> => {
  console.log({ courseName })
  console.log(`../../../../../courses/${courseName}/courseData.json`)
  const rawCourseData = import(`$lib/courses/${courseName}/courseData.json`)

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
}: {
  courseName: string
  skillName: string
}) => {
  const skillData = import(`$lib/courses/${courseName}/challenges/${skillName}.json`)

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
}: {
  courseName: string
  skillName: string
}) => {
  const { modules } = await get_course({ courseName })

  for (const module of modules) {
    for (const skill of module.skills) {
      if (skill.practiceHref === skillName) {
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
