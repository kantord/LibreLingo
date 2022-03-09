export const get_course = ({ courseName }: { courseName: string }) => {
    const { modules, languageName, repositoryURL, languageCode, specialCharacters } = require(
        `../courses/${courseName}/courseData.json`
    )

    return { courseName, modules, languageName, repositoryURL, languageCode, specialCharacters }
}

export const get_skill_data = ({ courseName, skillName }: { courseName: string, skillName: string }) => {
    const {
        languageName,
        languageCode,
        specialCharacters,
        repositoryURL,
    } = get_course({ courseName })
    const skillData = require(
        `../courses/${courseName}/challenges/${skillName}.json`
    )
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
